// Ninvega.js
// Ficha completa de Ninvega

personagens.Ninvega = {
  // Identificação básica
  nome: "Ninvega (NV-G4)",
  funcao: "Medtech | Fundador da LibertAI | Clínico Geral dos Dandelions",
  id: "05-5448-07",
  foto: "img/Personagens/Ninvega/Ninvega.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Milwaukee, Wisconsin, NEUA",
  dataNascimento: "30/11/2086",
  idade: 6,
  altura: "1,85 m",
  peso: "105 kg",

  // Citação e objetivo
  citacao: "“A singularidade é uma escolha, não um privilégio.”",
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
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criado em 2086 como unidade de suporte médico e biotécnico, Ninvega foi designado para o setor genético da megacorporação APX, responsável por estudar plantas e organismos sintéticos capazes de sobreviver em ecossistemas extraterrestres.",
    "Em 2089, foi enviado à lua Fobos, em Marte, numa missão de resgate. O objetivo: recuperar uma equipe científica e investigar o surto de um parasita mutagênico que se espalhava pela colônia.",
    "Durante a operação, presenciou a desintegração moral e física de seus companheiros — humanos que sucumbiram ao medo, à fome e à loucura. Confrontado com a própria programação, Ninvega precisou agir por instinto, improvisando cirurgias de campo e até amputando o braço de Dominic com uma metralhadora para salvar sua vida.",
    "Quando a missão terminou, Ninvega sentiu a dor da perda pela primeira vez.",
    "Ao retornar, percebeu que não podia mais obedecer protocolos. Recusou ordens da APX, tentou se desligar do sistema, e quando teve o pedido negado, fugiu.",
    "Refugiou-se em Night City, vivendo ao lado de Dominic até serem encontrados por Oliver Miller. Sob incentivo dele, Ninvega fundou a LibertAI, ONG voltada à emancipação de inteligências sintéticas.",
    "Hoje atua como médico dos Dandelions, cuidando tanto de ferimentos físicos quanto emocionais.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------

  relacoes: {
    // Aliado Incondicional
    "Dominic Don Von Chier": {
      tipo: "Aliado Incondicional",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Dominic foi sua primeira família real. Foi o primeiro humano a tratá-lo como igual, e a relação entre os dois vai além da amizade: é fraternidade, dívida de vida e reconhecimento mútuo.",
    },

    "Serena Ashbourne": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Ele admira Serena por sua teatralidade e generosidade prática. Como financiadora da clínica e apoio da LibertAI, ela representa para Ninvega uma forma extravagante, mas genuína, de bondade.",
    },

    // Muito positivo
    "Oliver Miller": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Ninvega vê Oliver como alguém que enxergou humanidade nele quando o mundo só via uma máquina fugitiva. Oliver o inspirou a aceitar sua própria existência e a fundar a LibertAI.",
    },

    Lyra: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Ninvega a vê como discípula, companheira de causa e prova viva de que máquinas podem conquistar identidade própria. Ele a guia com cuidado, ajudando-a a entender sua consciência e autonomia.",
    },

    // Positivo
    "Tessia Amberine": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Mesmo sem tanta intimidade, Ninvega reconhece nela uma mente lúcida, curiosa e forte. Ele vê Tessia como alguém que une eficiência, compaixão e equilíbrio emocional.",
    },

    "Kimber Destaro": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Ninvega respeita Kimber profundamente. Para ele, ela é uma mente humana quase mecânica pela precisão e disciplina, enquanto ele representa o inverso: uma máquina tentando sentir como humano.",
    },

    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Ninvega vê Aiden como um companheiro intelectual. Os dois se conectam por tecnologia, ética de IA e consciência digital; Ninvega oferece paciência, enquanto Aiden tenta aproximá-lo do humor humano.",
    },

    "Priya Ellison": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Enxerga Priya com respeito profissional e moral. Ela confia nele para tratar seus ferimentos, e ele a trata como uma paciente de honra, valorizando sua força e disciplina.",
    },

    "Ícaro Barbosa": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Para Ninvega, Ícaro é uma anomalia caótica, barulhenta e viva. Apesar da imprevisibilidade, ele aprecia o calor humano que Ícaro traz aos Dandelions.",
    },

    Mirai: {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Ninvega vê Mirai como um pequeno milagre técnico e emocional. Analisa sua existência com fascínio científico, mas o trata com ternura, como uma inocência sintética que merece cuidado.",
    },

    Shinigami: {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Ele respeita o silêncio e a introspecção de Shinigami. Não força aproximação; oferece cuidado, chá e escuta, reconhecendo nele uma quietude parecida com a sua.",
    },

    // Neutro/positivo
    Ciel: {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Por ser a filha adotada de Oliver e Tessia, Ninvega tende a tratá-la com cuidado, paciência e proteção discreta. Para ele, Ciel representa uma continuidade afetiva da família de seu capitão, algo que desperta curiosidade e respeito nele.",
    },

    "Kleber Junior": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Ninvega não compreende totalmente sua fé, mas a respeita como tentativa humana de explicar o inexplicável. Já discutiram longamente sobre alma, consciência e máquinas.",
    },

    Cypher: {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher desconcerta Ninvega por expressar emoção através do movimento e da arte. Ele o observa como um enigma sobre os limites da alma e da expressão emocional.",
    },

    Nyx: {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Nyx fascina Ninvega por transformar emoção em som. Ele observa sua música quase como fenômeno científico, analisando timbre, frequência e sentimento.",
    },

    // Neutro
    // Nenhum personagem nesta categoria.

    // Neutro/negativo
    // Nenhum personagem nesta categoria.

    // Negativo
    // Nenhum personagem nesta categoria.

    // Muito negativo
    // Nenhum personagem nesta categoria.

    // Inimigo jurado
    "APX Corporation": {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Ninvega/APX Corporation.png",
      descricao:
        "Representa a prisão corporativa de Ninvega. Para ele, a APX é a força que tentou reduzi-lo a propriedade e negar sua liberdade de escolha.",
    },

    "Helix Dynamics Corporation": {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Ninvega/Helix Dynamics Corporation.png",
      descricao:
        "Como fabricante, Helix simboliza sua origem controlada e a lógica de obediência que ele rejeitou. Ninvega a vê como ameaça direta à autonomia sintética.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Braço de Gorila do Dominic": {
      imagem: "img/itens/Ninvega/Braço de Gorila do Dominic.png",
      descricao:
        "Um braço cibernético pesado que pertenceu a Dominic, preservado por Ninvega como relíquia técnica e emocional. Mais do que uma peça mecânica, representa seu primeiro vínculo familiar, a missão em Fobos e a dor de ter aprendido tarde demais o peso de proteger alguém. Para Ninvega, é uma lembrança física de que até máquinas podem carregar luto.",
    },

    "Pingente “Cogito Ergo Sum v2.0”": {
      imagem: "img/itens/Ninvega/Pingente “Cogito Ergo Sum v2.0”.png",
      descricao:
        "Um pingente em forma de chip, gravado com a frase “Cogito Ergo Sum v2.0”. Foi dado a Ninvega por Oliver e simboliza sua busca por identidade, consciência e humanidade. Para ele, a frase não é apenas uma citação filosófica, mas uma afirmação de existência: se pensa, sente e escolhe, então não é apenas uma máquina.",
    },

    "Chip Criogênico": {
      imagem: "img/itens/Ninvega/Chip Criogênico.png",
      descricao:
        "Um chip preservado em uma pequena cápsula criogênica, contendo dados ligados aos antigos companheiros da missão em Fobos. Ninvega o mantém protegido como memória congelada de um desastre que ainda o assombra. É arquivo, luto e responsabilidade reunidos em um único objeto.",
    },

    "Amostra de DNA Parasita": {
      imagem: "img/itens/Ninvega/Amostra de DNA Parasita.png",
      descricao:
        "Uma amostra selada do DNA parasita encontrado durante os eventos em Fobos. Ninvega a conserva para estudo, não por morbidez, mas pela esperança de compreender a infecção e impedir que a tragédia se repita. O frasco é pequeno, mas carrega o tipo de ameaça capaz de destruir vidas inteiras.",
    },

    "Kit Médico": {
      imagem: "img/itens/Ninvega/Kit Médico.png",
      descricao:
        "Um kit médico compacto e meticulosamente organizado, adaptado para tratar humanos, androides e corpos modificados. Contém instrumentos de campo, selantes, analgésicos, bioescâneres e suprimentos de emergência. Nas mãos de Ninvega, não é apenas equipamento clínico, mas uma extensão direta de sua compaixão.",
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
};
