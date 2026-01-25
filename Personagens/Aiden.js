// Aiden.js
// Ficha completa de Aiden Fowler

personagens.aiden = {
  // Identificação básica
  nome: 'Aiden "Wisp" Fowler',
  funcao:
    "Netrunner | Jornalista de Blog | Ex-Organização XIII (Rank X)",
  id: "25-9538-93",
  foto: "img/Personagens/Aiden.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Seattle, Washington, NEUA",
  dataNascimento: "5/DEC/2067",
  idade: 24,
  altura: "1,76 m",
  peso: "52 kg",

  // Citação e objetivo
  citacao: "“Não sou um herói. Só odeio ver idiotas ganhando.”",
  objetivoVida:
    "Finalizar o Projeto EDEN: uma rede global de conexão mental, livre de controle corporativo, onde as pessoas possam se encontrar, negociar, amar e existir sem fronteiras. Ele acredita que, se conseguir torná-lo acessível a todos, estará a um passo de libertar o mundo da manipulação informacional.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Irônico, observador e inquieto. A mente de Aiden raramente descansa — sempre processando múltiplos fluxos de pensamento, ideias e conspirações. É introspectivo, mas expressivo quando fala de algo que ama. Mantém uma fachada cínica, escondendo um coração leal e idealista.",
  comportamentoSocial:
    "Evita multidões e ambientes barulhentos; prefere conversas longas em silêncio digital. É o tipo que “fala pouco, mas deixa marcas”. Com os Dandelions, se sente à vontade o suficiente para soltar comentários sarcásticos e rir de si mesmo.",
  motivacao:
    "Liberdade intelectual. Quer um mundo onde o conhecimento circule sem controle — um ciberespaço livre, fora das mãos corporativas.",
  valoresCentrais:
    "Autenticidade, liberdade de informação e lealdade a quem compartilha sua visão de um mundo sem muros.",
  visaoPessoas:
    "“As pessoas são previsíveis… até o momento em que decidem não ser.” — Admira quem quebra padrões, quem é autêntico o bastante para ser contraditório.",
  oQueValoriza:
    "Liberdade de pensamento e integridade. Ele odeia a ignorância proposital — acredita que entender o mundo é a forma mais pura de resistência.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Clara Fowler, professora de linguística; responsável por sua paixão por linguagem e significados ocultos.",
    "Pai: Evan Fowler, técnico em segurança de dados corporativos; homem metódico, mas bondoso, que ensinou Aiden a respeitar o poder da informação.",
    "Irmã gêmea: Zoe Fowler, estudante de robótica, mantém contato constante com ele por mensagens, algumas vezes criptografadas com um código que eles fizeram na infância.",
    "Irmã mais velha: Miriam Fowler, advogada em San Francisco, casada, raramente em contato mas sempre orgulhosa do “caçula genial”",
    "A família o ama, mas não entende sua vida em Night City. Eles acham que o DeadZone é um blog de música.",
  ],
  pessoaMaisImportante:
    "Lyra — sua melhor amiga, confidente e, talvez, algo mais. Ela é a única que o entende completamente — tanto no mundo físico quanto dentro da rede.",
  tragedia: [
    "Durante seu tempo na Organização XIII, Aiden se apaixonou por Ashley Crawford, uma jovem artista e codificadora. Ela foi sequestrada pela gangue rival, os Laminares.",
    "Aiden a resgatou, mas ela estava profundamente traumatizada. Desesperado, tentou usar um programa experimental de supressão neural para apagar as memórias da dor.",
    "Falhou.",
    "Ashley cometeu suicídio algumas semanas depois.",
    "Desde então, Aiden é assombrado por seu fantasma digital, uma projeção residual que ele ocasionalmente encontra no ciberespaço — um eco de código que o chama pelo nome.",
    "Aiden nunca conseguiu apagá-la… nem tem coragem de tentar.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Cresceu fascinado por redes, sistemas e enigmas. Aprendeu a hackear por curiosidade e, aos 16, já invadia servidores escolares só para corrigir os erros dos professores.",
    "Aos 18 anos, Aiden se mudou para Night City para cursar engenharia de sistemas e segurança de dados. Fascinado pela figura lendária de Alt Cunningham, passou a estudar redes neurais e arquitetura de consciência digital. Durante os estudos, entrou na Organização XIII, onde conheceu Kimber Destaro, Kane Graves e Raze Lambert.",
    "Kimber foi a primeira a tratá-lo como igual, vendo nele não só um prodígio, mas alguém genuinamente comprometido com a causa. Kane tornou-se um modelo de liderança — e sua morte marcou Aiden profundamente.",
    "Após a queda da Organização XIII, Aiden fundou o DeadZone, um blog de denúncias e jornalismo hacker que expõe escândalos corporativos. Com o tempo, se tornou um dos Netrunners mais imprevisíveis da cidade.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    Lyra: {
      tipo: "romantic",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Sua melhor amiga e talvez algo mais. Possuem amizade profunda e tensão romântica evidente. Aiden a admira mais do que admite — e teme que o que sente destrua o equilíbrio entre eles.",
    },
    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Mentora e amiga de longa data. Ela foi a primeira a enxergá-lo como igual, e Aiden a respeita profundamente. Trabalham juntos em tecnologias de conexão neural seguras.",
    },
    "Oliver Miller": {
      tipo: "friend",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "O vê como um veterano e uma inspiração. Admirava sua antiga banda, Ghouls 'n Ghosts, e a filosofia de rebeldia sincera que ela representava.",
    },
    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Aiden e Tessia não começaram como amigos. Mas com o tempo, os dois descobriram que falavam a mesma língua: a da eficiência e da lógica. Agora, ele a respeita como uma aliada valiosa, apesar de sempre a chhamar de namorada do chefe.",
    },
    Nyx: {
      tipo: "neutral",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Respeita sua intensidade e talento; analisa suas letras em busca de significados ocultos. Nunca teve uma conversa profunda com ela, mas admira sua autenticidade.",
    },
    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Aprecia sua arte, mas o considera “um bug ambulante” — ainda assim, gosta do cara, mesmo sem entender metade do que ele “diz”.",
    },
    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Teme e respeita; o vê como um fantasma da disciplina. Nunca se aproximou muito dele, mas sabe que Shinigami observa de longe.",
    },
    "Serena Ashbourne": {
      tipo: "neutral",
      foto: "img/Personagens/Serena.png",
      descricao:
        "A considera divertida e imprevisível, mas acha bizarro o fato dela gastar com coisas sem sentido.",
    },
    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Companheiro intelectual; admira sua consciência e sensibilidade sintética. Aiden costuma trocar ideias com ele sobre ética e o futuro da IA na rede.",
    },
    "Dominic D. V. Chier": {
      tipo: "neutral",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Tem vezes que não entende o que ele quer dizer, graças ao seu forte sotaque francês. Aiden se questiona o motivo de Dominic ser tão fascinado por seus braços de gorila.",
    },
    "Priya Ellison": {
      tipo: "neutral",
      foto: "img/Personagens/Priya.png",
      descricao:
        "A vê como um pilar moral; gosta da franqueza dela. Aiden vê nela um senso de justiça inabalável, mesmo que às vezes isso a coloque em conflito com suas próprias crenças.",
    },
    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Aiden o acha caótico demais, mas não consegue deixar de se divertir com suas histórias absurdas e imprevisíveis.",
    },
    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Uma anomalia teológica fascinante aos olhos de Aiden — embora, em muitos momentos, profundamente irritante.",
    },
    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Vive tentando entender como diabos o código de Aiden funciona. Já tentou ensinar o pequeno robô a usar um teclado, sem sucesso.",
    },
    "Kane Graves": {
      tipo: "friend",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Respeitava Kane como líder e mentor. A morte dele foi um golpe duro, que o fez questionar sua própria jornada na Organização XIII. Costuma dizer que “enquanto houver alguém para herdar sua vontade, a lenda dele continuará viva”.",
    },
    "Murphy Elliot": {
      tipo: "neutral",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Quando Aiden entrou para a Organização XIII, Murphy já estava fora há anos. Não são próximos, mas mantêm diálogos ocasionais.",
    },
    "Ashley Crawford": {
      tipo: "ex",
      foto: "img/Personagens/Ashley.png",
      descricao:
        "Um amor trágico. Aiden a perdeu para o trauma e o suicídio, uma ferida que jamais cicatrizou completamente.",
    },
    "Mila Torres": {
      tipo: "ex",
      foto: "img/Personagens/Mila.png",
      descricao:
        "Estudante de engenharia com quem viveu um romance leve e efêmero. Ela se mudou para o Canadá, e os dois se despediram em paz.",
    },
    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Ex-companheiro da Organização XIII e responsável pela morte de Kane Graves. Aiden busca expor publicamente sua corrupção e crimes antes de derrubá-lo no ciberespaço.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Cyberdeck “Will-o”": {
      imagem: "img/itens/will-o.png",
      descricao:
        "Um cyberdeck personalizado, projetado por Aiden. É leve, discreto e extremamente potente, equipado com software de última geração para invasão e defesa. Seu nome vem do fenômeno natural “will-o’-the-wisp”, uma referência às luzes misteriosas que guiam viajantes perdidos — algo que Aiden aspira ser no ciberespaço.",
    },
    "Fones de Ouvido": {
      imagem: "img/itens/fones.png",
      descricao:
        "Fones de ouvido que Aiden mantém pendurados no pescoço quase o tempo todo. Mais do que um acessório, funcionam como um filtro entre ele e o mundo: abafam o caos externo enquanto amplificam música, ruídos de rede e sinais digitais. Estão sempre prontos para uso imediato, como se fossem uma extensão de seus próprios sentidos.",
    },
    "Pulseira de Metal": {
      imagem: "img/itens/pulseira-GnG.png",
      descricao:
        "Uma pulseira metálica simples, mas carregada de significado, gravada com a frase “This is who I am”. É uma homenagem à sua música favorita da antiga banda de Oliver, Ghouls 'n Ghosts. Para Aiden, a pulseira serve como um lembrete constante de identidade, resistência e daquilo que ele se recusa a deixar para trás.",
    },
    "Pendrive em Colar": {
      imagem: "img/itens/colar-pendrive.png",
      descricao:
        "Um pendrive antigo preso a um colar. Seu conteúdo é desconhecido: Aiden tentou acessá-lo uma única vez, mas os dados estavam severamente corrompidos, parecendo conter algum tipo de vírus agressivo. Ele costuma espalhar rumores de que ali está uma versão aprimorada e atualizada do vírus R.A.B.I.D.S., embora ninguém saiba ao certo se isso é verdade ou apenas intimidação.",
    },
    "Anéis de LED": {
      imagem: "img/itens/aneis-led.png",
      descricao:
        "Dois anéis metálicos equipados com LEDs internos que pulsam em padrões variados conforme a atividade neural e os batimentos cardíacos de Aiden. As luzes mudam de intensidade e ritmo de forma quase orgânica, denunciando estresse, foco extremo ou excitação — mesmo quando ele tenta esconder suas emoções.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

implantes: {
  Cyberpillow: {
    descricao: "Sistema neurossensorial projetado para induzir rapidamente repouso leve. Facilita microperíodos de descanso em ambientes não convencionais, auxiliando na recuperação cognitiva e na manutenção do desempenho ao longo do dia.",
  },
  "Enhanced Antibodies": {
    descricao: "Tratamento biocibernético focado no fortalecimento do sistema imunológico e na otimização dos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
  },
  "Ex-Disk": {
    descricao: "Extensão neural cognitiva desenvolvida para ampliar a capacidade de armazenamento e processamento de dados especializados. Otimizada para análise intensiva, arquitetura de dados e navegação em sistemas complexos, permitindo lidar com grandes volumes de informação com maior eficiência e clareza mental.",
  },
  "Holo Projector Palm": {
    descricao: "Projetor holográfico compacto integrado à palma da mão, capaz de gerar imagens tridimensionais estáveis em curto alcance. Indicado para apresentações rápidas, visualização de dados, demonstrações técnicas e interação visual portátil.",
  },
  Monowire: {
    descricao: "Sistema de fio monofilamentar retrátil composto por um filamento de corte extremamente fino e de resistência excepcional. Projetado para aplicações de alta precisão, oferece capacidade de corte superior contra alvos orgânicos e materiais estruturais leves.",
  },
  Neuroport: {
    descricao: "Sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno de integração entre humanos e tecnologia. Amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros. Inclui Neural Link, Holophone, Biomonitor, Virtuality, HUD/Chyron, Shard Slots e Interface Plug. Sua ampla disseminação consolidou o Neuroport como infraestrutura essencial da sociedade contemporânea, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas.",
  },
  "Neuroport Cyberdeck Port": {
    descricao: "Porta de conexão cervical dedicada que integra diretamente um cyberdeck ao sistema neural do usuário. Proporciona maior alcance, estabilidade de sinal e resposta aprimorada em operações digitais de alta complexidade.",
  },
  "Shift Tacts": {
    descricao: "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas para adaptação ambiental, personalização estética ou padronização visual em contextos corporativos.",
  },
},

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho: "Netrunner híbrido — atua tanto como hacker de campo quanto como desenvolvedor e arquiteto de redes neurais.",
  modoTrabalho: "Prefere trabalhar sozinho, mas mantém uma rede de confiança com Kimber e Lyra. Quando está no modo de imersão total, pode ficar dias conectado sem perceber o tempo passar.",
  espacoTrabalho: "Minimalista e caótico — uma mesa coberta de cabos, telas flutuantes, pacotes de Cup Noodles e latas de energia. Sempre há uma música tocando de fundo, geralmente algo entre Lo-fi e industrial synthwave.",
  clientes: "Sub-redes independentes, jornalistas anônimos, e às vezes, os próprios Dandelions — que o “contratam” para “limpar rastros” ou obter informações.",
};
