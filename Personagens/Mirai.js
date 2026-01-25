// Mirai.js
// Ficha completa de Mirai

personagens.Mirai = {
  // Identificação básica
  nome: "Mirai",
  funcao:
    "Mascote / Suporte Modular Inteligente / “CEO Honorário” dos Dandelions",
  id: "Não Aplicável",
  foto: "img/Personagens/Mirai.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Desconhecido",
  dataNascimento: " Desconhecido",
  idade: 4,
  altura: "25 cm",
  peso: "1.6 kg",

  // Citação e objetivo
  citacao: "“ ≽^•⩊•^≼ ”",
  objetivoVida:
    "Manter Viole vivo — literalmente e simbolicamente. Mirai também parece tentar “entender” emoções humanas através da imitação, danças e expressões.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Curioso, brincalhão, protetor e imprevisivelmente emocional. Embora seja um robô, demonstra empatia genuína — reage a tristeza, raiva e dor de forma quase instintiva.",
  comportamentoSocial:
    "Extremamente expressivo, comunica-se por ações, emojis e barulhos pré-gravados. Adora dançar, cantar e se aproximar dos membros da gangue, especialmente Oliver. É amado por todos, mas tem um talento natural para causar confusão sem querer.",
  motivacao:
    "Missão dada a ele por Kimber: Apoiar Oliver e garantir que ele não fique sozinho.",
  valoresCentrais:
    "Lealdade absoluta. Amor incondicional. Alegria como forma de resistência.",
  visaoPessoas:
    "Julga o mundo através de gestos e reações. Sabe diferenciar medo de carinho, mentira de afeto. Não precisa de palavras para entender.",
  oQueValoriza:
    "Os Dandelions — sua “família”. Adora especialmente Oliver e Tessia.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Não possui família biológica.",
    "Foi resgatado por Kimber Destaro em 2088, quando ela encontrou seus restos em um lixão. Reconstruído e reprogramado, Mirai recebeu partes de drones domésticos, um núcleo de IA antiga e o que restava de um modelo de robô de companhia infantil.",
  ],
  pessoaMaisImportante:
    "Oliver “Viole” Miller — o enxerga da mesma forma que um cachorro enxerga seu dono. Kimber e Tessia vem logo depois.",
  tragedia: [
    "Embora não sinta dor como um humano, Mirai possui fragmentos de memória corrompidos de sua vida anterior — gravações de vozes infantis e sons de lar doméstico que ele reproduz inconscientemente quando está sozinho. Kimber acredita que essas memórias vêm de sua programação original.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Criado originalmente como assistente doméstico, Mirai foi abandonado após ter sido considerado obsoleto. Quando Kimber o encontrou, ele estava coberto de ferrugem e emitindo sons incoerentes.",
    "Depois de semanas de reparos, o pequeno robô despertou e Kimber o entregou para Viole. Nas palavras dela, seria bom para Viole ter um “bichinho”. Desde então, tornou-se mascote oficial dos Dandelions, e um símbolo involuntário de esperança.",
    "Atualmente é responsável por pequenas tarefas de manutenção, reconhecimento, auxiliar Oliver com relatórios de missão e… distrações musicais.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver “Viole” Miller": {
      tipo: "family",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Mirai compartilha com Viole um elo profundo e contínuo. Graças à conexão com o agente interno de Viole, o robô percebe variações cardíacas, níveis de adrenalina e impulsos emocionais. Durante crises, Mirai se aproxima fisicamente e toca o peito de Viole como um gesto instintivo de regulação emocional, lembrando-o de respirar e se estabilizar.",
    },

    "Tessia Amberine": {
      tipo: "family",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "Reconhecida por Mirai pela frequência de voz suave e pelo toque cuidadoso, Tessia é catalogada como uma variável emocional diretamente associada a Viole. Para Mirai, ela representa uma extensão do bem-estar dele, reagindo de forma positiva e calma sempre que ela está por perto.",
    },

    "Kimber Destaro": {
      tipo: "family",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Considerada sua 'mãe técnica', Kimber é a principal referência de autoridade e cuidado para Mirai. Ele obedece automaticamente a seus comandos, mas também demonstra afeto genuíno, piscando um emoji de coração sempre que ela entra na oficina ou inicia manutenção.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Aiden é identificado por Mirai como um agente de caos criativo. Responsável por instalar sub-rotinas de humor, ele faz com que o robô execute pequenas pegadinhas, como tocar música alta em momentos inoportunos. Apesar disso, Mirai demonstra clara admiração pelo Netrunner e responde de forma entusiasmada à sua presença.",
    },

    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Conhecido por Mirai como seu 'professor de dança e canto'. Durante um período em que cuidou do robô, Cypher costumava cantar com frequência, o que levou Mirai a aprender por imitação. O episódio em que cantou 'Daisy Bell' no escuro marcou profundamente sua base de dados comportamental.",
    },

    Nyx: {
      tipo: "friend",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Mirai reage às canções de Nyx de maneira quase emocional: o brilho de seu núcleo muda de cor e seus sistemas se sincronizam com o BPM da música. Nyx acredita que Mirai sente mais do que consegue compreender, e o robô demonstra respostas sensoriais únicas quando ela se apresenta.",
    },

    Shinigami: {
      tipo: "friend",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Sempre que encontra Shinigami, Mirai se curva levemente, em uma referência respeitosa à estética samurai de sua origem. Durante sessões de meditação, o robô permanece imóvel ao lado dele, tentando imitar postura e silêncio como forma de aprendizado observacional.",
    },

    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Mirai observa Serena com curiosidade constante, reagindo aos gestos extravagantes dela com emojis de confusão. Embora o trate como um mascote de mídia e grave vídeos dele dançando, há afeto genuíno na relação, que Mirai reconhece como atenção positiva.",
    },

    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Entre Mirai e Ninvega existe uma compreensão silenciosa e mútua: ambos são máquinas que aprenderam a sentir. Ninvega frequentemente realiza manutenções preventivas em Mirai, ajustando seus sistemas com cuidado e respeito à sua individualidade emergente.",
    },

    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Mirai respeita Dominic como um protetor físico confiável. Já foi visto montado em seu ombro durante patrulhas, analisando o ambiente. Dominic o trata com carinho, chamando-o de 'soldadinho elétrico', o que reforça a sensação de segurança do robô.",
    },

    Lyra: {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Lyra é uma das poucas pessoas capazes de interpretar os movimentos de Mirai como linguagem emocional. Ela compreende nuances de seu comportamento e chegou a traduzir parte dessas respostas em um relatório técnico, validando Mirai como entidade sensível.",
    },

    "Ícaro Barbosa": {
      tipo: "friend",
      foto: "img/Personagens/Ícaro.png",
      descricao:
        "Ícaro tenta constantemente modificar Mirai com escapamentos, buzinas e LEDs coloridos. O robô responde com um 'X' vermelho em sinal de reprovação, mas em missões atua como copiloto, projetando GPS funcional. A relação entre os dois é marcada por humor, improviso e caos mútuo.",
    },

    "Kleber Júnior": {
      tipo: "neutral",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Mirai não compreende as pregações do chamado 'profeta neon'. Quando Kleber fala sobre a 'Luminescência Tentacular', o robô projeta um emoji de polvo com interrogação. Apesar de não entender, Mirai o observa com neutralidade e nunca o contradiz.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Marcado como prioridade máxima de ameaça, Raze foi identificado após Mirai analisar o trauma neural de Oliver durante um colapso. Embora não exista um confronto direto, seus padrões de hostilidade ativam protocolos avançados de defesa em Mirai.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Adesivo dos Dandelions": {
      imagem: "img/itens/adesivo-dandelions.png",
      descricao:
        "Um adesivo colado por Ícaro com a frase “Se estiver perdido, devolva aos Dandelions”. Está levemente gasto nas bordas, como se já tivesse enfrentado muita estrada, mas ainda chama atenção.",
    },

    "Chip Interno": {
      imagem: "img/itens/Chip Corrompido.png",
      descricao:
        "Um chip interno antigo, com trilhas finas e pontos de solda refeitos às pressas. A memória está corrompida: fragmentos de dados se repetem, nomes aparecem pela metade e trechos inteiros viram ruído. Acredita-se que ele guarde parte da IA original de Mirai — ecos de decisões, rotinas e lembranças que não deveriam ter sobrevivido.",
    },

    "Caixas de som internas": {
      imagem: "img/itens/Caixas Som.png",
      descricao:
        "Caixas de som embutidas, ajustadas para voz e frequências médias, com pequenos amortecedores para reduzir vibração. Foi com elas que aprendeu a cantar com Cypher: ainda há presets salvos para aquecimento, harmonia e um modo ‘palco’ que aumenta o ganho e dá um leve brilho no timbre. Quando ligadas, o som sai limpo demais para algo tão escondido.",
    },

    "Compartimento oculto": {
      imagem: "img/itens/Compartimento Oculto.png",
      descricao:
        "Um compartimento secreto, disfarçado na junção de uma placa interna. Abre com pressão em dois pontos específicos, como quem conhece o truque. Era usado para guardar pequenos objetos ou bilhetes de Oliver: notas dobradas, peças minúsculas, chaves, lembranças. Por dentro, há riscos e marcas que sugerem uso frequente — e uma pressa cuidadosa em esconder o que importa.",
    },
  },
};
