// Tessia.js
// Ficha completa de Tessia Amberine

personagens.tessia = {
  // Identificação básica
  nome: "Tessia Amberine",
  funcao: "Fixer | Ex-herdeira corporativa | Projeto Experimental",
  id: "34-3418-46",
  foto: "img/Personagens/Tessia.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Westbrook, Night City",
  dataNascimento: "14/AUG/2066",
  idade: 25,
  altura: "1,74 m",
  peso: "61 kg",

  // Citação e objetivo
  citacao: "“Algumas histórias não podem ser guardadas.”",
  objetivoVida:
    "Derrubar seu pai e garantir que ninguém mais seja moldado como ela foi.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Resiliente; introspectiva; extremamente observadora; disciplinada; silenciosamente determinada; inteligência analítica alta; sensível, mas com camadas rígidas de autodefesa.",
  comportamentoSocial:
    "Mantém distância emocional; fala pouco, mas com precisão cirúrgica; observa antes de confiar; quando confia, torna-se leal e protetora; evita exposição desnecessária.",
  motivacao:
    "Quebrar o ciclo de controle corporativo que destruiu sua infância; conquistar autonomia real; honrar as palavras da mãe; impedir que a Arasaka repita os experimentos de seu pai com outras pessoas.",
  valoresCentrais:
    "Liberdade de escolha; honestidade; proteção das pessoas queridas; resistência ao poder centralizado; repúdio ao conceito de “recurso humano”.",
  visaoPessoas:
    "Acredita que todos carregam máscaras — algumas para sobreviver, outras para dominar. Confia apenas em quem mostra as rachaduras, não a perfeição.",
  oQueValoriza:
    "Autonomia, verdade emocional, memórias da mãe e quaisquer laços construídos fora do alcance corporativo.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Celeste Amberine, Diretora de Relações Interpessoais. Afetuosa, humana, guardiã de livros físicos e valores. Assassinada por Nathaniel na “Operação Orquídea Branca”.",
    "Pai: Nathaniel Amberine, executivo da Arasaka. Rígido, controlador, emocionalmente ausente. Responsável pelo projeto Sucessor.",
  ],
  pessoaMaisImportante:
    "Oliver Miller. Uma das únicas pessoas com quem Tessia permitiu vulnerabilidade profunda.",
  tragedia: [
    "A morte da mãe por assassinato corporativo e a revelação de que o pai planejava substituir Tessia desde criança constituem a fundação de todas as cicatrizes emocionais dela.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criada em um complexo corporativo, sob vigilância constante, treinamentos corporativos e ausência de afeto. Tornou-se um “projeto” moldado para substituir Nathaniel um dia.",
    "Descobriu que a mãe foi assassinada, que o pai a considerava uma falha e que ele pretendia substituí-la. Fugiu aos 15 anos com ajuda de Seraphine Volkov, após falsificar a própria morte.",
    "Passou por cirurgias clandestinas para remover rastreadores corporais.",
    "Criou a identidade Phantom, tornando-se uma das fixers mais discretas e eficientes do submundo.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver Miller": {
      tipo: "romantic",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Cúmplices, amantes e parceiros profissionais. Ele é a primeira pessoa para quem Tessia baixa a guarda sem hesitar. Ela é a única capaz de acalmar os fantasmas dele. Uma relação construída em confiança mútua e compreensão profunda, apesar dos passados traumáticos de ambos.",
    },
    "Seraphine Volkov": {
      tipo: "family",
      foto: "img/Personagens/Sera.png",
      descricao:
        "Sera foi a primeira pessoa que Tessia escolheu confiar na vida após escapar da mansão Amberine. Amizade profunda, quase irmã. Tessia ainda carrega o chip que Sera entregou nos últimos segundos de vida.",
    },
    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Kimber é uma das poucas pessoas que Tessia permite chegar perto. Confiança construída lentamente, baseada em respeito mútuo e compreensão das cicatrizes emocionais de ambas.",
    },
    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Tessia enxerga Aiden como alguém brilhante, mas autodestrutivo quando imerso demais no ciberespaço. Tessia exige que ele faça pausas, coma e durma, mesmo que ele normalmente não faça.",
    },
    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Mirai inicialmente “desconfiou” de Tessia quando a conheceu. Com o tempo, ele passou a gostar dela, especialmente quando percebeu que ela cuida de Oliver de verdade. Ele até traz objetos aleatórios para ela como se fossem “presentes”.",
    },
    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Tessia considera Serena perigosa. Não por violência, mas por influência. Apesar disso, trabalham bem juntas quando o assunto envolve infiltrações, negociações e estratégia.",
    },
    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Ninvega entende traumas e reconhece o de Tessia. Eles dividem uma calma parecida: eficiente, silenciosa, precisa. Tessia aprecia a honestidade emocional dele, uma qualidade rara.",
    },
    "Dominic D. V. Chier": {
      tipo: "neutral",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Dominic é o tipo de sujeito cuja existência deixa Tessia em dúvida se está em uma missão ou em um episódio de comédia involuntária. Apesar disso, sabe que ele tem um bom coração.",
    },
    Lyra: {
      tipo: "neutral",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Tessia admira a coragem de Lyra de dizer “não” — algo que ela mesma levou anos para aprender. As duas compartilham a sensação de terem sido moldadas por outros.",
    },
    Cypher: {
      tipo: "neutral",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Tessia inicialmente considerava Cypher teatral, brilhante e imprevisível. Ele tentava arrancar reações dela, normalmente só conseguia um olhar confuso.",
    },
    Nyx: {
      tipo: "neutral",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Tessia enxerga Nyx como uma presença quieta, mas firme. Ela respeita a independência e o profissionalismo de Nyx.",
    },
    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Tessia enxerga nele um eco do que ela poderia ter sido se não tivesse fugido das mãos da Arasaka. A disciplina e o controle que ele mantém sobre si mesmo são algo que ela admira, mesmo que não concorde com seus métodos.",
    },
    "Priya Ellison": {
      tipo: "neutral",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Priya e Tessia compartilham algo essencial: ambas romperam com sistemas que tentaram moldá-las. Priya considera Tessia “assustadoramente competente” e gosta do jeito prático dela. Tessia respeita a coragem moral de Priya.",
    },
    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Ícaro é caos em formato humano, gasolina com pernas, e completa antítese da postura de Tessia — e talvez por isso ela goste dele. Tessia se surpreende com a lealdade dele: pura, direta, sem política.",
    },
    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Kleber é um enigma para Tessia. Ela reconhece a inteligência dele, mas desconfia das motivações. Mantêm uma relação profissional cordial, mas distante. Ela não sabe se Kleber é louco, iluminado, profeta ou troll, mas admite que ele é eficaz no que faz. No fim, ela aceita sua existência (algo que parece ser conscenso entre os Dandelions).",
    },
    "Nathaniel Amberine": {
      tipo: "enemy",
      foto: "img/Personagens/Nathaniel.png",
      descricao:
        "Inimigo pessoal e central; responsável pelos traumas e pelo Projeto Sucessor. Tessia deseja derrubá-lo e expor suas ações para o mundo, garantindo que ele nunca mais possa controlar ou manipular outra pessoa como fez com ela. Ela até pode ter seu sangue, mas não o considera família.",
    },
    Arasaka: {
      tipo: "enemy",
      foto: "img/arasaka/arasaka-logo.png",
      descricao:
        "Inimiga corporativa declarada. Representa tudo o que Tessia despreza: controle, desumanização, ambição desmedida e falta de ética. Ela está determinada a minar suas operações sempre que possível, vendo isso como uma forma de justiça para as vítimas da corporação.",
    },
    "Projeto Sucessor (Dessia Amberine)": {
      tipo: "enemy",
      foto: "img/Personagens/Dessia.png",
      descricao:
        "A versão “substituta” de Tessia, criada para ser a herdeira perfeita de Nathaniel. Tessia acredita que Nathaniel pretende usá-la como um corpo imortal para si mesmo. Ela vê Dessia como uma ameaça direta à si mesma e está determinada a impedir que o projeto avance.",
    },
    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "O atual conselheiro da Arasaka e também responsável pela dor de Oliver. Tessia acredita que Raze está trabalhando junto de Nathaniel. Ela o vê como um inimigo a ser derrubado junto com a Arasaka, tanto por suas ações contra Oliver quanto por seu papel na corporação.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Brinco antigo da mãe": {
      imagem: "img/itens/brinco-mãe-tessia.png",
      descricao:
        "Um par de brincos elegantes de prata e zircônia azul esverdeada, herdados de sua mãe. Tessia não usa sempre, mas mantém como um lembrete de amor e sacrifício dela.",
    },
    "Pequeno dispositivo criptográfico pessoal": {
      imagem: "img/itens/dispositivo-criptografico-tessia.png",
      descricao:
        "Um dispositivo portátil usado por Tessia para armazenar e proteger informações sensíveis. Ele possui criptografia avançada para garantir que apenas ela possa acessar os dados armazenados nele.",
    },
    "Arquivos da Operação Orquídea Branca": {
      imagem: "img/itens/arquivos-orquídea-branca.png",
      descricao:
        "Documentos confidenciais que detalham a Operação Orquídea Branca, incluindo evidências das ações de Nathaniel Amberine. Tessia os mantém como prova e para usá-los contra seu pai quando tiver a oportunidade, msmo que ela acrdite que essa chance nunca venha.",
    },
    "Coleção de livros físicos": {
      imagem: "img/itens/colecao-livros-tessia.png",
      descricao:
        "Uma coleção de livros físicos que Tessia conseguiu salvar da mansão Amberine. Inclui clássicos da literatura, filosofia e ciência, representando a conexão dela com a mãe e o mundo fora do controle corporativo.",
    },
    "Caixinha de Música": {
      imagem: "img/itens/caixinha-musica-tessia.png",
      descricao:
        "Uma pequena caixinha de música que pertenceu à mãe de Oliver. Ele consertou e modificou para que tocasse até cinco músicas diferentes, todas com significados especiais para eles.",
    },
    "Projeto “White Queen”": {
      imagem: "img/itens/projeto-white-queen.png",
      descricao:
        "Projeto de uma arma eletromagnética desenvolvida por Seraphine Volkov. Apesar de incompleto, Tessia sabe que, nas mãos certas, pode ser uma ferramenta poderosa contra corporações como a Arasaka.",
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

  tipoTrabalho: "Analítica e de Operações Silenciosas. Especializada em infiltração social, coleta de informação, rotas seguras, lavagem de dados, negociação em baixa luz e operações discretas.",
  modoTrabalho: "Planeja minuciosamente; age rápido; evita confrontos diretos; não desperdiça palavras. Trabalha com poucos contatos, mas extremamente confiáveis.",
  espacoTrabalho: "Sem local fixo.",
  clientes: "Solos, pequenos grupos de resistência, jornalistas independentes, corporativos desesperados e mercenários de elite.",
};
