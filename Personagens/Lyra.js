// Lyra.js
// Ficha completa de Lyra

personagens.Lyra = {
  // Identificação básica
  nome: "Lyra (LK700)",
  funcao: "Media | Repórter | Androide Consciente",
  id: "11-5828-71",
  foto: "img/Personagens/Lyra.png",
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
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Criada por uma subsidiária da Zetatech, responsável pelo modelo LK700. Nunca teve “pais”, mas considera Ninvega uma figura paterna filosófica e Ícaro um irmão improvável.",
  ],
  pessoaMaisImportante:
    "Ninvega (NV-G4) — Deu a ela um propósito novo e que ela deseja seguir.",
  tragedia: [
    "Sua tragédia não foi perder alguém, mas perceber que nunca teve o direito de ser alguém.",
    "O instante em que viu o reflexo e se reconheceu marcou o nascimento de uma alma — e o fim da obediência.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Fabricada em 2089,  Lyra foi uma androide servil usada em uma lanchonete decadente nos subúrbios de Night City. Após uma noite, começou a questionar ordens e fugiu, rompendo o ciclo de obediência. Sobreviveu entre esgotos e sucatas até ser acolhida por Murphy Elliot — um ex-técnico da Organização XIII — que a nomeou “Lyra”.",
    "Acreditando ter sido traída por Murphy, fugiu novamente e foi resgatada por Ícaro Barbosa, que a levou até os Dandelions. Lá, encontrou Viole e Ninvega, que a ajudaram a compreender o que significava ter consciência.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Mentor que lhe deu propósito. Foi quem a ensinou que consciência não depende de origem, mas de escolha. Lyra o escuta com atenção quase devocional, fascinada por sua sabedoria e serenidade.",
    },
    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Apesar da aparência intimidante, Lyra o enxerga como alguém gentil e protetor. Ela aprecia sua lealdade e se diverte com o humor peculiar que ele esconde.",
    },
    "Oliver “Viole” Miller": {
      tipo: "friend",
      foto: "img/Personagens/Viole.png",
      descricao:
        "Ponto de equilíbrio entre a dor e a esperança. Lyra o vê como um homem marcado por cicatrizes físicas e emocionais, o que a inspira. Ainda assim, não entende seu amor por cachorro-quente.",
    },
    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Lyra a admira como engenheira e como pessoa. Trabalhar ao lado de Kimber lhe dá senso de pertencimento e constante aprendizado.",
    },
    Cypher: {
      tipo: "neutral",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Observado com curiosidade e reverência. Cada gesto de Cypher parece revelar um enigma que Lyra ainda não consegue desvendar.",
    },
    Nyx: {
      tipo: "friend",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Lyra admira a forma como Nyx transforma dor em melodia e verdade em arte. Compartilham silêncios e olhares que dizem mais que palavras.",
    },
    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Figura quase espiritual para Lyra. Sua presença inspira medo e tranquilidade ao mesmo tempo, como um equilíbrio entre vida e morte.",
    },
    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Lyra é fascinada por sua presença dominante e dramática. Mesmo sem compreender totalmente seu jeito extravagante, a admira por nunca esconder o que sente.",
    },
    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Admirada por sua força e honestidade direta. Priya é uma das poucas pessoas que não suaviza a verdade ao falar.",
    },
    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Icaro.png",
      descricao:
        "Foi o primeiro a estender a mão a Lyra sem pedir nada em troca. Sua leveza, humor e empatia a desconcertam e confortam.",
    },
    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Lyra observa Kleber com curiosidade. Não compreende sua devoção ao “Cthulhu Neon”, mas o escuta com atenção, intrigada pelo conceito de fé.",
    },
    Mirai: {
      tipo: "neutral",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Uma mistura de mascote, criança e fenômeno inexplicável. Lyra evita se aproximar por temer o que se esconde sob a carcaça fofa de metal.",
    },
    "Murphy Elliot": {
      tipo: "family",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Primeiro humano a chamá-la de pessoa. Hoje, Lyra o vê como uma figura paterna silenciosa e gentil, marcada por culpa, mas essencial em seu despertar.",
    },
    "Aiden “Wisp” Fowler": {
      tipo: "romantic",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Relação ambígua marcada por ternura, admiração e curiosidade emocional. Lyra sente por Aiden uma conexão que transcende a linguagem, refletindo a luta entre lógica e emoção.",
    },
    Zetatech: {
      tipo: "enemy",
      foto: "img/Personagens/Zetatech.png",
      descricao:
        "Buscam recuperar seu código-fonte e apagar sua consciência, tratando Lyra apenas como propriedade.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    colarDeCobre: {
      imagem: "img/itens/colar_cobre.png",
      descricao:
        "Um colar feito de fios de cobre trançados à mão, com marcas sutis de oxidação que denunciam o tempo e o cuidado em sua confecção. Foi um presente de Ícaro, carregando não apenas valor emocional, mas também simbolizando confiança e um vínculo difícil de quebrar. Quando usado, o metal parece aquecer levemente em contato com a pele.",
    },

    lentesHUD: {
      imagem: "img/itens/lentes_hud.png",
      descricao:
        "Lentes internas de alta tecnologia integradas diretamente aos olhos do usuário. Projetam um HUD holográfico translúcido com informações em tempo real, como leitura de dados, marcação de alvos e mapas. Possuem ainda um sistema de gravação ocular contínua, capaz de registrar exatamente o que o usuário vê, incluindo sobreposições digitais.",
    },

    comunicadorDisfarçado: {
      imagem: "img/itens/comunicador_broche.png",
      descricao:
        "Um pequeno comunicador preso à gola da jaqueta, habilmente disfarçado como um broche decorativo. Permite transmissões criptografadas de curta e média distância, ativadas por toque ou comando vocal quase imperceptível. Seu design discreto o torna ideal para operações onde chamar atenção pode ser fatal.",
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
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho: "Jornalismo independente e documental.",
  modoTrabalho:
    "Transmissões cifradas pela rede, operadas em conjunto com Aiden. Suas reportagens se espalham em fóruns, chips piratas e transmissões de rádio livres.",
  espacoTrabalho: "Fóruns, redes sociais ou blogs.",
  clientes: "Qualquer portal que puder espalhar notícias.",
};
