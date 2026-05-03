// Aiden.js
// Ficha completa de Aiden Fowler

personagens.aiden = {
  // Identificação básica
  nome: 'Aiden "Wisp" Fowler',
  funcao: "Netrunner | Jornalista de Blog | Ex-Organização XIII (Rank X)",
  id: "25-9538-93",
  foto: "img/Personagens/Aiden/Aiden Fowler.png",
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

  relacoes: {
    // Aliado Incondicional
    Lyra: {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Sua melhor amiga, confidente e talvez algo mais. Aiden a admira mais do que admite, sente uma conexão profunda com ela e teme que seus sentimentos acabem desequilibrando a relação entre os dois.",
    },

    "Zoe Fowler": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Aiden/Zoe Fowler.png",
      descricao:
        "Irmã gêmea de Aiden. Zoe é uma das pessoas mais próximas dele, talvez a que melhor entende suas contradições sem precisar de muitas explicações. Aiden sente por ela um laço profundo, protetor e quase instintivo, como se ela fosse uma extensão da própria vida.",
    },

    // Muito positivo
    "Kimber Destaro": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Mentora e amiga de longa data. Foi uma das primeiras pessoas a enxergá-lo como igual, não apenas como um prodígio instável. Aiden a respeita profundamente e confia nela em assuntos técnicos.",
    },

    "Oliver Miller": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Oliver/Oliver Miller.png",
      descricao:
        "Aiden o vê como veterano, inspiração e símbolo de rebeldia sincera. Admirava sua antiga banda, Ghouls ’n Ghosts, e a filosofia de identidade e resistência que Oliver representava.",
    },

    Ninvega: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Companheiro intelectual. Aiden admira sua busca por humanidade. Costumam conversar sobre ética, inteligência artificial e o futuro da existência digital.",
    },

    "Ícaro Barbosa": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Aiden o acha caótico demais, mas se diverte com suas histórias absurdas e imprevisíveis. A relação dos dois funciona no improviso: planos ruins, café horrível e decisões que só fazem sentido depois que dão certo.",
    },

    "Kane Graves": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/Kane Graves.png",
      descricao:
        "Aiden respeitava Kane como líder e mentor. A morte dele foi um golpe profundo, fazendo Aiden questionar se a vida em Night City era realmente pra ele.",
    },

    "Ashley Crawford": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Aiden/Ashley Crawford.png",
      descricao:
        "Um amor trágico. Aiden se apaixonou por Ashley durante seu tempo na Organização XIII, tentou salvá-la do trauma e falhou. A morte dela virou uma ferida permanente e um fantasma emocional/digital que ele não consegue apagar.",
    },

    "Archie Fowler Kepler": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Archie Fowler Kepler.png",
      descricao:
        "Sobrinho de Aiden. Archie desperta um lado mais leve, protetor e afetivo. Por ser um adolescente, Aiden tende a enxergá-lo como alguém que precisa ser preservado dos conflitos, traumas e perigos do mundo adulto.",
    },

    // Positivo
    "Tessia Amberine": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "No começo, os dois não eram próximos, mas Aiden passou a respeitá-la pela eficiência, lógica e postura firme. Ele a considera uma aliada valiosa, embora brinque chamando-a de “namorada do chefe”.",
    },

    Cypher: {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Aiden aprecia sua arte e sua presença excêntrica, embora o veja como um “bug ambulante”. Mesmo sem entender metade do que Cypher expressa, gosta dele e reconhece valor em sua forma única de existir.",
    },

    "Priya Ellison": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Aiden a vê como um pilar moral. Gosta de sua franqueza e reconhece nela um senso de justiça firme, mesmo quando essa justiça entra em conflito com as crenças ou métodos dele.",
    },

    Mirai: {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Aiden tenta entender como o código de Mirai funciona e já tentou ensinar o pequeno robô a usar teclado, sem sucesso. A relação tem tom leve, curioso e caótico.",
    },

    "Clara Fowler": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Aiden/Clara Fowler.png",
      descricao:
        "Aiden tende a confiar mais facilmente em sua mãe, mesmo que nem sempre demonstre isso de forma direta. É uma figura de cuidado, paciência e vínculo emocional.",
    },

    "Miriam Fowler Kepler": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Aiden/Miriam Fowler Kepler.png",
      descricao:
        "Irmã mais velha de Aiden. Ele a vê com respeito e certa admiração, como alguém mais madura, firme e capaz de enxergar a família com uma visão mais ampla.",
    },

    // Neutro/positivo
    Ciel: {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Filha adotiva de Oliver e Tessia. Aiden a vê com simpatia e curiosidade, principalmente por ela estar ligada a duas pessoas que ele respeita.",
    },

    Nyx: {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Aiden respeita sua intensidade artística e seu talento. Analisa suas letras em busca de significados ocultos e admira sua autenticidade, mesmo sem ter uma relação profundamente próxima com ela.",
    },

    Shinigami: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Aiden teme e respeita Shinigami. Enxerga nele uma figura silenciosa, disciplinada e quase fantasmagórica, alguém que observa de longe e impõe respeito sem precisar se aproximar.",
    },

    "Serena Ashbourne": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Aiden a considera divertida, imprevisível e exagerada. Reconhece sua inteligência e presença, mas acha bizarra sua tendência a gastar dinheiro com coisas que ele considera sem sentido.",
    },

    "Dominic Don Von Chier": {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Aiden nem sempre entende Dominic por causa do forte sotaque francês e se pergunta por que ele é tão fascinado pelos próprios braços de gorila. Ainda assim, não parece vê-lo de forma negativa.",
    },

    "Mila Torres": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Aiden/Mila Torres.png",
      descricao:
        "Foi um romance leve e passageiro da época de estudante. Mila se mudou para o Canadá e os dois se despediram em paz, deixando uma lembrança sem grande mágoa.",
    },

    "Evan Fowler": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Evan Fowler.png",
      descricao:
        "A relação tem respeito, mas também certa distância emocional. Aiden reconhece em seu pai uma figura importante da própria origem, mas não parece enxergá-lo como alguém com quem consiga se abrir totalmente.",
    },

    "Michael Kepler": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Michael Kepler.png",
      descricao:
        "Cunhado de Aiden. Não parecem ter uma ligação extremamente forte. A relação é cordial, com respeito moderado, especialmente por ele estar ligado a Miriam e Archie.",
    },

    // Neutro
    "Kleber Junior": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Aiden o vê como uma anomalia teológica fascinante, mas também profundamente irritante em certos momentos. É alguém que desperta mais curiosidade analítica do que afeto direto.",
    },

    "Murphy Elliot": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Quando Aiden entrou na Organização XIII, Murphy já estava fora havia anos. Eles não são próximos, mas mantêm diálogos ocasionais e uma relação sem grande conflito.",
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
        "Ex-companheiro da Organização XIII e responsável pela morte de Kane Graves. Aiden quer expor publicamente seus crimes e sua corrupção antes de enfrentá-lo no ciberespaço.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Cyberdeck “Will-o-Wisp”": {
      imagem: "img/itens/Aiden/Cyberdeck “Will-o-Wisp”.png",
      descricao:
        "Um cyberdeck personalizado, projetado por Aiden. É leve, discreto e extremamente potente, equipado com software de última geração para invasão, defesa e manipulação de redes. Seu nome vem do fenômeno natural “will-o’-the-wisp”, uma referência às luzes misteriosas que guiam viajantes perdidos — algo que Aiden aspira ser no ciberespaço.",
    },

    "Pendrive em Colar": {
      imagem: "img/itens/Aiden/Pendrive em Colar.png",
      descricao:
        "Um pendrive antigo preso a um colar. Seu conteúdo é desconhecido: Aiden tentou acessá-lo uma única vez, mas os dados estavam severamente corrompidos, parecendo conter algum tipo de vírus agressivo. Ele costuma espalhar rumores de que ali está uma versão aprimorada e atualizada do vírus R.A.B.I.D.S., embora ninguém saiba ao certo se isso é verdade ou apenas intimidação.",
    },

    "Fones de Ouvido": {
      imagem: "img/itens/Aiden/Fones de Ouvido.png",
      descricao:
        "Fones de ouvido que Aiden mantém pendurados no pescoço quase o tempo todo. Mais do que um acessório, funcionam como um filtro entre ele e o mundo: abafam o caos externo enquanto amplificam música, ruídos de rede e sinais digitais. Estão sempre prontos para uso imediato, como se fossem uma extensão de seus próprios sentidos.",
    },

    "Shard “EDEN Seed”": {
      imagem: "img/itens/Aiden/Shard “EDEN Seed”.png",
      descricao:
        "Um shard branco, azul-ciano e dourado, marcado com a inscrição “EDEN Seed Beta V6.4”. Contém fragmentos experimentais ligados ao Projeto EDEN, uma tentativa de criar uma rede mental livre do controle corporativo. Para Aiden, não é apenas um dispositivo de armazenamento, mas uma semente de futuro — perigosa, instável e cheia de possibilidades.",
    },

    "Pulseira de Metal": {
      imagem: "img/itens/Aiden/Pulseira de Metal.png",
      descricao:
        "Uma pulseira metálica simples, mas carregada de significado, gravada com a frase “This is who I am”. É uma homenagem à sua música favorita da antiga banda de Oliver, Ghouls 'n Ghosts. Para Aiden, a pulseira serve como um lembrete constante de identidade, resistência e daquilo que ele se recusa a deixar para trás.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    Cyberpillow: {
      descricao:
        "Sistema neurossensorial projetado para induzir rapidamente repouso leve. Facilita microperíodos de descanso em ambientes não convencionais, auxiliando na recuperação cognitiva e na manutenção do desempenho ao longo do dia.",
    },
    "Enhanced Antibodies": {
      descricao:
        "Tratamento biocibernético focado no fortalecimento do sistema imunológico e na otimização dos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
    },
    "Ex-Disk": {
      descricao:
        "Extensão neural cognitiva desenvolvida para ampliar a capacidade de armazenamento e processamento de dados especializados. Otimizada para análise intensiva, arquitetura de dados e navegação em sistemas complexos, permitindo lidar com grandes volumes de informação com maior eficiência e clareza mental.",
    },
    "Holo Projector Palm": {
      descricao:
        "Projetor holográfico compacto integrado à palma da mão, capaz de gerar imagens tridimensionais estáveis em curto alcance. Indicado para apresentações rápidas, visualização de dados, demonstrações técnicas e interação visual portátil.",
    },
    Monowire: {
      descricao:
        "Sistema de fio monofilamentar retrátil composto por um filamento de corte extremamente fino e de resistência excepcional. Projetado para aplicações de alta precisão, oferece capacidade de corte superior contra alvos orgânicos e materiais estruturais leves.",
    },
    Neuroport: {
      descricao:
        "Sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno de integração entre humanos e tecnologia. Amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros. Inclui Neural Link, Holophone, Biomonitor, Virtuality, HUD/Chyron, Shard Slots e Interface Plug. Sua ampla disseminação consolidou o Neuroport como infraestrutura essencial da sociedade contemporânea, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas.",
    },
    "Neuroport Cyberdeck Port": {
      descricao:
        "Porta de conexão cervical dedicada que integra diretamente um cyberdeck ao sistema neural do usuário. Proporciona maior alcance, estabilidade de sinal e resposta aprimorada em operações digitais de alta complexidade.",
    },
    "Shift Tacts": {
      descricao:
        "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas para adaptação ambiental, personalização estética ou padronização visual em contextos corporativos.",
    },
  },
};
