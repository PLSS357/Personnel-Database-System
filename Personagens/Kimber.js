// Kimber.js
// Ficha completa de Kimber Destaro

personagens.kimber = {
  // Identificação básica
  nome: "Kimber Destaro",
  funcao: "Tech | Co-fundadora dos Dandelions | Ex-Organização XIII (Rank V)",
  id: "46-5623-70",
  foto: "img/Personagens/Kimber.png",
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
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Elaine Destaro, operária de fábrica; suicidou-se em 2076 após muitos anos de depressão.",
    "Pai: Marcus Destaro, ex-policial local, subornado pelos Prescott. Tentou proteger Kimber, mas foi morto pelos homens de Prescott quando se recusou a cooperar.",
    "Mãe Biológica: Desconhecida.",
    "Pai Biológico: Killian Klery — Antigo xerife de Doverly. Morto em 2081 por Graham Walker.",
  ],
  pessoaMaisImportante:
    "Seus companheiros de gangue — especialmente Oliver “Viole” Miller, a quem vê como um irmão mais novo.",
  tragedia: [
    "Após o suicídio da mãe, Kimber foi vendida por seu pai a Harold Prescott, sob o pretexto de “garantia de futuro”. Descobriu tarde demais que se tornara parte do ciclo criminoso da cidade.",
    "Resgatada por seus dois melhores amigos, Jake Harvey e Daniel Tanner, viu ambos morrerem em uma emboscada montada pelos Prescott. Sozinha, fugiu de Doverly dirigindo sem destino até chegar em Night City.",
  ],

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
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver Miller": {
      tipo: "friend",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Seu elo mais profundo atualmente. Ela o viu crescer, cuidou de seus implantes, o ajudou a se reerguer após a Organização XIII e o protege como uma irmã mais velha faria. Viole é um dos poucos que a faz sorrir genuinamente.",
    },

    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Kimber a vê como “cunhada honorária”. Conversam sobre tudo — Tessia é uma das poucas pessoas capazes de fazê-la baixar a guarda.",
    },

    "Kane Graves": {
      tipo: "family",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Um dos poucos que Kimber verdadeiramente chamou de amigo. Kane foi alguém em quem ela confiou sem reservas. A morte dele marcou Kimber: desde então, ela nunca mais permitiu que alguém se aproximasse no mesmo nível.",
    },

    "Murphy Elliot": {
      tipo: "friend",
      foto: "img/Personagens/Murphy.png",
      descricao:
        "Quando Kimber se juntou à organização XIII, Murphy ainda era um de seus membros ativos — e foi ele quem a treinou no começo, funcionando como uma espécie de mentor informal.",
    },

    "Ivy Naranjo": {
      tipo: "rival",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Kimber nunca gostou de Ivy. Enxergava nela uma presença incômoda, alguém que atraía atenção indesejada. Apesar disso, Ivy nunca se importou com Kimber, o que só aumentava a animosidade entre as duas.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Amigo. Irritante, mas útil. Confia nele tecnicamente, mas não emocionalmente. Costuma gritar com ele por entupir a rede elétrica da base com downloads.",
    },

    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Ela o acha estranho, mas gosta dele. Mas finge que não, claro. Odeia quando ele canta na oficina — mas criou um capacete de coelho holográfico pra ele, o que denuncia seu carinho.",
    },

    Nyx: {
      tipo: "neutral",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Admira sua força e presença. Frequentemente cria equipamentos para suas performances. A respeita por não fingir quem é.",
    },

    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Enigmático. Respeita seu código e eficiência. Sente um certo medo silencioso dele, mas jamais admitiria.",
    },

    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Amiga improvável. Kimber acha seu estilo teatral exaustivo, mas a admira pela inteligência. Trabalham bem juntas, principalmente quando Serena financia materiais caros.",
    },

    Ninvega: {
      tipo: "neutral",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Respeito mútuo. Ela o trata como igual — não como máquina. Ele, em troca, a chama de “engenheira da alma”.",
    },

    "Dominic D. V. Chier": {
      tipo: "neutral",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Enigmático. Respeita seu código e eficiência. Sente um certo medo silencioso dele, mas jamais admitiria.",
    },

    Lyra: {
      tipo: "neutral",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Admira sua empatia e curiosidade. A ajuda frequentemente com manutenção de sensores.",
    },

    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Companheira de confiança. Compartilham uma mentalidade de “fazer o que for preciso”.",
    },

    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Acha ele caótico, mas divertido. Costuma reclamar do barulho do Uno, mas vive pedindo peças pra ele. Acha reconfortante a leveza que ele traz.",
    },

    "Kleber Junior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Evita. Acha excêntrico e desconfortável, mas reconhece que ele tem talento em negociações.",
    },

    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Considera uma mascote. Tem carinho genuíno, e se algo o danificar, ela destrói quem for responsável.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Ex-colega na Organização XIII. Matou Kane Graves, um dos poucos que Kimber considerava amigo, e deixou Viole em coma. A inimizade é pessoal e irreversível.",
    },

    "Harold Prescott": {
      tipo: "enemy",
      foto: "img/Personagens/Prescott.png",
      descricao:
        "Líder da família que controlava Doverly. Responsável direto pela destruição de sua família e pela morte de Jake e Daniel. Morto em 2091.",
    },

    "Graham Walker": {
      tipo: "enemy",
      foto: "img/Personagens/Prescott.png",
      descricao:
        "Ex-policial transferido de St. Louis, Missouri, Graham Walker assumiu o posto de vice-xerife em Doverly em 2070 após envolvimento em múltiplos escândalos abafados por instâncias superiores. Com a morte de Killian Klery em 2081, Walker foi promovido a xerife, consolidando o controle total da rede de tráfico humano da cidade sob uma fachada de legalidade. Diversos vazamentos pós-morte revelaram que sua transferência para Doverly ocorreu como medida de contenção institucional após condutas graves envolvendo menores de idade, padrão de comportamento que se repetiu de forma silenciosa durante seu mandato. Kimber Destaro esteve sob sua autoridade direta durante um curto período crítico de sua adolescência. Walker foi eliminado em 2091 durante a operação extraoficial de um grupo nomeado “Dandelions” que culminou na queda de Doverly.",
    },

    "Killian Klery": {
      tipo: "enemy",
      foto: "img/Personagens/Prescott.png",
      descricao:
        "Antigo xerife de Doverly, Killian Klery ocupou o cargo por mais de uma década, período marcado por estabilidade institucional aparente e atividades ilícitas sistemáticas ligadas ao tráfico humano local. Em julho de 2081, Klery foi dado como desaparecido; seu corpo foi localizado em avançado estado de decomposição em 13/08/2081, em uma vala próxima à estrada das montanhas. A causa oficial da morte nunca foi conclusiva, sendo atribuída tanto a acidente quanto a possível eliminação interna.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Brinco Triangular": {
      imagem: "img/itens/Brinco_Triangular.png",
      descricao:
        "Um brinco triangular cromado na orelha esquerda, funciona como receptor de dados.",
    },

    "Pingente de Engrenagem": {
      imagem: "img/itens/Pingente_Engrenagem.png",
      descricao:
        "Pingente metálico em forma de engrenagem, presente de sua mãe. Contém um fragmento de dados criptografados que ela nunca decifrou— talvez por medo do que descobriria.",
    },

    "Carta de despedida": {
      imagem: "img/itens/Carta_Despedida.png",
      descricao:
        "Carta escrita por sua mãe pouco antes do suicídio. Nela, Elaine pede perdão por não ter conseguido protegê-la e expressa esperança de que Kimber encontre felicidade longe de Doverly.",
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
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Multiespecialista. Atua em mecânica, cibernética, armas, engenharia de drones e criptografia.",
  modoTrabalho:
    "Sozinha. Não confia em ninguém dentro da oficina sem supervisão — mas deixa Mirai e Viole entrarem.",
  espacoTrabalho:
    "Organizado por cores, cabos e chips, mas caótico para qualquer outro ser humano. Ela sabe onde tudo está. Sempre.",
  clientes:
    "Os Dandelions, Fixers independentes e raramente corporações (sob pseudônimo).",
};
