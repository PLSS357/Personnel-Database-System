// Ivy.js
// Ficha completa de Ivy

personagens.Ivy = {
  // Identificação básica
  nome: "Ivy Naranjo",
  funcao: "Mídia | Ex-Organização XIII (Rank V) | Investigadora de rua",
  id: "59-6827-52",
  foto: "img/Personagens/Ivy/Ivy Naranjo.png",
  ativo: null, // (true = ativo, false = inativo, null = desconhecido)

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
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criada em Heywood entre pobreza, violência e promessas falsas. Desde cedo aprendeu a correr, mentir e sobreviver.",
    "Aos 14, começou a gravar denúncias de abusos de gangues locais usando um equipamento improvisado. Aos 15, já fazia vídeos clandestinos sobre corrupção.",
    "Aos 16 anos, entrou na Organização XIII, que percebeu seu talento em infiltração e coleta de dados. Devido ao seu grande talento, ela alcançou o Rank V, feito raro para alguém tão jovem.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------

  relacoes: {
    // Aliado Incondicional
    "Kane Graves": {
      tipo: "Aliado Incondicional",
      status: "Morto",
      foto: "img/Personagens/Kane/Kane Graves.png",
      descricao:
        "Ivy via Kane como alguém sólido e protetor. Ele acreditava nela, respeitava sua coragem e, depois que ela se envolveu com Oliver, passou a tratá-la quase como família.",
    },

    // Muito positivo
    "Clarisse Naranjo": {
      tipo: "Muito positivo",
      status: "Desaparecida",
      foto: "img/Personagens/Ivy/Clarisse Naranjo.png",
      descricao:
        "Ex-vendedora de mercado, desaparecida em 2076 após conflito entre gangues. Sua perda marcou Ivy ainda criança e ficou sem investigação ou resposta.",
    },

    // Positivo
    // Nenhum personagem nesta categoria.

    // Neutro/positivo
    "Rafael Naranjo": {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Ivy/Rafael Naranjo.png",
      descricao:
        "Pai de Ivy, operário de manutenção portuária em Pacifica, com envolvimento em contrabando. Pela visão de Ivy, seu pai era alguém marcado pelas necessidades da vida.",
    },

    // Neutro
    "Murphy Elliot": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Conhecido do Rusted Note. Para Ivy, Murphy era parte do mesmo cenário urbano, mas sem intimidade real. Apenas conversas ocasionais e reconhecimento mútuo.",
    },

    "Raze Lambert": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Ivy via Raze como um gênio da rede, brilhante e perigoso no silêncio. Admirava sua capacidade, mas não entendia por que ele era tão fechado.",
    },

    // Neutro/negativo
    "Kimber Destaro": {
      tipo: "Neutro/negativo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Ivy percebia a antipatia de Kimber, mas não ligava. Para ela, Kimber era só mais um rosto na multidão, alguém irrelevante demais para provocar reação.",
    },

    "Oliver Miller": {
      tipo: "Neutro/negativo",
      status: "Vivo",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Foi parceiro de amor, campo e segredos. A relação terminou com uma discussão, porque Oliver queria permanecer em Night City, enquanto Ivy sentia necessidade de fugir e buscar outro futuro.",
    },

    // Negativo
    // Nenhum personagem nesta categoria.

    // Muito negativo
    // Nenhum personagem nesta categoria.

    // Inimigo jurado
    "Green Serpent": {
      tipo: "Inimigo jurado",
      status: "Desmantelado",
      foto: "img/Personagens/Ivy/Green Serpent.png",
      descricao:
        "Gangue de Santo Domingo rival da Organização XIII. Depois que Ivy expôs um esquema deles em vídeo, passaram a vê-la como ameaça direta e colocaram sua cabeça a prêmio.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Gravador de Bolso": {
      imagem: "img/itens/Ivy/Gravador de Bolso.png",
      descricao:
        "Um pequeno gravador portátil, discreto o bastante para desaparecer na palma da mão ou no bolso do casaco. Ivy o usa para capturar confissões, conversas suspeitas, sons ambientes e verdades ditas quando as pessoas acreditam que ninguém está ouvindo. Para ela, é uma arma silenciosa: menos letal que uma pistola, mas muitas vezes mais perigosa.",
    },

    "Microcâmera EyeBug": {
      imagem: "img/itens/Ivy/Microcâmera EyeBug.png",
      descricao:
        "Uma microcâmera compacta, futurista e quase invisível, projetada para se disfarçar como um acessório comum de roupa. A EyeBug registra áudio e vídeo com extrema discrição, servindo como testemunha silenciosa nas investigações de Ivy. Fria, precisa e incorruptível, é o tipo de ferramenta em que ela confia mais do que em qualquer informante.",
    },

    "Isqueiro Cromado": {
      imagem: "img/itens/Ivy/Isqueiro Cromado.png",
      descricao:
        "Um isqueiro de metal cromado, elegante e marcado por pequenos arranhões de uso constante. Ivy costuma girá-lo entre os dedos antes de fazer perguntas perigosas, acender um cigarro ou tomar uma decisão ruim de propósito. Mais do que um acessório, tornou-se parte de sua postura: fria, provocadora e sempre prestes a colocar fogo em alguma verdade escondida.",
    },

    "Dossiê Clarisse": {
      imagem: "img/itens/Ivy/Dossiê Clarisse.png",
      descricao:
        "Um conjunto de arquivos, fotos, recortes, depoimentos e anotações sobre Clarisse Naranjo. O dossiê representa o ponto em que a investigação de Ivy deixou de ser apenas trabalho e se tornou uma obsessão pessoal. Cada página guarda uma pergunta sem resposta, uma pista incompleta ou uma prova de que alguém poderoso se esforçou demais para apagar Clarisse da história.",
    },

    Pistola: {
      imagem: "img/itens/Ivy/Pistola.png",
      descricao:
        "Uma pistola compacta, discreta e confiável, carregada por Ivy como último recurso. Ela não gosta de depender dela, preferindo palavras, chantagem, provas e manipulação, mas sabe que Night City raramente recompensa quem anda desarmado. Para Ivy, a pistola não é símbolo de poder, e sim de sobrevivência: uma garantia amarga de que ela poderá sair viva para contar a verdade.",
    },

    "Maço Cigarros Red October": {
      imagem: "img/itens/Ivy/Maço Cigarros Red October.png",
      descricao:
        "Um maço de cigarros Red October, presença constante nos bolsos de Ivy. O cheiro forte, o papel amassado e o gesto repetido de acender um cigarro combinam com sua imagem de repórter de rua: cansada, provocante e autodestrutiva. Cada cigarro parece marcar uma pausa entre uma mentira descoberta e a próxima pergunta que ela não deveria fazer.",
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
};
