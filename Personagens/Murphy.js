// Murphy.js
// Ficha completa de Murphy

personagens.Murphy = {
  // Identificação básica
  nome: "Elliot Murphy",
  funcao:
    "Ex-Tech | Ex-Organização XIII (Rank III) | Proprietário do Rusted Note",
  id: "58-8432-21",
  foto: "img/Personagens/Murphy.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Santo Domingo, Night City",
  dataNascimento: "03/MAR/2059",
  idade: 32,
  altura: "1,68 m",
  peso: "84 kg",

  // Citação e objetivo
  citacao:
    "“Se veio reclamar, entre na fila. Se veio beber, entra também… é a mesma fila.”",
  objetivoVida:
    "Manter seu bar funcionando e, quem sabe, um dia conseguir se aposentar longe de Night City. Ele mantém a esperança de que um dia as coisas possam melhorar, mas não aposta muito nisso.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Empático, nostálgico, engenhoso, teimoso, leal a ponto de se machucar.",
  comportamentoSocial:
    "Fala pouco, mas sempre certeiro. Lembra aniversários, datas importantes e prefere escutar a falar. Age como “pai da galera”, mesmo negando.",
  motivacao:
    "Construir algo simples e seguro. Elliot não quer mudar Night City, só quer que o bar sobreviva a ela.",
  valoresCentrais:
    "Lealdade acima de tudo, honestidade, paz, gentileza e liberdade de escolha. Odeia violência, mas entende que a cidade raramente oferece alternativas limpas.",
  visaoPessoas:
    "A maior parte só está tentando sobreviver. Mas tem aqueles que escolhem o caminho errado. Nem todos merecem uma segunda chance.",
  oQueValoriza:
    "Rotina, estabilidade e o direito de viver sem ser engolido pela selva corporativa. Valoriza amizades verdadeiras e momentos de paz.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Marlene Murphy, cozinheira de um restaurante local. Ainda vive e mantém contato próximo com Elliot.",
    "Pai: Thomas Murphy, operador portuário e mecânico pesado. Falecido em 2073 devido a complicações de saúde relacionadas ao trabalho.",
    "Padrasto: Miguel Serrano, motorista de caminhão. Um dos poucos que ainda insiste em dirigir manualmente em Night City, ao invés de confiar um IAs autônomas.",
  ],
  pessoaMaisImportante:
    "Kane Graves — irmão de alma, maior dor e maior inspiração.",
  tragedia: [
    "A morte de Kane na explosão causada por Raze Lambert o destruiu.",
    "Foi a primeira vez que Murphy pensou em fechar o bar — mas decidiu que o Rusted Note seria um memorial silencioso.",
    "Ele criou uma bebida exclusiva chamada “Graves”, em homenagem ao seu irmão de alma.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Elliot nasceu em uma família de trabalhadores. Foi criado por uma mãe cozinheira e um padrasto taxista. Cresceu vendo mais bares fecharem do que abrirem — talvez seja por isso que seu sonho sempre foi ter um.",
    "Murphy sempre foi um Tech de talento natural: desmontava máquinas por hobby, consertava drones por necessidade.",
    "Fundou a Organização XIII aos 15 anos, junto de Kane e Dakota. Nunca gostou de violência, mas queria apoiar o melhor amigo. Murphy saiu da XIII antes da pior fase.",
    "Kane tentou convencê-lo a ficar, mas o jovem Tech tinha um sonho que queria seguir. Murphy juntou cada crédito que ganhou como mecânico freelance até abrir o Rusted Note, um bar montado dentro de um antigo depósito. O lugar virou ponto de encontro de mercenários cansados, artistas falidos, e ocasionalmente, membros da XIII fugindo do caos.",
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
        "Murphy vê Oliver como um eco vivo do que Kane representava no passado. Mais do que respeito, existe uma mistura de nostalgia e esperança: Oliver carrega um legado pesado, e Murphy acredita que ele realmente tenta fazer algo decente com isso. É uma relação silenciosa, construída mais em significado do que em palavras.",
    },

    "Kane Graves": {
      tipo: "family",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Kane foi mais do que um amigo: era irmão, parceiro e bússola moral durante os anos na Organização XIII. Sua morte marcou o ponto de ruptura definitivo na vida de Murphy. O Rusted Note existe, em parte, como uma homenagem constante a Kane e ao que ele representava.",
    },

    "Dakota Veyriss": {
      tipo: "ex",
      foto: "img/Personagens/Dakota.png",
      descricao:
        "Amigos desde muito antes da XIII, Dakota e Murphy compartilhavam sonhos parecidos no começo. Para ele, no entanto, ela acabou se perdendo exatamente no tipo de vida que ele e Kane sempre evitaram: implantes excessivos, riscos extremos e violência constante. O afastamento foi doloroso, mas inevitável.",
    },

    "Kimber Destaro": {
      tipo: "friend",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Murphy foi mentor de Kimber nos primeiros anos, ensinando desde ferramentas improvisadas até lógica prática. Ela cresceu rápido, aprendeu mais do que ele jamais imaginou e acabou superando-o em quase tudo. Murphy não sente inveja — apenas um orgulho genuíno e silencioso.",
    },

    "Ivy Naranjo": {
      tipo: "neutral",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Murphy conheceu Ivy quando a Ghouls ’n Ghosts tocava no Rusted Note. Nunca foram realmente próximos, mas ele sempre apreciou a energia leve e o astral dela. O relacionamento de Ivy com Oliver nunca o convenceu, não por falta de sentimento, mas por caminhos de vida que pareciam incompatíveis.",
    },

    "Aiden Fowler": {
      tipo: "neutral",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Aiden entrou para a Organização XIII muito depois da saída de Murphy, então não compartilham um passado. Murphy acha que o garoto fala rápido demais e pensa pouco antes de agir, mas reconhece que ele tem um bom coração e intenções honestas.",
    },

    "Raze Lambert": {
      tipo: "enemy",
      foto: "img/Personagens/Raze.png",
      descricao:
        "Antes da morte de Kane, Raze era apenas um nome distante no radar de Murphy. Quando se tornou responsável pela explosão que matou Kane, tudo mudou. Murphy não busca vingança, mas não tolera sua presença e não quer qualquer ligação com ele.",
    },

    Corporativos: {
      tipo: "enemy",
      foto: "img/Personagens/Corporativos.png",
      descricao:
        "Quando alguns corporativos tentaram comprar o Rusted Note para transformá-lo em uma franquia temática, o bar fechou por três dias. Hoje, os crachás corporativos quebrados pendurados na parede servem como lembrete claro de que aquele tipo de poder não é bem-vindo ali.",
    },

    Arasaka: {
      tipo: "enemy",
      foto: "img/arasaka/arasaka-logo.png",
      descricao:
        "Murphy nunca teve um conflito direto com a Arasaka, mas carrega um ressentimento herdado de Kane e da própria história da XIII. Para ele, a corporação simboliza exatamente o que ele tenta manter longe do Rusted Note: poder excessivo, violência institucionalizada e influência sufocante.",
    },

    "Helena Vortmann": {
      tipo: "ex",
      foto: "img/Personagens/Helena.png",
      descricao:
        "Helena foi o primeiro grande amor de Murphy, quando ele ainda tentava levar uma vida comum. Trabalhava em um restaurante e acreditava em estabilidade. A entrada dele na Organização XIII foi o limite: ela terminou por mensagem e desapareceu completamente de sua vida.",
    },

    "Hazel Reeve": {
      tipo: "ex",
      foto: "img/Personagens/Hazel.png",
      descricao:
        "Hazel era tatuadora freelance e ex-nômade. Conheceu Murphy enquanto ele ainda construía o Rusted Note. Apesar da conexão intensa, Hazel nunca conseguiu abandonar o chamado da estrada. O relacionamento terminou quando ficou claro que eles queriam futuros incompatíveis.",
    },

    "Maria Delgado": {
      tipo: "ex",
      foto: "img/Personagens/Maria.png",
      descricao:
        "Maria é uma Netrunner sarcástica, teimosa e viciada em confusão. Foi esposa de Murphy por alguns anos, em um relacionamento intenso, caótico e apaixonado. A separação não apagou a ligação entre os dois: ainda existe atração, respeito e conflitos mal resolvidos. Ambos prezam pela independência, mas nunca conseguiram se afastar completamente.",
    },

    "Thomas Murphy": {
      tipo: "family",
      foto: "img/Personagens/Thomas.png",
      descricao:
        "Thomas é o filho mais velho de Murphy. Inteligente, observador e mais reservado, cresceu vendo o pai tentar manter o Rusted Note longe do caos do mundo corporativo. Embora não concorde com todas as escolhas de Murphy, respeita profundamente seus valores.",
    },

    "Jesse Murphy": {
      tipo: "family",
      foto: "img/Personagens/Jesse.png",
      descricao:
        "Jesse é a filha mais nova de Murphy, curiosa, determinada e questionadora. Diferente do irmão, ela confronta o pai com frequência, tentando entender o passado que ele evita contar. Apesar dos choques, existe entre os dois um vínculo forte e inabalável.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Guitarra restaurada de Kane": {
      imagem: "img/itens/Guitarra_Kane.png",
      descricao:
        "Uma guitarra antiga cuidadosamente restaurada, pendurada na parede do bar como um memorial silencioso. As marcas no corpo e o brilho irregular do verniz contam histórias de noites longas, músicas improvisadas e da ligação profunda entre a guitarra e Kane.",
    },

    "Foto antiga antes da XIII": {
      imagem: "img/itens/Foto_XIII.png",
      descricao:
        "Uma fotografia desgastada pelo tempo mostrando ele e Kane sorrindo despreocupados, capturada antes da XIII mudar tudo. As bordas estão amareladas e levemente dobradas, mas o sorriso dos dois permanece intacto, quase desafiando o que viria depois.",
    },

    "Receita do drink “Graves”": {
      imagem: "img/itens/Receita_Graves.png",
      descricao:
        "A receita original do drink “Graves”, escrita à mão em um papel manchado pelo tempo e bebida. Cada ingrediente tem um significado, e o preparo exato é tratado quase como um ritual dentro do bar.",
    },

    "Relógio analógico restaurado": {
      imagem: "img/itens/Relógio_Restaurado.png",
      descricao:
        "Um relógio analógico raríssimo, restaurado com precisão quase obsessiva. O tique-taque constante ecoa como um lembrete de que o tempo continua avançando, mesmo quando o passado insiste em permanecer.",
    },

    Óculos: {
      imagem: "img/itens/Óculos_Murphy.png",
      descricao:
        "Óculos de lentes resistentes, usados tanto para proteger os olhos quanto para esconder o cansaço acumulado. As hastes apresentam leves riscos, sinais de uso constante em ambientes pouco amigáveis.",
    },

    "Braçadeira com ferramentas compactas": {
      imagem: "img/itens/Braçadeira_Ferramentas.png",
      descricao:
        "Uma braçadeira reforçada contendo ferramentas compactas escondidas em compartimentos internos. Prática e funcional, foi pensada para resolver problemas rápidos sem chamar atenção.",
    },

    "Toalha de bar no ombro": {
      imagem: "img/itens/Toalha_Bar.png",
      descricao:
        "Uma toalha de bar gasta, quase sempre jogada sobre o ombro. Mais do que um utensílio, tornou-se um hábito automático, absorvendo suor, bebida derramada e parte da rotina diária do Rusted Note.",
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

    Cyberarm: {
      descricao:
        "Prótese cibernética de membro superior desenvolvida para substituição total do braço orgânico. Oferece estrutura modular interna para integração de múltiplos sistemas especializados, mantendo ergonomia, força e controle refinado. Projetada para aplicações civis, industriais e táticas.",
    },

    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },

    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
    },

    MicroOptics: {
      descricao:
        "Sistema óptico de ampliação extrema integrado à visão cibernética. Ideal para vigilância, análise técnica, inspeção de precisão e operações que exigem observação detalhada a longas distâncias.",
    },

    Techscanner: {
      descricao:
        "Scanner técnico portátil integrado ao usuário, capaz de analisar sistemas mecânicos e eletrônicos em tempo real. Essencial para diagnóstico, manutenção, reparo e auditoria técnica em campo.",
    },

    "Tool Hand": {
      descricao:
        "Implante multifuncional que integra ferramentas técnicas diretamente nos dedos da mão. Projetado para profissionais que exigem acesso imediato a instrumentos básicos sem depender de kits externos.",
    },

    "Self-ICE": {
      descricao:
        "Sistema interno de contramedidas digitais projetado para proteger a mente do usuário contra intrusões eletrônicas e ataques de interferência neural. Atua de forma autônoma, reforçando a integridade cognitiva em ambientes hostis ou altamente conectados.",
    },
  },

  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Especializado em mecânica analógica, instrumentos, próteses sonoras e gambiarras criativas.",
  modoTrabalho:
    "Improvisação precisa; trabalha devagar, mas entrega algo que nunca falha. Prefere soluções baratas e engenhosas do que upgrades corporativos.",
  espacoTrabalho:
    "Oficina anexa ao Rusted Note: cheia de peças velhas, caixas de ferramentas, amplificadores desmontados e cheiro de óleo queimado.",
  clientes:
    "Dandelions, Solos locais, Músicos, Mercenários ferrados precisando de um ombro e de um drink.",
};
