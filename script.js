// ======= DADOS DOS PERSONAGENS =======
// Substitua 'ivy.png' e 'oliver.png' pelas fotos reais (mesma pasta do HTML)
const personagens = {
  oliver: {
    id: "AR-2077-02",
    nome: 'Oliver "Viole" Miller',
    funcao:
      "Fixer | Fundador e Líder dos Dandelions | Ex-Organização XIII (Rank VI)",
    foto: "img/Dandelions/Oliver.png",
    ativo: true, // Define se o perfil está ativo ou inativo (true = ativo, false = inativo, null = desconhecido)
    localNascimento: "Pacifica, Night City",
    // Se quiser evitar qualquer bug de data, pode usar "2065-02-03" aqui.
    dataNascimento: "03/FEB/2065",
    idade: 26,
    altura: "1,83 m",
    peso: "73 kg",
    citacao: '"Se suas falas não impedem balas, você precisa melhorar."',
    tracosPrincipais:
      "Resiliente, analítico, empático em silêncio. Sofre de sintomas de TEPT, mas mantém controle por meio de rotinas rígidas e autocontenção emocional.",
    comportamentoSocial:
      "Mantém postura calma e protetora, especialmente com aliados. Pode ser brusco com estranhos ou inimigos.",
    motivacao:
      "Remissão. Busca transformar dor em propósito e impedir que outros repitam o ciclo de violência que destruiu sua infância.",
    valoresCentrais:
      "Lealdade, sacrifício e responsabilidade. Não gosta de promessas, pois teme que não consiga cumprir.",
    oQueValoriza: "Liberdade de escolha e lealdade genuína.",
    visaoPessoas:
      "Acredita que todos carregam dor, mas poucos têm coragem de confrontá-la.",
    pessoaMaisImportante: "Tessia Amberine.",

    antecedentesFamiliares:
      "Mãe: Elena Miller, técnica em manutenção industrial, falecida em 2071 durante o parto.\n\n" +
      "Pai: Derek Cross (Miller), operário e contrabandista associado à gangue Laminares, responsável acidental pela morte de Emily Miller; cometeu suicídio logo após o incidente.\n\n" +
      "Irmã: Emily Miller, falecida em 2079 aos 8 anos.",

    historicoPessoal:
      "Nascido em Pacifica, sobreviveu à infância em uma das megaestruturas mais degradadas da cidade. Criado por uma mãe afetuosa e um pai ausente, viu o pouco equilíbrio do lar ruir após a morte materna.\n\n" +
      "Aos 11 anos, ingressou na Organização XIII para proteger a irmã e garantir uma sobrevivência mínima. A rotina de missões, treinamentos e violência precoce consolidou uma mentalidade pragmática e hiper-vigilante.\n\n" +
      "Aos 14, testemunhou a morte de Emily — acidentalmente alvejada pelo próprio pai durante uma emboscada entre gangues. O evento quebrou emocionalmente Oliver, selando seu silêncio e moldando a frieza controlada que passaria a exibir.\n\n" +
      "Durante a adolescência, foi treinado por Kane Graves, que o apresentou à música e à disciplina como formas de canalizar o trauma. Fundou a banda Ghouls ’n Ghosts, que funcionou como refúgio emocional e válvula de escape para a culpa.\n\n" +
      "Posteriormente, atuou como mercenário independente, sendo recrutado pela fixer Tessia Amberine (“Phantom”). Tornou-se seu parceiro e, eventualmente, amante. Após o desaparecimento de Tessia, entrou em colapso emocional e tentou recomeçar ao lado de Kane.\n\n" +
      "Em 2085, durante uma operação contra a Arasaka, foi traído por Raze Lambert. A explosão que matou Kane também desfigurou Oliver, levando à reconstrução facial quase completa. Três anos após o incidente, fundou os Dandelions, reunindo exilados e sobreviventes para criar algo que a cidade não pudesse apagar.",

    tragediaFamiliar:
      "Em 2079, durante um confronto entre gangues provocado pelas ações dos Laminares, Emily foi morta acidentalmente por Derek, o próprio pai, em meio ao fogo cruzado.\n\n" +
      "O choque levou Derek ao suicídio diante de Oliver, consolidando um trauma que o marcaria permanentemente. A perda da irmã e do pai no mesmo dia alimentou a introspecção extrema e o desejo obsessivo de construir uma “família” alternativa que jamais fosse destruída da mesma forma.",

    pertencesImportantes:
      "Baixo elétrico original da Ghouls ’n Ghosts (presente de Kane), Baixo digital Casio DG-90 Digital Guitar Synth White, Foto de Emily, Hoverboard, Coleção de máscaras antigas, Caderno com letras inacabadas da banda.",
   
    objetivoVida:
      "Romper o ciclo de violência e criar um legado de liberdade real.",
    
      tipoTrabalho:
      "Fornece recursos regularmente para Night Markets, venda de recursos altamente ilegais. Também atua diretamente nas missões de alto risco.",
    
    modoTrabalho: "Seletivo. Não aceita contratos que envolvam inocentes.",
    
    espacoTrabalho: "Sem local fixo.",
    
    clientes:
      "Gangues, Solos locais, Membros da gangue, Células de resistência, jornalistas independentes e civis desesperados.",
    
    relacoes: {
      "Ivy Naranjo": {
        tipo: "friend", // Opções: "romantic", "friend", "enemy", "neutral"
        descricao:
          "Relação de troca: informação por visibilidade. Há respeito e uma tensão não resolvida.",
      },
      "Tessia Amberine": {
        tipo: "romantic",
        descricao:
          "Um rosto distante na multidão corporativa; Oliver ainda não decidiu se confia nela.",
      },
      "Raze Lambert": {
        tipo: "enemy",
        descricao:
          "Traidor responsável pela morte de Kane e pela desfiguração de Oliver.",
      },
    },
  },

  ivy: {
    id: "AR-2077-01",
    nome: "Ivy Naranjo",
    funcao: "Media | Investigadora de Rua",
    foto: "ivy.png",
    ativo: false, // Define se o perfil está ativo ou inativo (true = ativo, false = inativo, null = desconhecido)
    localNascimento: "Heywood, Night City",
    dataNascimento: "2064-04-19",
    idade: 27,
    altura: "1,72 m",
    peso: "64 kg",
    olhos: "Azuis claros, com brilho desbotado",
    cabelo: "Curto, espetado, tingido em vermelho e preto",
    citacao: '"Todo mundo mente. Eu só aperto REC."',
    personalidade:
      "Provocante, sedutora, sarcástica e extremamente observadora.",
    tracosPrincipais: "Mente rápida, ousada, moral flexível.",
    comportamentoSocial: "Dominante em conversas, humor ácido como defesa.",
    motivacao: "Expor abusos e derrubar narrativas falsas.",
    valoresCentrais: "Autenticidade, coragem e direito à própria história.",
    aparenciaEstilo:
      "Postura relaxada, olhar atento, sempre com cigarro à mão.",
    estiloRoupas: "Jaqueta de couro vermelha, calça preta, botas pesadas.",
    acessorios: "Óculos de gravação, implantes de áudio, colar antigo.",
    valoresVinculos: "Protege suas fontes a qualquer custo.",
    oQueValoriza: "Verdades incômodas.",
    visaoPessoas: "Todo mundo tem um preço, mas nem todos admitem.",
    pessoaMaisImportante: "Uma fonte anônima que salvou sua vida.",
    antecedentesFamiliares:
      "Família operária, pai ausente, mãe ex-funcionária de corp.",
    historicoPessoal:
      "Começou como repórter de bairro, virou lenda urbana entre medias.",
    tragediaFamiliar:
      "Mãe desapareceu após denunciar práticas ilegais de corporação.",
    relacoesPessoais: ["Contato 01", "Contato 02", "Contato 03"],
    inimigos: ["Executor Arasaka", "Fixer Traidor"],
    relacionamentos: ["Relacionamento Passado"],
    pertencesImportantes: "Câmera antiga, gravador analógico, anel da mãe.",
    objetivoVida: "Registrar a história que as corporações tentam apagar.",
    vidaProfissional:
      "Produz dossiês independentes distribuídos no mercado negro.",
    tipoTrabalho: "Investigativo, imersivo, altamente arriscado.",
    modoTrabalho: "Sozinha ou com poucos parceiros de confiança.",
    espacoTrabalho: "Quarto apertado cheio de cabos, telas e caixas de fitas.",
    clientes: "Fixers, gangues menores, membros dissidentes de corporações.",
    relacoes: {
      "Oliver Miller":
        "Fonte recorrente e amigo em potencial, mas a confiança nunca é total.",
      "Tessia Amberine":
        "Admiração mútua à distância; Ivy vê Tessia como um ponto de ruptura dentro das megacorps.",
    },
  },
};

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
            <h3>Pertences Importantes</h3>
            <p>${personagem.pertencesImportantes || "-"}</p>
          </div>

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