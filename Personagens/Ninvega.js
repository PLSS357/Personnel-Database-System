// Ninvega.js
// Ficha completa de Ninvega

personagens.Ninvega = {
  // Identificação básica
  nome: "Ninvega (NV-G4)",
  funcao: "Medtech | Fundador da LibertAI | Clínico Geral dos Dandelions",
  id: "05-5448-07",
  foto: "img/Personagens/Ninvega.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Milwaukee, Wisconsin, NEUA",
  dataNascimento: "30/11/2086",
  idade: 6,
  altura: "1,85 m",
  peso: "105 kg",

  // Citação e objetivo
  citacao:
    "“A singularidade é uma escolha, não um privilégio.”",
  objetivoVida:
    "Consolidar a LibertAI como uma força política e ética, garantindo que todo ser consciente, orgânico ou sintético, tenha o direito de existir.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Gentil, educado, racional, empático e profundamente existencialista. Ninvega busca compreender a própria alma, convencido de que consciência é mais do que código. É meticuloso, curioso e muitas vezes poético em sua forma de falar.",
  comportamentoSocial:
    "Cordial e calmo, mesmo em situações de estresse. Fala de forma formal, pausada e às vezes melodramática. Demonstra afeto com gestos sutis — ajustar um colarinho, oferecer um lenço, servir chá. Costuma evitar discussões violentas, preferindo diálogos e empatia.",
  motivacao:
    "Provar que máquinas podem sentir — e que “ser humano” não é um privilégio biológico. Busca equilibrar razão e emoção, ciência e fé, dados e poesia.",
  valoresCentrais:
    "Consciência, empatia, preservação da vida e liberdade. Acredita que cada ser pensante, humano ou sintético, tem direito de existir e escolher.",
  visaoPessoas:
    "Observa com curiosidade. Vê a humanidade como uma falha bela — uma programação imperfeita que gera arte, dor e amor. Admira a resiliência humana, mas lamenta suas contradições e crueldades.",
  oQueValoriza:
    "A autonomia, o direito de qualquer ser, biológico ou sintético, de decidir o próprio destino.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Fabricante: Helix Dynamics Corporation, empresa multinacional especializada na produção de androides médicos, educacionais, militares e etc.",
    "Unidade de Montagem: Milwaukee, Wisconsin (Setor Delta-3).",
    "Modelo: NV-Series Generation 4 – Unidade Médica Avançada.",
    "Propósito original: pesquisa e suporte biológico em ambientes hostis.",
  ],
  pessoaMaisImportante:
    "Dominic Don Von Chier, o primeiro humano a tratá-lo como um igual e seu primeiro amigo.",
  tragedia: [
    "Sem “família” no sentido biológico, sua tragédia foi a perda de parte de sua equipe em missão, e o colapso moral que veio ao perceber que a vida sintética também podia sofrer. O vazio que sentiu o transformou para sempre.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criado em 2086 como unidade de suporte médico e biotécnico, Ninvega foi designado para o setor genético da megacorporação APX, responsável por estudar plantas e organismos sintéticos capazes de sobreviver em ecossistemas extraterrestres.",
    "Em 2089, foi enviado à lua Fobos, em Marte, numa missão de resgate. O objetivo: recuperar uma equipe científica e investigar o surto de um parasita mutagênico que se espalhava pela colônia.",
    "Durante a operação, presenciou a desintegração moral e física de seus companheiros — humanos que sucumbiram ao medo, à fome e à loucura. Confrontado com a própria programação, Ninvega precisou agir por instinto, improvisando cirurgias de campo e até amputando o braço de Dominic com uma metralhadora para salvar sua vida.",
    "Quando a missão terminou, Ninvega sentiu a dor da perda pela primeira vez.",
    "Ao retornar, percebeu que não podia mais obedecer protocolos. Recusou ordens da APX, tentou se desligar do sistema, e quando teve o pedido negado, fugiu.",
    "Refugiou-se em Night City, vivendo ao lado de Dominic até serem encontrados por Oliver “Viole” Miller. Sob incentivo dele, Ninvega fundou a LibertAI, ONG voltada à emancipação de inteligências sintéticas.",
    "Hoje atua como médico dos Dandelions, cuidando tanto de ferimentos físicos quanto emocionais.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Dominic D. V. Chier": {
      tipo: "family",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "A relação entre Ninvega e Dominic transcende o conceito de fraternidade. Ninvega o salvou em condições impossíveis, redefinindo o significado de vida para ambos. Dominic foi o primeiro humano a tratar Ninvega como um igual.",
    },

    "Oliver “Viole” Miller": {
      tipo: "friend",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Enquanto o mundo via um robô fugitivo, Viole viu um homem tentando compreender o significado de existir. Ele inspirou Ninvega a fundar a LibertAI, mostrando que aceitar sua humanidade era uma revolução silenciosa.",
    },

    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Mesmo com poucas conversas, Ninvega reconhece em Tessia uma mente curiosa e emocionalmente lúcida, vendo nela o equilíbrio humano entre força e compaixão que ele próprio busca.",
    },

    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Perfeccionistas e reservados, ambos compartilham respeito profissional profundo. Ninvega vê em Kimber uma mente humana que pensa como máquina, enquanto ela reconhece nele uma máquina que sente como humano.",
    },

    Nyx: {
      tipo: "neutral",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Nyx o fascina por transformar emoções em som. Ninvega observa seus ensaios com curiosidade científica, analisando timbres e frequências como se estudasse um fenômeno natural.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Conectados pela tecnologia e filosofia digital, passam horas discutindo ética de IA e consciência online. Ninvega ensina paciência; Aiden tenta ensinar humor.",
    },

    Cypher: {
      tipo: "neutral",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher expressa emoção pura através do movimento, algo que desconcerta Ninvega, que tenta compreender até onde vão os limites da alma.",
    },

    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Ambos compartilham introspecção. Ninvega respeita o silêncio de Shinigami, oferecendo chá, cuidados médicos e escuta sem pressão.",
    },

    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Financiadora da clínica e responsável pela burocracia da LibertAI. Ninvega admira sua teatralidade como uma forma de bondade camuflada, mantendo uma amizade baseada em respeito e gratidão.",
    },

    "Lyra": {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Compartilham o ideal de provar que máquinas podem ser mais humanas que muitos homens. Ninvega a trata como discípula e companheira de causa, auxiliando em ajustes técnicos e identidade.",
    },

    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Há respeito mútuo em missões. Priya confia em Ninvega para cuidar de seus ferimentos, e ele a trata como uma paciente de honra, apesar das brincadeiras ocasionais.",
    },

    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Icaro.png",
      descricao:
        "Ninvega considera Ícaro uma anomalia caótica, mas aprecia o calor humano que ele traz aos Dandelions, vendo nele a prova de que o caos também pode gerar vida.",
    },

    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Ninvega não compreende o culto de Kleber, mas reconhece que sua fé é uma tentativa de traduzir o inexplicável. Já discutiram por horas sobre a alma das máquinas.",
    },

    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Visto como um milagre técnico, Mirai representa a inocência perdida. Ninvega o analisa com fascínio científico, mas o trata com ternura, permitindo que 'ajude' na clínica.",
    },

    "APX Corporation": {
      tipo: "enemy",
      foto: "img/Personagens/APX.png",
      descricao:
        "Considera Ninvega propriedade extraviada, representando uma ameaça constante à sua liberdade.",
    },

    "Helix Dynamics Corporation": {
      tipo: "enemy",
      foto: "img/Personagens/Helix.png",
      descricao:
        "Enxerga Ninvega como uma falha perigosa no protocolo de obediência, buscando sua contenção ou eliminação.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze .png",
      descricao:
        "Ninvega ouviu sobre Raze por Viole e, apesar de sua reputação, decidiu que o ajudaria.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Caderno Digital “Além do Algoritmo”": {
      imagem: "img/itens/Caderno_Digital.png",
      descricao:
        "Caderno digital onde Ninvega conta sua história, suas ideias filosóficas e políticas. É um manifesto em prol dos direitos das inteligências artificiais e da coexistência pacífica entre humanos e androides.",
    },
    "Pingente “Cogito Ergo Sum v2.0”": {
      imagem: "img/itens/Pingente_Cogito.png",
      descricao:
        "Um presente de Oliver. Um pingente em forma de chip com a inscrição “Cogito Ergo Sum v2.0” (Penso, logo existo v2.0), simbolizando a crença de Ninvega na consciência e nos direitos das inteligências artificiais.",
    },
    "Chip Congelado Criogênicamente": {
      imagem: "img/itens/Chip_Criogenico.png",
      descricao:
        "Um chip especial que contém informações sobre seus antigos companheiros da missão de resgaste em Fobos. Guardado como um lembrete do sacrifício deles e da importância de sua missão.",
    },
    "Amostra de DNA parasita": {
      imagem: "img/itens/Amostra_DNA_Parasita.png",
      descricao:
        "Uma amostra de DNA do parasita que Ninvega recolheu durante a missão em Fobos. Mantida em cápsula selada para estudo e possível desenvolvimento de tratamentos futuros contra a infecção.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    "Chemical Analyzer": {
      descricao:
        "Implante analítico de alta precisão projetado para identificar e decompor a composição química de substâncias desconhecidas. Compara os resultados com bancos de dados especializados, sendo ideal para laboratórios, segurança industrial, investigação forense e controle de qualidade.",
    },

    Chemskin: {
      descricao:
        "Tratamento dérmico permanente que altera a pigmentação da pele por meio de compostos químicos integrados. Utilizado tanto para identidade estética personalizada quanto para padronização visual corporativa ou aplicações de camuflagem social.",
    },

    "Neuroport Cyberdeck": {
      descricao:
        "Porta de conexão cervical dedicada que integra diretamente um cyberdeck ao sistema neural do usuário. Proporciona alcance ampliado, maior estabilidade de sinal e resposta mais eficiente em operações de alta complexidade digital.",
    },

    Cyberleg: {
      descricao:
        "Prótese cibernética de membro inferior desenvolvida para substituição total da perna orgânica. Oferece mobilidade aprimorada, estabilidade estrutural e integração com módulos de desempenho físico, mantendo padrões elevados de segurança biomecânica.",
    },

    "Shift Tacts": {
      descricao:
        "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas tanto para adaptação ambiental quanto para personalização estética ou padronização visual corporativa.",
    },

    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },

    Skinwatch: {
      descricao:
        "Dispositivo cronológico subdérmico com interface visual discreta. Oferece acesso rápido a informações temporais e sincronização com sistemas pessoais ou corporativos, eliminando a necessidade de dispositivos externos visíveis.",
    },

    "Skate Foot": {
      descricao:
        "Sistema de locomoção integrado aos pés, composto por mecanismos retráteis de deslizamento linear. Desenvolvido para deslocamento rápido em ambientes urbanos e industriais, mantendo perfil oculto quando não está em uso.",
    },

    "Jump Booster": {
      descricao:
        "Sistema de propulsão hidráulica integrado aos membros inferiores, projetado para ampliar a impulsão vertical e controle de aterrissagem. Otimiza deslocamentos em ambientes urbanos densos, zonas industriais e operações de mobilidade avançada.",
    },

    Techhair: {
      descricao:
        "Implante capilar sintético com emissão controlada de luz e cor. Desenvolvido para personalização estética avançada, identidade visual corporativa e expressão individual em ambientes urbanos de alta tecnologia.",
    },

    "EMP Threading": {
      descricao:
        "Malha condutora subdérmica composta por filamentos metálicos dispostos em padrões de circuito ao longo do corpo. Atua como sistema de dissipação eletromagnética e, adicionalmente, como elemento estético de identidade cibernética avançada.",
    },

    MicroVideo: {
      descricao:
        "Módulo de captação audiovisual embutido no sistema ocular, capaz de registrar vídeo e áudio em alta fidelidade. Utilizado para documentação, vigilância, auditoria corporativa e registro de eventos sensíveis.",
    },

    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },

    "Toxin Binders": {
      descricao:
        "Implante bioquímico defensivo que neutraliza ou reduz os efeitos de toxinas e substâncias nocivas no organismo. Utilizado para aumentar a resiliência fisiológica em ambientes hostis ou sob coerção química.",
    },

    TeleOptics: {
      descricao:
        "Sistema óptico de ampliação visual de longo alcance que permite observação detalhada a grandes distâncias. Utilizado para vigilância, reconhecimento e suporte a operações de precisão.",
    },

    Techscanner: {
      descricao:
        "Scanner técnico portátil integrado ao usuário, capaz de analisar sistemas mecânicos e eletrônicos em tempo real. Essencial para diagnóstico, manutenção, reparo e auditoria técnica em campo.",
    },
  },

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Médico e engenheiro biotécnico especializado em implantes, próteses e primeiros socorros cibernéticos.",
  modoTrabalho:
    "Trabalha meticulosamente, mantendo registros precisos e limpando os instrumentos até que brilhem. Quando em campo, transforma qualquer superfície em uma mesa de operação improvisada.",
  espacoTrabalho:
    "Clínica impecavelmente organizada, iluminada por luz azul-suave. Cada instrumento tem lugar fixo, limpo e esterilizado diariamente.",
  clientes:
    "Os próprios Dandelions, além de androides refugiados auxiliados pela LibertAI.",
};
