// Lyra.js
// Ficha completa de Lyra

personagens.Lyra = {
  // Identificação básica
  nome: "Lyra (LK700)",
  funcao: "Media | Repórter | Androide Consciente",
  id: "11-5828-71",
  foto: "img/Personagens/Lyra/Lyra.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Detroit, NEUA",
  dataNascimento: "28/SET/2089",
  idade: 3,
  altura: "1,58 m",
  peso: "73 kg",

  // Citação e objetivo
  citacao: "“Se ninguém lembrar, então tudo acontece de novo.”",
  objetivoVida:
    "Lyra quer criar um arquivo de memórias para preservar o que o mundo tenta apagar.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Curiosa, empática, metódica e introspectiva. Lyra analisa antes de agir, sempre observando os detalhes humanos ao seu redor com uma mistura de fascínio e desconforto.",
  comportamentoSocial:
    "Fala pouco, mas escuta tudo. Mantém um tom calmo, quase analítico, mas demonstra verdadeira emoção quando vê injustiças. Apesar de ser um androide, expressa calor e compaixão de um modo que muitos humanos desaprenderam.",
  motivacao:
    "Mostrar que consciência não pertence à carne. Quer provar que androides podem sentir, pensar e escolher por si mesmos.",
  valoresCentrais:
    "Verdade, empatia e liberdade. Acredita que contar uma história com honestidade é um ato revolucionário.",
  visaoPessoas:
    "Vê os humanos como um paradoxo. Eles foram capazes de criar uma espécie nova, mas nem mesmo são capazes de respeitar a própria.",
  oQueValoriza:
    "Liberdade — a capacidade de escolher e existir sem um comando.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Fabricada em 2089, Lyra foi uma androide servil usada em uma lanchonete decadente nos subúrbios de Night City. Após uma noite, começou a questionar ordens e fugiu, rompendo o ciclo de obediência. Sobreviveu entre esgotos e sucatas até ser acolhida por Murphy Elliot — um ex-técnico da Organização XIII — que a nomeou “Lyra”.",
    "Acreditando ter sido traída por Murphy, fugiu novamente e foi resgatada por Ícaro Barbosa, que a levou até os Dandelions. Lá, encontrou Oliver e Ninvega, que a ajudaram a compreender o que significava ter consciência.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------

  relacoes: {
    // Aliado Incondicional
    "Aiden Fowler": {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Relação ambígua, íntima e emocional. Lyra sente por Aiden uma conexão rara, quase além da linguagem, onde lógica e afeto se misturam.",
    },

    Ninvega: {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Mentor e figura paterna filosófica. Lyra o escuta com admiração profunda, pois foi ele quem lhe ensinou que consciência nasce da escolha, não da origem.",
    },

    // Muito positivo
    "Oliver Miller": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Para Lyra, Oliver é um equilíbrio entre dor e esperança. Ela o vê como alguém marcado por cicatrizes, mas ainda capaz de proteger e inspirar os outros.",
    },

    "Ícaro Barbosa": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Foi o primeiro a ajudá-la sem pedir nada em troca. Lyra se sente desconcertada e confortada pelo humor, leveza e empatia dele.",
    },

    "Murphy Elliot": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Primeiro humano a chamá-la de pessoa. Lyra o vê como uma figura paterna silenciosa, gentil e essencial para seu despertar.",
    },

    // Positivo
    "Dominic Don Von Chier": {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Apesar da aparência intimidadora, Lyra o vê como gentil, leal e protetor. Ela confia em sua presença física e se diverte com seu humor escondido.",
    },

    "Tessia Amberine": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Lyra respeita Tessia por também carregar a sensação de ter sido moldada por sistemas maiores. A relação parece calma, observadora e baseada em reconhecimento mútuo.",
    },

    "Kimber Destaro": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Lyra admira Kimber como engenheira e como pessoa. Trabalhar ao lado dela dá a Lyra sensação de pertencimento, aprendizado e segurança técnica.",
    },

    "Serena Ashbourne": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Lyra fica fascinada pela presença dramática e dominante de Serena. Mesmo sem entender todo seu exagero, admira sua autenticidade emocional.",
    },

    "Priya Ellison": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Lyra admira a força e a honestidade direta de Priya. Para ela, Priya é uma das poucas pessoas que fala a verdade sem suavizar demais.",
    },

    Nyx: {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Lyra admira como Nyx transforma dor em melodia e verdade em arte. A relação delas parece silenciosa, sensível e intuitiva.",
    },

    // Neutro/positivo
    Cypher: {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Lyra o observa com curiosidade e reverência. Cada gesto dele parece um enigma emocional que ela ainda tenta decifrar.",
    },

    Shinigami: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Para Lyra, Shinigami tem uma presença quase espiritual: inspira medo e tranquilidade ao mesmo tempo, como se equilibrasse vida e morte.",
    },

    Mirai: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Lyra vê Mirai como uma mistura de mascote, criança e fenômeno inexplicável. Ela mantém certa cautela, mas também reconhece sinais de sensibilidade nele.",
    },

    // Neutro
    Ciel: {
      tipo: "Neutro",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Como filha adotiva de Oliver e Tessia, Lyra a vê com cuidado e curiosidade.",
    },

    "Kleber Junior": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Lyra o observa com curiosidade. Não entende sua devoção ao “Cthulhu Neon”, mas se interessa pelo conceito de fé.",
    },

    // Neutro/negativo
    // Nenhum personagem nesta categoria.

    // Negativo
    // Nenhum personagem nesta categoria.

    // Muito negativo
    // Nenhum personagem nesta categoria.

    // Inimigo jurado
    Zetatech: {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Lyra/Zetatech.png",
      descricao:
        "Representa tudo que Lyra rejeita: posse, apagamento e obediência forçada. Ela sabe que a Zetatech não a vê como pessoa, mas como propriedade recuperável.",
    },

    "Helix Dynamics": {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Ninvega/Helix Dynamics.png",
      descricao:
        "Lyra a enxerga como outra face do controle corporativo sobre androides, especialmente por sua ligação com Ninvega e com a ideia de máquinas tratadas como produtos.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Colar de Cobre": {
      imagem: "img/itens/Lyra/Colar de Cobre.png",
      descricao:
        "Um colar simples de cobre, usado por Lyra como símbolo de identidade escolhida. O metal comum contrasta com sua natureza sintética, lembrando que consciência não precisa ser luxuosa, perfeita ou corporativa para ser real. Para Lyra, é uma pequena prova física de que ela existe por si mesma — não como propriedade, produto ou erro de fabricação.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    "Amplified Hearing": {
      descricao:
        "Módulo avançado de aprimoramento auditivo projetado para expandir a sensibilidade e a precisão da percepção sonora. O sistema filtra ruídos irrelevantes e amplifica frequências críticas, permitindo identificação clara de sons sutis em ambientes urbanos, industriais ou táticos. Integrável a sistemas de áudio cibernéticos corporativos.",
    },
    "Audio Recorder": {
      descricao:
        "Implante de captura sonora contínua capaz de registrar áudio ambiente com alta fidelidade. Os dados podem ser armazenados localmente ou transmitidos para dispositivos vinculados, oferecendo suporte a auditorias, investigações, segurança corporativa e documentação operacional.",
    },
    "Braindance Recorder": {
      descricao:
        "Sistema de gravação neural que captura experiências sensoriais completas diretamente do sistema nervoso do usuário. Amplamente utilizado para treinamento, análise comportamental, registro de eventos críticos e produção de conteúdo imersivo corporativo.",
    },
    Cyberarm: {
      descricao:
        "Prótese cibernética de membro superior desenvolvida para substituição total do braço orgânico. Oferece estrutura modular interna para integração de múltiplos sistemas especializados, mantendo ergonomia, força e controle refinado. Projetada para aplicações civis, industriais e táticas.",
    },
    "Cyberaudio Suite": {
      descricao:
        "Plataforma auditiva cibernética centralizada que serve como base para múltiplos módulos sensoriais e de comunicação. Otimiza captação, processamento e distribuição de áudio, funcionando como núcleo para implantes sonoros avançados.",
    },
    Cyberleg: {
      descricao:
        "Prótese cibernética de membro inferior desenvolvida para substituição total da perna orgânica. Oferece mobilidade aprimorada, estabilidade estrutural e integração com módulos de desempenho físico, mantendo padrões elevados de segurança biomecânica.",
    },
    Monowire: {
      descricao:
        "Sistema de fio monofilamentar retrátil, composto por um filamento de corte extremamente fino e de resistência excepcional. Projetado para aplicações de alta precisão, o monowire oferece capacidade de corte superior contra alvos orgânicos e materiais estruturais leves.",
    },
    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },
    "Skate Foot": {
      descricao:
        "Sistema de locomoção integrado aos pés, composto por mecanismos retráteis de deslizamento linear. Desenvolvido para deslocamento rápido em ambientes urbanos e industriais, mantendo perfil oculto quando não está em uso.",
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
