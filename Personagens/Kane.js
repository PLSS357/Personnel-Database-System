// Kane.js
// Ficha completa de Kane Graves

personagens.kane = {
  // Identificação básica
  nome: "Kane Graves",
  funcao: "Solo | Lenda | Fundador da Organização XIII (Rank I)",
  id: "69-9333-83",
  foto: "img/Personagens/Kane.png",
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
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Marla Graves, Técnica de manutenção elétrica, trabalhava em subestações de energia abandonadas – Falecida em 2070 devido a um acidente de trabalho.",
    "Pai: Desconhecido – Um mercenário fracassado morto em um trabalho mal-sucedido, um ex-soldado envolvido com contrabando, ou até um corporativo eliminado por saber demais. Kane nunca descobriu a verdade, nem quis ir atrás.",
  ],
  pessoaMaisImportante:
    "Todos da Organização XIII, especialmente Oliver Miller, por o ver como um irmão mais novo.",
  tragedia: [
    "1. A morte de sua mãe",
    "O acidente que matou Marla Graves foi encoberto por documentos corporativos. Anos depois, um informante anônimo entregou a Kane relatórios indicando envolvimento da Arasaka.",
    "     ",
    "2. A morte própria morte",
    "Em 17 de novembro de 2085, durante uma operação contra a Arasaka, Kane foi traído pelo homem que ele considerava como família: Raze Lambert.",
    "Raze, já aliado à corporação, plantou explosivos numa estrutura abandonada onde a XIII havia montado uma base temporária.",
    "Kane morreu na detonação, protegendo Oliver com o próprio corpo — mas o impacto devastou Viole, deixando-o desfigurado e em coma.",
  ],

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
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver Miller": {
      tipo: "family",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Kane via Oliver como espelho. Um garoto que sofreu cedo demais, como ele. Kane acreditava genuinamente que Oliver seria melhor do que ele e por acreditar nisso deu sua vida para protegê-lo.",
    },

    "Dakota Veyriss": {
      tipo: "neutral",
      foto: "img/Personagens/Veyriss.png",
      descricao:
        "Ele a respeitava como combatente, mas discordava absolutamente da sua filosofia. Eles discutiam quase todas as semanas. Apesar disso, confiava que, se morresse, Dakota manteria a XIII funcionando. Ele só temia como ela faria isso.",
    },

    "Murphy Elliot": {
      tipo: "friend",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Murphy sempre foi o amigo mais leal de Kane, ainda antes da XIII. Um técnico capaz de consertar qualquer coisa. Ele nunca desejou ser um mercenário, então quando finalmente abriu seu bar, Kane foi o primeiro cliente.",
    },

    "Kimber Destaro": {
      tipo: "family",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Quando chegou a Night City, Kimber dormia dentro de seu carro. Kane viu potencial nela e a ajudou. Kimber entrou para a XIII não por ambição, mas por gratidão. Quando Dakota saiu, Kimber assumiu como segunda em comando.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Aiden entrou na XIII em 2083. Um jovem com a mente tão rápida que parecia sempre à beira do colapso. Kane já tinha visto mentes serem consumidas pelo ciberespaço. Então protegia Aiden, porque sabia que ele os levaria para o futuro.",
    },

    "Raze Lambert": {
      tipo: "family",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Kane sempre soube que Raze era genial, mas havia uma escuridão à sua volta. Kane tentava redirecionar esse ódio, mas viver à sombra de Kane foi algo que Raze nunca conseguiu suportar. Quando morreu, Kane não sentiu ódio, apenas tristeza.",
    },

    "Ivy Naranjo": {
      tipo: "friend",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Ivy entrou aos 16 anos e imediatamente ascendeu ao Rank IV. Quando Ivy e Oliver começaram a se relacionar, Kane passou a tratá-la como família. Após sua saída da XIII, Kane continuou acreditando que ela sobreviveria ao mundo.",
    },

    Arasaka: {
      tipo: "enemy",
      foto: "img/arasaka/arasaka-logo.png",
      descricao:
        "Desde jovem, Kane entendeu que qualquer um que ousasse operar no submundo de Night City por tempo suficiente inevitavelmente cruzaria o caminho da corporação. E Kane estava disposto a confrontar e vencer.",
    },

    "Gangue Laminares": {
      tipo: "enemy",
      foto: "img/Personagens/Laminares.png",
      descricao:
        "Ao contrário da Arasaka, a relação entre Kane e os Laminares era pessoal. Os Laminares representavam tudo o que ele odiava: gente que se achava predadora quando, na verdade, eram só chacais com lâminas.",
    },

    "Harper Shaw": {
      tipo: "enemy",
      foto: "img/Personagens/Harper.png",
      descricao:
        "Harper era uma das solos mais fortes da XIII. Ela concordava com Veyriss, acreditava que a gangue deveria se tornar algo maior. Após uma grande briga, ela saiu da gangue e jurou que um dia derrubaria Kane.",
    },

    "Alys Verona": {
      tipo: "ex",
      foto: "img/Personagens/Alys.png",
      descricao:
        "Netrunner independente; Kane contratou Alys para decodificar arquivos corporativos da Kendachi. O relacionamento acabou quando tiveram algumas discussões sérias.",
    },

    "Irina Sokolova": {
      tipo: "romantic",
      foto: "img/Personagens/Irina.png",
      descricao:
        "Medicânica clandestina; Foi o relacionamento mais saudável da vida de Kane e terminou com uma amizade colorida entre os dois, apesar dela ainda gostar dele. Após a morte dele, ela saiu de Night City.",
    },

    "Kaori Mizushima": {
      tipo: "ex",
      foto: "img/Personagens/Kaori.png",
      descricao:
        "Kaori era uma assassina dos Garra de Tygre; Se conheceram quando Kane precisou negociar um carregamento da XIII roubado. Tiveram um relacionamento escondido por mais de um ano, antes dela falecer em missão.",
    },

    "Serena Ashbourne": {
      tipo: "ex",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Corporativa excêntrica. Se conheceram no Dark Matter. Foi uma química intensa, silenciosa, sem declarações. Passaram apenas uma noite juntos. Eles nunca mais viram. Mas Serena esteve no funeral de Kane, escondida e longe.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Guitarra Personalizada da Ghouls 'n Ghosts": {
      imagem: "img/itens/guitarra-ghouls.png",
      descricao:
        "Guitarra elétrica customizada com detalhes góticos e símbolos da XIII. Kane a usava em todas as apresentações da banda, e ela se tornou um símbolo de resistência contra o controle corporativo.",
    },

    "Machado “Belial”": {
      imagem: "img/itens/machado-belial.png",
      descricao:
        "Um machado de combate corpo a corpo com lâmina dupla com aparência demoniaca. Kane o utilizava em combates próximos, como uma extensão de sua própria força e presença intimidadora. Foi roubado por Raze após a morte de Kane.",
    },

    "Armadura customizada": {
      imagem: "img/itens/armadura-kane.png",
      descricao:
        "Armadura reforçada, personalizada com o emblema da Organização XIII. Projetada para oferecer mobilidade máxima sem sacrificar a proteção, refletindo o estilo de combate agressivo de Kane.",
    },

    "Luva de Batalha": {
      imagem: "img/itens/luva-batalha.png",
      descricao:
        "Luva tática reforçada usada por Kane em combates corpo a corpo. Feita de materiais avançados, oferece proteção extra e melhor aderência durante confrontos intensos.",
    },

    "Rifle de Assalto": {
      imagem: "img/itens/rifle-assalto.png",
      descricao:
        "Rifle de assalto personalizado com mira holográfica e modificações para maior precisão e controle de recuo. Kane o utilizava em operações que exigiam fogo sustentado e versatilidade.",
    },

    "Lança-Chamas Grande": {
      imagem: "img/itens/lanca-chamas.png",
      descricao:
        "Lança-chamas pesado usado por Kane em situações de combate extremo. Equipado com um tanque de combustível de alta capacidade, era capaz de criar uma parede de fogo devastadora contra inimigos.",
    },

    "Pistolas Extremamente Pesadas": {
      imagem: "img/itens/pistolas-pesadas.png",
      descricao:
        "Duas pistolas de grande calibre, modificadas para aumentar o poder de fogo e a precisão. Kane as utilizava como armas secundárias em combates próximos, confiando em sua potência para dominar adversários.",
    },

    "Pulseiras de couro e metal": {
      imagem: "img/itens/pulseiras-couro-metal.png",
      descricao:
        "Pulseiras robustas feitas de couro reforçado com placas de metal. Kane as usava como parte de seu estilo pessoal, mas também ofereciam proteção adicional para os pulsos durante combates corpo a corpo.",
    },

    "Pingente metálico com o símbolo da XIII": {
      imagem: "img/itens/pingente-xiii.png",
      descricao:
        "Pingente de metal com o emblema da Organização XIII. Kane o usava como um símbolo de lealdade ao grupo e como um lembrete constante de sua missão contra as corporações.",
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

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Solo de elite, estilo Blackhand: versátil, rápido, agressivo, especialista em táticas urbanas e infiltração.",
  modoTrabalho:
    "Caótico-bom ou neutro-bom — agressivo, imprevisível, mas moralmente guiado.",
  espacoTrabalho: "Toda região de Night City.",
  clientes:
    "Esconderijos improvisados da Organização XIII, setores abandonados, mercados ilegais, etc.",
};
