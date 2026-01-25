// Ícaro.js
// Ficha completa de Ícaro

personagens.Ícaro = {
  // Identificação básica
  nome: "Ícaro Barbosa",
  funcao: "Mecânico / Piloto / Artista de Rua",
  id: "84-0380-55",
  foto: "img/Personagens/Ícaro.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Mooca — Zona Leste de São Paulo, Brasil",
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
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Isaura Barbosa — costureira aposentada, forte e prática; sempre acreditou no filho, mesmo sem entender suas loucuras.",
    "Irmão: Elias Barbosa — 22 anos, trabalha como técnico de painéis solares na Zona Leste. Diferente de Ícaro, é disciplinado e organizado.",
    "Pai: desaparecido desde que Ícaro tinha 2 anos; nunca foi um assunto importante.",
    "Apesar das dificuldades, a família sempre se manteve unida. Elias hoje sustenta a casa e cuida da mãe, que sonha em ver os dois juntos novamente — mesmo que por chamada de vídeo.",
  ],
  pessoaMaisImportante: "",
  tragedia: [
    "A família Barbosa nunca passou fome, mas viveu sempre no limite.",
    "Dívidas, apagões, falta de oportunidades e as corporações engolindo o bairro tornaram a vida dura — mas também ensinaram Ícaro a improvisar.",
    "A verdadeira tragédia foi a monotonia que ele se recusou a aceitar.",
  ],

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
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver “Viole” Miller": {
      tipo: "friend",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Ícaro respeita Oliver como um comandante indispensável, mesmo quando suas decisões parecem pura loucura. Viole aposta alto, cruza limites e confia no caos — e Ícaro confia nele porque já sobreviveu vezes suficientes para saber que, estranhamente, funciona.",
    },

    "Tessia Amberine": {
      tipo: "friend",
      foto: "img/Personagens/Tessia.png",
      descricao:
        "O respeito foi imediato. Tessia tem tom firme, postura inabalável e um olhar que identifica falhas antes mesmo que elas existam. Ícaro sempre se oferece para levá-la de carro, dirigindo devagar demais para alguém como ele — um gesto silencioso de confiança.",
    },

    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Provocar Kimber é um hobby. Ícaro gosta quando ela perde a paciência, reclama do funk ecoando pela oficina e ameaça bater nele toda semana. Ele responde sempre com o mesmo sorriso convencido, sabendo exatamente até onde pode ir.",
    },

    "Aiden Fowler": {
      tipo: "friend",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Eles se entendem no improviso absoluto. Aiden arromba portas; Ícaro atravessa paredes. Amigos de madrugada, café horrível, planos mal pensados e decisões que só fazem sentido depois que dão certo.",
    },

    Cypher: {
      tipo: "friend",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Cypher já compôs uma música inteira sobre o Uno Amarelo. Ícaro respondeu criando um funk de garagem com batidas improvisadas em panelas e lataria. Cypher ajudou na mixagem — e os dois ainda discutem qual versão é melhor.",
    },

    Nyx: {
      tipo: "friend",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Ícaro acredita que Nyx deveria cantar bossa nova, samba ou pagode. Ele respeita profundamente a arte dela e adora desafiá-la musicalmente, sempre tentando puxá-la para novos ritmos sem jamais diminuir o talento que ela já tem.",
    },

    Shinigami: {
      tipo: "neutral",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Shinigami é um mistério que Ícaro não tenta decifrar. Ele faz piadas; Shinigami responde com silêncio e um leve balançar de cabeça. Às vezes, depois de horas calado, solta uma única frase que deixa Ícaro pensando por uma semana inteira.",
    },

    "Serena Ashbourne": {
      tipo: "friend",
      foto: "img/Personagens/Serena.png",
      descricao:
        "Serena vê Ícaro como algo exótico: o jeito brasileiro, o neon improvisado, a tatuagem cibernética torta. Ícaro adora o drama dela — Serena entra em qualquer sala como se estivesse descendo de um helicóptero. Em troca, ela banca peças raríssimas para o Uno.",
    },

    Ninvega: {
      tipo: "friend",
      foto: "img/Personagens/Ninvega.png",
      descricao:
        "Ícaro venera Ninvega como o primeiro robô que demonstrou sentir algo diante dele. Respeita sua gentileza, poesia e análise emocional profunda — mas isso não o impede de tentar instalar neon no chassis quando Ninvega não está olhando.",
    },

    Lyra: {
      tipo: "friend",
      foto: "img/Personagens/Lyra.png",
      descricao:
        "Ícaro tenta ensinar memes brasileiros para Lyra; ela responde com perguntas filosóficas sobre moralidade e existência. Ele a vê como alguém ainda montando as peças da humanidade — e quer ajudá-la a encontrar ritmo, humor e identidade.",
    },

    "Priya Ellison": {
      tipo: "friend",
      foto: "img/Personagens/Priya.png",
      descricao:
        "Ícaro vive tentando fazer Priya rir com piadas ruins e comentários absurdos. Ela resiste, mas às vezes deixa escapar um sorriso discreto. Trabalham juntos carregando peças pesadas e depois dividem refrigerante ou cerveja barata.",
    },

    "Dominic D. V. Chier": {
      tipo: "friend",
      foto: "img/Personagens/Dominic.png",
      descricao:
        "Dominic e Ícaro combinam destruição e precisão. Dominic quebra tudo; Ícaro reconstrói. Dominic grita em francês; Ícaro responde com funk alto. Juntos, o caos sempre termina funcionando.",
    },

    "Kleber Junior": {
      tipo: "friend",
      foto: "img/Personagens/Kleber.png",
      descricao:
        "Ícaro adora o conceito do Cthulhu Neon como piada interna. Não entende metade das teorias de Kleber sobre religião e luz cósmica, mas respeita sua devoção e intensidade espiritual.",
    },

    Mirai: {
      tipo: "pet",
      foto: "img/Personagens/Mirai.png",
      descricao:
        "Ícaro trata Mirai como um mascote hiperativo. Ama quando ele dança, odeia quando monta playlists de K-pop às três da manhã. No fundo, sente que Mirai tem alma — e isso o toca mais do que ele admite.",
    },

    "Valentina Rocha": {
      tipo: "ex",
      foto: "img/Personagens/Valentina.png",
      descricao:
        "Tatuadora da Mooca e primeiro grande amor adolescente de Ícaro. O relacionamento terminou quando ela se mudou para Curitiba, deixando mais saudade do que ressentimento.",
    },

    "Rina Okada": {
      tipo: "ex",
      foto: "img/Personagens/Rina.png",
      descricao:
        "Pilota de drift intensa e impulsiva. O namoro acabou depois que ela destruiu metade da garagem de Ícaro durante um ataque de ciúmes, levando junto qualquer chance de reconciliação.",
    },

    "Daisy Moreau": {
      tipo: "ex",
      foto: "img/Personagens/Daisy.png",
      descricao:
        "Nômade francesa e caso breve, porém marcante. Terminou quando Daisy roubou as velas de ignição do Uno como 'vingança poética', desaparecendo logo depois.",
    },

    "Nayara Santos": {
      tipo: "ex",
      foto: "img/Personagens/Nayara.png",
      descricao:
        "DJ carioca cheia de energia. Hoje são amigos, mas o namoro era mais barulho do que sintonia real, com batidas altas e pouco alinhamento emocional.",
    },

    "Bianca Graça": {
      tipo: "ex",
      foto: "img/Personagens/Bianca.png",
      descricao:
        "Grafiteira parceira de Ícaro na Mooca. O relacionamento acabou quando ela decidiu se alistar na divisão acolchoada de segurança corporativa, algo que Ícaro sentiu como uma traição aos ideais deles.",
    },

    "Kaede Kurokawa": {
      tipo: "romantic",
      foto: "img/Personagens/Kaede.png",
      descricao:
        "Atual relacionamento. Presidente da Black Creek Production. Ícaro se apaixonou pela presença imponente de Kaede: elegância, poder, maturidade e controle absoluto do ambiente.",
    },

    "Akane Kurokawa": {
      tipo: "romantic",
      foto: "img/Personagens/Akane.png",
      descricao:
        "Atriz e filha de Kaede. O relacionamento começou com flertes nos bastidores de videoclipes e evoluiu para algo mais complexo. Atualmente, Ícaro mantém o relacionamento com ambas.",
    },

    "Los Halcones del Asfalto": {
      tipo: "enemy",
      foto: "img/Personagens/Halcones.png",
      descricao:
        "Grupo rival de corredores mexicanos que jurou vingança depois que Ícaro venceu cinco corridas consecutivas usando o Uno Amarelo, humilhando sua reputação.",
    },

    "Oficina Padrão de Ouro": {
      tipo: "enemy",
      foto: "img/Personagens/Oficina Padrão Ouro.png",
      descricao:
        "Corporação de mecânica de luxo que acusa Ícaro de roubar clientes e peças. O conflito é constante, movido por inveja, mercado e ideologia.",
    },

    "Milícia da Marginal": {
      tipo: "enemy",
      foto: "img/Personagens/Milicia Marginal.png",
      descricao:
        "Bando armado que controla trechos da antiga Rodovia dos Bandeirantes. Ícaro já cruzou seus interesses vezes demais para não ser considerado um alvo.",
    },

    "Cabo Augusto “Guto Radar”": {
      tipo: "enemy",
      foto: "img/Personagens/Cabo Augusto.png",
      descricao:
        "Policial rodoviário obcecado em prender Ícaro. Há três anos tenta capturá-lo sem sucesso, tornando a perseguição algo pessoal.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Fiat Uno Amarelo 1995": {
      imagem: "img/itens/Uno_Amarelo.png",
      descricao:
        "Um Fiat Uno 1995 pintado de amarelo gritante, extensivamente modificado para corridas ilegais. Motor retrabalhado, suspensão reforçada e interior simplificado ao extremo. Mais do que um carro, é um símbolo de liberdade, risco e velocidade.",
    },

    "Spray Verde Neon": {
      imagem: "img/itens/Spray_Verde.png",
      descricao:
        "Lata de spray verde neon usada para marcações clandestinas. A tinta é altamente visível mesmo no escuro e costuma ser usada para deixar sinais rápidos em muros, asfalto ou estruturas abandonadas.",
    },

    "Óculos Juliet": {
      imagem: "img/itens/Óculos_Juliet.png",
      descricao:
        "Óculos escuros de lente curva, quase sempre repousando na testa. Servem tanto como proteção ocular quanto como acessório de identidade, transmitindo atenção constante e prontidão para a ação.",
    },

    "Brinco Discreto": {
      imagem: "img/itens/Brinco_Discreta.png",
      descricao:
        "Brinco pequeno e minimalista, usado em apenas uma orelha. Detalhe sutil que equilibra discrição e personalidade, quase imperceptível à primeira vista.",
    },

    "Corrente do Avô": {
      imagem: "img/itens/Corrente_Avô.png",
      descricao:
        "Corrente metálica simples que carrega antiga herdada do avô. Funciona como amuleto, memória afetiva e símbolo de continuidade familiar.",
    },

    "Luvas Táticas": {
      imagem: "img/itens/Luvas_Táticas.png",
      descricao:
        "Luvas resistentes, próprias para proteção das mãos em situações de esforço físico, escaladas improvisadas ou manuseio de ferramentas. Garantem firmeza, aderência e segurança.",
    },

    "Chave Inglesa": {
      imagem: "img/itens/Chave-Inglesa.png",
      descricao:
        "Ferramenta pesada e confiável, carregada no bolso lateral para acesso rápido. Útil tanto para reparos mecânicos quanto para situações imprevistas que exigem força e improviso.",
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
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Mecânica automotiva improvisada, preparação de carros clandestinos, reparo de emergência e customização não registrada",
  modoTrabalho:
    "Aprende fazendo, conserta sob pressão, usa gambiarra inteligente, adapta peças incompatíveis e resolve problemas na hora — sem manual",
  espacoTrabalho:
    "Oficinas abandonadas, garagens improvisadas, beira de estrada, pátios industriais e qualquer lugar onde o carro consiga parar",
  clientes:
    "Corredores ilegais, nômades, contrabandistas, artistas de rua, motoristas sem grana e gente que não pode confiar em oficinas corporativas",
};
