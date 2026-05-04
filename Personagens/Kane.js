// Kane.js
// Ficha completa de Kane Graves

personagens.kane = {
  // Identificação básica
  nome: "Kane Graves",
  funcao: "Solo | Lenda | Fundador da Organização XIII (Rank I)",
  id: "69-9333-83",
  foto: "img/Personagens/Kane/Kane Graves.png",
  ativo: false, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Santo Domingo, Night City",
  dataNascimento: "13/AUG/2059",
  dataMorte: "17/NOV/2085",
  idade: 26,
  altura: "2,13 m",
  peso: "102 kg",

  // Citação e objetivo
  citacao: "“Quando minha hora chegar, você é quem vai continuar.”",
  objetivoVida:
    "Criar uma geração livre do controle das corporações — algo que iniciou na XIII e posteriormente transformou na banda Ghouls 'n Ghosts: arte como resistência.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Extrovertido, carismático, disciplinado, feroz em combate. Tinha presença dominante, aura de liderança natural e capacidade incomum de inspirar os demais.",
  comportamentoSocial:
    "Apesar da fama e da presença dominante, tratava seus parceiros com humanidade. Era o tipo de líder que unia as pessoas pela presença, e não pela força.",
  motivacao:
    "Quebrar o domínio das megacorporaçõess sobre o destino das pessoas. Acreditava que a arte e a música são formas poderosas de resistência.",
  valoresCentrais:
    "Lealdade absoluta, honra na violência, proteção dos fracos, autonomia diante de corporações, honestidade direta, sacrifício pelo grupo.",
  visaoPessoas:
    "Acreditava que todos carregam peso e que o mais importante é quem permanece ao seu lado quando as coisas desmoronam. Valorizava a autenticidade e a coragem.",
  oQueValoriza:
    "A família que construiu: Oliver, Raze, Kimber e os membros centrais da XIII. A música que criaram juntos. A sensação de liberdade que buscava em cada missão.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Cresceu em Pacifica entre os corredores inundados, gangues locais e prédios condenados. Era rápido, inteligente e destemido — qualidades que chamavam atenção até de criminosos mais velhos.",
    "Aos 10 anos, começou a trabalhar como mensageiro para gangues menores.",
    "Aos 11, já ajudava em contrabandos e escoltas curtas.",
    "Aos 12, com a morte da mãe, desapareceu.",
    "Retornou aos 14 anos com novas cicatrizes e fundou a Organização XIII.",
    "A XIII cresceu rápido e atraiu inimigos, mas também respeito. Kane ficou conhecido por sua coragem insana e por um código férreo.",
    "Aos 17 anos, já era apontado por fixers como “o próximo Blackhand”.",
    "Por volta de seus 20 anos, ele fundou a banda Ghouls 'n Ghosts, inicialmente apenas para aliviar a tensão interminável da vida criminal.",
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
        "Kane via Oliver como um irmão mais novo e como alguém que poderia ser melhor do que ele. Deu a vida para protegê-lo.",
    },

    "Murphy Elliot": {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Um dos amigos mais leais de Kane. Via Murphy como alguém confiável, técnico e essencial fora da violência da XIII.",
    },

    "Kimber Destaro": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Kane viu potencial nela quando estava perdida em Night City. Ajudou Kimber e confiou nela a ponto de vê-la como peça central da XIII.",
    },

    // Muito positivo
    "Marla Graves": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/Marla Graves.png",
      descricao:
        "A mãe foi uma perda fundadora na vida dele. A morte dela marcou seu ódio contra o controle corporativo.",
    },

    "Aiden Fowler": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Kane via Aiden como uma mente brilhante, mas vulnerável ao ciberespaço. Protegia-o por acreditar que ele representava o futuro.",
    },

    "Ivy Naranjo": {
      tipo: "Muito positivo",
      status: "Desconhecido",
      foto: "img/Personagens/Ivy/Ivy Naranjo.png",
      descricao:
        "Admirava sua coragem e convicção. Quando Ivy se aproximou de Oliver, Kane passou a tratá-la quase como família.",
    },

    "Irina Sokolova": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Irina Sokolova.png",
      descricao:
        "Foi um dos amores mais saudáveis de Kane. Terminaram, reataram e ficaram juntos até a morte dele; devastada, Irina retornou à Rússia.",
    },

    "Basil Crow": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Basil Crow.png",
      descricao:
        "Kane conheceu Basil em uma luta clandestina onde todos riam dele por ser baixo. Basil venceu três homens maiores usando seus braços de aço como marretas. Kane não o recrutou por pena, mas porque viu nele uma raiva disciplinada. Basil passou a respeitar Kane porque foi um dos poucos que nunca tratou seu tamanho como fraqueza.",
    },

    "Clint Westwood": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Clint Westwood.png",
      descricao:
        "Clint chamou a atenção de Kane ao vencer um tiroteio sem desperdiçar munição. O terceiro braço robótico permitia que ele recarregasse, mirasse e atirasse quase ao mesmo tempo. Kane achava seu estilo cowboy exagerado, mas respeitava sua eficiência. Entre eles havia uma confiança simples: quando Clint estava no alto, ninguém avançava sem pagar caro.",
    },

    "Eden Reid": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Eden Reid.png",
      descricao:
        "Eden era um jogador de basquete rebelde que Kane encontrou fugindo de dívidas e policiais corporativos. Kane viu nele reflexos, impulsividade e uma necessidade enorme de pertencer a algo real. Na XIII, Eden usava sua agilidade e força para abrir caminhos durante conflitos. Kane o tratava como alguém que precisava de direção antes de virar só mais um corpo nas ruas.",
    },

    "Kenan Sharp": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Kenan Sharp.png",
      descricao:
        "Kenan apareceu na XIII investigando um assassinato que a gangue não tinha cometido. O cachimbo e o visual clássico pareciam teatro, mas Kane logo entendeu que aquilo escondia uma mente absurda. Kenan ajudou a provar a inocência da XIII e revelou o verdadeiro culpado. Desde então, Kane o usava para descobrir traições, armadilhas e mentiras antes que virassem sangue derramado.",
    },

    Rider: {
      tipo: "Muito positivo",
      status: "Morto(a)",
      foto: "img/Personagens/Kane/XIII/Rider.png",
      descricao:
        "Ninguém sabia quem Rider era. Kane também não parecia saber tudo, mas era um dos poucos que entendia alguns de seus sinais. Rider surgiu um dia, em seu skate flutuante, ajudou Kane em uma operação, e desde então se associou a gangue. Para Kane, Rider era a prova de que confiança nem sempre precisava de identidade.",
    },

    "Reika Yanami": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/XIII/Reika Yanami.png",
      descricao:
        "Reika tentou manipular Kane em uma entrevista clandestina, mas ele percebeu as armadilha. Em vez de expulsá-la, ele ofereceu acesso à verdade suja de Night City. Reika aceitou porque Kane era uma fonte impossível de ignorar; Kane aceitou porque ela podia destruir reputações sem disparar uma bala.",
    },

    // Positivo
    "Kaori Mizushima": {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/Kaori Mizushima.png",
      descricao:
        "Relação escondida e intensa. Kaori era uma assassina associada aos Garras de Tygre. Kane a respeitava como assassina e como alguém que conhecia o peso de viver entre violência e lealdade. Seu término ocorreu devido a morte de Kaori.",
    },

    "Hazel Reeve": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Hazel Reeve.png",
      descricao:
        "Esposa de Murphy Elliot. Kane a respeitava por ser parte da vida de um de seus amigos mais leais, tratando-a com cuidado e consideração.",
    },

    "Thomas Reeve Elliot": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/Thomas Elliot.png",
      descricao:
        "Filho de Murphy Elliot. Para Kane, Thomas era alguém a ser protegido, quase como parte da família estendida da XIII.",
    },

    "Cerise Blossom": {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Cerise Blossom.png",
      descricao:
        "Cerise veio de fora de Night City com fama de ginasta reconhecida, mas Kane percebeu que a cidade queria transformá-la em produto. Ele ofereceu a ela um lugar onde sua precisão não seria usada para aplausos falsos, mas para sobrevivência. Kane a via como alguém elegante demais para aquele mundo, mas perigosa o bastante para não ser quebrada por ele.",
    },

    "Heath Hardy": {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Heath Hardy.png",
      descricao:
        "Heath não confiava em ninguém quando conheceu Kane. Tentou vender informação falsa para a XIII, foi descoberto e, em vez de ser punido, recebeu uma proposta: trabalhar direito ou continuar fugindo sozinho. Kane gostava da paranoia dele, porque em Night City ela era quase uma virtude. Heath virou os olhos e ouvidos da gangue nos becos, telhados e mercados ilegais.",
    },

    "Mael Vellum": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Mael Vellum.png",
      descricao:
        "Mael veio da Turquia depois de perder os braços e trocar a própria carne por metal. Kane o encontrou como mercenário frio, sem ligação com ninguém. Durante uma missão, Mael poderia ter abandonado a XIII, mas ficou para cobrir a retirada de Kane e dos feridos. Depois disso, Kane passou a vê-lo como sentinela da gangue.",
    },

    "Ashley Crawford": {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Aiden/Ashley Crawford.png",
      descricao:
        "Ligada à tragédia de Aiden. Kane a via com respeito e pesar, tanto por ser membra da gangue, mas principalmente pelo impacto que sua perda causou em Aiden.",
    },

    // Neutro/positivo
    "Serena Ashbourne": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Uma conexão curta, silenciosa e marcante. Kane não a conheceu profundamente, mas deixou uma impressão forte o bastante para Serena ir ao funeral escondida.",
    },

    "Jin Xiao": {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Jin Xiao.png",
      descricao:
        "Jin era gananciosa o suficiente para assustar qualquer líder, mas Kane percebeu que a ganância dela tinha regra: ela não roubava de quem considerava seu. Depois de descobrir um desvio em uma operação, Jin devolveu tudo com juros e ainda expôs os culpados. Kane a manteve perto porque sabia que lealdade sem inteligência era inútil, e Jin tinha as duas coisas, mesmo cobrando caro por isso.",
    },

    "Valen Kadwell": {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Valen Kadwell.png",
      descricao:
        "Valen vivia arrumando briga antes de entrar na XIII. Kane a encontrou espancada depois de enfrentar gente demais sozinha. Em vez de elogiar sua coragem, Kane chamou aquilo de burrice. Valen odiou ouvir isso e desafiou Kane para uma briga. Kane aceitou, e venceu. Depois disso, Valen decidiu o seguir. Com o tempo, Kane transformou sua violência em ferramenta: Valen continuou briguenta, mas passou a escolher melhor por quem e quando quebrar alguém.",
    },

    // Neutro
    // Nenhum personagem nesta categoria.

    // Neutro/negativo
    "Dakota Veyriss": {
      tipo: "Neutro/negativo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Dakota Veyriss.png",
      descricao:
        "Respeitava sua força como combatente, mas discordava da filosofia dela. Confiava em sua capacidade, mas temia seus métodos.",
    },

    "Raze Lambert": {
      tipo: "Neutro/negativo",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Kane via genialidade em Raze, mas também escuridão. Tentou guiá-lo; morreu sem ódio, apenas tristeza pela traição.",
    },

    "Alys Verona": {
      tipo: "Neutro/negativo",
      status: "Viva",
      foto: "img/Personagens/Kane/Alys Verona.png",
      descricao:
        "Netrunner contratada por Kane. Tiveram um relacionamento. A relação terminou após discussões sérias, sem indicação de ódio profundo.",
    },

    "Aaron Lazarev": {
      tipo: "Neutro/negativo",
      status: "Morto",
      foto: "img/Personagens/Kane/Laminares/Aaron Lazarev.png",
      descricao:
        "Aaron era o tipo de inimigo que transformava qualquer conflito em massacre. Kane passou a odiá-lo depois que armas fornecidas por ele chegaram às mãos de grupos que atacaram civis em território protegido pela XIII. Se Ulrik era a cabeça dos Laminares, Aaron era o arsenal.",
    },

    "Soyeon Bae": {
      tipo: "Neutro/negativo",
      status: "Detida",
      foto: "img/Personagens/Kane/Laminares/Soyeon Bae.png",
      descricao:
        "Soyeon entrou no radar de Kane quando sistemas da XIII começaram a cair sem sinal de invasão comum. Ela era limpa, precisa e quase invisível. Kane a via como uma ameaça moderna: alguém capaz de matar uma operação sem aparecer no campo de batalha.",
    },

    // Negativo
    "Harper Shaw": {
      tipo: "Negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Kane/XIII/Harper Shaw.png",
      descricao:
        "Ex-membro forte da XIII que rompeu com Kane após discordâncias ideológicas e jurou derrubá-lo.",
    },

    "Talon Rhyse": {
      tipo: "Negativo",
      status: "Morto",
      foto: "img/Personagens/Kane/Laminares/Talon Rhyse.png",
      descricao:
        "Talon era usado pelos Laminares para deixar mensagens em forma de cadáver. Kane ouviu seu nome após uma sequência de ataques contra aliados menores da XIII. O conflito entre eles ficou pessoal quando Talon começou a mirar pessoas protegidas por Kane.",
    },

    "Ysolde Mercer": {
      tipo: "Negativo",
      status: "Viva",
      foto: "img/Personagens/Kane/Laminares/Ysolde Mercer.png",
      descricao:
        "Ysolde era uma ameaça diferente. Ela não precisava gritar nem sujar as mãos para destruir alguém. Kane a encontrou em negociações indiretas, onde ela tentava isolar a XIII cortando suprimentos, contatos e rotas. Ele a respeitava como estrategista, mas não confiava em nenhuma palavra dela.",
    },

    // Muito negativo
    "Mireya Petrenko": {
      tipo: "Muito negativo",
      status: "Morta",
      foto: "img/Personagens/Kane/Laminares/Mireya Petrenko.png",
      descricao:
        "Mireya tentou se aproximar de contatos usando charme e falsas alianças. Kane percebeu rápido que ela não buscava informação, mas rachaduras emocionais. Ele a via como alguém perigosa porque entendia fraquezas humanas melhor do que muitos assassinos entendiam armas.",
    },

    // Inimigo jurado
    Arasaka: {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Arasaka/Arasaka.png",
      descricao:
        "Para Kane, a Arasaka era o rosto do domínio corporativo. Uma força que precisava ser confrontada, mesmo que isso custasse sua vida.",
    },

    Laminares: {
      tipo: "Inimigo jurado",
      status: "Desmantelado",
      foto: "img/Personagens/Kane/Laminares/Laminares.png",
      descricao:
        "Para Kane, os Laminares representavam violência predatória e covarde. A relação era pessoal, não apenas estratégica.",
    },

    "Ulrik Deamonne": {
      tipo: "Inimigo jurado",
      status: "Desconhecido",
      foto: "img/Personagens/Kane/Laminares/Ulrik Deamonne.png",
      descricao:
        "Ulrik era tudo que Kane odiava em um líder: dominava pelo medo, não pela lealdade. Para Kane, Ulrik não comandava uma gangue, criava uma matilha faminta. O conflito entre os dois virou pessoal quando os Laminares passaram a mirar pessoas próximas da XIII.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Guitarra da Ghouls ’n Ghosts": {
      imagem: "img/itens/Kane/Guitarra da Ghouls ’n Ghosts.png",
      descricao:
        "Uma guitarra elétrica customizada, marcada pela estética sombria e rebelde da antiga banda Ghouls ’n Ghosts. Para Kane, ela nunca foi apenas um instrumento: era uma forma de protesto, catarse e resistência contra o domínio corporativo. Suas cordas carregam lembranças dos palcos clandestinos, das noites no Rusted Note e de uma época em que música ainda parecia capaz de manter a XIII unida.",
    },

    "Machado “Belial”": {
      imagem: "img/itens/Kane/Machado “Belial”.png",
      descricao:
        "Um machado de combate pesado, brutal e intimidador, com uma lâmina agressiva que parece ter sido feita para abrir caminho em meio ao caos. Nas mãos de Kane, “Belial” era mais do que uma arma: era uma extensão de sua presença protetora, usada para defender a XIII e impor respeito nas ruas. Após sua morte, o machado se tornou uma relíquia amarga, carregando o peso de sua força, sua ausência e a traição que veio depois.",
    },

    "Pingente da XIII": {
      imagem: "img/itens/Kane/Pingente da XIII.png",
      descricao:
        "Um pingente metálico com o símbolo da Organização XIII, gasto pelo tempo e pelo uso constante. Kane o carregava como prova de pertencimento, liderança e lealdade à família que ajudou a construir nas ruas. Mais do que um emblema, o pingente representa o código que sustentava a XIII: proteger os seus, resistir ao controle corporativo e nunca abandonar quem ainda podia ser salvo.",
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
    "Anti-Dazzle": {
      descricao:
        "Sistema óptico defensivo desenvolvido para neutralizar interferências visuais causadas por flashes intensos, explosões luminosas ou ataques de luz direcionada. Garante estabilidade visual contínua e preserva a capacidade operacional do usuário em cenários de alto risco.",
    },
    "Berserk Implant": {
      descricao:
        "Implante de regulação neuro-hormonal projetado para otimizar respostas fisiológicas em situações de estresse extremo. Atua ajustando a liberação de adrenalina, cortisol e outros agentes químicos, maximizando reflexos, resistência e agressividade controlada durante cenários de ameaça iminente.",
    },
    Cyberarm: {
      descricao:
        "Prótese cibernética de membro superior desenvolvida para substituição total do braço orgânico. Oferece estrutura modular interna para integração de múltiplos sistemas especializados, mantendo ergonomia, força e controle refinado. Projetada para aplicações civis, industriais e táticas.",
    },
    "Cyberaudio Suite": {
      descricao:
        "Plataforma auditiva cibernética centralizada que serve como base para múltiplos módulos sensoriais e de comunicação. Otimiza captação, processamento e distribuição de áudio, funcionando como núcleo para implantes sonoros avançados.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    "Enhanced Antibodies": {
      descricao:
        "Tratamento biocibernético focado no fortalecimento do sistema imunológico e nos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
    },
    "Gorilla Arm": {
      descricao:
        "Conjunto clássico de aprimoramentos estruturais para membros superiores artificiais, desenvolvido para trabalho pesado e aplicações industriais de alta demanda. Reconhecido por sua confiabilidade e durabilidade, é amplamente utilizado em setores de construção, logística, extração e segurança.",
    },
    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
    },
    "Jump Booster": {
      descricao:
        "Mecanismo de reforço biomecânico que aprimora potência muscular e impulsão vertical, otimizando mobilidade em deslocamentos críticos.",
    },
    "Kerenzikov Speedware": {
      descricao:
        "Módulo neural de aceleração sináptica que antecipa respostas motoras e cognitivas. Projetado para cenários de alta intensidade, melhora drasticamente o tempo de reação e a capacidade de tomada de decisão em frações de segundo.",
    },
    "Low Light / Infrared / UV": {
      descricao:
        "Conjunto óptico multiespectral que amplia drasticamente a capacidade de percepção visual em condições adversas. Permite leitura precisa do ambiente em cenários de baixa luminosidade, interferência atmosférica ou espectros invisíveis ao olho humano.",
    },
    "Nasal Filters": {
      descricao:
        "Sistema de filtragem respiratória interna que neutraliza partículas tóxicas, gases industriais e contaminantes atmosféricos. Essencial para ambientes poluídos, laboratórios e zonas de risco químico.",
    },
    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },
    "Olfactory Boost": {
      descricao:
        "Aprimoramento sensorial olfativo que expande drasticamente a capacidade de identificação e diferenciação de odores. Aplicável em rastreamento, investigação, segurança e análise ambiental.",
    },
    "Pain Editor": {
      descricao:
        "Módulo de controle neural da dor que regula a percepção de estímulos nocivos. Desenvolvido para garantir continuidade operacional mesmo sob condições físicas extremas, respeitando limites fisiológicos seguros.",
    },
    "Subdermal Armor": {
      descricao:
        "Sistema avançado de blindagem subcutânea distribuída por todo o corpo, utilizando materiais de alta densidade e absorção de impacto. Projetado para ambientes de risco elevado, oferecendo proteção superior sem comprometer a ergonomia.",
    },
    "Subdermal Grip": {
      descricao:
        "Implante neuromuscular que otimiza a interface entre o sistema nervoso e dispositivos empunhados. Permite controle preciso e responsivo de armamentos e ferramentas inteligentes sem a necessidade de conexões externas visíveis.",
    },
    "Tactile Boost": {
      descricao:
        "Implante sensorial avançado que amplia a percepção tátil por meio de análise vibracional de superfícies. Permite detectar movimentos e atividades próximas através de contato físico indireto com o ambiente.",
    },
    "Targeting Scope": {
      descricao:
        "Sistema óptico de assistência visual que otimiza a aquisição e o foco em alvos específicos. Amplamente utilizado em contextos de segurança, aplicação da lei e operações de precisão.",
    },
    TeleOptics: {
      descricao:
        "Sistema óptico de ampliação visual de longo alcance que permite observação detalhada a grandes distâncias. Utilizado para vigilância, reconhecimento e suporte a operações de precisão.",
    },
    "Voice Stress Analyzer": {
      descricao:
        "Sistema auditivo analítico que avalia microvariações vocais em tempo real. Utilizado para análise comportamental, negociações sensíveis, entrevistas e interrogatórios corporativos.",
    },
    Wolvers: {
      descricao:
        "Conjunto de lâminas extensíveis integradas às articulações dos dedos, fabricadas em material de altíssima resistência. Projetadas para confrontos diretos, mantendo ocultação total quando retraídas.",
    },
  },
};
