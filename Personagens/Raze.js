// Raze.js
// Ficha completa de Raze Lambert

personagens.raze = {
  // Identificação básica
  nome: "Raze Lambert",
  funcao: "Netrunner | Ex-Organização XIII (Rank XI) | Atual conselheiro da Arasaka",
  id: "50-8583-78",
  foto: "img/Personagens/Raze.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "Westbrook, Night City",
  dataNascimento: "22/MAR/2063",
  idade: 28,
  altura: "1,83 m",
  peso: "67 kg",

  // Citação e objetivo
  citacao: "“Nesse mundo… nada de bom acontece com heróis.”",
  objetivoVida:
    "Ganhar poder suficiente para que nunca mais precise “se misturar com lixo de rua”. Vê a Arasaka como ferramenta — não como mestre.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Sarcástico, cínico, estrategista natural, ambicioso até o limite. Tendência a manipular e esconder emoções.",
  comportamentoSocial:
    "Quieto, observador, prefere ouvir e analisar do que participar. Sutil, quase invisível quando quer. Mostra uma calma anormal em situações de risco.",
  motivacao:
    "Escapar da vida miserável e ascender ao topo. Não importa o custo. Sempre acreditou que merecia algo maior que a XIII.",
  valoresCentrais:
    "Liberdade pessoal, autopreservação, inteligência acima da força. Valoriza o conhecimento como moeda de poder. Desprezo silencioso por quem considera inferior.",
  visaoPessoas:
    "Não são confiáveis. Nunca dependa de ninguém. Destrua quem ficar no caminho.",
  oQueValoriza: "Controle. Informação. Vantagem antecipada.",

  // --------------------------------------------------------------------
  // HISTÓRICO FAMILIAR
  // --------------------------------------------------------------------

  antecedentesFamiliares: [
    "Mãe: Elaine Lambert, técnica de manutenção de infraestrutura predial. Trabalhou em empregos precários para sustentar a família. Faleceu de overdose em 2077.",
    "Pai: Donovan Lambert, técnico corporativo de nível baixo na Continental Brands. Após perder o emprego, se afundou em dívidas. Abandonou Raze e a mãe quando ele tinha 7 anos.",
  ],
  pessoaMaisImportante:
    "Ele mesmo — ninguém mais merece sua lealdade ou confiança.",
  tragedia: [
    "Aos 16 anos, a mãe de Raze foi morta em um assalto causado por um viciado desesperado. Quando viu sua mãe morta, Raze não sentiu nada, apenas entendeu que o mundo não tem sentido, justiça ou propósito. A única salvação é assumir controle absoluto da própria vida, não importa o preço que tiver que pagar.",
  ],

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Raze cresceu em Charter Hill, em uma família pobre e presa a contratos abusivos. Desde cedo demonstrou talento excepcional para invasão de sistemas, movido por curiosidade e necessidade. Aos 17 anos entrou para a Organização XIII e assumiu o Rank XI, se aproximando de Oliver, Ivy e Kane tanto em missões quanto na banda improvisada do grupo. Apesar do vínculo, nunca acreditou realmente em “família” — apenas em oportunidade. Sua ascensão pessoal e falta de crença em lealdade culminaram na famosa traição à XIII, quando vendeu a operação para a Arasaka em troca de proteção e um lugar definitivo no topo do mundo corporativo. Desde então, Raze se tornou um conselheiro valioso para a Arasaka, utilizando suas habilidades para garantir que nunca mais precise depender de ninguém além de si mesmo.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------
  // Tipos de relação válidos:
  // "romantic", "friend", "enemy", "neutral, "family", "ex", "pet", "rival"

  relacoes: {
    "Oliver Miller": {
      tipo: "enemy",
      foto: "img/Personagens/Oliver.png",
      descricao:
        "Para Raze, Oliver era, e ainda é, um objeto de fascínio. Ele não via Oliver como um amigo, mas sim um experimento. O fato de Oliver ter sobrevivido é irritante. Para Raze, destruir aquilo que admira é a forma mais íntima de posse. Ele quer ver Oliver quebrado, porque isso o faria sentir que tem controle sobre algo que nunca pôde possuir.",
    },

    "Kane Graves": {
      tipo: "neutral",
      foto: "img/Personagens/Kane.png",
      descricao:
        "Kane incomodava Raze. Ele era capaz de enxergar além de sua máscara. Kane via nele potencial, mas também desequilíbrio. Kane tentou guiá-lo, e mesmo que fingisse, Raze odiava isso. quando Raze o traiu, foi uma forma de se libertar da influência que ele nunca quis.",
    },

    Ivy: {
      tipo: "neutral",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Raze a desprezava desde o primeiro momento. Para ele, Ivy era fraca. Mas o verdadeiro motivo por trás desse desprezo era outro: Ivy tirou Oliver da órbita dele. O fim do relacionamento dela com Oliver foi, para Raze, apenas “a ordem natural das coisas”.",
    },

    "Kimber Destaro": {
      tipo: "enemy",
      foto: "img/Personagens/Kimber.png",
      descricao:
        "Kimber sempre foi um problema para Raze. Ela era um incômodo persistente. Kimber nunca confiou nele, e ele nunca tentou mudar isso. Ele respeita a inteligência dela, e reconhece que ela é capaz de matá-lo. E isso o diverte.",
    },

    "Aiden Fowler": {
      tipo: "enemy",
      foto: "img/Personagens/Aiden.png",
      descricao:
        "Aiden despertava desprezo sincero em Raze. Não pela habilidade, Aiden é talentoso, mas é um netrunner fraco: emocional, instável e impulsivo demais. Tudo o que Raze mais despreza na espécie humana.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Velhas Baquetas Quebradas": {
      imagem: "img/itens/baquetas-quebradas.png",
      descricao:
        "Suas primeiras baquetas, usadas durante os shows da Ghouls ’n Ghosts. Estão desgastadas e com lascas, mas Raze as guarda, mesmo que diga que não se importa com o passado.",
    },

    "Antiga jaqueta da XIII de Oliver": {
      imagem: "img/itens/jaqueta-oliver.png",
      descricao:
        "Jaqueta de couro preta com detalhes vermelhos, originalmente pertencente a Oliver. Raze a roubou após a traição à XIII como um troféu simbólico.",
    },

    "Foto do Grupo (com um detalhe estranho)": {
      imagem: "img/itens/foto-estranha.png",
      descricao:
        "Uma foto de Oliver, Kane e Raze no palco do Rusted Note, mas o rosto de Kane está completamente riscado.",
    },

    "Pulseira neural proprietária da Arasaka": {
      imagem: "img/itens/pulseira-arasaka.png",
      descricao:
        "Uma pulseira neural de última geração fornecida pela Arasaka. Permite acesso seguro a redes corporativas e proteção contra invasões externas.",
    },

    "Luvas de feedback tátil usadas": {
      imagem: "img/itens/luvas-feedback.png",
      descricao:
        "Luvas especializadas que proporcionam feedback tátil aprimorado durante a execução de quickhacks, aumentando a precisão e eficiência de Raze em ambientes virtuais hostis.",
    },

    "Óculos de Análise de Frequência": {
      imagem: "img/itens/oculos-frequencia.png",
      descricao:
        "Óculos equipados com tecnologia avançada de análise de frequência, permitindo a Raze detectar sinais digitais e identificar vulnerabilidades em sistemas de segurança com facilidade.",
    },

    "Brinco preto": {
      imagem: "img/itens/brinco-preto.png",
      descricao:
        "Um brinco preto simples que Raze usa como um lembrete silencioso de sua identidade e independência. Embora pareça trivial, ele o valoriza como um símbolo pessoal.",
    },

    "Cyberdeck personalizado": {
      imagem: "img/itens/cyberdeck-Raze.png",
      descricao:
        "Um cyberdeck de última geração modificado por Raze para maximizar sua eficiência em invasões digitais. Equipado com software exclusivo e hardware otimizado para suas necessidades específicas.",
    },

    "Arquivo de Registros de Transcrições Comportamentais": {
      imagem: "img/itens/registros-comportamentais.png",
      descricao:
        "Um conjunto de arquivos digitais contendo transcrições detalhadas de interações e comportamentos observados em alvos anteriores.",
    },

    "Adagas Gêmeas “Wahrheit” e “Falschheit”": {
      imagem: "img/itens/adagas-gemeas.png",
      descricao:
        "Duas adagas de combate corpo a corpo, uma chamada 'Wahrheit' (Verdade) e a outra 'Falschheit' (Falsidade). Raze as utiliza em situações onde o combate físico é inevitável.",
    },

    "Machado “Belial”": {
      imagem: "img/itens/machado-belial.png",
      descricao:
        "O machado de combate corpo a corpo com lâmina dupla com aparência demoniaca que Kane utilizava em combates próximos. Raze o roubou após a morte de Kane, como um troféu.",
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
    Cyberdeck: {
      descricao:
        "Unidade de processamento cibernético integrada diretamente a uma prótese de braço. Permite acesso direto a sistemas digitais, redes e ambientes virtuais com latência mínima, eliminando a necessidade de dispositivos externos portáteis.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    "Enhanced Antibodies": {
      descricao:
        "Tratamento biocibernético focado no fortalecimento do sistema imunológico e nos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
    },
    "Internal Agent": {
      descricao:
        "Assistente digital totalmente integrado ao corpo do usuário, oferecendo comunicação, processamento de dados e acesso a redes corporativas sem necessidade de dispositivos externos. Pode operar de forma auditiva ou visual conforme integração disponível.",
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
    "Neuroport Cyberdeck Port": {
      descricao:
        "Porta de conexão cervical dedicada que integra diretamente um cyberdeck ao sistema neural do usuário. Proporciona alcance ampliado, maior estabilidade de sinal e resposta mais eficiente em operações de alta complexidade digital.",
    },
    "Pain Editor": {
      descricao:
        "Módulo de controle neural da dor que regula a percepção de estímulos nocivos. Desenvolvido para garantir continuidade operacional mesmo sob condições físicas extremas, respeitando limites fisiológicos seguros.",
    },
    "Self-ICE": {
      descricao:
        "Sistema interno de contramedidas digitais projetado para proteger a mente do usuário contra intrusões eletrônicas e ataques de interferência neural. Atua de forma autônoma, reforçando a integridade cognitiva em ambientes hostis ou altamente conectados.",
    },
    "Skin Weave": {
      descricao:
        "Reforço subdérmico distribuído por todo o corpo, composto por fibras sintéticas de alta resistência entrelaçadas aos tecidos naturais. Proporciona proteção passiva contínua sem interferir na mobilidade ou exigir equipamentos externos.",
    },
    "Subdermal Grip": {
      descricao:
        "Implante neuromuscular que otimiza a interface entre o sistema nervoso e dispositivos empunhados. Permite controle preciso e responsivo de armamentos e ferramentas inteligentes sem a necessidade de conexões externas visíveis.",
    },
  },
  // --------------------------------------------------------------------
  // PERFIL PROFISSIONAL
  // --------------------------------------------------------------------

  tipoTrabalho:
    "Especialista em invasão neural, coleta de dados, engenharia reversa de black ICE e ataques silenciosos.",
  modoTrabalho:
    "Silencioso, eficiente, sem confrontos desnecessários. Evita combate físico. Controla territórios digitais enquanto terceiriza o trabalho sujo.",
  espacoTrabalho:
    "Escritório blindado da Arasaka em Night City. Local físico minimalista; ambiente virtual extremamente agressivo.",
  clientes: "Arasaka. Trabalha exclusivamente para a corporação.",
};
