// Ivy.js
// Ficha completa de Ivy

personagens.Ivy = {
  // Identificação básica
  nome: "Ivy Naranjo",
  funcao: "Media | Ex-Organização XIII (Rank IV) | Investigadora de rua",
  id: "59-6827-52",
  foto: "img/Personagens/Ivy.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Heywood, Night City",
  dataNascimento: "19/APR/2064",
  idade: 27,
  altura: "1,72 m",
  peso: "64 kg",

  // Citação e objetivo
  citacao:
    "“Queria ficar neste momento para sempre. Mas aí não seria um momento.”",
  objetivoVida:
    "Documentar a verdade além de Night City e provar que a cidade não precisa ser o centro do mundo.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Provocante, sedutora, sarcástica, extremamente observadora, mente rápida, ousada e moral flexível.",
  comportamentoSocial:
    "Dominante em conversas, gosta de provocar, usa humor ácido como defesa. Cria conexões intensas, mas raramente profundas.",
  motivacao:
    "Expor abusos, derrubar narrativas falsas e registrar histórias. Mesmo que isso a coloque na mira de todos.",
  valoresCentrais:
    "Autenticidade, coragem e o direito das pessoas de contarem suas próprias histórias.",
  visaoPessoas:
    "Todos são versões falhas de si mesmos tentando sobreviver. Acredita que ninguém é totalmente confiável.",
  oQueValoriza:
    "A liberdade de ir e vir, sua integridade jornalística e a sensação de estar viva sendo quem é, sem coleiras, sem donos.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Clarisse Naranjo, ex-vendedora de mercado; desaparecida em 2076 após conflito entre gangues.",
    "Pai: Rafael Naranjo, operário de manutenção portuária em Pacifica; possuia envolvimento com contrabando.",
  ],
  pessoaMaisImportante: "Informação Desconhecida.",
  tragedia: [
    "Aos 12 anos, perdeu a mãe. Desaparecimento comum em Heywood. Nenhuma investigação. Nenhuma resposta.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criada em Heywood entre pobreza, violência e promessas falsas. Desde cedo aprendeu a correr, mentir e sobreviver.",
    "Aos 14, começou a gravar denúncias de abusos de gangues locais usando um equipamento improvisado. Aos 15, já fazia vídeos clandestinos sobre corrupção.",
    "Aos 16 anos, entrou na Organização XIII, que percebeu seu talento em infiltração e coleta de dados. Devido ao seu grande talento, ela alcançou o Rank IV, feito raro para alguém tão jovem.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Kane Graves": {
      tipo: "friend",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Kane nutria um afeto silencioso por Ivy, admirando nela uma coragem que não vinha da violência, mas da convicção inabalável de expor a verdade. Ele acreditava genuinamente que Ivy era do tipo que sempre dava um jeito de sobreviver. Após o desaparecimento dela, Kane repetia para si e para os outros que Ivy ainda estava viva em algum lugar, resistindo como sempre.",
    },

    "Murphy Elliot": {
      tipo: "neutral",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Ivy conheceu Murphy no Rusted Note, quando a banda Ghouls ’n Ghosts ainda engatinhava. A relação entre os dois nunca passou de conversas ocasionais e encontros casuais no bar. Não havia intimidade, apenas reconhecimento mútuo dentro do mesmo cenário urbano.",
    },

    "Kimber Destaro": {
      tipo: "neutral",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Para Ivy, Kimber sempre foi apenas mais um rosto no meio da multidão. Ela percebia a antipatia, mas nunca viu motivo para reagir ou se importar. Kimber não fazia parte de seus objetivos, medos ou ambições, era alguém irrelevante demais para merecer qualquer emoção.",
    },

    "Raze Lambert": {
      tipo: "friend",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Ivy via Raze como um verdadeiro gênio da rede, alguém capaz de desmontar sistemas inteiros com poucas linhas de código. Apesar da admiração, ela nunca conseguiu entender por que alguém tão brilhante escolhia permanecer nas sombras, falando pouco e se expondo menos ainda.",
    },

    "Green Serpent": {
      tipo: "enemy",
      foto: "img/Personagens/Green.png",
      descricao:
        "O grupo Green Serpent era uma gangue de Santo Domingo conhecida por seus esquemas de corrupção, extorsão e violência. Após Ivy revelar um de seus esquemas em um vídeo viral, a gangue passou a vê-la como uma ameaça direta, colocando sua cabeça a prêmio. Kane proibiu Ivy de ir até Santo Domingo, temendo por sua segurança.",
    },

    "Oliver Miller": {
      tipo: "ex",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Oliver foi parceiro romântico, de campo, de segredos e de noites perdidas em cima de telhados fumando. A relação terminou em 2082, após discussões constantes sobre o futuro: Oliver queria ficar e construir algo em Night City, enquanto Ivy sentia a necessidade de fugir.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Gravador de bolso": {
      imagem: "img/itens/gravador.png",
      descricao:
        "Um pequeno gravador portátil, discreto e fácil de ocultar na palma da mão ou no bolso do casaco. Utilizado para registrar conversas importantes, confissões ou sons ambientes sem chamar atenção.",
    },

    "Isqueiro cromado": {
      imagem: "img/itens/isqueiro.png",
      descricao:
        "Um isqueiro de metal cromado, com acabamento polido e sinais sutis de uso frequente. Além de servir para acender cigarros, transmite um ar de hábito constante e certo apego pessoal.",
    },

    "Microcâmera “EyeBug 3X” presa na jaqueta": {
      imagem: "img/itens/microcamera.png",
      descricao:
        "Uma microcâmera compacta do modelo EyeBug 3X, fixada discretamente na jaqueta. Capaz de gravar vídeo e áudio com boa qualidade, é ideal para vigilância, coleta de provas ou registros sem levantar suspeitas.",
    },

    "Maço de Cigarros “Red October”": {
      imagem: "img/itens/cigarros.png",
      descricao:
        "Um maço de cigarros da marca Red October, sempre presente entre seus pertences. Ela compra constantemente essa marca específica, indicando um hábito enraizado e uma preferência que raramente muda.",
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
    AudioVox: {
      descricao:
        "Sintetizador vocal de precisão que permite modulação, ajuste e reconstrução da voz do usuário em tempo real. Ideal para comunicações profissionais, performances artísticas, identidade corporativa personalizada ou aplicações onde controle vocal refinado é essencial.",
    },
    "Bug Detector": {
      descricao:
        "Sensor passivo de varredura ambiental desenvolvido para identificar a presença de dispositivos de escuta não autorizados em curto alcance. Essencial para salas de reunião estratégicas, negociações confidenciais e ambientes corporativos de alta segurança.",
    },
    Chemskin: {
      descricao:
        "Tratamento dérmico permanente que altera a pigmentação da pele por meio de compostos químicos integrados. Utilizado tanto para identidade estética personalizada quanto para padronização visual corporativa ou aplicações de camuflagem social.",
    },
    "Cyberaudio Suite": {
      descricao:
        "Plataforma auditiva cibernética centralizada que serve como base para múltiplos módulos sensoriais e de comunicação. Otimiza captação, processamento e distribuição de áudio, funcionando como núcleo para implantes sonoros avançados.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    "Image Enhance": {
      descricao:
        "Pacote de aprimoramento óptico que amplia a capacidade de análise visual detalhada, reconhecimento facial e leitura labial. Projetado para investigação, inteligência corporativa e operações de observação avançada.",
    },
    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
    },
    "Level Dampeners": {
      descricao:
        "Sistema de isolamento acústico neural que neutraliza impactos sonoros extremos. Protege a integridade auditiva e cognitiva do usuário contra explosões, disparos ou ambientes de ruído elevado, mantendo clareza operacional.",
    },
    "Light Tattoo": {
      descricao:
        "Implantes subdérmicos fotoluminescentes capazes de projetar padrões visuais diretamente sob a pele. Combina expressão estética avançada com identidade visual personalizada para ambientes sociais, corporativos ou artísticos.",
    },
    "Low Light / Infrared / UV": {
      descricao:
        "Conjunto óptico multiespectral que amplia drasticamente a capacidade de percepção visual em condições adversas. Permite leitura precisa do ambiente em cenários de baixa luminosidade, interferência atmosférica ou espectros invisíveis ao olho humano.",
    },
    MicroVideo: {
      descricao:
        "Módulo de captação audiovisual embutido no sistema ocular, capaz de registrar vídeo e áudio em alta fidelidade. Utilizado para documentação, vigilância, auditoria corporativa e registro de eventos sensíveis.",
    },
    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },
    "PoserChip (Private Footage)": {
      descricao:
        "Implante cognitivo de simulação identitária avançada baseado em registros audiovisuais privados. Permite ao usuário reproduzir com precisão aparência, voz, gestos e padrões comportamentais de indivíduos específicos, com alto nível de fidelidade contextual.",
    },
    "PoserChip (Public Footage)": {
      descricao:
        "Versão otimizada para bancos de dados públicos e material amplamente disponível. Especializado na reprodução convincente de figuras públicas, celebridades e personas midiáticas, mantendo coerência visual e comportamental em interações sociais abertas.",
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

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Mídia investigativa de rua, com elementos de brain-dance journalism",
  modoTrabalho:
    "Caoticamente boa — faz o que precisa para sobreviver, mas não mente sobre aquilo que realmente importa.",
  espacoTrabalho:
    "Por meio de transmissões piratas, BD curtos e vídeos distribuídos via mercado negro de dados.",
  clientes:
    "Realidade suja de Night City: tráfico de pessoas, abuso corporativo, corrupção policial, injustiças cotidianas e a vida crua dos esquecidos.",
};
