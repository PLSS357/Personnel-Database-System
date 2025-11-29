// ========================================================================
// ARQUIVO: personagens.js
// Contém todas as fichas individuais dos personagens
// ========================================================================

const personagens = {
  // ======================================================================
  // OLIVER "VIOLE" MILLER
  // ======================================================================

  oliver: {
    // Identificação básica
    nome: 'Oliver "Viole" Miller',
    funcao:
      "Fixer | Fundador e Líder dos Dandelions | Ex-Organização XIII (Rank VI)",
    id: "AR-2077-02",
    foto: "img/Dandelions/Oliver.png",
    ativo: true, // (true = ativo, false = inativo, null = desconhecido)

    // Dados vitais
    localNascimento: "Pacifica, Night City",
    dataNascimento: "03/02/2065",
    idade: 26,
    altura: "1,83 m",
    peso: "73 kg",

    // Citação e objetivo
    citacao: '"Se suas falas não impedem balas, você precisa melhorar."',
    objetivoVida:
      "Transformar sua história marcada por violência em um novo caminho, criando oportunidades e proteção para aqueles que fogem da sombra das corporações.",

    // --------------------------------------------------------------------
    // PERFIL PSICOLÓGICO
    // --------------------------------------------------------------------

    tracosPrincipais:
      "Resiliente, analítico, empático em silêncio. Sofre de sintomas de TEPT, mas mantém controle por meio de rotinas rígidas e autocontenção emocional.",
    comportamentoSocial:
      "Mantém postura calma e protetora, especialmente com aliados. Pode ser brusco com estranhos ou inimigos.",
    motivacao:
      "Remissão. Busca transformar sua dor em algo útil, ajudando e protegendo outros para que não sofram o mesmo destino.",
    valoresCentrais:
      "Lealdade, redenção individual, justiça fora dos sistemas tradicionais.",
    visaoPessoas:
      "Acredita que todos carregam cicatrizes — algumas visíveis, outras não. Não confia facilmente, mas quando confia, é profundo.",
    oQueValoriza:
      "Honestidade direta, responsabilidade pelas próprias escolhas, silêncio confortável, e a capacidade de continuar mesmo quando tudo aperta.",

    // --------------------------------------------------------------------
    // HISTÓRICO FAMILIAR
    // --------------------------------------------------------------------

    antecedentesFamiliares:
      "Família destruída por conflitos internos de Pacifica e pelos efeitos colaterais das zonas de exclusão. Perdeu quase todos antes dos 20 anos.",
    pessoaMaisImportante:
      "Kane Miller — figura de irmão mais velho e mentor emocional.",
    tragediaFamiliar:
      "Testemunhou o colapso completo da própria família durante uma série de operações corporativas clandestinas que devastaram Pacifica.",

    // --------------------------------------------------------------------
    // HISTÓRICO PESSOAL
    // --------------------------------------------------------------------

    historicoPessoal:
      "Ex-membro da Organização XIII, onde atuava como especialista em infiltração e inteligência tática. Fugiu após recusar ordens que colocariam inocentes em risco. Fundou os Dandelions para reconstruir vidas que, assim como a dele, estavam quebradas.",

    // --------------------------------------------------------------------
    // RELAÇÕES INTERPESSOAIS
    // --------------------------------------------------------------------
    // Tipos de relação válidos:
    // "romantic", "friend", "enemy", "neutral"

    relacoes: {
      // Exemplo de estrutura
      // "Nome da Pessoa": { tipo: "friend", descricao: "texto..." }

      "Kane Miller": {
        tipo: "friend",
        descricao:
          "Figura de mentor e quase irmão. Kane foi quem manteve Oliver inteiro após o colapso familiar.",
      },

      "Tessia Amberine": {
        tipo: "romantic",
        descricao:
          "Relação intensa, marcada por proteção mútua, traumas, e um entendimento silencioso que dispensa explicações.",
      },

      "Organização XIII": {
        tipo: "enemy",
        descricao:
          "Alvo direto de perseguição após sua deserção. Conhecem seus métodos — e ele conhece os deles.",
      },

      Dandelions: {
        tipo: "friend",
        descricao:
          "Sua família escolhida. Cada membro foi salvo, protegido ou reconstruído com suas próprias mãos.",
      },
    },

    // --------------------------------------------------------------------
    // PERTENCES IMPORTANTES 
    // --------------------------------------------------------------------

    pertencesImportantes: {
      "Primeiro Baixo": {
        imagem: "img/itens/oliver-baixo-original.png",
        descricao:
          "Primeiro instrumento de Oliver, presente de Kane. Possui marcas de uso pesado e customizações improvisadas.",
      },

      "Foto de Emily": {
        imagem: "img/itens/oliver-foto-emily.png",
        descricao:
          "Foto antiga, tirada antes da tragédia familiar. Oliver a guarda como um lembrete da vida que perdeu.",
      },

      Hoverboard: {
        imagem: "img/itens/oliver-hoverboard.png",
        descricao:
          "Meio de transporte favorito de Oliver pelas ruas estreitas de Night City.",
      },
    },

    // --------------------------------------------------------------------
    // IMPLANTES CIBERNÉTICOS
    // --------------------------------------------------------------------

    implantes: {
      "Kiroshi Optics MK3": {
        descricao:
          "Conjunto de aprimoramentos visuais com zoom digital, HUD tático e leitura biométrica.",
      },
      "Subdermal Armor": {
        descricao:
          "Camada de blindagem interna reforçada, oferecendo +25% de resistência a balística leve.",
      },
    },

    // --------------------------------------------------------------------
    // PERFIL PROFISSIONAL
    // --------------------------------------------------------------------

    tipoTrabalho:
      "Fixer autônomo com especialização em obtenção de informações, mediação de conflitos e operações de infiltração.",
    modoTrabalho:
      "Cauteloso, calculado e silencioso. Avalia riscos antes de agir e prefere soluções estratégicas a confrontos diretos.",
    espacoTrabalho:
      "Combinação de base improvisada dos Dandelions e múltiplos pontos de apoio espalhados pela cidade.",
    clientes:
      "Independentes, pequenos grupos de resistência, freelancers e indivíduos que buscam proteção fora das corporações.",
  },

  // ======================================================================
  // IVY NARANJO — ESTRUTURA PRONTA (para você preencher)
  // ======================================================================

  ivy: {
    nome: "Ivy Naranjo",
    funcao: "Media | Ex-Organização XIII (Rank IV) | Investigadora de rua",
    id: "AR-2077-03",
    foto: "img/Dandelions/Ivy.png",
    ativo: true,

    // Dados vitais
    localNascimento: "",
    dataNascimento: "",
    idade: "",
    altura: "",
    peso: "",

    // Citação & Objetivo
    citacao: "",
    objetivoVida: "",

    // Perfil Psicológico
    tracosPrincipais: "",
    comportamentoSocial: "",
    motivacao: "",
    valoresCentrais: "",
    visaoPessoas: "",
    oQueValoriza: "",

    // Histórico Familiar
    antecedentesFamiliares: "",
    pessoaMaisImportante: "",
    tragediaFamiliar: "",

    // Histórico Pessoal
    historicoPessoal: "",

    // Relações Interpessoais
    relacoes: {
      // Exemplo:
      // "Oliver Miller": { tipo: "friend", descricao: "" }
    },

    // Pertences importantes
    pertencesImportantes: [
      /*
      {
        nome: "",
        imagem: "",
        descricao: "",
      }
      */
    ],

    // Perfil profissional
    tipoTrabalho: "",
    modoTrabalho: "",
    espacoTrabalho: "",
    clientes: "",
  },

  // ======================================================================
  // MODELO PADRÃO PARA ADICIONAR NOVOS PERSONAGENS
  // ======================================================================

  _modeloPersonagem: {
    nome: "",
    funcao: "",
    id: "",
    foto: "",
    ativo: null,

    localNascimento: "",
    dataNascimento: "",
    idade: "",
    altura: "",
    peso: "",

    citacao: "",
    objetivoVida: "",

    tracosPrincipais: "",
    comportamentoSocial: "",
    motivacao: "",
    valoresCentrais: "",
    visaoPessoas: "",
    oQueValoriza: "",

    antecedentesFamiliares: "",
    pessoaMaisImportante: "",
    tragediaFamiliar: "",

    historicoPessoal: "",

    relacoes: {},

    pertencesImportantes: [],

    tipoTrabalho: "",
    modoTrabalho: "",
    espacoTrabalho: "",
    clientes: "",
  },
};
