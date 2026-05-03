let currentPersonagemKey = null;

// Helpers para evitar problemas com aspas / caracteres especiais em atributos HTML
function encodeData(v) {
  return encodeURIComponent(String(v ?? ""));
}

function decodeData(v) {
  try {
    return decodeURIComponent(String(v ?? ""));
  } catch {
    return String(v ?? "");
  }
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ======= ESCALA DE RELAÇÃO =======
const RELACOES_ESCALA = {
  "aliado-incondicional": {
    label: "Aliado Incondicional",
    className: "rel-aliado-incondicional",
  },
  "muito-positivo": {
    label: "Muito positivo",
    className: "rel-muito-positivo",
  },
  positivo: {
    label: "Positivo",
    className: "rel-positivo",
  },
  "neutro-positivo": {
    label: "Neutro/positivo",
    className: "rel-neutro-positivo",
  },
  neutro: {
    label: "Neutro",
    className: "rel-neutro",
  },
  "neutro-negativo": {
    label: "Neutro/negativo",
    className: "rel-neutro-negativo",
  },
  negativo: {
    label: "Negativo",
    className: "rel-negativo",
  },
  "muito-negativo": {
    label: "Muito negativo",
    className: "rel-muito-negativo",
  },
  "inimigo-jurado": {
    label: "Inimigo jurado",
    className: "rel-inimigo-jurado",
  },
};

// Compatibilidade com as tags antigas, caso alguma ficha ainda use esses nomes.
const RELACOES_ALIASES = {
  romantic: "muito-positivo",
  friend: "positivo",
  family: "muito-positivo",
  pet: "aliado-incondicional",
  neutral: "neutro",
  ex: "neutro-negativo",
  rival: "negativo",
  enemy: "inimigo-jurado",
};

function normalizarTipoRelacao(tipo) {
  return String(tipo || "Neutro")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function obterDadosRelacao(tipo) {
  const chave = normalizarTipoRelacao(tipo);
  const chaveFinal = RELACOES_ESCALA[chave] ? chave : RELACOES_ALIASES[chave];

  return RELACOES_ESCALA[chaveFinal] || RELACOES_ESCALA.neutro;
}

// Converte descrição (string ou array) em HTML com múltiplos parágrafos.
// - Array: cada item vira um <p>
// - String: quebra em parágrafos por linha em branco ("\n\n")
// - Quebras simples ("\n") dentro do mesmo parágrafo viram <br>
function descricaoParaHtmlParagrafos(descricao) {
  const vazio = "Nenhum dado registrado para esta relação.";

  // Normaliza em lista de parágrafos
  let paragrafos = [];

  if (Array.isArray(descricao)) {
    paragrafos = descricao
      .map((p) => String(p ?? "").trim())
      .filter(Boolean);
  } else {
    const raw = String(descricao ?? "").trim();
    if (raw) {
      paragrafos = raw
        .split(/\n\s*\n+/g)
        .map((p) => p.trim())
        .filter(Boolean);
    }
  }

  if (!paragrafos.length) {
    paragrafos = [vazio];
  }

  return paragrafos
    .map((p) => `<p>${escapeHtml(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

// Infere status da pessoa referida (se não vier explícito na relação)
function inferirStatusPessoa(personagem) {
  if (!personagem) return null;

  // campos "livres" suportados
  const livre = personagem.status || personagem.estado || personagem.situacao;
  if (livre) return String(livre);

  // heurísticas comuns
  if (personagem.dataMorte && String(personagem.dataMorte).trim()) {
    return `MORTO (Falecido em: ${personagem.dataMorte})`;
  }
  if (personagem.vivo === true) return "VIVO";
  if (personagem.vivo === false) return "MORTO";
  if (personagem.desaparecido === true) return "DESAPARECIDO";

  return "DESCONHECIDO";
}

// Tenta localizar um personagem pelo nome usado na relação
function encontrarPersonagemPorNomeExibido(nomeAlvo) {
  if (!nomeAlvo) return null;
  const alvo = nomeAlvo.toLowerCase();

  return (
    Object.values(personagens).find((p) => {
      if (!p.nome) return false;
      const base = p.nome.toLowerCase();
      // Igual exato ou contém
      return base === alvo || base.includes(alvo);
    }) || null
  );
}

// ======= INICIALIZAÇÃO =======
window.addEventListener("load", () => {
  // Timer da tela de boot
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("app-shell").style.display = "block";
  }, 2000);

  initClock();
  initCharacterGrid();
});

// ======= RELÓGIO =======
function initClock() {
  const el = document.getElementById("system-datetime");

  function update() {
    const now = new Date();
    const formatted = now.toLocaleString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    el.textContent = formatted;
  }

  update();
  setInterval(update, 1000);
}

// ======= GRID DE PERSONAGENS =======
function initCharacterGrid() {
  const grid = document.getElementById("character-grid");
  grid.innerHTML = "";

  Object.keys(personagens).forEach((key) => {
    const p = personagens[key];

    const card = document.createElement("div");
    card.className = "character-card";
    card.addEventListener("click", () => mostrarPerfil(key));

    card.innerHTML = `
          <div class="card-top">
            <div class="avatar" style="background-image:url('${
              p.foto || ""
            }')"></div>
            <div class="card-identity">
              <div class="card-name">${p.nome}</div>
              <div class="card-role">${p.funcao || ""}</div>
              <div class="card-meta">
                ${p.localNascimento ? p.localNascimento + " · " : ""}${
                  p.idade ? p.idade + " anos" : ""
                }
              </div>
            </div>
          </div>
          ${p.citacao ? `<div class="card-quote">${p.citacao}</div>` : ""}
          <div class="card-footer">
            <span class="tag ${
              p.ativo === true ? "" : p.ativo === false ? "inactive" : "unknown"
            }">
  ${
    p.ativo === true
      ? "PERFIL ATIVO"
      : p.ativo === false
        ? "PERFIL INATIVO"
        : "PERFIL DESCONHECIDO"
  }
</span>
            <span class="chip">ID: ${p.id || "UNREG"}</span>
          </div>
        `;

    grid.appendChild(card);
  });
}

// ======= PERFIL =======
function mostrarPerfil(personagemKey) {
  const personagem = personagens[personagemKey];
  if (!personagem) return;

  currentPersonagemKey = personagemKey;

  // alterna telas
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("profile-screen").style.display = "block";

  const relacoesChips = renderRelacoesChips(personagemKey, personagem.relacoes);

  const profileContent = document.getElementById("profile-content");
  profileContent.innerHTML = `
        <div class="profile-header">
        <div class="profile-avatar" style="background-image:url('${
          personagem.foto || ""
        }')" data-foto="${personagem.foto || ""}"></div>
          <div class="profile-main-info">
            <div class="profile-name">${personagem.nome}</div>
            <div class="profile-role">${personagem.funcao || ""}</div>
            <div class="profile-id-row">
              <span>ID: ${personagem.id || "UNREG"}</span>
              <span>NASC.: ${formatDataNascimento(personagem)}</span>
              <span>LOCAL NASC.: ${personagem.localNascimento || "??"}</span>
            ${
              personagem.dataMorte && String(personagem.dataMorte).trim()
                ? `<span class="death-tag">Falecido em: ${personagem.dataMorte}</span>`
                : ""
            }
              <span>IDADE: ${personagem.idade || "??"} ANOS</span>
              <span>ALTURA: ${personagem.altura || "??"}</span>
              <span>PESO: ${personagem.peso || "??"}</span>
            </div>
            ${
              personagem.citacao
                ? `<div class="profile-quote">${personagem.citacao}</div>`
                : ""
            }
          </div>
        </div>

        <div class="life-goal-highlight">
          <div class="life-goal-title">Objetivo de Vida</div>
          <div class="life-goal-text">
            ${personagem.objetivoVida || "-"}
          </div>
        </div>

        <div class="data-block full-width">
          <h3>Histórico Pessoal</h3>
          ${
            Array.isArray(personagem.historicoPessoal)
              ? personagem.historicoPessoal
                  .map((paragrafo) => `<p>${paragrafo}</p>`)
                  .join("<br>")
              : `<p>${personagem.historicoPessoal || "-"}</p>`
          }
        </div>

        <div class="data-block full-width">
          <h3>Relações Interpessoais</h3>
          ${
            relacoesChips
              ? `<div class="chip-container">${relacoesChips}</div>`
              : "<p>Nenhuma relação registrada.</p>"
          }
        </div>

        <div class="data-grid">
          <div class="data-block">
            <h3>Perfil Psicológico</h3>
            <p><strong>Traços principais:</strong> ${
              personagem.tracosPrincipais || "-"
            }</p><br>
            <p><strong>Comportamento social:</strong> ${
              personagem.comportamentoSocial || "-"
            }</p><br>
            <p><strong>Motivação:</strong> ${
              personagem.motivacao || "-"
            }</p><br>
            <p><strong>Valores centrais:</strong> ${
              personagem.valoresCentrais || "-"
            }</p><br>
            <p><strong>Visão sobre as pessoas:</strong> ${
              personagem.visaoPessoas || "-"
            }</p><br>
            <p><strong>O que mais valoriza:</strong> ${
              personagem.oQueValoriza || "-"
            }</p>
          </div>

        </div>

          <div class="data-block">
          <h3>Pertences Importantes</h3> ${renderPertences(
            personagemKey,
            personagem.pertencesImportantes,
          )}</div>

          <div class="data-block">
          <h3>Implantes Cibernéticos</h3> ${renderImplantes(
            personagemKey,
            personagem.implantes,
          )}</div>
      `;
  habilitarZoomImagemPerfil(personagem);
}

function habilitarZoomImagemPerfil(personagem) {
  const avatarEl = document.querySelector(".profile-avatar");
  if (!avatarEl) return;

  const foto = personagem.foto || avatarEl.getAttribute("data-foto");
  if (!foto) return;

  avatarEl.style.cursor = "zoom-in";

  avatarEl.onclick = () => {
    abrirImagemPerfil(foto, personagem.nome || personagem.id || "SUBJECT");
  };
}

function formatDataBr(iso) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("pt-BR");
}

function formatDataNascimento(personagem) {
  if (!personagem.dataNascimento) return "UNKNOWN";
  return formatDataBr(personagem.dataNascimento);
}

function renderRelacoesChips(personagemKey, relacoesObj = {}) {
  const nomes = Object.keys(relacoesObj);
  if (!nomes.length) return "";

  const pk = encodeData(personagemKey);

  return nomes
    .map((nome) => {
      const relacao = relacoesObj[nome];
      const tipoRaw =
        typeof relacao === "object" && relacao !== null
          ? relacao.tipo
          : "Neutro";
      const tipoDados = obterDadosRelacao(tipoRaw);

      // usa data-attributes + event delegation (sem onclick inline)
      return `<button class="relation-chip ${tipoDados.className}"
        data-personagem="${pk}"
        data-pessoa="${encodeData(nome)}">${escapeHtml(nome)}</button>`;
    })
    .join("");
}
function renderPertences(personagemKey, pertences) {
  if (!pertences) return "<p>-</p>";

  const pk = encodeData(personagemKey);

  // Caso seja um ARRAY: [{ nome, imagem, descricao }, ...]
  if (Array.isArray(pertences)) {
    if (!pertences.length) return "<p>-</p>";
    return `
      <div class="chip-container">
        ${pertences
          .map((item, idx) => {
            const nome = item?.nome || `ITEM ${idx + 1}`;
            return `
              <button class="item-chip"
                data-action="item"
                data-personagem="${pk}"
                data-ref="${idx}">
                ${escapeHtml(nome)}
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // Caso seja um OBJETO: { "Nome do item": { imagem, descricao }, ... }
  if (typeof pertences === "object") {
    const nomes = Object.keys(pertences);
    if (!nomes.length) return "<p>-</p>";
    return `
      <div class="chip-container">
        ${nomes
          .map((nome) => {
            return `
              <button class="item-chip"
                data-action="item"
                data-personagem="${pk}"
                data-ref="${encodeData(nome)}">
                ${escapeHtml(nome)}
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // Caso seja uma STRING com vírgulas
  const partes = String(pertences)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!partes.length) return `<p>${escapeHtml(pertences)}</p>`;

  return `
    <ul class="item-list">
      ${partes.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
    </ul>
  `;
}

function renderImplantes(personagemKey, implantes) {
  if (!implantes) return "<p>-</p>";

  const pk = encodeData(personagemKey);

  // Caso seja OBJETO
  if (typeof implantes === "object" && !Array.isArray(implantes)) {
    const nomes = Object.keys(implantes);
    if (!nomes.length) return "<p>-</p>";

    return `
      <div class="chip-container">
        ${nomes
          .map((nome) => {
            return `
            <button class="item-chip"
              data-action="implant"
              data-personagem="${pk}"
              data-ref="${encodeData(nome)}">
              ${escapeHtml(nome)}
            </button>`;
          })
          .join("")}
      </div>
    `;
  }

  // Caso seja ARRAY
  if (Array.isArray(implantes)) {
    if (!implantes.length) return "<p>-</p>";

    return `
      <div class="chip-container">
        ${implantes
          .map((item, idx) => {
            const nome = item?.nome || `Implante ${idx + 1}`;
            return `
            <button class="item-chip"
              data-action="implant"
              data-personagem="${pk}"
              data-ref="${idx}">
              ${escapeHtml(nome)}
            </button>`;
          })
          .join("")}
      </div>
    `;
  }

  return "<p>-</p>";
}

// ======= VOLTAR =======
function voltarParaSelecao() {
  document.getElementById("profile-screen").style.display = "none";
  document.getElementById("selection-screen").style.display = "block";
  currentPersonagemKey = null;
}

// ======= MODAL RELAÇÕES =======
function mostrarRelacao(personagemKey, pessoa) {
  const personagem = personagens[personagemKey];
  if (!personagem || !personagem.relacoes) return;

  const relacao = personagem.relacoes[pessoa];

  const descricao =
    typeof relacao === "object" && relacao !== null
      ? relacao.descricao
      : relacao;

  const tipo = typeof relacao === "object" ? relacao.tipo : "Neutro";
  const tipoDados = obterDadosRelacao(tipo);

  // Tenta encontrar o outro personagem a partir do nome da relação (ex: Tessia Amberine)
  const outroPersonagem = encontrarPersonagemPorNomeExibido(pessoa);

  const modal = document.getElementById("relation-modal");
  const title = document.getElementById("relation-title");
  const text = document.getElementById("relation-text");
  const avatarA = document.getElementById("relation-avatar-a");
  const avatarB = document.getElementById("relation-avatar-b");
  const nomeA = document.getElementById("relation-name-a");
  const nomeB = document.getElementById("relation-name-b");
  const tipoCampo = document.getElementById("relation-type");
  const statusCampo = document.getElementById("relation-status");

  // Título no topo do modal
  title.innerHTML = `ANÁLISE DE RELAÇÃO // ${tipoDados.label.toUpperCase()}`;

  // Avatares e nomes
  if (avatarA) {
    const fotoA = personagem.foto || null;

    avatarA.style.backgroundImage = fotoA ? `url('${fotoA}')` : "none";
    avatarA.style.cursor = fotoA ? "zoom-in" : "default";

    // zoom no avatar do personagem principal
    avatarA.onclick = fotoA
      ? () =>
          abrirImagemPerfil(
            fotoA,
            personagem.nome || personagem.id || "SUBJECT",
          )
      : null;
  }

  if (nomeA) {
    nomeA.textContent = personagem.nome || "-";
  }

  // relacao pode ser string ou objeto; se for objeto, podemos ter config extra
  const temObjetoRelacao = typeof relacao === "object" && relacao !== null;

  // 1) tenta pegar imagem direto da relação (ex.: relacao.avatar ou relacao.foto)
  // 2) se não tiver, tenta pegar da ficha do outroPersonagem
  let fotoOutro =
    (temObjetoRelacao && (relacao.avatar || relacao.foto)) ||
    (outroPersonagem && outroPersonagem.foto) ||
    null;

  if (avatarB) {
    avatarB.style.backgroundImage = fotoOutro ? `url('${fotoOutro}')` : "none";
    avatarB.style.cursor = fotoOutro ? "zoom-in" : "default";

    // zoom no avatar da outra pessoa da relação
    avatarB.onclick = fotoOutro
      ? () =>
          abrirImagemPerfil(
            fotoOutro,
            (temObjetoRelacao &&
              (relacao.nomeExibido || relacao.nome || pessoa)) ||
              (outroPersonagem && outroPersonagem.nome) ||
              pessoa ||
              "SUBJECT",
          )
      : null;
  }

  if (nomeB) {
    // se quiser, também dá pra ter um nomeExibido na relação
    const nomeCustom =
      temObjetoRelacao && relacao.nomeExibido ? relacao.nomeExibido : null;

    nomeB.textContent = nomeCustom || outroPersonagem?.nome || pessoa || "-";
  }

  // Escala de relação (campo dedicado)
  if (tipoCampo) {
    tipoCampo.textContent = tipoDados.label;
  }

  // Status (campo dedicado)
  if (statusCampo) {
    // Prioridade:
    // 1) status definido diretamente na relação
    // 2) status inferido pela ficha do outro personagem
    // 3) fallback
    let status =
      (temObjetoRelacao && relacao && relacao.status) ||
      inferirStatusPessoa(outroPersonagem) ||
      "DESCONHECIDO";

    statusCampo.textContent = String(status);
  }

  // Descrição
  if (text) {
    text.innerHTML = descricaoParaHtmlParagrafos(descricao);
  }

  modal.classList.add("open");
}

function fecharRelacao() {
  document.getElementById("relation-modal").classList.remove("open");
}

// fechar modal clicando fora
// fechar modal clicando fora
const __relation_modal = document.getElementById("relation-modal");
if (__relation_modal) {
  __relation_modal.addEventListener("click", (e) => {
    if (e.target.id === "relation-modal") {
      fecharRelacao();
    }
  });
}

// ======= MODAL IMAGEM PERFIL =======

function abrirImagemPerfil(src, nome) {
  if (!src) return;

  const modal = document.getElementById("image-modal");
  const img = document.getElementById("image-modal-img");
  const caption = document.getElementById("image-modal-caption");

  if (!modal || !img) return;

  img.src = src;
  img.alt = nome || "Subject Image";

  if (caption) {
    caption.textContent = nome || "";
  }

  modal.classList.add("open");
}

function fecharImagemPerfil() {
  const modal = document.getElementById("image-modal");
  if (!modal) return;
  modal.classList.remove("open");
}

// fechar modal clicando fora
const __image_modal = document.getElementById("image-modal");
if (__image_modal) {
  __image_modal.addEventListener("click", (e) => {
    if (e.target.id === "image-modal") {
      fecharImagemPerfil();
    }
  });
}

function mostrarItem(personagemKey, itemRef) {
  const personagem = personagens[personagemKey];
  if (!personagem || !personagem.pertencesImportantes) return;

  const pert = personagem.pertencesImportantes;
  let item = null;
  let nome = "";

  // ARRAY
  if (Array.isArray(pert)) {
    item = pert[itemRef];
    if (!item) return;
    nome = item.nome || `Item ${itemRef + 1}`;
  }
  // OBJETO
  else if (typeof pert === "object") {
    item = pert[itemRef];
    if (!item) return;
    nome = itemRef;
  } else {
    // se ainda for string, não abre modal
    return;
  }

  const modal = document.getElementById("item-modal");
  const nomeEl = document.getElementById("item-modal-name");
  const descEl = document.getElementById("item-modal-description");
  const imgEl = document.getElementById("item-modal-img");

  if (!modal || !nomeEl || !descEl || !imgEl) return;

  nomeEl.textContent = nome;
  descEl.textContent = item.descricao || "-";

  if (item.imagem) {
    imgEl.src = item.imagem;
    imgEl.alt = nome;
    imgEl.style.display = "block";
  } else {
    imgEl.src = "";
    imgEl.alt = "";
    imgEl.style.display = "none";
  }

  modal.classList.add("open");
}

function mostrarImplante(personagemKey, implanteRef) {
  const personagem = personagens[personagemKey];
  if (!personagem || !personagem.implantes) return;

  const impl = personagem.implantes;
  let item = null;
  let nome = "";

  // Caso seja OBJETO
  if (typeof impl === "object" && !Array.isArray(impl)) {
    item = impl[implanteRef];
    nome = implanteRef;
  }
  // Caso seja ARRAY
  else if (Array.isArray(impl)) {
    item = impl[implanteRef];
    nome = item?.nome || `Implante ${implanteRef + 1}`;
  }

  if (!item) return;

  const modal = document.getElementById("implant-modal");
  const nomeEl = document.getElementById("implant-modal-name");
  const descEl = document.getElementById("implant-modal-description");

  nomeEl.textContent = nome;
  descEl.textContent = typeof item === "string" ? item : item.descricao || "-";

  modal.classList.add("open");
}

function fecharImplante() {
  document.getElementById("implant-modal").classList.remove("open");
}

// fechar modal clicando fora
const __implant_modal = document.getElementById("implant-modal");
if (__implant_modal) {
  __implant_modal.addEventListener("click", (e) => {
    if (e.target.id === "implant-modal") {
      fecharImplante();
    }
  });
}

function fecharItem() {
  const modal = document.getElementById("item-modal");
  if (!modal) return;
  modal.classList.remove("open");
}

// fechar modal clicando fora
// fechar modal clicando fora
const __item_modal = document.getElementById("item-modal");
if (__item_modal) {
  __item_modal.addEventListener("click", (e) => {
    if (e.target.id === "item-modal") {
      fecharItem();
    }
  });
}

// ======= EVENT DELEGATION (chips dinâmicos) =======
document.addEventListener("click", (e) => {
  const relBtn = e.target.closest && e.target.closest(".relation-chip");
  if (relBtn && relBtn.dataset) {
    const personagemKey = decodeData(relBtn.dataset.personagem);
    const pessoa = decodeData(relBtn.dataset.pessoa);
    mostrarRelacao(personagemKey, pessoa);
    return;
  }

  const actionBtn =
    e.target.closest && e.target.closest(".item-chip[data-action]");
  if (actionBtn && actionBtn.dataset) {
    const personagemKey = decodeData(actionBtn.dataset.personagem);
    const refRaw = actionBtn.dataset.ref;
    const action = actionBtn.dataset.action;

    const ref = /^[0-9]+$/.test(refRaw) ? Number(refRaw) : decodeData(refRaw);

    if (action === "item") {
      mostrarItem(personagemKey, ref);
      return;
    }

    if (action === "implant") {
      mostrarImplante(personagemKey, ref);
      return;
    }
  }
});

// ======= TECLA ESC PARA FECHAR MODAIS =======
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  const relation = document.getElementById("relation-modal");
  const item = document.getElementById("item-modal");
  const implant = document.getElementById("implant-modal");
  const image = document.getElementById("image-modal");

  if (image?.classList.contains("open")) return fecharImagemPerfil();
  if (relation?.classList.contains("open")) return fecharRelacao();
  if (item?.classList.contains("open")) return fecharItem();
  if (implant?.classList.contains("open")) return fecharImplante();
});

// ======= ZOOM GENÉRICO PARA TODAS AS <img> =======

document.addEventListener("click", (e) => {
  const target = e.target;

  // só reage se for <img>
  if (!target || target.tagName !== "IMG") return;

  // não reabrir ao clicar na própria imagem do modal de zoom
  if (target.id === "image-modal-img") return;

  const src = target.getAttribute("src");
  if (!src) return;

  const nome =
    target.getAttribute("alt") ||
    target.getAttribute("data-caption") ||
    target.getAttribute("data-nome") ||
    "";

  abrirImagemPerfil(src, nome);
});
