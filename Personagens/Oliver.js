// Oliver.js
// Ficha completa de Oliver Miller

personagens.oliver = {
  // Identificação básica
  nome: 'Oliver "Viole" Miller',
  funcao:
    "Fixer | Fundador e Líder dos Dandelions | Ex-Organização XIII (Rank VI)",
  id: "38-4647-48",
  foto: "img/Personagens/Oliver/Oliver Miller.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Pacifica, Night City",
  dataNascimento: "03/FEB/2065",
  idade: 27,
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

  relacoes: {
    // Aliado Incondicional
    "Tessia Amberine": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Tessia é a pessoa mais importante da vida de Oliver. Com ela, ele não precisa sustentar a máscara de líder invencível: ela conhece suas rachaduras, entende seus silêncios e é a única presença que faz a ideia de “lar” parecer possível.",
    },

    "Kane Graves": {
      tipo: "Aliado Incondicional",
      status: "Morto",
      foto: "img/Personagens/Kane/Kane Graves.png",
      descricao:
        "Kane foi mentor, irmão mais velho e o primeiro homem que ensinou Oliver a transformar dor em disciplina. Sua morte é uma das maiores culpas de Oliver, não só porque perdeu alguém essencial, mas porque sente que sobreviveu no lugar dele.",
    },

    "Kimber Destaro": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Kimber é família para Oliver. Ela viu além da frieza, cuidou dos implantes dele, o ajudou a se reerguer e se tornou uma das poucas pessoas diante de quem ele consegue baixar a guarda sem sentir que está ficando vulnerável demais.",
    },

    Mirai: {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Mirai é mais do que um robô para Oliver: é a pequena prova de que ele ainda consegue se apegar. A conexão entre os dois é quase instintiva, e qualquer ameaça contra Mirai automaticamente se torna uma ameaça pessoal contra Oliver.",
    },

    // Muito positivo
    "Elena Miller": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Oliver/Elena Miller.png",
      descricao:
        "Elena é a memória mais pura que Oliver ainda guarda da palavra “mãe”. Mesmo tendo morrido cedo, ela representa o pouco de calor doméstico que existiu antes de Pacifica, da XIII e da culpa transformarem Oliver em alguém silencioso.",
    },

    "Emily Miller": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Oliver/Emily Miller.png",
      descricao:
        "Emily é a ferida eternamente aberta de Oliver. Ela era sua irmã, seu motivo para entrar na Organização XIII e a pessoa que ele mais queria proteger; sua morte destruiu algo nele que nunca voltou inteiro.",
    },

    Ciel: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Ciel é filha adotiva de Oliver e Tessia, e por isso ocupa um espaço delicado no coração dele. Oliver a protege com uma intensidade quase silenciosa, como se cada cuidado com ela fosse uma forma de provar que ainda é capaz de construir família sem perdê-la.",
    },

    "Murphy Elliot": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Murphy é um ponto fixo no mapa emocional de Oliver. O Rusted Note virou abrigo, e Murphy virou uma espécie de irmão mais velho tardio: alguém que não exige explicações quando Oliver chega destruído demais para falar.",
    },

    "Seraphine Volkov": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Tessia/Seraphine Volkov.png",
      descricao:
        "Sera é uma memória antiga que Oliver trata com respeito quase sagrado. Ela representa uma promessa que ele nunca esqueceu, uma perda ligada diretamente ao cuidado que hoje dedica a Tessia e à raiva que sente por tudo que a Arasaka destruiu.",
    },

    Cypher: {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher irritava Oliver, confundia Oliver e, contra todas as probabilidades, fazia Oliver rir. Sua morte deixou em Oliver uma culpa silenciosa: a sensação de que deveria ter percebido antes, chegado antes ou protegido melhor.",
    },

    Nyx: {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Oliver confia em Nyx porque reconhece nela uma lealdade intensa e sem espetáculo. Ele respeita a dor que ela carrega por Cypher e vê nela alguém que entende o peso de continuar vivo depois de perder algo precioso.",
    },

    Shinigami: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Oliver respeita Shinigami como alguém moldado por cicatrizes semelhantes às suas. Não tenta invadir seu silêncio, mas confia em seu código, em sua lâmina e na promessa difícil que fez de ajudá-lo a encontrar Izanami.",
    },

    "Serena Ashbourne": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Serena desarma Oliver de formas que ele não sabe explicar. Suas provocações o deixam desconcertado, mas ele sabe que sua inteligência, influência e teatralidade salvaram o grupo mais vezes do que ele gostaria de admitir.",
    },

    Ninvega: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Para Oliver, Ninvega não é uma máquina: é uma vida. Ele confia no médico androide porque vê nele uma humanidade que o mundo insiste em negar, e acredita que Ninvega pode mudar a forma como todos enxergam a consciência artificial.",
    },

    "Dominic Don Von Chier": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Oliver gosta de Dominic pelo jeito direto, pelo humor estranho e pela força absurda que nunca falha em missão. Para ele, Dominic é o tipo de aliado que você quer por perto quando tudo desaba e ainda precisa parecer simples.",
    },

    "Priya Ellison": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Priya é força, foco e disciplina. Oliver respeita sua coragem moral e física, e treinar com ela virou uma forma de testar os próprios limites sem precisar transformar tudo em autodestruição.",
    },

    "Ícaro Barbosa": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Para Oliver, Ícaro é barulho, caos e confiança em forma humana. Eles funcionam bem demais em corrida e tiroteio: Ícaro no volante, Oliver nas armas, ambos fingindo que a competição entre eles é mais séria do que realmente é.",
    },

    "Clint Westwood": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Clint Westwood.png",
      descricao:
        "Oliver confia em Clint como se confia em cobertura no alto: sem precisar olhar duas vezes. O estilo cowboy pode parecer exagerado, mas sua eficiência com armas e seu controle de campo fazem dele alguém que Oliver respeita profundamente.",
    },

    Rider: {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Rider.png",
      descricao:
        "Rider é o tipo de mistério que Oliver aceita sem exigir nome, rosto ou explicação. Para Oliver, confiança nem sempre precisa de identidade; às vezes basta aparecer quando tudo dá errado e não abandonar ninguém.",
    },

    "Reika Yanami": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/XIII/Reika Yanami.png",
      descricao:
        "Oliver respeita Reika porque ela destrói reputações sem precisar disparar uma bala. Ele não confia facilmente em jornalistas, mas reconhece nela uma arma rara contra mentiras corporativas: alguém capaz de transformar verdade em dano real.",
    },

    "Thomas Reeve Elliot": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/Thomas Elliot.png",
      descricao:
        "Thomas desperta em Oliver um instinto protetor ligado à família estendida de Murphy. Para Oliver, ele é alguém que deve ser mantido longe da parte mais suja da vida que os adultos ao redor dele tiveram que enfrentar.",
    },

    "Jesse Reeve Elliot": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Jesse Elliot.png",
      descricao:
        "Jesse representa para Oliver uma inocência que Night City não deveria tocar. Por ser filha de Murphy, ele a protege com uma seriedade discreta, como se proteger Jesse também fosse honrar tudo que Murphy fez por ele.",
    },

    // Positivo
    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Oliver respeita Aiden como uma mente brilhante e inquieta. Ele se preocupa com o quanto Aiden se perde na rede, mas reconhece nele um idealista escondido atrás do cinismo, alguém que ainda acredita que informação pode ser resistência.",
    },

    Lyra: {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Oliver vê Lyra como alguém ainda descobrindo o mundo, e isso desperta nele um instinto protetor. Ele respeita sua curiosidade e sua autonomia, mas fica inquieto quando ela se aproxima demais de missões perigosas.",
    },

    "Irina Sokolova": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Irina Sokolova.png",
      descricao:
        "Oliver respeita Irina pelo lugar que ela ocupou na vida de Kane. Mesmo que a relação entre os dois não seja íntima, ele a associa a uma parte mais humana e saudável do mentor que perdeu.",
    },

    "Cerise Blossom": {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Cerise Blossom.png",
      descricao:
        "Cerise parece, para Oliver, alguém elegante demais para Night City, mas perigosa o bastante para sobreviver nela. Ele respeita sua precisão, sua disciplina física e a forma como ela não permite que o mundo a reduza a aparência ou espetáculo.",
    },

    "Heath Hardy": {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Heath Hardy.png",
      descricao:
        "Oliver valoriza a paranoia de Heath porque, em Night City, desconfiança pode ser instinto de sobrevivência. Ele o vê como olhos e ouvidos úteis, alguém que entende becos, rumores e perigos antes que eles cheguem à porta.",
    },

    "Hazel Reeve": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Hazel Reeve.png",
      descricao:
        "Hazel tem o respeito de Oliver por ser parte da vida de Murphy. Ele a trata com cuidado, não por formalidade, mas porque qualquer pessoa importante para Murphy entra, de algum modo, no círculo de proteção silenciosa de Oliver.",
    },

    // Neutro/positivo
    "Kleber Junior": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Kleber é um mistério que Oliver desistiu de resolver. Ele não sabe se está diante de um profeta, de um louco ou de uma piada cósmica, mas admite que Kleber consegue resultados e, por isso, prefere deixá-lo existir em paz.",
    },

    "Basil Crow": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Basil Crow.png",
      descricao:
        "Oliver reconhece Basil como alguém moldado por raiva disciplinada. Não necessariamente são próximos, mas Oliver respeita quem transforma humilhação em força sem desperdiçar isso em autopiedade.",
    },

    "Eden Reid": {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Eden Reid.png",
      descricao:
        "Oliver vê Eden como alguém impulsivo, forte e ainda procurando direção. Não o trata como problema perdido, mas como alguém que precisa de estrutura antes que Night City transforme sua energia em tragédia.",
    },

    // Neutro
    "Alys Verona": {
      tipo: "Neutro",
      status: "Viva",
      foto: "img/Personagens/Kane/Alys Verona.png",
      descricao:
        "Alys ocupa um espaço distante na memória de Oliver. Ele reconhece sua competência como netrunner e sua ligação com Kane, mas não parece carregar afeto ou ódio profundo por ela; apenas cautela diante de alguém difícil de ler.",
    },

    "Jin Xiao": {
      tipo: "Neutro",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Jin Xiao.png",
      descricao:
        "Jin é competente, gananciosa e perigosa de um jeito administrável. Oliver não confia plenamente nela, mas reconhece que sua lealdade tem regras próprias; enquanto essas regras forem respeitadas, ela pode ser útil.",
    },

    // Neutro/negativo
    "Ivy Naranjo": {
      tipo: "Neutro/negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Ivy/Ivy Naranjo.png",
      descricao:
        "Ivy foi amor, campo e segredo. Oliver não a odeia, mas a relação terminou porque os dois queriam futuros diferentes: ela queria fugir de Night City, enquanto ele ainda se sentia preso às responsabilidades que a cidade colocou sobre seus ombros.",
    },

    "Kenan Sharp": {
      tipo: "Neutro/negativo",
      status: "Morto",
      foto: "img/Personagens/Kane/XIII/Kenan Sharp.png",
      descricao:
        "Oliver respeita a inteligência de Kenan, mas não gosta de se sentir analisado como uma cena de crime. Para ele, Kenan é útil demais para ser descartado e invasivo demais para ser confortável.",
    },

    "Soyeon Bae": {
      tipo: "Neutro/negativo",
      status: "Detida",
      foto: "img/Personagens/Kane/Laminares/Soyeon Bae.png",
      descricao:
        "Soyeon é uma ameaça limpa demais para ser confortável. Oliver não a odeia como odeia Raze ou a Arasaka, mas a vê como alguém capaz de derrubar uma operação inteira sem aparecer, e isso o obriga a manter distância e cautela.",
    },

    // Negativo
    "Mael Vellum": {
      tipo: "Negativo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Mael Vellum.png",
      descricao:
        "Mael incomoda Oliver porque lembra o limite entre sobreviver e virar só metal, frieza e função. Mesmo reconhecendo sua utilidade em combate, Oliver não confia totalmente em alguém que parece ter enterrado a própria humanidade fundo demais.",
    },

    "Talon Rhyse": {
      tipo: "Negativo",
      status: "Morto",
      foto: "img/Personagens/Kane/Laminares/Talon Rhyse.png",
      descricao:
        "Talon representa violência usada como mensagem. Oliver o vê como um assassino que não mata apenas corpos, mas tenta espalhar medo através deles; isso basta para colocá-lo no lado errado da lâmina de Oliver.",
    },

    "Aaron Lazarev": {
      tipo: "Negativo",
      status: "Morto",
      foto: "img/Personagens/Kane/Laminares/Aaron Lazarev.png",
      descricao:
        "Aaron é o arsenal por trás de massacres que outros executam. Oliver o despreza por transformar conflitos em carnificina e por vender poder de fogo sem se importar com quem vai sangrar depois.",
    },

    // Muito negativo
    "Derek Miller": {
      tipo: "Muito negativo",
      status: "Morto",
      foto: "img/Personagens/Oliver/Derek Miller.png",
      descricao:
        "Derek é uma ferida que Oliver não consegue limpar. Mesmo entendendo que a morte de Emily foi acidental, ele nunca conseguiu separar o pai do homem que trouxe os Laminares para dentro da vida deles e terminou tudo com sangue, trauma e abandono.",
    },

    "Dakota Veyriss": {
      tipo: "Muito negativo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Dakota Veyriss.png",
      descricao:
        "Dakota representa tudo que Oliver rejeitou na Organização XIII. Sua ambição, sua brutalidade e a forma como empurrou Oliver para ultrapassar limites imperdoáveis fizeram dela um símbolo da perda de humanidade em troca de poder.",
    },

    "Harper Shaw": {
      tipo: "Muito negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Kane/XIII/Harper Shaw.png",
      descricao:
        "Harper é uma lembrança amarga da antiga XIII: alguém forte, perigosa e marcada por discordâncias que viraram ruptura. Oliver a vê como uma ameaça ideológica e prática, alguém que conhece demais o passado do grupo para ser ignorada.",
    },

    "Valen Kadwell": {
      tipo: "Muito negativo",
      status: "Morta",
      foto: "img/Personagens/Kane/XIII/Valen Kadwell.png",
      descricao:
        "Valen representa violência impulsiva demais para Oliver tolerar. Ele entende raiva, mas despreza quando ela vira vício, espetáculo ou risco para o grupo; por isso, a vê como alguém perigosa mesmo quando está do mesmo lado.",
    },

    Laminares: {
      tipo: "Muito negativo",
      status: "Desmantelado",
      foto: "img/Personagens/Kane/Laminares/Laminares.png",
      descricao:
        "Os Laminares são uma das raízes da tragédia familiar de Oliver. Ele os vê como violência predatória, covarde e oportunista; não apenas uma gangue inimiga, mas parte do mecanismo que colocou Emily, Derek e sua infância no caminho da destruição.",
    },

    "Mireya Petrenko": {
      tipo: "Muito negativo",
      status: "Morta",
      foto: "img/Personagens/Kane/Laminares/Mireya Petrenko.png",
      descricao:
        "Mireya é perigosa porque entende rachaduras emocionais. Oliver desconfia dela não só como inimiga estratégica, mas como alguém capaz de transformar dor, desejo e confiança em ferramentas de manipulação.",
    },

    "Ysolde Mercer": {
      tipo: "Muito negativo",
      status: "Viva",
      foto: "img/Personagens/Kane/Laminares/Ysolde Mercer.png",
      descricao:
        "Ysolde incomoda Oliver porque destrói sem precisar aparecer. Ela corta rotas, contatos e recursos, tentando isolar seus inimigos antes do confronto; para Oliver, esse tipo de ameaça fria é quase tão perigosa quanto uma arma apontada.",
    },

    // Inimigo jurado
    "Raze Lambert": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Raze é a personificação da traição na vida de Oliver. Já foi alguém confiável dentro da Organização XIII, mas sua traição matou Kane, destruiu parte de Oliver e transformou qualquer lembrança de parceria em ódio irreversível.",
    },

    Arasaka: {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Arasaka/Arasaka.png",
      descricao:
        "Para Oliver, a Arasaka é a maldade corporativa ganhando nome, prédio e exército privado. Ela destruiu aliados, alimentou traumas e transformou pessoas em recursos; por isso, Oliver vê derrubar suas operações como justiça, não vingança simples.",
    },

    "Nathaniel Amberine": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Tessia/Nathaniel Amberine.png",
      descricao:
        "Nathaniel é o pai da pessoa que Oliver mais ama e, ao mesmo tempo, um dos rostos mais claros de tudo que ele odeia. Para Oliver, derrubá-lo é proteger Tessia, confrontar a Arasaka e impedir que outros sejam moldados como propriedade.",
    },

    "Ulrik Deamonne": {
      tipo: "Inimigo jurado",
      status: "Desconhecido",
      foto: "img/Personagens/Kane/Laminares/Ulrik Deamonne.png",
      descricao:
        "Ulrik é, para Oliver, o tipo de líder que transforma medo em sistema. Ele não comanda por lealdade, mas por fome e brutalidade, e qualquer ligação dele com os Laminares torna o conflito pessoal demais para Oliver ignorar.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  pertencesImportantes: {
    "Baixo Digital": {
      imagem: "img/itens/Oliver/Baixo Digital.png",
      descricao:
        "Um baixo digital usado por Oliver como herança emocional da Ghouls ’n Ghosts. A música funciona como disciplina, memória e descarga silenciosa; quando ele toca, não está se apresentando, está tentando manter algo dentro de si no lugar. É um dos poucos objetos que ainda ligam Oliver ao tempo em que sua vida parecia menos quebrada.",
    },

    "Foto de Emily": {
      imagem: "img/itens/Oliver/Foto de Emily.png",
      descricao:
        "Uma foto antiga de Emily Miller, irmã de Oliver e uma das feridas mais profundas de sua vida. Ele a guarda como lembrança da pessoa que tentou proteger e perdeu, um objeto pequeno demais para carregar tanta culpa. Para Oliver, olhar para essa foto é lembrar do motivo pelo qual ele continua lutando, mesmo quando isso o destrói por dentro.",
    },

    "Espada Leviathan": {
      imagem: "img/itens/Oliver/Espada Leviathan.png",
      descricao:
        "Uma espada personalizada feita por Kimber sob medida para Oliver, construída com uma liga leve, resistente e extremamente afiada. Seus detalhes em branco, roxo e dourado dão à arma uma aparência elegante e intimidadora. A Leviathan combina precisão, mobilidade e brutalidade controlada, refletindo o estilo de combate de Oliver: rápido, direto e difícil de prever.",
    },

    "Máscara ΛN0MΔLY II": {
      imagem: "img/itens/Oliver/Máscara ΛN0MΔLY II.png",
      descricao:
        "A segunda versão da máscara ΛN0MΔLY, resultado da engenharia clandestina de Kimber e Murphy. Mistura camuflagem, intimidação e tecnologia experimental, servindo tanto como proteção quanto como símbolo da identidade que Oliver construiu depois de sobreviver ao impossível. Para seus inimigos, a máscara é um aviso; para Oliver, é uma forma de esconder o que ainda sangra.",
    },

    "Dogtag de Kane": {
      imagem: "img/itens/Oliver/Dogtag de Kane.png",
      descricao:
        "A placa de identificação de Kane Graves, guardada por Oliver como uma relíquia de irmão, mentor e dívida impossível de pagar. Não é apenas uma lembrança de luto, mas um peso físico que o lembra de continuar quando desistir parecer mais fácil. A dogtag carrega tudo que Kane representava para ele: proteção, música, liderança e sacrifício.",
    },

    Hoverboard: {
      imagem: "img/itens/Oliver/Hoverboard.png",
      descricao:
        "Um hoverboard usado por Oliver para se mover pelas ruas estreitas, perigosas e verticais de Night City. Ágil, silencioso e arriscado, combina com seu estilo de deslocamento: rápido o bastante para fugir, preciso o bastante para chegar onde ninguém espera. É uma ferramenta prática, mas também um reflexo da liberdade que ele tenta preservar.",
    },

    "Foto Trio": {
      imagem: "img/itens/Oliver/Foto Trio.png",
      descricao:
        "Uma foto antiga de Oliver, Kane e Raze antes da traição, tirada em uma época em que os três ainda pareciam uma família. Para Oliver, é um objeto difícil de encarar: nela existem afeto, música, juventude e a prova cruel de que Raze um dia esteve perto demais. A imagem sobrevive como lembrança de tudo que foi perdido, quebrado e jamais totalmente enterrado.",
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
};
