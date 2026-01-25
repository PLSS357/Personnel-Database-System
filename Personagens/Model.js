// NAME.js
// Ficha completa de NAME

personagens.NAME = {
  // Identificação básica
  nome: "",
  funcao: "",
  id: "",
  foto: "",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "",
  dataNascimento: "",
  idade: 0,
  altura: "",
  peso: "",

  // Citação e objetivo
  citacao: "“”",
  objetivoVida:
    "",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "",
  comportamentoSocial:
    "",
  motivacao:
    "",
  valoresCentrais:
    "",
  visaoPessoas:
    "",
  oQueValoriza:
    "",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: ",
    "Pai: ",
  ],
  pessoaMaisImportante:
    "",
  tragedia: [
    "",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "": {
      tipo: "",
      foto: "img/Personagens/",
      descricao:
        "",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "": {
      imagem: "img/itens/",
      descricao:
        ".",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    "": {
      descricao: "",
    },
  },
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho: "",
  modoTrabalho: "",
  espacoTrabalho: "",
  clientes: "",
};
