// Kimber.js
// Ficha completa de Kimber Destaro

personagens.kimber = {
  // Identificação básica
  nome: "Kimber Destaro",
  funcao: "Tech | Co-fundadora dos Dandelions | Ex-Organização XIII (Rank IV)",
  id: "46-5623-70",
  foto: "img/Personagens/Kimber/Kimber Destaro.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Doverly, Missouri, NEUA",
  dataNascimento: "04/JUN/2062",
  idade: 30,
  altura: "1,67 m",
  peso: "51 kg",

  // Citação e objetivo
  citacao: "“Consertar máquinas é fácil. Difícil é consertar gente.”",
  objetivoVida:
    "Construir a Grand Nuage, um veículo aéreo gigantesco que servirá como base aérea dos Dandelions. Mais do que um projeto, é seu sonho: um lar nos céus, inalcançável pelos deuses corporativos.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Leal, estável, séria e reservada. Profundamente marcada pelos traumas de Doverly, Kimber desenvolveu uma desconfiança crônica e um senso de autopreservação inabalável.",
  comportamentoSocial:
    "Mantém barreiras emocionais. É direta e tende a afastar quem se aproxima demais.",
  motivacao:
    "A lealdade. Move-se por amor e confiança, mesmo que disfarçados sob cinismo e pragmatismo.",
  valoresCentrais: "Honra, reciprocidade e autonomia.",
  visaoPessoas:
    "“Nunca abaixe a guarda. Quando menos esperar, alguém vai trair.”",
  oQueValoriza: "A honra e os companheiros de gangue.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Cresceu em uma cidade pequena ao sul das montanhas de Ozark. Doverly, outrora próspera, afundou após o colapso das minas — eventos que contaminaram o lençol freático e tornaram parte da população infértil.",
    "As minas eram controladas pela família Prescott, que, sob fachada industrial, operava esquemas de tráfico humano.",
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
        "É o elo mais profundo dela atualmente. Kimber o protege como família, cuidou de seus implantes e o ajudou a se reerguer.",
    },

    "Kane Graves": {
      tipo: "Aliado Incondicional",
      status: "Morto",
      foto: "img/Personagens/Kane/Kane Graves.png",
      descricao:
        "Foi um dos poucos amigos em quem Kimber confiou sem reservas. A morte dele deixou uma marca permanente nela.",
    },

    Mirai: {
      tipo: "Aliado Incondicional",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Tem carinho genuíno por Mirai. Para Kimber, ele é uma mascote da gangue; se alguém o danificar, ela provavelmente não perdoa.",
    },

    // Muito positivo
    "Tessia Amberine": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Uma das poucas pessoas que faz Kimber baixar a guarda. Ela a respeita, confia nela e a vê como parte do círculo íntimo de Oliver.",
    },

    "Jake Harvey": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kimber/Jake Harvey.png",
      descricao:
        "Um dos dois amigos que resgataram Kimber de Doverly. Sua morte virou uma ferida central na memória dela.",
    },

    "Daniel Tanner": {
      tipo: "Muito positivo",
      status: "Morto",
      foto: "img/Personagens/Kimber/Daniel Tanner.png",
      descricao:
        "Assim como Jake, foi essencial para salvar Kimber. Ela o associa a lealdade, perda e sobrevivência.",
    },

    "Priya Ellison": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Kimber vê Priya como alguém prática, firme e confiável. As duas compartilham a mentalidade de fazer o necessário para sobreviver.",
    },

    "Elaine Destaro": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Kimber/Elaine Destaro.png",
      descricao:
        "Mãe de Kimber. Sua morte e sua carta de despedida são lembranças dolorosas, ligadas a afeto, culpa e perda.",
    },

    // Positivo
    Ciel: {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Kimber a vê como parte indireta da família. Por isso tende a tratá-la com muito cuidado e proteção.",
    },

    "Murphy Elliot": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/XIII/Murphy Elliot.png",
      descricao:
        "Treinou Kimber no começo da Organização XIII. Ela o respeita como alguém que ajudou a moldar sua experiência técnica e prática.",
    },

    "Thomas Reeve Elliot": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Kane/Thomas Elliot.png",
      descricao:
        "Kimber mantém uma postura educada e protetiva, mas sem uma relação muito desenvolvida.",
    },

    "Jesse Reeve Elliot": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Jesse Elliot.png",
      descricao:
        "Por ser filha mais nova de Murphy, Kimber tende a vê-la com certo cuidado, talvez até com uma proteção discreta, mesmo que não haja muita convivência direta.",
    },

    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Às vezes é irritante, mas útil. Kimber confia nele tecnicamente, embora não emocionalmente; vive reclamando dos exageros dele na rede elétrica da base.",
    },

    Cypher: {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Acha ele esquisito e finge não gostar, mas tem carinho real por ele. O capacete de coelho holográfico que ela criou denuncia esse afeto.",
    },

    "Serena Ashbourne": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Acha Serena teatral e cansativa, mas admira sua inteligência. Trabalham bem juntas, especialmente quando Serena financia materiais caros.",
    },

    "Ícaro Barbosa": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Acha Ícaro caótico, barulhento e divertido. Reclama dele, mas também se beneficia da leveza e das peças que ele traz.",
    },

    Nyx: {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Kimber admira sua força, presença e autenticidade. Costuma criar equipamentos para suas performances.",
    },

    // Neutro/positivo
    "Hazel Reeve": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Kane/Hazel Reeve.png",
      descricao:
        "Por ser esposa de Murphy, Kimber a reconhece como alguém ligada ao círculo familiar de seu antigo mentor. A relação parece respeitosa.",
    },

    Shinigami: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Respeita seu código e eficiência. Sente certo medo silencioso dele, mas jamais admitiria.",
    },

    Ninvega: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Há respeito mútuo. Kimber o trata como igual, não como máquina; ele reconhece nela uma “engenheira da alma”.",
    },

    "Dominic Don Von Chier": {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Enigmático. Kimber respeita sua eficiência e postura, mas mantém distância emocional e certa cautela.",
    },

    Lyra: {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Kimber admira sua empatia e curiosidade. Ajuda Lyra com manutenção de sensores e parece vê-la como alguém em desenvolvimento.",
    },

    // Neutro
    // Nenhum personagem nesta categoria.

    // Neutro/negativo
    "Marcus Destaro": {
      tipo: "Neutro/negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Kimber/Marcus Destaro.png",
      descricao:
        "Figura contraditória: tentou protegê-la em algum momento, mas também está ligado à traição que levou Kimber às mãos dos Prescott.",
    },

    "Kleber Junior": {
      tipo: "Neutro/negativo",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Kimber evita muito contato. Acha Kleber excêntrico e desconfortável, mas reconhece seu talento em negociações.",
    },

    // Negativo
    "Ivy Naranjo": {
      tipo: "Negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Ivy/Ivy Naranjo.png",
      descricao:
        "Kimber nunca gostou dela. Vê Ivy como uma presença incômoda e provocadora, embora Ivy pareça não se importar com essa antipatia.",
    },

    // Muito negativo
    // Nenhum personagem nesta categoria.

    // Inimigo jurado
    "Raze Lambert": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Raze/Raze Lambert.png",
      descricao:
        "Ex-colega da Organização XIII. Matou Kane e deixou Oliver em coma; para Kimber, a inimizade é pessoal e irreversível.",
    },

    "Harold Prescott": {
      tipo: "Inimigo jurado",
      status: "Morto",
      foto: "img/Personagens/Kimber/Harold Prescott.png",
      descricao:
        "Responsável direto pela destruição da vida dela em Doverly e pela morte de Jake e Daniel. É uma figura ligada ao trauma central de Kimber.",
    },

    "Graham Walker": {
      tipo: "Inimigo jurado",
      status: "Morto",
      foto: "img/Personagens/Kimber/Graham Walker.png",
      descricao:
        "Representa a corrupção e o abuso de poder de Doverly. Kimber o associa ao sistema criminoso que destruiu sua adolescência.",
    },

    "Killian Klery": {
      tipo: "Inimigo jurado",
      status: "Morto",
      foto: "img/Personagens/Kimber/Killian Klery.png",
      descricao:
        "Antigo xerife de Doverly e parte do sistema corrupto local. Também aparece ligado à família biológica de Kimber, o que torna a relação ainda mais amarga.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Pingente de Engrenagem": {
      imagem: "img/itens/Kimber/Pingente de Engrenagem.png",
      descricao:
        "Um pequeno pingente metálico em forma de engrenagem, presente de sua mãe. Apesar da aparência simples, carrega um fragmento de dados criptografados que Kimber nunca conseguiu decifrar completamente — talvez por falta de tempo, talvez por medo do que a mensagem ainda possa revelar. Para ela, é uma lembrança silenciosa de origem, perda e de tudo aquilo que ainda ficou inacabado.",
    },

    "Carta de Despedida da Mãe": {
      imagem: "img/itens/Kimber/Carta de Despedida da Mãe.png",
      descricao:
        "Uma carta antiga escrita por Elaine antes de morrer, pedindo perdão por não ter conseguido proteger Kimber. O papel está gasto, dobrado muitas vezes e guardado com cuidado quase ritual. É um objeto frágil, mas devastador: a prova física de um amor que chegou tarde demais para salvá-la de Doverly, mas forte o bastante para continuar guiando suas escolhas.",
    },

    "Plano de Construção Grand Nuage": {
      imagem: "img/itens/Kimber/Plano de Construção Grand Nuage.png",
      descricao:
        "Um conjunto de plantas técnicas, cálculos estruturais e anotações obsessivas sobre o Grand Nuage, o gigantesco veículo aéreo que Kimber sonha transformar em base dos Dandelions. Mais do que um projeto de engenharia, é sua ideia de lar: uma fortaleza móvel nos céus, construída para proteger aqueles que ainda tentam escapar do alcance dos deuses corporativos.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    "Anti-Dazzle": {
      descricao:
        "Sistema óptico defensivo desenvolvido para neutralizar interferências visuais causadas por flashes intensos, explosões luminosas ou ataques de luz direcionada. Garante estabilidade visual contínua e preserva a capacidade operacional do usuário em cenários de alto risco.",
    },
    Cyberarm: {
      descricao:
        "Prótese cibernética de membro superior desenvolvida para substituição total do braço orgânico. Oferece estrutura modular interna para integração de múltiplos sistemas especializados, mantendo ergonomia, força e controle refinado. Projetada para aplicações civis, industriais e táticas.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    MicroOptics: {
      descricao:
        "Sistema óptico de ampliação extrema integrado à visão cibernética. Ideal para vigilância, análise técnica, inspeção de precisão e operações que exigem observação detalhada a longas distâncias.",
    },
    Skinwatch: {
      descricao:
        "Dispositivo cronológico subdérmico com interface visual discreta. Oferece acesso rápido a informações temporais e sincronização com sistemas pessoais ou corporativos, eliminando a necessidade de dispositivos externos visíveis.",
    },
    Virtuality: {
      descricao:
        "Interface visual imersiva que sobrepõe dados e ambientes digitais diretamente à percepção do mundo físico. Permite navegação em sistemas virtuais sem perda de consciência situacional do ambiente real.",
    },
  },
};
