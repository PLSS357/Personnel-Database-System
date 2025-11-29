let currentPersonagemKey = null;

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
              <span>BORN: ${formatDataNascimento(personagem)}</span>
              <span>PLACE OF BIRTH: ${personagem.localNascimento || "??"}</span>
              <span>AGE: ${personagem.idade || "??"} YRS</span>
              <span>HEIGHT: ${personagem.altura || "??"}</span>
              <span>WEIGHT: ${personagem.peso || "??"}</span>
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

          <div class="data-block">
            <h3>Histórico Familiar</h3>
            <p><strong>Antecedentes:</strong> ${
              personagem.antecedentesFamiliares || "-"
            }</p><br>
            <p><strong>Pessoa mais importante:</strong> ${
              personagem.pessoaMaisImportante || "-"
            }</p><br>
            <p><strong>Tragédia familiar:</strong> ${
              personagem.tragediaFamiliar || "-"
            }</p>
          </div>

          <div class="data-block">
            <h3>Histórico Pessoal</h3>
            <p>${personagem.historicoPessoal || "-"}</p>
          </div>

          <div class="data-block">
            <h3>Relações Interpessoais</h3>
            ${
              relacoesChips
                ? `<div class="chip-container">${relacoesChips}</div>`
                : "<p>Nenhuma relação registrada.</p>"
            }
          </div>

          <div class="data-block">
          <h3>Pertences Importantes</h3> ${renderPertences(
            personagemKey,
            personagem.pertencesImportantes
          )}</div>

          <div class="data-block">
          <h3>Implantes Cibernéticos</h3> ${renderImplantes(
            personagemKey,
            personagem.implantes
          )}</div>

          <div class="data-block">
            <h3>Perfil Profissional</h3>
            <p><strong>Tipo de trabalho:</strong> ${
              personagem.tipoTrabalho || "-"
            }</p><br>
            <p><strong>Modo de trabalho:</strong> ${
              personagem.modoTrabalho || "-"
            }</p><br>
            <p><strong>Espaço de trabalho:</strong> ${
              personagem.espacoTrabalho || "-"
            }</p><br>
            <p><strong>Clientes:</strong> ${personagem.clientes || "-"}</p>
          </div>
        </div>
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
  return nomes
    .map((nome) => {
      const relacao = relacoesObj[nome];
      const tipo = typeof relacao === "object" ? relacao.tipo : "neutral";
      const encodedNome = nome.replace(/"/g, "&quot;");
      return `<button class="relation-chip ${tipo}" onclick="mostrarRelacao('${personagemKey}', '${encodedNome}')">${nome}</button>`;
    })
    .join("");
}

function renderPertences(personagemKey, pertences) {
  if (!pertences) return "<p>-</p>";

  // Caso seja um ARRAY: [{ nome, imagem, descricao }, ...]
  if (Array.isArray(pertences)) {
    if (!pertences.length) return "<p>-</p>";
    return `
      <div class="chip-container">
        ${pertences
          .map((item, idx) => {
            const nome = (item.nome || `ITEM ${idx + 1}`).replace(
              /"/g,
              "&quot;"
            );
            return `
              <button class="item-chip"
                onclick="mostrarItem('${personagemKey}', ${idx})">
                ${nome}
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
            const safe = nome.replace(/"/g, "&quot;");
            return `
              <button class="item-chip"
                onclick="mostrarItem('${personagemKey}', '${safe}')">
                ${safe}
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // Caso seja uma STRING com vírgulas
  const partes = pertences
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!partes.length) return `<p>${pertences}</p>`;

  return `
    <ul class="item-list">
      ${partes.map((t) => `<li>${t}</li>`).join("")}
    </ul>
  `;
}

function renderImplantes(personagemKey, implantes) {
  if (!implantes) return "<p>-</p>";

  // Caso seja OBJETO
  if (typeof implantes === "object" && !Array.isArray(implantes)) {
    const nomes = Object.keys(implantes);
    if (!nomes.length) return "<p>-</p>";

    return `
      <div class="chip-container">
        ${nomes.map(nome => {
          const safe = nome.replace(/"/g, "&quot;");
          return `
            <button class="item-chip"
              onclick="mostrarImplante('${personagemKey}', '${safe}')">
              ${safe}
            </button>`;
        }).join("")}
      </div>
    `;
  }

  // Caso seja ARRAY
  if (Array.isArray(implantes)) {
    if (!implantes.length) return "<p>-</p>";

    return `
      <div class="chip-container">
        ${implantes.map((item, idx) => {
          const nome = (item.nome || `Implante ${idx+1}`).replace(/"/g, "&quot;");
          return `
            <button class="item-chip"
              onclick="mostrarImplante('${personagemKey}', ${idx})">
              ${nome}
            </button>`;
        }).join("")}
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
    typeof relacao === "object"
      ? relacao.descricao
      : relacao || "Nenhum dado registrado para esta relação.";

  const tipo = typeof relacao === "object" ? relacao.tipo : "neutral";

  // Texto curto em caps para o título
  const tipoTitulo =
    {
      romantic: "ROMÂNTICO",
      friend: "AMIZADE",
      enemy: "INIMIZADE",
      neutral: "NEUTRO",
    }[tipo] || "DESCONHECIDO";

  // Texto mais descritivo para o campo "Tipo de relação"
  const tipoDescricao =
    {
      romantic: "Parceiros românticos",
      friend: "Amigos / aliados próximos",
      enemy: "Inimigos declarados",
      neutral: "Relação neutra / indefinida",
    }[tipo] || "Relação não classificada";

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

  // Título no topo do modal
  title.innerHTML = `ANÁLISE DE RELAÇÃO`;

  // Avatares e nomes
  if (avatarA) {
    avatarA.style.backgroundImage = personagem.foto
      ? `url('${personagem.foto}')`
      : "none";
  }
  if (nomeA) {
    nomeA.textContent = personagem.nome || "-";
  }

  if (avatarB) {
    avatarB.style.backgroundImage =
      outroPersonagem && outroPersonagem.foto
        ? `url('${outroPersonagem.foto}')`
        : "none";
  }
  if (nomeB) {
    nomeB.textContent = outroPersonagem?.nome || pessoa || "-";
  }

  // Tipo de relação (campo dedicado)
  if (tipoCampo) {
    tipoCampo.textContent = tipoDescricao;
  }

  // Descrição
  if (text) {
    text.textContent = descricao;
  }

  modal.classList.add("open");
}

function fecharRelacao() {
  document.getElementById("relation-modal").classList.remove("open");
}

// fechar modal clicando fora
document.getElementById("relation-modal").addEventListener("click", (e) => {
  if (e.target.id === "relation-modal") {
    fecharRelacao();
  }
});

document.getElementById("relation-modal").addEventListener("click", (e) => {
  if (e.target.id === "relation-modal") {
    fecharRelacao();
  }
});

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

document.getElementById("image-modal").addEventListener("click", (e) => {
  if (e.target.id === "image-modal") {
    fecharImagemPerfil();
  }
});

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
  descEl.textContent = typeof item === "string" ? item : (item.descricao || "-");

  modal.classList.add("open");
}

function fecharImplante() {
  document.getElementById("implant-modal").classList.remove("open");
}

document.getElementById("implant-modal").addEventListener("click", e => {
  if (e.target.id === "implant-modal") fecharImplante();
});

function fecharItem() {
  const modal = document.getElementById("item-modal");
  if (!modal) return;
  modal.classList.remove("open");
}

// fechar modal clicando fora
document.getElementById("item-modal").addEventListener("click", (e) => {
  if (e.target.id === "item-modal") {
    fecharItem();
  }
});
