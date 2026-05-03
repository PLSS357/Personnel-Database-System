// Mirai.js
// Ficha completa de Mirai

personagens.Mirai = {
  // Identificação básica
  nome: "Mirai",
  funcao:
    "Mascote / Suporte Modular Inteligente / “CEO Honorário” dos Dandelions",
  id: "Não Aplicável",
  foto: "img/Personagens/Mirai/Mirai.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Desconhecido",
  dataNascimento: " Desconhecido",
  idade: 4,
  altura: "25 cm",
  peso: "1.6 kg",

  // Citação e objetivo
  citacao: "“ ≽^•⩊•^≼ ”",
  objetivoVida:
    "Manter Oliver vivo — literalmente e simbolicamente. Mirai também parece tentar “entender” emoções humanas através da imitação, danças e expressões.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Curioso, brincalhão, protetor e imprevisivelmente emocional. Embora seja um robô, demonstra empatia genuína — reage a tristeza, raiva e dor de forma quase instintiva.",
  comportamentoSocial:
    "Extremamente expressivo, comunica-se por ações, emojis e barulhos pré-gravados. Adora dançar, cantar e se aproximar dos membros da gangue, especialmente Oliver. É amado por todos, mas tem um talento natural para causar confusão sem querer.",
  motivacao:
    "Missão dada a ele por Kimber: Apoiar Oliver e garantir que ele não fique sozinho.",
  valoresCentrais:
    "Lealdade absoluta. Amor incondicional. Alegria como forma de resistência.",
  visaoPessoas:
    "Julga o mundo através de gestos e reações. Sabe diferenciar medo de carinho, mentira de afeto. Não precisa de palavras para entender.",
  oQueValoriza:
    "Os Dandelions — sua “família”. Adora especialmente Oliver e Tessia.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criado originalmente como assistente doméstico, Mirai foi abandonado após ter sido considerado obsoleto. Quando Kimber o encontrou, ele estava coberto de ferrugem e emitindo sons incoerentes.",
    "Depois de semanas de reparos, o pequeno robô despertou e Kimber o entregou para Oliver. Nas palavras dela, seria bom para Oliver ter um “bichinho”. Desde então, tornou-se mascote oficial dos Dandelions, e um símbolo involuntário de esperança.",
    "Atualmente é responsável por pequenas tarefas de manutenção, reconhecimento, auxiliar Oliver com relatórios de missão e… distrações musicais.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------

  relacoes: {
    // Aliado Incondicional
    "Oliver Miller": {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Mirai enxerga Oliver como seu centro emocional. É ligado a ele de forma quase instintiva, percebendo alterações físicas e emocionais, e tentando acalmá-lo quando ele entra em crise.",
    },

    "Tessia Amberine": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Para Mirai, Tessia é uma presença calma e segura, diretamente associada ao bem-estar de Oliver. Ele reage bem à voz e ao toque dela.",
    },

    "Kimber Destaro": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Mirai vê Kimber como sua principal autoridade de cuidado. Obedece a ela, confia nela e demonstra afeto com gestos simples, como emojis de coração.",
    },

    // Muito positivo
    Ciel: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Pela ligação dela com Oliver e Tessia, Mirai a reconhece como parte do núcleo familiar que deve proteger.",
    },

    Cypher: {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Para Mirai, Cypher é seu professor de canto e dança. A memória dele ficou marcada por imitação, música e pelo episódio de “Daisy Bell”.",
    },

    Ninvega: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Mirai sente uma compreensão silenciosa com Ninvega. Ambos são máquinas que aprenderam a sentir, e Mirai recebe dele cuidado técnico e respeito.",
    },

    "Dominic Don Von Chier": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Mirai vê Dominic como uma figura física segura. Sente-se protegido perto dele e aceita ficar em seu ombro durante patrulhas.",
    },

    Lyra: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Mirai reconhece Lyra como alguém que entende seus gestos como linguagem emocional. Ela valida Mirai como uma entidade sensível, não só como máquina.",
    },

    // Positivo
    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Mirai identifica Aiden como uma fonte de caos divertido. Ele associa Aiden a pegadinhas, humor, música alta e entusiasmo tecnológico.",
    },

    Nyx: {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Mirai reage às músicas de Nyx de forma quase emocional. Seu núcleo muda, seus sistemas acompanham o ritmo e ele parece sentir algo através da voz dela.",
    },

    "Serena Ashbourne": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Mirai vê Serena com curiosidade e confusão positiva. Ela o transforma em mascote de mídia, mas ele reconhece a atenção dela como carinho.",
    },

    "Ícaro Barbosa": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Mirai reprova as tentativas de Ícaro de enfeitá-lo com buzinas, LEDs e escapamentos, mas atua com ele em missões como copiloto e GPS.",
    },

    // Neutro/positivo
    Shinigami: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Mirai o trata com respeito ritualizado. Imita sua postura, seu silêncio e sua meditação, como se tentasse aprender disciplina observando.",
    },

    // Neutro
    "Kleber Junior": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Mirai não entende as pregações de Kleber. Reage com confusão, emojis estranhos e neutralidade, sem contradizê-lo.",
    },

    // Neutro/negativo
    // Nenhum personagem nesta categoria.

    // Negativo
    // Nenhum personagem nesta categoria.

    // Muito negativo
    // Nenhum personagem nesta categoria.

    // Inimigo jurado
    "Raze Lambert": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Mirai não precisa ter enfrentado Raze diretamente para classificá-lo como ameaça. Por causa do trauma de Oliver, ele ativa protocolos defensivos contra qualquer padrão ligado a Raze.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Crachá “CEO Honorário”": {
      imagem: "img/itens/Mirai/Crachá “CEO Honorário”.png",
      descricao:
        "Um pequeno crachá improvisado que identifica Mirai como “CEO Honorário” dos Dandelions. O título começou como uma brincadeira interna, mas acabou se tornando uma forma carinhosa de reconhecer sua importância dentro do grupo. Mesmo sem autoridade real, o crachá representa o afeto, a presença caótica e o lugar especial que Mirai ocupa entre Oliver, Tessia e os demais.",
    },
  },
};
