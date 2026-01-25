// Serena.js
// Ficha completa de Serena Ashbourne

personagens.serena = {
  // Identificação básica
  nome: "Serena Ashbourne",
  funcao: "Executiva | Financiadora dos Dandelions | Estrategista Econômica",
  id: "59-6174-20",
  foto: "img/Personagens/Serena.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Londres, Inglaterra",
  dataNascimento: "14/AUG/2056",
  idade: 36,
  altura: "1,73 m",
  peso: "55 kg",

  // Citação e objetivo
  citacao: "“A liberdade é um investimento de longo prazo.”",
  objetivoVida:
    "Desestabilizar o sistema corporativo global de dentro — comprando, manipulando e desviando recursos.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Carismática, narcisista lúcida, estrategista, charmosa, manipuladora quando necessário. Serena é a síntese da contradição: altruísta por cálculo, fria por empatia. É uma idealista que entendeu que idealismo sem influência é só poesia.",
  comportamentoSocial:
    "Brilhante e teatral. Serena gosta de ser o centro das atenções, mas raramente revela mais do que quer. É a mulher que encanta CEOs e rebeldes com o mesmo olhar — e que transforma conversas triviais em armadilhas elegantes. Flerta com o perigo, o poder e as pessoas.",
  motivacao:
    "Transformar o sistema de dentro para fora. Quer ver as megacorporações caírem, mas sabe que só conseguirá isso controlando o fluxo do capital, não empunhando armas.",
  valoresCentrais:
    "Estética, liberdade e impacto. Serena acredita que toda revolução precisa ser bonita — visualmente e filosoficamente. Sua fé está na influência, não na moral.",
  visaoPessoas:
    "Acredita que quase todo mundo tem um preço. Os que não têm… são os únicos que realmente a interessam.",
  oQueValoriza:
    "Controle, influência e autenticidade. Serena despreza quem se esconde atrás de discursos de virtude, mas admira quem encara o próprio caos de frente.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Elise Ashbourne, diretora de projetos humanitários e pianista aposentada. Gentil, idealista, visionária. Inspirou Serena a buscar mudanças sociais através do poder econômico.",
    "Pai: Jonathan Ashbourne, magnata e filantropo. engenheiro de implantes ópticos. Preciso, calculista e ambicioso. Ensinou Serena a importância das relações e da estratégia.",
    "Ambos falecidos em 2082, em circunstâncias naturais. Serena herdou o império e o remodelou em uma rede de influência global — metade corporação, metade revolução silenciosa.",
  ],
  pessoaMaisImportante: "Ela mesma.",
  tragedia: [
    "Embora os pais tenham morrido em paz, a perda dela foi simbólica: o fim do idealismo puro.",
    "Serena os amava, mas entendeu que o mundo não tem espaço para bondade ingênua — apenas para bondade armada.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criada na aristocracia tecnológica de Londres, Serena aprendeu cedo que o poder pode ser usado com propósito — ou com ego. Ela escolheu os dois.",
    "Estudou economia e engenharia política em Night City University, infiltrando-se entre futuros executivos da Arasaka e Biotechnica.",
    "Usou a aparência de socialite como camuflagem, investindo em grupos libertários, hackers, artistas de rua e ONGs disfarçadas de startups.",
    "Sua filosofia é simples: “Para mudar o sistema, primeiro compre a linguagem dele.”",
    "Tem um vício assumido em cigarros. Cresceu fumando Red October, até que um dia percebeu que já despejava tanto dinheiro na marca que seria mais prático simplesmente comprar tudo. Então comprou.",
    "Hoje, Red October é ao mesmo tempo vício pessoal, império privado e fachada corporativa: Serena usa a marca para movimentar recursos, esconder transações e enfiar mensagens cifradas de revolução em campanhas de marketing supostamente “estilosas”.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver “Viole” Miller": {
      tipo: "friend",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Serena o vê como um paradoxo humano — quebrado, mas ainda movido por uma fé quase ingênua na bondade. Não o admira como líder, e sim como símbolo de resistência moral. Uma alma que se recusa a se deixar ser destruída pelo mundo.",
    },
    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Serena nutre por Tessia um afeto protetor, misto de carinho e admiração. Enxerga nela alguém que merece cuidado em um mundo que exige dureza.",
    },
    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Uma relação baseada em respeito e eficiência. Serena vê em Kimber um reflexo de si mesma — porém despido de vaidade ou teatralidade.",
    },
    "Aiden “Wisp” Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Atraída pelo intelecto e pelo caos que ele provoca, Serena flerta com Aiden por diversão e estímulo mental.",
    },
    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher intriga Serena profundamente. Ela o vê como um poema em movimento — alguém cuja linguagem transcende o verbal. Já tentou, em vão, decifrar o que ele pensa.",
    },
    Nyx: {
      tipo: "friend",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Serena e Nyx compartilham o mesmo idioma: estética e poder. Ambas sabem que presença é uma arma, e voz — literal ou simbólica — é uma forma de domínio. A considera como a encarnação da melancolia romântica: bela, perigosa e impossível de ignorar.",
    },
    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Serena respeita seu silêncio e a força contida nele, reconhecendo no outro uma solidão semelhante à sua.",
    },
    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "A relação entre Serena e Ninvega é uma das mais genuínas que ela possui. Ela o enxerga como um idealista raro e investe em sua causa tanto por crença quanto por visão estratégica. Serena financia a LibertAI com entusiasmo sincero, mas também com cálculo: ela sabe que a causa dele representa o futuro.",
    },
    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Ela gosta de provocar seu temperamento exagerado e o acha um charme. Já flertou abertamente com ele em festas, apenas para ver o rosto dele corar sob o sotaque.",
    },
    Lyra: {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Serena a vê como uma flor tentando entender o sol. Há algo de profundamente comovente em observar Lyra aprendendo sobre emoções, ironia e humanidade.",
    },
    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Serena aprecia Priya pela autenticidade bruta. Embora pareçam opostas, Serena a respeita porque Priya nunca finge. As duas já brigaram feio uma vez por causa de uma operação, mas depois riram sobre isso com copos de uísque e cicatrizes novas.",
    },
    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Serena acha Ícaro um misto de santo, mecânico e piromaníaco. Serena reconhece algo nele que admira: ele vive como quer, sem pedir permissão.",
    },
    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Serena não entende a devoção dele, mas acha seu fanatismo quase artístico. Considera a fé dele um tipo de performance, algo entre o surreal e o comovente.",
    },
    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Serena o enxerga como um ícone afetivo e simbólico, uma mistura de mascote e entidade conceitual. Já pensou seriamente em transformá-lo na mascote oficial de uma de suas marcas.",
    },

    "Lucien Morane": {
      tipo: "ex",
      foto: "img/Personagens/Lucien.png",
      descricao:
        "Ex-dono de uma empresa britânica: Apex British Credit (ABC). Conheceram-se em uma exposição de arte pós-humanista. Durou quatro meses e terminou da forma mais Serena possível: ela comprou sua empresa e o demitiu com um brinde.",
    },
    "Dr. Adrian Voss": {
      tipo: "ex",
      foto: "img/Personagens/Adrian.png",
      descricao:
        "Serena investia na pesquisa dele e, simultaneamente, testava os limites entre afeto humano e sintético. Descobriu que Adrian estava mapeando suas respostas neurais sem consentimento.",
    },
    "Kane Graves": {
      tipo: "ex",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Se conhecram no Dark Matter. Química intensa, mas silenciosa. Serena nunca confirmou se houve algo mais. Kane foi morto meses depois por Raze Lambert. Serena compareceu ao funeral disfarçada, deixando uma única rosa branca.",
    },
    "Cassandra Keene": {
      tipo: "ex",
      foto: "img/Personagens/Cassandra.png",
      descricao:
        "Pianista da MSM Records. O romance mais “puro” de Serena. Cassandra foi morta em um atentado à EBM Records — oficialmente “acidente elétrico”, mas Serena sabe que foi sabotagem corporativa. Serena ainda guarda um fragmento de gravação de uma música inacabada, chamada “Pale Sonata.”",
    },
    "Natsumi Kimura": {
      tipo: "ex",
      foto: "img/Personagens/Natsumi.png",
      descricao:
        "Atriz e modelo japonesa. O relacionamento serviu para manter Serena no topo dos tabloides enquanto consolidava seus negócios em Tóquio. Foi um término amigável, embora Natsumi ainda use joias que Serena lhe deu.",
    },
    "Marcus Holloway": {
      tipo: "ex",
      foto: "img/Personagens/Marcus.png",
      descricao:
        "Ex-Prefeito de Seattle (2078–2082). Herdeiro político com fama de idealista. Se conheceram durante um congresso internacional sobre reconstrução climática.",
    },
    "Taria Navarro": {
      tipo: "ex",
      foto: "img/Personagens/Taria.png",
      descricao:
        "Fixer famosa de Londres, conhecida por misturar espionagem e arte performática. Serena a considerava uma igual, e as duas tiveram um caso breve, descrito por insiders como “duas rainhas conspirando em lençois de seda”.",
    },
    "Project ÉLODIE": {
      tipo: "romantic",
      foto: "img/Personagens/Élodie.png",
      descricao:
        "Uma IA experimental baseada na digitalização da consciência de uma antiga pianista francesa. Serena comprou o protótipo durante uma feira de tecnologia em Dubai. Serena conversa com ela todas as noites, chamando-a de “mon cœur de verre”. A IA responde em francês: “Et toi, ma lumière corrompue”.",
    },

    "Corporações Megacapitalistas": {
      tipo: "enemy",
      foto: "img/Personagens/Corporativos.png",
      descricao:
        "Elas subestimam Serena, sem perceber que ela as enfraquece silenciosamente por dentro. Ela os enfrenta com investimento silencioso, manipulação de mídia e sabotagem de mercado.",
    },
    "Família Oppenheim": {
      tipo: "enemy",
      foto: "img/Personagens/Oppenheim.png",
      descricao:
        "Antigos rivais corporativos expostos por corrupção após tentarem derrubar e absorver o império de Serena.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Brinco de Prata de Caveira": {
      imagem: "img/itens/brinco-caveira.png",
      descricao:
        "Presente de sua mãe, simboliza elegância sombria e a constante lembrança da mortalidade.",
    },
    "Colar de Prata de Caveira": {
      imagem: "img/itens/colar-caveira.png",
      descricao:
        "Também herdado de sua mãe, reforça sua estética refinada e sua relação íntima com o conceito de finitude.",
    },
    "Braço Metálico Cromado": {
      imagem: "img/itens/braco-cromado.png",
      descricao:
        "Implante que substitui seu braço esquerdo, com gravuras sutis que revelam cuidado estético e história pessoal.",
    },
    "Caninos Cibernéticos": {
      imagem: "img/itens/caninos-ciberneticos.png",
      descricao:
        "Substituições tecnológicas visíveis, inspiradas por sua fascinação por mitos vampíricos.",
    },
    "Chip Ashbourne Prime": {
      imagem: "img/itens/chip-ashbourne.png",
      descricao:
        "Chip de dados contendo registros financeiros e segredos corporativos de dezenas de conglomerados poderosos.",
    },
    "Manifestos da LibertAI": {
      imagem: "img/itens/manifestos-libertai.png",
      descricao:
        "Documentos da ONG que ela financia, defendendo os direitos e a autonomia de androides conscientes.",
    },
    "Isqueiro Ruthven": {
      imagem: "img/itens/isqueiro-ruthven.png",
      descricao:
        "Isqueiro antigo com as iniciais “T.R.” gravadas, usado sempre que precisa refletir ou tomar decisões difíceis.",
    },
    "Gravação “Pale Sonata”": {
      imagem: "img/itens/gravação-pale-sonata.png",
      descricao:
        "Fragmento de uma composição inacabada de Cassandra Keene, lembrança do amor perdido e da fragilidade da vida.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
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

    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
    },

    "Low Light / Infrared / UV": {
      descricao:
        "Conjunto óptico multiespectral que amplia drasticamente a capacidade de percepção visual em condições adversas. Permite leitura precisa do ambiente em cenários de baixa luminosidade, interferência atmosférica ou espectros invisíveis ao olho humano.",
    },

    "Nasal Filter": {
      descricao:
        "Sistema de filtragem respiratória interna que neutraliza partículas tóxicas, gases industriais e contaminantes atmosféricos. Essencial para ambientes poluídos, laboratórios e zonas de risco químico.",
    },

    Techhair: {
      descricao:
        "Implante capilar sintético com emissão controlada de luz e cor. Desenvolvido para personalização estética avançada, identidade visual corporativa e expressão individual em ambientes urbanos de alta tecnologia.",
    },

    Vampyres: {
      descricao:
        "Sistema de implante oral com estruturas cortantes de alta precisão. Projetado para aplicações defensivas extremas, mantendo total ocultação e integração anatômica quando inativo.",
    },

    Wolvers: {
      descricao:
        "Conjunto de lâminas extensíveis integradas às articulações dos dedos, fabricadas em material de altíssima resistência. Projetadas para confrontos diretos, mantendo ocultação total quando retraídas.",
    },

    "Lead's Turn-On-Show-Off Nails": {
      descricao:
        "Conjunto completo de unhas cibernéticas programáveis com iluminação integrada. Permite personalização dinâmica de cores, padrões e efeitos visuais, oferecendo expressão estética avançada e diferenciação visual imediata.",
    },

    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link, Holophone, Biomonitor, Virtuality, HUD/Chyron, Shard Slots e Interface Plug, consolidando-se como infraestrutura essencial da sociedade contemporânea.",
    },
  },
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Ela é a CEO da Ashbourne Horizon, uma holding que funciona como fachada para operações políticas, financeiras e ideológicas. Seu trabalho real é manipular fluxos de capital, informação e poder para desestabilizar corporações dominantes e fortalecer redes independentes — especialmente a LibertAI.",
  modoTrabalho:
    "Serena trabalha por infiltração elegante e controle indireto. Em vez de confrontos diretos, ela compra, financia, influencia e redireciona capital. Seu estilo é sofisticado, estratégico e muitas vezes teatral, usando sua imagem pública como ferramenta de manipulação.",
  espacoTrabalho:
    "Serena não tem um escritório fixo tradicional. ua base formal é a Ashbourne Horizon, com sua sede em Londres. No entanto, ela opera majoritariamente de forma remota em Night City.",
  clientes:
    "Oficialmente, seus clientes são Startups tecnológicas, Empresas de bioengenharia e tecnologia avançada. Na prática, seus verdadeiros “clientes” são: A LibertAI, organização que protege inteligências artificiais conscientes, Redes clandestinas de resistência corporativa, Movimentos artísticos e políticos financiados discretamente e Ela mesma — já que muitas operações existem apenas para ampliar seu próprio alcance e influência",
};
