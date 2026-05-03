// Tessia.js
// Ficha completa de Tessia Amberine

personagens.tessia = {
  // Identificação básica
  nome: "Tessia Amberine",
  funcao: "Fixer | Ex-herdeira corporativa | Projeto Experimental",
  id: "34-3418-46",
  foto: "img/Personagens/Tessia/Tessia Amberine.png",
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

  relacoes: {
    // Aliado Incondicional
    "Oliver Miller": {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Oliver é a pessoa para quem Tessia baixa a guarda. Ela o vê como parceiro, cúmplice e lar possível; alguém que entende suas feridas sem exigir explicações. A relação é de confiança profunda, proteção mútua e amor silencioso.",
    },

    Ciel: {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Para Tessia, Ciel representa uma forma nova de vínculo: não algo imposto por sangue ou corporação, mas escolhido. Ela tende a protegê-la com cuidado discreto, vendo nela alguém que não deve ser moldada, controlada ou usada como Tessia foi.",
    },

    "Seraphine Volkov": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Tessia/Seraphine Volkov.png",
      descricao:
        "Seraphine foi uma das primeiras pessoas em quem Tessia confiou após fugir da vida corporativa. Tessia a vê quase como irmã, uma presença ligada à liberdade, à sobrevivência e a uma dívida emocional que nunca desapareceu.",
    },

    "Celeste Amberine": {
      tipo: "Aliado Incondicional",
      status: "Morta",
      foto: "img/Personagens/Tessia/Celeste Amberine.png",
      descricao:
        "Celeste é a memória mais humana da infância de Tessia. Para ela, representa afeto, livros, liberdade emocional e tudo que Nathaniel tentou destruir. A lembrança da mãe ainda guia os valores de Tessia.",
    },

    // Muito positivo
    "Kimber Destaro": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Kimber é uma das poucas pessoas que Tessia deixa se aproximar de verdade. A relação nasceu devagar, baseada em respeito, confiança e reconhecimento mútuo das cicatrizes que ambas carregam.",
    },

    Mirai: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "No começo, a relação foi de estranhamento, mas Tessia passou a gostar de Mirai por ele ser ligado ao bem-estar de Oliver. Para ela, Mirai é uma presença pequena, estranha e afetiva; quase uma prova de que Oliver ainda consegue criar laços.",
    },

    // Positivo
    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Tessia vê Aiden como brilhante, útil e perigoso para si mesmo. Ela respeita sua inteligência, mas se preocupa com sua tendência a se perder no ciberespaço; por isso, cobra pausas, comida e sono como uma forma seca de cuidado.",
    },

    "Serena Ashbourne": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Tessia considera Serena perigosa, não pela violência direta, mas pela influência, dinheiro e teatralidade. Ainda assim, reconhece sua utilidade e inteligência; quando trabalham juntas, funcionam bem em infiltração, negociação e estratégia.",
    },

    Ninvega: {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Tessia respeita Ninvega por sua honestidade emocional e calma precisa. Ela enxerga nele alguém que entende trauma sem invadir, e aprecia sua forma silenciosa de cuidado.",
    },

    Lyra: {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Tessia admira em Lyra a coragem de dizer “não”. As duas compartilham a sensação de terem sido moldadas por outros, então Tessia tende a vê-la com empatia silenciosa.",
    },

    "Priya Ellison": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Tessia respeita Priya porque ambas romperam com sistemas que tentaram moldá-las. Ela valoriza a coragem moral de Priya, sua postura direta e sua competência em campo.",
    },

    "Ícaro Barbosa": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Para Tessia, Ícaro é caos puro: barulhento, impulsivo e completamente oposto à sua postura controlada. Mesmo assim, ela gosta dele justamente pela lealdade simples, direta e sem política.",
    },

    // Neutro/positivo
    "Dominic Don Von Chier": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Dominic confunde Tessia. Ela o vê como alguém tão absurdo que às vezes não sabe se está em uma missão ou numa comédia, mas reconhece que ele tem bom coração e pode ser confiável quando importa.",
    },

    Cypher: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Tessia o via como teatral, brilhante e imprevisível. Ele tentava arrancar reações dela, mas geralmente só conseguia um olhar confuso; ainda assim, ela reconhecia sua criatividade e presença única.",
    },

    // Neutro
    Nyx: {
      tipo: "Neutro",
      status: "Viva",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Tessia enxerga Nyx como uma presença quieta, firme e profissional. Não parece haver intimidade profunda, mas há respeito pela independência e pela postura dela.",
    },

    // Neutro/negativo
    Shinigami: {
      tipo: "Neutro/negativo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Tessia vê em Shinigami um eco do que poderia ter se tornado se nunca tivesse fugido da Arasaka: disciplina, controle e frieza. Ela admira sua força mental, mesmo discordando de seus métodos.",
    },

    "Kleber Junior": {
      tipo: "Neutro/negativo",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Kleber é um enigma para Tessia. Ela reconhece sua inteligência e eficácia, mas desconfia das motivações dele. Mantém uma relação cordial, profissional e distante, aceitando sua presença sem tentar entendê-lo demais.",
    },

    // Negativo
    // Nenhum personagem nesta categoria.

    // Muito negativo
    "Dessia Amberine — Projeto Sucessor": {
      tipo: "Muito negativo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Dessia Amberine.png",
      descricao:
        "Tessia vê Dessia como uma substituta criada para apagar sua falha aos olhos de Nathaniel. Mais do que uma rival, Dessia representa a tentativa de transformar Tessia em algo descartável.",
    },

    "Raze Lambert": {
      tipo: "Muito negativo",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Tessia vê Raze como aliado de Nathaniel e da Arasaka, além de responsável por parte da dor de Oliver. Para ela, ele é um inimigo a ser derrubado tanto por ameaça pessoal quanto por papel corporativo.",
    },

    // Inimigo jurado
    "Nathaniel Amberine": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Tessia/Nathaniel Amberine.png",
      descricao:
        "Nathaniel é o inimigo central de Tessia. Ela o vê como o responsável por seus traumas, pela morte de Celeste e pelo Projeto Sucessor. Apesar do sangue, Tessia não o considera família.",
    },

    Arasaka: {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Arasaka/Arasaka.png",
      descricao:
        "A Arasaka representa tudo que Tessia despreza: controle, desumanização, ambição corporativa e uso de pessoas como recursos. Ela deseja sabotar suas operações como forma de justiça.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Arquivos da Operação Orquídea Branca": {
      imagem: "img/itens/Tessia/Arquivos da Operação Orquídea Branca.png",
      descricao:
        "Um conjunto de arquivos sigilosos ligados à Operação Orquídea Branca, contendo dados sobre experimentos, operações corporativas e segredos enterrados no passado de Tessia com a Arasaka. São perigosos porque provam aquilo que pessoas poderosas tentaram esconder. Para Tessia, cada página é uma arma silenciosa contra o pai, contra a corporação e contra o sistema que tentou moldá-la.",
    },

    "Caixinha de Música": {
      imagem: "img/itens/Tessia/Caixinha de Música.png",
      descricao:
        "Uma pequena caixinha de música ligada às memórias da mãe de Tessia. Delicada, antiga e quase frágil demais para o mundo em que ela vive, carrega uma melodia suave que sobreviveu ao tempo, à violência e às mentiras da família Amberine. Para Tessia, seu som funciona como uma âncora emocional, lembrando-a de quem ela era antes da Arasaka, da Phantom e da guerra particular contra o próprio sangue.",
    },

    "Pistola “Phantom”": {
      imagem: "img/itens/Tessia/Pistola “Phantom”.png",
      descricao:
        "Uma pistola compacta, refinada e extremamente precisa, associada à identidade clandestina de Tessia como Phantom. Sua construção prioriza discrição, silêncio e eficiência, sendo ideal para operações onde uma única decisão precisa encerrar o conflito antes que ele se torne público. Mais do que uma arma, representa o lado de Tessia que aprendeu a sobreviver nas sombras — calculista, elegante e perigoso.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    "Cyberaudio Suite": {
      descricao:
        "Plataforma auditiva cibernética centralizada que serve como base para múltiplos módulos sensoriais e de comunicação. Otimiza captação, processamento e distribuição de áudio, funcionando como núcleo para implantes sonoros avançados.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
    },
    Skinwatch: {
      descricao:
        "Dispositivo cronológico subdérmico com interface visual discreta. Oferece acesso rápido a informações temporais e sincronização com sistemas pessoais ou corporativos, eliminando a necessidade de dispositivos externos visíveis.",
    },
    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },
    "Subdermal Pocket": {
      descricao:
        "Compartimento de armazenamento oculto sob a pele, selado por tecnologia dérmica sintética de alta discrição. Ideal para transporte seguro de itens sensíveis, documentos físicos ou dispositivos compactos.",
    },
    Techhair: {
      descricao:
        "Implante capilar sintético com emissão controlada de luz e cor. Desenvolvido para personalização estética avançada, identidade visual corporativa e expressão individual em ambientes urbanos de alta tecnologia.",
    },
    "Voice Stress Analyzer": {
      descricao:
        "Sistema auditivo analítico que avalia microvariações vocais em tempo real. Utilizado para análise comportamental, negociações sensíveis, entrevistas e interrogatórios corporativos.",
    },
  },
};
