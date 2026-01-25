// Priya.js
// Ficha completa de Priya

personagens.Priya = {
  // Identificação básica
  nome: "Priya Ellison",
  funcao: "Solo | Ex-Militar | Sniper Punk Grunge",
  id: "43-5499-00",
  foto: "img/Personagens/Priya.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "New Salem, Dakota do Norte, NEUA",
  dataNascimento: "20/JAN/2060",
  idade: 32,
  altura: "2,15 m",
  peso: "112 kg",

  // Citação e objetivo
  citacao:
    "“Os únicos que podem atirar são aqueles que estão preparados para levar o tiro.”",
  objetivoVida:
    "Salvar pessoas que o sistema considera descartáveis. E secretamente deseja destruir todas as instituições que operam sob métricas de morte.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Calma sob pressão, disciplinada, letal quando necessário, intensa, emocionalmente contida. Tem moral interna rígida e zero tolerância à injustiça.",
  comportamentoSocial:
    "Reservada e observadora. Costuma falar pouco. Acredita que ações valem mais do que discursos. Costuma parecer intimidante à primeira vista, mas é extremamente protetora com quem confia.",
  motivacao:
    "Redimir o uniforme que um dia vestiu — provar que força e moral ainda podem coexistir. Ela luta por justiça verdadeira, mesmo que precise agir fora da lei.",
  valoresCentrais:
    "Honra, lealdade e proteção dos fracos. Nunca virar as costas a quem confia em você.",
  visaoPessoas:
    "“A maioria não quer maldade. Só não está disposta a lutar por quem precisa.”",
  oQueValoriza:
    "Coragem, honestidade e o vínculo entre aqueles que lutam lado a lado.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Avô: Arthur Ellison, comandante aposentado, rígido, patriota, treinador militar cruel.",
    "Avó: Evelyn Ellison, ex-enfermeira de guerra, empática; ensinou limites éticos.",
    "Pai: General Michael Ellison, distante, frio, sempre preocupado com a imagem política.",
    "Mãe: Margaret Ellison, figura ausente, ligada a círculos corporativos do governo.",
  ],
  pessoaMaisImportante:
    "Atualmente, os Dandelions como unidade — mas emocionalmente, Viole simboliza tudo o que ela acredita que um líder deveria ser: humano.",
  tragedia: [
    "O avô faleceu enquanto Priya estava em missão, e o comando negou liberação para o funeral alegando “baixo impacto para a tropa”.",
    "Priya nunca se perdoou por não se despedir.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Aos 17 anos, ingressou nas Forças Armadas dos Novos Estados Unidos.",
    "Formou-se entre os melhores atiradores da unidade e ganhou destaque como líder de esquadrão. Mas o prestígio se desfez ao perceber o que o sistema realmente era: uma corporação armada, mascarada de patriotismo.",
    "Durante a Operação Santo Domingo, Priya testemunhou drones abrindo fogo contra civis durante a caça a um suposto terrorista — que, na verdade, era um jornalista. Ela desligou o comunicador, abandonou o fuzil padrão e desapareceu sob o neon da cidade.",
    "Nunca mais olhou para trás.",
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
        "Priya confia nele mais do que confiou em qualquer outro oficial. Admira sua coragem, honestidade e a forma humana com que lidera, mesmo quando isso o coloca em risco. Reconhece suas falhas e não o idealiza, mas acredita que líderes precisam de coração — e Viole tem até demais.",
    },

    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Priya aprecia o equilíbrio entre inteligência e sensibilidade de Tessia. Embora não conversem muito, sente um impulso instintivo de permanecer por perto quando Tessia está presente, como se estivesse sempre em modo de guarda silenciosa.",
    },

    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Respeito absoluto. Para Priya, Kimber é o pilar que mantém todos vivos quando tudo desmorona. Confia em suas decisões sem questionar e reconhece sua importância estratégica e prática.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Quieto, às vezes irritante com seus memes fora de hora, mas alguém em quem Priya confia silenciosamente. Demonstra cuidado de forma prática, obrigando-o a beber água e a se cuidar.",
    },

    Cypher: {
      tipo: "neutral",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Priya gosta dos hologramas e considera a linguagem visual dele extremamente inteligente, mesmo sem compreendê-la totalmente. Não conversam muito, mas ela admira sua expressão artística, especialmente quando ele dança.",
    },

    Nyx: {
      tipo: "neutral",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Gosta de ouvir suas músicas, especialmente quando Nyx canta My Chemical Romance e Evanescence. A música funciona como uma válvula emocional para Priya, mesmo que ela nunca verbalize isso.",
    },

    Shinigami: {
      tipo: "friend",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Vínculo silencioso de soldados. Não precisam conversar; apenas existir lado a lado é suficiente. Compartilham honra, disciplina e uma compreensão profunda do peso da guerra.",
    },

    "Serena Ashbourne": {
      tipo: "neutral",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Priya a acha teatral, dramática e excessivamente ostentosa. Ainda assim, reconhece seu talento, influência e o impacto real que Serena exerce no mundo e nas pessoas ao redor.",
    },

    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Aprecia sua lógica compassiva e o esforço ativo em buscar humanidade. No início, Priya se sentia desconfortável com a ideia de um 'robô emocional', mas hoje confia nele plenamente.",
    },

    Lyra: {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Priya enxerga em Lyra uma humanidade que falta em muitos humanos. Admira a simplicidade direta com que ela vê o mundo e encontra conforto nessa clareza.",
    },

    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Faz Priya rir contra a vontade, o que ela considera irritante… e terapêutico. Seu caos leve equilibra o peso emocional que ela carrega. Não admite, mas adora tomar refrigerante com ele na garagem.",
    },

    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Treinam juntos sempre que possível. Priya o vê como confiável, forte e surpreendentemente carismático. Respeita sua disciplina e habilidade física; já apostaram quem quebraria uma porta primeiro.",
    },

    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Priya não entende nem tenta entender sua religião. Mantém uma distância segura, respeitando limites e evitando conflitos desnecessários.",
    },

    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Gosta bastante dele, mas jamais admitiria. Às vezes o chama de 'coisa', mas o protege instintivamente. Brinca com ele quando ninguém está olhando, revelando afeto genuíno.",
    },

    "Tenente Mira Vaughn": {
      tipo: "ex",
      foto: "img/Personagens/Mira.png",
      descricao:
        "Antiga paixão de Priya durante o serviço militar. O relacionamento foi proibido e terminou de forma abrupta, deixando marcas emocionais que contribuíram para sua dificuldade em se permitir sentir novamente.",
    },

    Macrosoft: {
      tipo: "enemy",
      foto: "img/Personagens/Macrosoft.png",
      descricao:
        "Corporação responsável pelo CitizenSight™. Priya roubou o chip que expunha o software letal algorítmico, levando a empresa à ruína pública e tornando-se um alvo permanente.",
    },

    "Houndsight Security": {
      tipo: "enemy",
      foto: "img/Personagens/Houndsight.png",
      descricao:
        "Após a queda da Macrosoft, Priya expôs falhas críticas que resultaram na humilhação corporativa da Houndsight. Seus diretores perderam contratos bilionários e nunca a perdoaram.",
    },

    "General Michael Ellison": {
      tipo: "enemy",
      foto: "img/Personagens/General_Michael.png",
      descricao:
        "Pai de Priya. Sua reputação foi manchada quando ela desertou. Desde então, tenta silenciá-la para proteger sua carreira e imagem pública, criando um conflito profundo entre sangue e ideologia.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Priya não conhece, mas sabe que Oliver o quer morto. Ela sabe que Raze traiu seus amigos e se juntou à Arasaka, e como Oliver a ajudou, ela está disposta a lutar contra Raze por seu capitão.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    fonesCriptografados: {
      imagem: "img/itens/Fones_Auriculares.png",
      descricao:
        "Fones auriculares internos de uso militar, projetados para comunicação criptografada de curto alcance. Discretos e quase invisíveis, permitem receber ordens e transmitir informações sem levantar suspeitas, mesmo em ambientes hostis.",
    },

    relogioTatico: {
      imagem: "img/itens/Relógio_Tático.png",
      descricao:
        "Relógio de pulso militar modificado artesanalmente, equipado com sensores térmicos capazes de detectar variações de calor no ambiente. Mais do que marcar o tempo, funciona como uma extensão de seus instintos em campo.",
    },

    braceleteIdentificacao: {
      imagem: "img/itens/Bracelete_Identificação.png",
      descricao:
        "Bracelete fino e aparentemente comum, mas com uma gravação oculta em seu interior: o antigo número de identificação militar. É o único fragmento físico que restou de seu passado — e um lembrete silencioso de quem ele foi.",
    },

    riflePrecisao: {
      imagem: "img/itens/Hecate_V.png",
      descricao:
        "Rifle de precisão personalizado, modelo “PGM Ultima Ratio Hecate V”. Ajustado milimetricamente ao seu estilo de tiro, combina alcance extremo, estabilidade impecável e confiabilidade absoluta. Uma arma feita para decisões sem margem de erro.",
    },

    pingenteCapsula: {
      imagem: "img/itens/Pingente_Cápsula.png",
      descricao:
        "Pingente contendo uma cápsula vazia de munição. Não representa tiros disparados, mas sim vidas poupadas. Cada risco microscópico na superfície carrega uma escolha feita para não puxar o gatilho.",
    },

    vinilNirvana: {
      imagem: "img/itens/Vinil_Nirvana.png",
      descricao:
        "Disco de vinil riscado da banda Nirvana, herdado de sua avó. Apesar dos estalos e falhas no som, guarda memórias de um tempo mais simples, onde a música era refúgio e não havia ordens para cumprir.",
    },

    baionetasAntigas: {
      imagem: "img/itens/Coleção_Baionetas.png",
      descricao:
        "Coleção de baionetas antigas pertencentes a seu avô. Cada lâmina apresenta marcas do tempo e de conflitos passados, funcionando mais como relíquias históricas do que armas — símbolos de gerações moldadas pela guerra.",
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
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    Cyberleg: {
      descricao:
        "Prótese cibernética de membro inferior desenvolvida para substituição total da perna orgânica. Oferece mobilidade aprimorada, estabilidade estrutural e integração com módulos de desempenho físico, mantendo padrões elevados de segurança biomecânica.",
    },
    "Enhanced Antibodies": {
      descricao:
        "Tratamento biocibernético focado no fortalecimento do sistema imunológico e nos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
    },
    "Grapple Hand": {
      descricao:
        "Sistema de mobilidade tática integrado à prótese de braço, permitindo o disparo controlado da mão acoplada a um cabo de ancoragem de longo alcance. Ideal para escalada urbana, travessias verticais e acesso rápido a zonas elevadas.",
    },
    "Grip Foot": {
      descricao:
        "Módulo de tração avançada instalado em próteses de membros inferiores, projetado para maximizar aderência em superfícies irregulares ou verticais. Otimiza deslocamento em ambientes industriais, urbanos ou naturais de alta complexidade.",
    },
    "Jump Booster": {
      descricao:
        "Sistema de propulsão hidráulica integrado aos membros inferiores, projetado para ampliar a impulsão vertical e controle de aterrissagem. Otimiza deslocamentos em ambientes urbanos densos, zonas industriais e operações de mobilidade avançada.",
    },
    "Low Light / Infrared / UV": {
      descricao:
        "Conjunto óptico multiespectral que amplia drasticamente a capacidade de percepção visual em condições adversas. Permite leitura precisa do ambiente em cenários de baixa luminosidade, interferência atmosférica ou espectros invisíveis ao olho humano.",
    },
    MicroOptics: {
      descricao:
        "Sistema óptico de ampliação extrema integrado à visão cibernética. Ideal para vigilância, análise técnica, inspeção de precisão e operações que exigem observação detalhada a longas distâncias.",
    },
    "Shift Tacts": {
      descricao:
        "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas tanto para adaptação ambiental quanto para personalização estética ou padronização visual corporativa.",
    },
    "Skate Foot": {
      descricao:
        "Sistema de locomoção integrado aos pés, composto por mecanismos retráteis de deslizamento linear. Desenvolvido para deslocamento rápido em ambientes urbanos e industriais, mantendo perfil oculto quando não está em uso.",
    },
    Skinwatch: {
      descricao:
        "Dispositivo cronológico subdérmico com interface visual discreta. Oferece acesso rápido a informações temporais e sincronização com sistemas pessoais ou corporativos, eliminando a necessidade de dispositivos externos visíveis.",
    },
    "Subdermal Armor": {
      descricao:
        "Sistema avançado de blindagem subcutânea distribuída por todo o corpo, utilizando materiais de alta densidade e absorção de impacto. Projetado para ambientes de risco elevado, oferecendo proteção superior sem comprometer a ergonomia.",
    },
    "Targeting Scope": {
      descricao:
        "Sistema óptico de assistência visual que otimiza a aquisição e o foco em alvos específicos. Amplamente utilizado em contextos de segurança, aplicação da lei e operações de precisão.",
    },
    Techhair: {
      descricao:
        "Implante capilar sintético com emissão controlada de luz e cor. Desenvolvido para personalização estética avançada, identidade visual corporativa e expressão individual em ambientes urbanos de alta tecnologia.",
    },
    TeleOptics: {
      descricao:
        "Sistema óptico de ampliação visual de longo alcance que permite observação detalhada a grandes distâncias. Utilizado para vigilância, reconhecimento e suporte a operações de precisão.",
    },
    "Web Foot": {
      descricao:
        "Modificação estrutural nos pés que otimiza a locomoção aquática por meio de superfícies de propulsão discretas. Desenvolvido para operações anfíbias ou ambientes urbanos alagados.",
    },
    "Kill Display": {
      descricao:
        "Sistema dérmico de exibição luminosa que apresenta contadores personalizados sob a pele. Desenvolvido para ambientes onde intimidação, reputação ou identidade simbólica fazem parte da presença do usuário, com forte apelo visual e psicológico.",
    },
    "Berserk Implant": {
      descricao:
        "Implante de regulação neuro-hormonal projetado para otimizar respostas fisiológicas em situações de estresse extremo. Atua ajustando a liberação de adrenalina, cortisol e outros agentes químicos, maximizando reflexos, resistência e agressividade controlada durante cenários de ameaça iminente.",
    },
    "Gorilla Arm": {
      descricao:
        "Conjunto clássico de aprimoramentos estruturais para membros superiores artificiais, desenvolvido para trabalho pesado e aplicações industriais de alta demanda. Reconhecido por sua confiabilidade e durabilidade, é amplamente utilizado em setores de construção, logística, extração e segurança.",
    },
  },

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho: "",
  modoTrabalho: "",
  espacoTrabalho: "",
  clientes: "",
};
