// Ícaro.js
// Ficha completa de Ícaro

personagens.Ícaro = {
  // Identificação básica
  nome: "Ícaro Barbosa",
  funcao: "Mecânico / Piloto / Artista de Rua",
  id: "84-0380-55",
  foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Mooca, Zona Leste de São Paulo, Brasil",
  dataNascimento: "13/AUG/2064",
  idade: 27,
  altura: "1,83 m",
  peso: "82 kg",

  // Citação e objetivo
  citacao:
    "“Pode falar o que quiser… mas quando dá BO, é nós que segura a bronca.”",
  objetivoVida:
    "Levar a cor e o som da Mooca até o fim do mundo — e voltar pra casa de cabeça erguida. Quer provar que o sonho de um garoto da periferia pode atravessar continentes.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Caótico, expansivo, bem-humorado, otimista nato, impulsivo, criativamente improvisador.",
  comportamentoSocial:
    "Fala alto, gesticula, brinca com todo mundo. Faz amizade no semáforo, racha ou na oficina. Raramente fica sério, a menos que a liberdade ou os amigos estejam em risco.",
  motivacao:
    "Provar que alguém comum, sem corporação, sem pedigree e com fé, gambiarra e coragem pode mudar algo real.",
  valoresCentrais: "Liberdade, lealdade, música, estrada e amizade.",
  visaoPessoas:
    "Todo mundo tem potencial pra ser bom — mas não force sua sorte.",
  oQueValoriza:
    "Liberdade, motor funcionando, lealdade e a sensação de vento na cara.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Cresceu desmontando eletrodomésticos e aprendendo mecânica nos becos da Mooca.",
    "Ignorou ofertas corporativas baratas que o transformariam num técnico descartável.",
    "Aos 23 anos, saiu para “comprar pão” — e rodou três continentes atrás da lenda americana: Night City.",
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
        "Ícaro respeita Oliver como um comandante indispensável. Mesmo achando algumas decisões dele pura loucura, confia porque já viu esse caos funcionar. Para Ícaro, Oliver é o tipo de pessoa que aposta alto, cruza limites e ainda assim segura o grupo de pé.",
    },

    Lyra: {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Ícaro vê Lyra como alguém ainda montando as próprias peças. Tenta ensiná-la memes, humor e ritmo brasileiro, mas também a protege com seriedade. Para ele, Lyra representa uma consciência nova que merece liberdade e identidade.",
    },

    // Muito positivo
    "Tessia Amberine": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Ícaro respeita Tessia de imediato. Vê nela firmeza, precisão e uma presença que identifica problemas antes que eles aconteçam.",
    },

    "Aiden Fowler": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Ícaro vê Aiden como parceiro de improviso. É uma amizade de madrugada, café ruim, risco e confiança.",
    },

    Ninvega: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Ícaro venera Ninvega como o primeiro robô que demonstrou sentir algo. Pelo menos, o primeiro que ele conheceu. Respeita sua gentileza, poesia e profundidade emocional, embora isso não impeça Ícaro de querer instalar neon no chassis dele.",
    },

    Mirai: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Ícaro trata Mirai como mascote hiperativo e quase como copiloto. Ama quando ele dança e tenta modificá-lo com LEDs e buzinas. No fundo, acredita que Mirai tem alma.",
    },

    "Kaede Komatsu": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Kaede Komatsu.png",
      descricao:
        "Kaede é namorada de Ícaro e presidente da Black Creek Production. Ícaro se apaixonou primeiro pela presença dela: a elegância, o poder e a maturidade de alguém que não precisa levantar a voz para dominar uma sala. Para ele, Kaede é intimidadora de um jeito bonito, uma mulher que parece estar sempre três passos à frente. O relacionamento dos dois é pouco convencional, especialmente por envolver também Akane, mas Ícaro vê Kaede como uma das figuras mais fortes, fascinantes e importantes da vida dele.",
    },

    "Akane Komatsu": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Akane Komatsu.png",
      descricao:
        "Akane também é namorada de Ícaro. A relação começou com flertes nos bastidores de videoclipes e virou algo bem mais complexo. Kaede e Akane são as namoradas dele; é um relacionamento estranho, pouco convencional e difícil de explicar por fora, mas funciona… de alguma forma.",
    },

    "Isaura Barbosa": {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Isaura Barbosa.png",
      descricao:
        "Isaura é a mãe de Ícaro. Costureira aposentada, forte e prática. Para Ícaro, ela representa casa, origem e o tipo de amor que não precisa entender tudo para apoiar.",
    },

    "Elias Barbosa": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Elias Barbosa.png",
      descricao:
        "Elias é o irmão mais novo de Ícaro. Mais disciplinado e organizado, trabalha como técnico de painéis solares e ajuda a cuidar da casa e da mãe. Ícaro pode ser o caos da família, mas vê Elias como alguém essencial, firme e confiável.",
    },

    // Positivo
    Ciel: {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Ciel é a filha adotiva de Oliver e Tessia. Por isso, Ícaro a enxerga como parte da família. Ele não necessariamente tem uma relação tão intensa com ela quanto tem com Oliver, mas toma muito cuidado com ela.",
    },

    "Kimber Destaro": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Ícaro gosta de provocar Kimber. Para ele, as reclamações dela sobre o barulho, o funk e o caos da oficina fazem parte da amizade. Mesmo brincando com a paciência dela, sabe exatamente até onde pode ir e reconhece o valor dela.",
    },

    Cypher: {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Ícaro via Cypher como alguém artisticamente estranho, mas genial. Os dois se conectavam pela música e pelo absurdo.",
    },

    Nyx: {
      tipo: "Positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Ícaro respeita a arte de Nyx. Tentava puxá-la para ritmos brasileiros, porque acreditava que a música dela ainda poderia descobrir novas cores.",
    },

    "Serena Ashbourne": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Ícaro gosta do drama de Serena. Para ele, ela entra em qualquer ambiente como se estivesse num espetáculo. Também valoriza o fato de ela bancar peças raras para o Uno, mesmo que veja nela uma extravagância quase teatral.",
    },

    "Priya Ellison": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Priya/Priya Ellison.png",
      descricao:
        "Ícaro tenta fazer Priya rir com piadas ruins e comentários absurdos. Gosta da força direta dela e da forma como ela não suaviza as coisas.",
    },

    "Dominic Don Von Chier": {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Dominic e Ícaro eram uma combinação de destruição e reconstrução. Dominic quebrava, Ícaro consertava. Dominic gritava, Ícaro colocava funk alto. De algum jeito absurdo, os dois funcionavam juntos, principalmente quando a missão já tinha virado bagunça.",
    },

    "Nayara Santos": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Nayara Santos.png",
      descricao:
        "Nayara é uma ex que virou amizade. Ícaro reconhece que o namoro tinha mais barulho do que sintonia emocional, mas ainda gosta da energia dela. Para ele, ela combina melhor como parceira de rolê, música e boas histórias.",
    },

    // Neutro/positivo
    Shinigami: {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Ícaro não tenta decifrar Shinigami. Ele o vê como um mistério respeitável.",
    },

    "Kleber Junior": {
      tipo: "Neutro/positivo",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Ícaro acha o “Cthulhu Neon” uma piada interna maravilhosa. Não entende metade das teorias de Kleber, mas respeita. Kleber é estranho, mas não descartável.",
    },

    "Valentina Rocha": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Ícaro/Valentina Rocha.png",
      descricao:
        "Valentina foi o primeiro grande amor de Ícaro. Ele a lembra mais com saudade do que com ressentimento. A relação terminou quando ela se mudou para Curitiba.",
    },

    // Neutro
    // Nenhum personagem nesta categoria.

    // Neutro/negativo
    "Daisy Moreau": {
      tipo: "Neutro/negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Ícaro/Daisy Moreau.png",
      descricao:
        "Daisy foi um caso breve, marcante e irritante. Ícaro ainda lembra dela como alguém livre, mas também como quem roubou as velas de ignição do Uno.",
    },

    // Negativo
    "Rina Okada": {
      tipo: "Negativo",
      status: "Detida",
      foto: "img/Personagens/Ícaro/Rina Okada.png",
      descricao:
        "Ícaro vê Rina como alguém que passou do limite. O namoro terminou mal depois que ela destruiu parte da garagem dele em um ataque de ciúmes. Para ele, qualquer chance de reconciliação ficou soterrada junto com os danos.",
    },

    "Bianca Graça": {
      tipo: "Negativo",
      status: "Morta",
      foto: "img/Personagens/Ícaro/Bianca Graça.png",
      descricao:
        "Bianca foi parceira de grafite e parte importante da vida de Ícaro na Mooca. O rompimento ficou pesado quando ela se alinhou a uma divisão corporativa de segurança, algo que Ícaro sentiu como traição aos ideais que dividiam.",
    },

    // Muito negativo
    "Los Halcones del Asfalto": {
      tipo: "Muito negativo",
      status: "Ativos",
      foto: "img/Personagens/Ícaro/Los Halcones del Asfalto.png",
      descricao:
        "São rivais diretos de corrida. Ícaro humilhou a reputação deles vencendo cinco corridas consecutivas com o Uno Amarelo, e o grupo nunca engoliu isso. Para ele, são perigosos, orgulhosos e bons o bastante para merecer atenção, mas não respeito pleno.",
    },

    "Oficina Padrão de Ouro": {
      tipo: "Muito negativo",
      status: "Ativa",
      foto: "img/Personagens/Ícaro/Oficina Padrão de Ouro.png",
      descricao:
        "Representa tudo que Ícaro detesta em mecânica corporativa: luxo, elitismo, controle de mercado e desprezo por quem vive de gambiarra honesta. Eles acusaram Ícaro de roubar clientes e peças; ele enxerga o conflito como inveja deles.",
    },

    // Inimigo jurado
    "Milícia da Marginal": {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Ícaro/Milícia da Marginal.png",
      descricao:
        "A Milícia da Marginal é ameaça. Eles controlam trechos da Rodovia dos Bandeirantes e Ícaro cruzou seus interesses vezes demais. Para ele, esse grupo não é competição: é alvo, perigo e um problema que precisava ser enfrentado.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Fiat Uno Amarelo": {
      imagem: "img/itens/Ícaro/Fiat Uno Amarelo.png",
      descricao:
        "Um Fiat Uno 1995 amarelo gritante, modificado por Ícaro para corridas ilegais, fugas urbanas e todo tipo de gambiarra mecânica possível. Barulhento, resistente e absurdo demais para ser ignorado, o carro se tornou uma extensão da própria identidade dele: caótico, improvisado, veloz e orgulhosamente marginal.",
    },
    "Óculos Juliet": {
      imagem: "img/itens/Ícaro/Óculos Juliet.png",
      descricao:
        "Óculos de lente curva que Ícaro usa quase como uma assinatura pessoal. Além de proteger os olhos durante corridas, manobras arriscadas e trabalhos em oficina, a Juliet reforça sua imagem provocadora e debochada — quando ela aparece na testa ou no rosto, geralmente significa que alguma ideia imprudente está prestes a acontecer.",
    },
    "Chave Inglesa Cromada": {
      imagem: "img/itens/Ícaro/Chave Inglesa Cromada.png",
      descricao:
        "Uma chave inglesa pesada, cromada e muito bem cuidada, usada por Ícaro tanto para consertar motores quanto para resolver problemas que insistem em ficar no caminho. É uma ferramenta simples, mas confiável, representando sua filosofia de vida: se algo quebrou, ele dá um jeito; se alguém atrapalhou, talvez também precise de ajuste.",
    },
    "Spray Verde Neon": {
      imagem: "img/itens/Ícaro/Spray Verde Neon.png",
      descricao:
        "Uma lata de spray verde neon usada por Ícaro para marcar muros, pistas, peças, becos e qualquer lugar onde queira deixar sua presença registrada. A cor vibrante brilha sob luz baixa e combina com sua energia caótica, funcionando como uma mistura de assinatura, provocação e arte de rua.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    Neuroport: {
      descricao:
        "O Neuroport é um sistema integrado de controle cibernético e conectividade neural que se tornou o padrão moderno para integração entre humanos e tecnologia, sendo amplamente adotado desde a infância por estar associado a melhores resultados educacionais, profissionais e financeiros ao longo da vida. O pacote inclui componentes como o Neural Link (sistema nervoso artificial para comunicação cérebro-implantes), Holophone (comunicação por comandos mentais), Biomonitor (monitoramento de sinais vitais), Virtuality (interface para ambientes virtuais), HUD/Chyron (projeção visual de informações contextuais), Shard Slots (para módulos cognitivos) e Interface Plug (conexão direta com sistemas externos). Sua disseminação é tão ampla que existem diversos modelos de financiamento e aquisição, enquanto indivíduos não integrados enfrentam desvantagens competitivas significativas em ambientes tecnológicos avançados, consolidando o Neuroport como infraestrutura essencial da sociedade contemporânea.",
    },
  },
};
