// Oliver.js
// Ficha completa de Oliver "Viole" Miller

personagens.oliver = {
  // Identificação básica
  nome: 'Oliver "Viole" Miller',
  funcao: "Fixer | Fundador e Líder dos Dandelions | Ex-Organização XIII (Rank VI)",
  id: "38-4647-48",
  foto: "img/Personagens/Oliver.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Pacifica, Night City",
  dataNascimento: "03/FEB/2065",
  idade: 26,
  altura: "1,83 m",
  peso: "73 kg",

  // Citação e objetivo
  citacao: "“Se suas falas não impedem balas, você precisa melhorar.”",
  objetivoVida:
    "Transformar sua história marcada por violência em um novo caminho, criando oportunidades e proteção para aqueles que fogem da sombra das corporações.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Resiliente, analítico, empático em silêncio. Sofre de sintomas de TEPT, mas mantém controle por meio de rotinas rígidas e autocontenção emocional.",
  comportamentoSocial:
    "Mantém postura calma e protetora, especialmente com aliados. Pode ser brusco com estranhos ou inimigos.",
  motivacao:
    "Remissão. Busca transformar sua dor em algo útil, ajudando e protegendo outros para que não sofram o mesmo destino.",
  valoresCentrais:
    "Lealdade, sacrifício e responsabilidade. Não gosta de promessas, pois teme que não consiga cumprir.",
  visaoPessoas:
    "Acredita que todos carregam dor, mas poucos têm coragem de confrontá-la. Não confia facilmente, mas quando confia, é profundo.",
  oQueValoriza:
    "Honestidade direta, responsabilidade pelas próprias escolhas, silêncio confortável, e a capacidade de continuar mesmo quando tudo aperta.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Elena Miller, técnica em manutenção industrial – falecida em 2071 durante parto.",
    "Pai: Derek Miller, operário e contrabandista associado à gangue Laminares – responsável acidental pela morte de Emily Miller, cometeu suicídio logo após.",
    "Irmã: Emily Miller, falecida em 2079 aos 8 anos.",
  ],
  pessoaMaisImportante:
    "Tessia Amberine — parceira de vida e apoio emocional inabalável.",
  tragedia: [
    "Em 2079, durante confronto entre gangues causado pelos Laminares, sua irmã Emily foi morta acidentalmente por seu próprio pai, Derek.",
    "O evento resultou no suicídio do pai diante de Oliver.",
    "O trauma o marcou permanentemente, levando à introspecção e ao desejo de criar algo que substituísse a “família” que perdeu.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Nascido em Pacifica, sobreviveu à infância em uma das megaestruturas mais degradadas da cidade. Criado por uma mãe afetuosa e um pai ausente, viu o lar ruir após a morte materna. Aos 11 anos, ingressou na Organização XIII para proteger a irmã e sobreviver.",
    "Aos 14, testemunhou a morte de Emily — acidentalmente alvejada pelo próprio pai durante uma emboscada entre gangues. O evento quebrou emocionalmente Oliver, selando seu silêncio e moldando sua frieza.",
    "Durante a adolescência, foi treinado por Kane Graves, que o apresentou à música e ao conceito de disciplina. Fundou a banda Ghouls ’n Ghosts, que serviu como refúgio emocional.",
    "Posteriormente atuou como mercenário independente, sendo recrutado pela fixer Tessia Amberine (“Phantom”). Tornou-se seu parceiro e, eventualmente, amante. Após o desaparecimento de Tessia, entrou em colapso emocional.",
    "A tentativa de recomeço com Kane culminou em 2085, durante uma operação contra a Arasaka, quando foi traído por Raze Lambert. A explosão que matou Kane também desfigurou Oliver, levando à reconstrução facial.",
    "Três anos depois, fundou os Dandelions, reunindo exilados e sobreviventes para criar algo que a cidade não pudesse apagar",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Tessia Amberine": {
      tipo: "romantic",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Tessia é a pessoa mais importante da vida de Oliver. Com Tessia, ele não precisa fingir força, nem esconder as rachaduras. Ela é a única presença que o faz sentir que existe um lar possível, mesmo num mundo que tentou quebrá-lo tantas vezes. Ele está disposto a fazer qualquer coisa para protegê-la.",
    },

    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Para Oliver, Kimber é um tipo raro de pessoa que enxerga além da postura fria e do sarcasmo que ele usa como armadura. Ele a vê como a pessoa que o manteve de pé quando ele mesmo não acreditava que ainda conseguisse.",
    },

    "Murphy Elliot": {
      tipo: "friend",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Murphy é um ponto fixo no mapa emocional de Viole. Quando está no limite, ele vai até o Rusted Note. Para Viole, ele não é só o bartender favorito: é um tipo de irmão mais velho que a vida colocou depois de ter tirado todos os outros.",
    },

    "Seraphine Volkov": {
      tipo: "friend",
      foto: "img/Personagens/Sera.png",
      descricao:
        "Sera é uma antiga ferida que nunca cicatrizou. Não por culpa, mas por memória. Ela representa decisões antigas que o definiram, perdas que ele não conseguiu impedir e um juramento que influenciou todo seu cuidado com Tessia.",
    },

    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher era irritante, mas também fazia Viole rir quando menos queria. A morte dele deixou uma culpa permanente em Oliver. Uma sensação de que ele deveria ter sido mais rápido, mais atento, mais alguma coisa.",
    },

    Nyx: {
      tipo: "friend",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Viole confia em Nyx porque sabe que ela é leal até o fim. Ele reconhece o amor que ela tinha por Cypher e respeita esse sentimento profundamente. Ele não fala muito sobre isso, mas vê em Nyx alguém que compreende como é perder algo precioso.",
    },

    Shinigami: {
      tipo: "friend",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "A relação de Oliver com Shinigami é construída sobre respeito. Ele confia no samurai urbano porque vê nele alguém que carrega cicatrizes semelhantes às suas. Oliver prometeu ajudá-lo a encontrar Izanami, mesmo que ele odeie fazer promessas.",
    },

    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Oliver nunca sabe exatamente onde pisa quando está perto dela. Ele fica desconcertado com suas provocações, mas também sabe que sem ela, o grupo talvez nunca tivesse sobrevivido por tanto tempo.",
    },

    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Para Oliver, Ninvega não é uma máquina. É uma vida. Ele confia no médico androide porque vê nele algo que o mundo insiste em ignorar nos sintéticos.Viole acredita que Ninvega pode mudar a forma como o mundo enxerga a consciência artificial.",
    },

    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Oliver gosta de Dominic pelo jeito direto, pelo humor estranho e pela força física absurda que nunca o decepcionou em missão. Para Viole, Dominic é o tipo de aliado que você quer ao lado quando tudo desaba.",
    },

    Lyra: {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Viole vê Lyra como alguém que ainda está descobrindo o mundo, e isso desperta nele um instinto protetor. Ele fica inquieto quando Lyra vai para missões arriscadas, e faz o possível para mantê-la fora de perigo.",
    },

    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Priya é força pura. Oliver respeita o foco, a disciplina, e a capacidade de enfrentar qualquer ameaça sem hesitar. Treinar com ela é uma forma de se testar, e ele melhorou muito graças à parceria dos dois.",
    },

    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Para Oliver, Ícaro é barulhento, imprevisível e confiável. Eles têm uma sintonia perfeita em corridas: Ícaro no volante, Oliver nas armas. A competição entre os dois é amigável, mas Oliver nunca admite o quanto fica irritado por estar perdendo por 4x3.",
    },

    "Kleber Junior": {
      tipo: "friend",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Kleber é um mistério que Oliver não tenta mais resolver. Ele nunca sabe se ele é um profeta, um louco ou uma piada cósmica. Viole o deixa quieto porque percebeu que tentar entender ele é pelo menos metade da dor de cabeça.",
    },

    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Mirai é mais do que um robô: é a pequena prova de que Oliver ainda é capaz de se apegar. Eles são literalmente conectados, Mirai sente quando algo está errado e alerta o resto do grupo. Qualquer um que tente atacar Mirai, se tornará inimigo de Viole.",
    },

    "Kane Graves": {
      tipo: "family",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Kane foi tudo o que Oliver precisava na adolescência: mentor, guia, modelo de disciplina e a figura mais próxima de um irmão mais velho. A morte dele é o segundo maior arrependimento da vida de Viole.",
    },

    "Ivy Naranjo": {
      tipo: "ex",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Ivy e Oliver tiveram um relacionamento intenso quando estavam na Organização XIII. Ivy era ambiciosa e determinada, e Oliver se sentia atraído por sua força de vontade. No entanto, ela desejava sair de Night City para buscar uma vida diferente, enquanto Oliver ainda se via preso à cidade e às suas responsabilidades. Eles tiveram suas discussões, e eventualmente decidiram terminar o relacionamento de forma amigável, reconhecendo que seus caminhos estavam se separando.",
    },

    "Emily Miller": {
      tipo: "family",
      foto: "img/Personagens/Emily.png",
      descricao:
        "Emily é a ferida eternamente aberta. Sua irmã era tudo para ele, o motivo pelo qual entrou na Organização XIII, o motivo pelo qual permaneceu vivo na época. A forma como ela morreu destruiu Oliver, e a culpa de não tê-la protegido nunca desapareceu. Ele carrega a memória dela como um lembrete constante do que perdeu e do que precisa proteger nos outros.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "No passado, eles eram parceiros na Organização XIII. Raze era alguém em quem Oliver confiava o suficiente para entrar em operações de alto risco ao lado dele. Porém, tudo ruiu quando Raze traiu Oliver durante uma missão, o que levou a morte de Kane Graves e deixou Oliver gravemente ferido. Desde então, Raze se tornou não apenas um inimigo, mas a personificação da maior ferida e quebra de confiança na vida de Oliver.",
    },

    "Dakota Veyriss": {
      tipo: "enemy",
      foto: "img/Personagens/Dakota.png",
      descricao:
        "Dakota foi o motivo pelo qual Oliver abandonou a Organização XIII. Ela era uma Solo implacável, e sua ambição desmedida colocou Oliver para assassinar crianças à sangue frio. A dependência dela pelos implantes a tornavam cada dia mais instável, e Oliver não podia mais fazer parte daquilo. Ele a vê como um símbolo do que ele rejeita: a perda de humanidade em troca de poder.",
    },

    Arasaka: {
      tipo: "enemy",
      foto: "img/arasaka/arasaka-logo.png",
      descricao:
        "Oliver vê a Arasaka como a materialização da maldade corporativa. A ambição, os métodos brutais e a falta de ética da Arasaka causaram sofrimento incalculável a ele e a muitos outros. Ele está determinado a desmantelar suas operações sempre que possível, vendo isso como uma forma de justiça para as vítimas da corporação. E mesmo sabendo que existem outras corporações igualmente perigosas, a Arasaka representa para Oliver o inimigo número um a ser combatido.",
    },

    "Nathaniel Amberine": {
      tipo: "enemy",
      foto: "img/Personagens/Nathaniel.png",
      descricao:
        "O pai de quem Oliver mais ama, e ao mesmo tempo, o símbolo máximo daquilo que ele odeia. Nathaniel representa a corrupção, a ganância e a crueldade que a Arasaka tenta esconder. Oliver o vê como um inimigo pessoal, não apenas por suas ações como executivo da Arasaka, mas também pelo jeito que tratou Tessia. Ele está determinado a derrubar Nathaniel, não apenas como um ato de vingança, mas como uma forma de proteger aqueles que ama.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  pertencesImportantes: {
    "Primeiro Baixo": {
      imagem: "img/itens/oliver-baixo-original.png",
      descricao:
        "Primeiro instrumento de Oliver, presente de Kane. Possui marcas de uso pesado e customizações improvisadas.",
    },

    "Foto de Emily": {
      imagem: "img/itens/oliver-foto-emily.png",
      descricao:
        "Foto antiga, tirada antes da morte de Emily. Oliver a guarda como um lembrete da vida que perdeu.",
    },

    Hoverboard: {
      imagem: "img/itens/oliver-hoverboard.png",
      descricao:
        "Meio de transporte favorito de Oliver pelas ruas estreitas de Night City.",
    },

    "Espada Absolution": {
      imagem: "img/itens/oliver-espada.png",
      descricao:
        "Espada personalizada, feita por Kimber sob medida para Oliver. Feita de uma liga de aço leve e resistente, com detalhes em branco, roxo e dourado.",
    },

    "Lista digital de ranking de cafés": {
      imagem: "img/itens/oliver-lista.png",
      descricao:
        "Lista onde Oliver anota e classifica os melhores cafés que já experimentou em Night City.",
    },

    "Máscara de Combate Danificada: Pierrot": {
      imagem: "img/itens/Pierrot - Desgastada.png",
      descricao:
        "A primeira máscara que Oliver utilizou. Foi feita à mão por ele mesmo, mas devido a sua fragilidade, ela foi extremamente danificada em uma missão e substituída pela máscara H.U.S.H.",
    },

    "Máscara de Combate Danificada: H.U.S.H": {
      imagem: "img/itens/H.U.S.H - Desgastada.png",
      descricao:
        "H.U.S.H ou Harmonic Ultrasound Spatial Harness, era uma máscara de ferro, criada por Elliot Murphy para Oliver. Essa máscara tinha um sistema chamado de 'Hollow Voice', um sistema de modulação vocal com três canais que sobrepõem ecos e reverberações leves, criando uma voz múltipla. Serve tanto para intimidação quanto para ocultação de identidade. Contudo, o uso prolongado aquecia demais o módulo de som, o que obrigava Oliver a desligar o sistema. Devido a esses problemas, Oliver a substituiu pela máscara Red Skull.",
    },

    "Traje de Combate Danificado: Traje Red Skull": {
      imagem: "img/itens/Red Skull - Desgastada.png",
      descricao:
        "Criado por Kimber Destaro, o Traje Red Skull abandonava a abordagem acústica da H.U.S.H. para focar totalmente em combate. Equipado com o DGS (Double Gear System), permitia a Oliver acionar picos breves de força (Power Gear) ou acelerar seus movimentos (Speed Gear). O uso, porém, exigia demais do corpo, drenando suas energias rapidamente. Em sua última missão, Oliver forçou ambos os Gears simultaneamente, causando danos irreversíveis ao traje e à unidade DGS, tornando-o inutilizável. Devido a esses danos, Oliver substituiu o Red Skull pela máscara Eclipse.",
    },

    "Máscara de Combate Danificada: Eclipse": {
      imagem: "img/itens/Eclipse - Desgastada.png",
      descricao:
        "Criada por Kimber Destaro, a Máscara Eclipse utiliza a tecnologia CrystalCoat, permitindo que sua superfície altere de cor manualmente ou de forma autônoma. Essa adaptação dinâmica a torna ideal para infiltração e operações furtivas, camuflando o usuário em diferentes ambientes sem comprometer mobilidade ou sigilo. A Eclipse, porém, foi aposentada após sofrer danos irreversíveis durante a explosão em um dos armazéns da Arasaka, em Watson, em 19 de novembro de 2085.",
    },

    "Máscara de Combate Danificada: Mirage": {
      imagem: "img/itens/Mirage - Desgastada.png",
      descricao:
        "A Mirage era um protótipo de máscara de gás recuperado e restaurado por Kimber. Embora aparentemente simples, possuía um módulo de interface neural defeituoso que infiltrava a mente do usuário como um vírus, distorcendo memórias e provocando alucinações vívidas. Extremamente viciante, Oliver resistiu a abandoná-la até 2087, quando afirmou ter “entrado em contato direto com uma poderosa fonte de energia”. Desde então, a Mirage foi inutilizada, provavelmente com seus circuitos completamente queimados.",
    },

    "Máscara de Combate: ΛN0MΔLY": {
      imagem: "img/itens/ΛN0MΔLY.png",
      descricao:
        "A ΛN0MΔLγ representa o ápice da engenharia clandestina de Kimber Destaro e Elliot Murphy — uma convergência impossível entre finesse artesanal e tecnologia experimental. Projetada sobre uma liga leve derivada da CrystalCoat, mas completamente reprojetada em sua microestrutura, a ΛN0MΔLγ é um artefato capaz de alterar a voz em tempo real de forma clara e controlada, identifica rotas de fuga e pontos cegos, e se camufla de forma dinâmica e adaptativa. Ela é, de certo modo, um memorial tecnológico da trajetória de Oliver, reconstruído peça por peça até sua forma mais perfeita.",
    },

    "Máscara de Apresentação: Vermillion": {
      imagem: "img/itens/Vermillion.png",
      descricao:
        "Máscara estilizada utilizada por Oliver durante apresentações musicais. Ele utiliza o nome artístico 'Vermillion' quando está no palco.",
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

    "Light Tattoo": {
      descricao:
        "Implantes subdérmicos fotoluminescentes capazes de projetar padrões visuais diretamente sob a pele. Combina expressão estética avançada com identidade visual personalizada para ambientes sociais, corporativos ou artísticos.",
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

    "Sandevistan Speedware": {
      descricao:
        "Sistema de aceleração neural temporária que amplia drasticamente a percepção do tempo e a velocidade de resposta do usuário. Projetado para operações críticas de curta duração.",
    },

    "Shift Tacts": {
      descricao:
        "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas tanto para adaptação ambiental quanto para personalização estética ou padronização visual corporativa.",
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
  },

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Fixer autônomo com especialização em obtenção de informações, mediação de conflitos e operações de infiltração.",
  modoTrabalho:
    "Cauteloso, calculado e silencioso. Avalia riscos antes de agir e prefere soluções estratégicas a confrontos diretos.",
  espacoTrabalho:
    "Combinação de base improvisada dos Dandelions e múltiplos pontos de apoio espalhados pela cidade.",
  clientes:
    "Independentes, pequenos grupos de resistência, freelancers e indivíduos que buscam proteção fora das corporações.",
};
