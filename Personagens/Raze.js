// Raze.js
// Ficha completa de Raze Lambert

personagens.raze = {
  // Identificação básica
  nome: "Raze Lambert",
  funcao:
    "Netrunner | Ex-Organização XIII (Rank XI) | Atual conselheiro da Arasaka",
  id: "50-8583-78",
  foto: "img/Personagens/Raze/Raze Lambert.png",
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
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Raze cresceu em Charter Hill, em uma família pobre e presa a contratos abusivos. Desde cedo demonstrou talento excepcional para invasão de sistemas, movido por curiosidade e necessidade. Aos 17 anos entrou para a Organização XIII e assumiu o Rank XI, se aproximando de Oliver, Ivy e Kane tanto em missões quanto na banda improvisada do grupo. Apesar do vínculo, nunca acreditou realmente em “família” — apenas em oportunidade. Sua ascensão pessoal e falta de crença em lealdade culminaram na famosa traição à XIII, quando vendeu a operação para a Arasaka em troca de proteção e um lugar definitivo no topo do mundo corporativo. Desde então, Raze se tornou um conselheiro valioso para a Arasaka, utilizando suas habilidades para garantir que nunca mais precise depender de ninguém além de si mesmo.",
  ],

  // --------------------------------------------------------------------
  // RELAÇÕES INTERPESSOAIS
  // --------------------------------------------------------------------

  relacoes: {
    // Aliado Incondicional
    // Nenhum personagem nesta categoria.

    // Muito positivo
    // Nenhum personagem nesta categoria.

    // Positivo
    Arasaka: {
      tipo: "Positivo",
      status: "Ativa",
      foto: "img/Arasaka/Arasaka.png",
      descricao:
        "Raze vê a Arasaka como uma ferramenta de ascensão, proteção e influência. Não a trata como “mestre”, mas como estrutura útil para chegar ao topo. Trabalha para ela porque a corporação dá acesso a poder, redes, recursos e segurança.",
    },

    // Neutro/positivo
    "Elaine Lambert": {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Elaine Lambert.png",
      descricao:
        "Elaine foi sua mãe e sustentou a família em condições precárias. A morte dela marcou Raze não pelo luto comum, mas pela conclusão fria de que o mundo não tem justiça nem sentido. Ele não parece guardar afeto aberto por ela; guarda a lembrança como prova de que depender dos outros é fraqueza.",
    },

    // Neutro
    Faraday: {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Faraday.png",
      descricao:
        "Raze demorou a descobrir a identidade de seu pai, mas não gosta dele. Para Raze, Faraday representa ausência e uma origem que ele prefere rejeitar. Mesmo sem saber muito sobre ele, Raze o associa a fraqueza, dívida emocional e algo que não merece respeito.",
    },

    // Neutro/negativo
    // Nenhum personagem nesta categoria.

    // Negativo
    "Aiden Fowler": {
      tipo: "Negativo",
      status: "Vivo",
      foto: "img/Personagens/Aiden Fowler.png",
      descricao:
        "Raze despreza Aiden. Reconhece que ele é talentoso como netrunner, mas o considera fraco por ser emocional, impulsivo e instável. Para Raze, Aiden representa tudo que ele despreza em pessoas brilhantes que ainda se deixam guiar por afeto, culpa ou moral.",
    },

    Ivy: {
      tipo: "Negativo",
      status: "Desconhecido",
      foto: "img/Personagens/Ivy.png",
      descricao:
        "Raze desprezava Ivy e a via como fraca. O desprezo, porém, tem fundo pessoal: ela tirou Oliver da órbita dele. Para Raze, o fim do relacionamento dela com Oliver foi apenas a “ordem natural das coisas”, como se Ivy nunca tivesse sido digna de permanecer perto dele.",
    },

    // Muito negativo
    "Kane Graves": {
      tipo: "Muito negativo",
      status: "Morto",
      foto: "img/Personagens/Kane Graves.png",
      descricao:
        "Kane incomodava Raze porque conseguia enxergar além da máscara dele. Via seu potencial, mas também sua escuridão, e tentou guiá-lo. Raze odiava essa influência. Traí-lo foi, para ele, uma forma de cortar o último laço moral que ainda tentava segurá-lo.",
    },

    "Kimber Destaro": {
      tipo: "Muito negativo",
      status: "Viva",
      foto: "img/Personagens/Kimber Destaro.png",
      descricao:
        "Kimber sempre foi um problema para Raze. Ela nunca confiou nele, e ele nunca tentou convencê-la do contrário. Apesar disso, respeita sua inteligência e sabe que ela é perigosa o bastante para matá-lo. Esse risco não o assusta: o diverte.",
    },

    // Inimigo jurado
    "Oliver Miller": {
      tipo: "Inimigo jurado",
      status: "Vivo",
      foto: "img/Personagens/Oliver Miller.png",
      descricao:
        "Oliver é uma obsessão para Raze. Ele não o vê como amigo, mas como algo que deseja estudar, possuir e quebrar. A sobrevivência de Oliver o irrita porque representa algo que escapou ao seu controle. Para Raze, destruir Oliver seria provar domínio sobre alguém que ele admira de forma doentia.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Cyberdeck Personalizado": {
      imagem: "img/itens/Raze/Cyberdeck Personalizado.png",
      descricao:
        "Um cyberdeck de última geração, modificado por Raze para invasões digitais de alto nível. É otimizado para velocidade, sigilo e controle, equipado com programas agressivos capazes de atravessar defesas corporativas, manipular sistemas e apagar rastros em segundos. Para Raze, não é apenas uma ferramenta: é uma extensão de sua mente fria, calculista e traidora.",
    },

    "Jaqueta da XIII de Oliver": {
      imagem: "img/itens/Raze/Jaqueta da XIII de Oliver.png",
      descricao:
        "Uma jaqueta de couro preta com detalhes vermelhos, originalmente pertencente a Oliver e marcada pela identidade da Organização XIII. Raze a roubou após sua traição como um troféu pessoal, transformando uma peça carregada de memória, irmandade e pertencimento em uma provocação cruel. Para Oliver, ela representa perda; para Raze, vitória.",
    },

    "Foto do Grupo Riscada": {
      imagem: "img/itens/Raze/Foto do Grupo Riscada.png",
      descricao:
        "Uma foto antiga de Oliver, Kane e Raze juntos no Rusted Note, tirada antes da queda da XIII. O rosto de Kane foi riscado com violência, como se Raze tentasse apagar sua presença sem destruir completamente a lembrança. É um objeto perturbador, pois revela que, mesmo após a traição, Raze ainda carrega fragmentos distorcidos do passado que abandonou.",
    },

    "Pulseira Neural Arasaka": {
      imagem: "img/itens/Raze/Pulseira Neural Arasaka.png",
      descricao:
        "Uma pulseira neural proprietária da Arasaka, usada para acesso seguro a redes corporativas, autenticação de alto nível e proteção contra invasões externas. Elegante, discreta e absurdamente cara, ela simboliza o pacto de Raze com o poder corporativo. Para ele, é uma ferramenta de ascensão — uma prova de que traição também pode ser investimento.",
    },

    "Adagas “Wahrheit” e “Falschheit”": {
      imagem: "img/itens/Raze/Adagas “Wahrheit” e “Falschheit”.png",
      descricao:
        "Duas adagas gêmeas chamadas “Wahrheit” e “Falschheit”, verdade e falsidade. Apesar de formarem um par, possuem designs opostos: uma é direta, limpa e precisa; a outra é agressiva, tortuosa e feita para confundir. Juntas, representam a forma como Raze luta e pensa — uma lâmina revela, a outra engana, mas ambas cortam quando a distância digital deixa de ser suficiente.",
    },

    "Machado “Belial”": {
      imagem: "img/itens/Kane/Machado “Belial”.png",
      descricao:
        "O machado de combate de Kane, roubado por Raze após sua morte. Antes, era símbolo de força, proteção e resistência dentro da XIII; nas mãos de Raze, tornou-se um troféu profanado, carregado como lembrança física da traição que ele escolheu cometer. Seu peso não vem apenas do metal, mas de tudo que foi quebrado para que ele pudesse possuí-lo.",
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
};
