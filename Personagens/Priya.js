// Priya.js
// Ficha completa de Priya

personagens.Priya = {
  // Identificação básica
  nome: "Priya Ellison",
  funcao: "Solo | Ex-Militar | Sniper Punk Grunge",
  id: "43-5499-00",
  foto: "img/Personagens/Priya/Priya Ellison.png",
  ativo: true, // (true = ativo, false = inativo, null = desconhecido)

  // Dados vitais
  localNascimento: "New Salem, Dakota do Norte, NEUA",
  dataNascimento: "20/JAN/2060",
  idade: 32,
  altura: "2,15 m",
  peso: "112 kg",

  // Citação e objetivo
  citacao:
    "“Os únicos que podem atirar são aqueles que estão preparados para levar o tiro.”",
  objetivoVida:
    "Salvar pessoas que o sistema considera descartáveis. E secretamente deseja destruir todas as instituições que operam sob métricas de morte.",

  // --------------------------------------------------------------------
  // PERFIL PSICOLÓGICO
  // --------------------------------------------------------------------

  tracosPrincipais:
    "Calma sob pressão, disciplinada, letal quando necessário, intensa, emocionalmente contida. Tem moral interna rígida e zero tolerância à injustiça.",
  comportamentoSocial:
    "Reservada e observadora. Costuma falar pouco. Acredita que ações valem mais do que discursos. Costuma parecer intimidante à primeira vista, mas é extremamente protetora com quem confia.",
  motivacao:
    "Redimir o uniforme que um dia vestiu — provar que força e moral ainda podem coexistir. Ela luta por justiça verdadeira, mesmo que precise agir fora da lei.",
  valoresCentrais:
    "Honra, lealdade e proteção dos fracos. Nunca virar as costas a quem confia em você.",
  visaoPessoas:
    "“A maioria não quer maldade. Só não está disposta a lutar por quem precisa.”",
  oQueValoriza:
    "Coragem, honestidade e o vínculo entre aqueles que lutam lado a lado.",

  // --------------------------------------------------------------------
  // HISTÓRICO PESSOAL
  // --------------------------------------------------------------------

  historicoPessoal: [
    "Aos 17 anos, ingressou nas Forças Armadas dos Novos Estados Unidos.",
    "Formou-se entre os melhores atiradores da unidade e ganhou destaque como líder de esquadrão. Mas o prestígio se desfez ao perceber o que o sistema realmente era: uma corporação armada, mascarada de patriotismo.",
    "Durante a Operação Santo Domingo, Priya testemunhou drones abrindo fogo contra civis durante a caça a um suposto terrorista — que, na verdade, era um jornalista. Ela desligou o comunicador, abandonou o fuzil padrão e desapareceu sob o neon da cidade.",
    "Nunca mais olhou para trás.",
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
        "Priya confia nele mais do que confiou em qualquer oficial. Vê Oliver como um líder humano, corajoso e honesto, alguém que erra, mas lidera com coração.",
    },

    "Kimber Destaro": {
      tipo: "Aliado Incondicional",
      status: "Viva",
      foto: "img/Personagens/Kimber/Kimber Destaro.png",
      descricao:
        "Priya tem respeito absoluto por Kimber. Enxerga nela um pilar estratégico e prático do grupo, alguém que mantém todos vivos quando tudo desmorona.",
    },

    // Muito positivo
    Shinigami: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Shinigami.png",
      descricao:
        "Priya vê nele um vínculo silencioso de soldados. Não precisam conversar muito; há respeito, disciplina e compreensão mútua sobre o peso da guerra.",
    },

    Ninvega: {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ninvega/Ninvega.png",
      descricao:
        "Priya inicialmente estranhava a ideia de um robô emocional, mas passou a confiar nele plenamente. Valoriza sua lógica compassiva e sua busca por humanidade.",
    },

    Lyra: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Lyra/Lyra.png",
      descricao:
        "Priya vê em Lyra uma humanidade rara, talvez mais sincera que a de muitos humanos. Admira sua clareza, simplicidade e forma direta de enxergar o mundo.",
    },

    "Ícaro Barbosa": {
      tipo: "Muito positivo",
      status: "Vivo",
      foto: "img/Personagens/Ícaro/Ícaro Barbosa.png",
      descricao:
        "Ícaro faz Priya rir mesmo quando ela tenta resistir. Ela considera isso irritante, mas também terapêutico; o caos leve dele equilibra o peso que ela carrega.",
    },

    Mirai: {
      tipo: "Muito positivo",
      status: "Viva",
      foto: "img/Personagens/Mirai/Mirai.png",
      descricao:
        "Priya gosta bastante de Mirai, mas dificilmente admitiria. Chama-o de “coisa”, mas o protege por instinto e brinca com ele quando ninguém está olhando.",
    },

    "Evelyn Ellison": {
      tipo: "Muito positivo",
      status: "Morta",
      foto: "img/Personagens/Priya/Evelyn Ellison.png",
      descricao:
        "Avó de Priya e uma das figuras mais importantes de sua formação moral. Foi empática, ex-enfermeira de guerra, e ensinou a Priya limites éticos que o exército tentou apagar.",
    },

    // Positivo
    "Tessia Amberine": {
      tipo: "Positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Tessia Amberine.png",
      descricao:
        "Priya respeita a competência e o equilíbrio de Tessia. Não são extremamente próximas em palavras, mas Priya sente vontade de protegê-la em silêncio.",
    },

    "Aiden Fowler": {
      tipo: "Positivo",
      status: "Vivo",
      foto: "img/Personagens/Aiden/Aiden Fowler.png",
      descricao:
        "Priya confia nele de forma silenciosa. Acha seus memes irritantes às vezes, mas demonstra cuidado prático, como garantir que ele descanse e se cuide.",
    },

    "Dominic Don Von Chier": {
      tipo: "Positivo",
      status: "Morto",
      foto: "img/Personagens/Dominic Don Von Chier.png",
      descricao:
        "Priya o vê como forte, confiável e carismático. Respeita sua disciplina física e gosta de treinar com ele, mantendo uma relação de camaradagem direta.",
    },

    // Neutro/positivo
    Ciel: {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Tessia/Ciel.png",
      descricao:
        "Priya não é muito próxima de Ciel, mas a protege por respeito a Oliver e Tessia. Vê nela alguém que deve ser mantida longe dos sistemas e violências que destruíram tantas pessoas.",
    },

    Cypher: {
      tipo: "Neutro/positivo",
      status: "Morto",
      foto: "img/Personagens/Cypher.png",
      descricao:
        "Priya admira sua linguagem visual, seus hologramas e sua arte, mesmo sem entender tudo. Não são tão próximos, mas ela respeita sua expressão, principalmente quando ele dança.",
    },

    Nyx: {
      tipo: "Neutro/positivo",
      status: "Morta",
      foto: "img/Personagens/Nyx.png",
      descricao:
        "Priya gosta de ouvir suas músicas, especialmente quando Nyx canta algo mais pesado e emocional. Para ela, a voz de Nyx funciona como uma válvula de escape.",
    },

    "Serena Ashbourne": {
      tipo: "Neutro/positivo",
      status: "Viva",
      foto: "img/Personagens/Serena/Serena Ashbourne.png",
      descricao:
        "Priya acha Serena teatral, dramática e exageradamente ostentosa, mas reconhece sua influência, inteligência e impacto real sobre o grupo.",
    },

    // Neutro
    "Kleber Junior": {
      tipo: "Neutro",
      status: "Vivo",
      foto: "img/Personagens/Kleber Junior.png",
      descricao:
        "Priya não entende a religião de Kleber e nem tenta entender. Prefere manter distância segura, respeitando limites sem criar conflito desnecessário.",
    },

    // Neutro/negativo
    "Tenente Mira Vaughn": {
      tipo: "Neutro/negativo",
      status: "Viva",
      foto: "img/Personagens/Priya/Tenente Mira Vaughn.png",
      descricao:
        "Foi uma antiga paixão de Priya no período militar. O relacionamento proibido terminou mal e deixou marcas emocionais, tornando difícil para Priya se permitir sentir de novo.",
    },

    "Margaret Ellison": {
      tipo: "Neutro/negativo",
      status: "Viva",
      foto: "img/Personagens/Priya/Margaret Ellison.png",
      descricao:
        "Mãe de Priya, ausente e ligada aos círculos corporativos do governo. Priya provavelmente a enxerga como parte distante do sistema familiar que nunca a acolheu de verdade.",
    },

    // Negativo
    "Arthur Ellison": {
      tipo: "Negativo",
      status: "Vivo",
      foto: "img/Personagens/Priya/Arthur Ellison.png",
      descricao:
        "Avô rígido, patriota e cruel no treinamento militar. Priya carrega dele a disciplina, mas também o peso de uma criação moldada pela guerra e pela dureza.",
    },

    // Muito negativo
    "Houndsight Security": {
      tipo: "Muito negativo",
      status: "Ativa",
      foto: "img/Personagens/Priya/Houndsight Security.png",
      descricao:
        "Depois da queda da Macrosoft, Priya também expôs falhas da Houndsight, humilhando a empresa e destruindo contratos bilionários. Para ela, é mais uma estrutura corrupta a ser derrubada.",
    },

    "Forças Armadas dos NEUA": {
      tipo: "Muito negativo",
      status: "Ativas",
      foto: "img/Personagens/Priya/Forças Armadas dos NEUA.png",
      descricao:
        "Priya já tentou acreditar no uniforme, mas passou a ver as Forças Armadas como uma corporação armada disfarçada de patriotismo. Sua deserção nasceu dessa quebra moral.",
    },

    "General Michael Ellison": {
      tipo: "Muito negativo",
      status: "Vivo",
      foto: "img/Personagens/Priya/General Michael Ellison.png",
      descricao:
        "É seu pai, mas também seu inimigo ideológico. Priya o vê como frio, preocupado com reputação e disposto a silenciá-la para proteger a própria carreira.",
    },

    // Inimigo jurado
    Macrosoft: {
      tipo: "Inimigo jurado",
      status: "Ativa",
      foto: "img/Personagens/Priya/Macrosoft.png",
      descricao:
        "Priya vê a Macrosoft como símbolo de morte algorítmica e desumanização. Roubou o chip que expôs o CitizenSight™, causando a ruína pública da corporação.",
    },
  },

  // --------------------------------------------------------------------
  // PERTENCES IMPORTANTES
  // --------------------------------------------------------------------

  // Pertences importantes
  pertencesImportantes: {
    "Rifle de Precisão": {
      imagem: "img/itens/Priya/Rifle de Precisão.png",
      descricao:
        "Um rifle de precisão personalizado, ajustado milimetricamente ao estilo de tiro de Priya. Combina alcance extremo, estabilidade e confiabilidade absoluta, sendo tratado por ela não como uma arma de glória, mas como uma responsabilidade carregada sem margem para erro. Cada disparo precisa ter motivo, peso e consequência.",
    },

    "Relógio Tático": {
      imagem: "img/itens/Priya/Relógio Tático.png",
      descricao:
        "Um relógio militar modificado com sensores de campo, leitura térmica, cronômetros de missão e funções de rastreamento. Mais do que marcar horas, ajuda Priya a ler o ambiente, antecipar ameaças e manter o controle mesmo quando tudo ao redor vira ruído. É uma ferramenta de disciplina, paciência e precisão.",
    },

    "Pingente Cápsula": {
      imagem: "img/itens/Priya/Pingente Cápsula.png",
      descricao:
        "Um pingente feito a partir de uma cápsula vazia de munição. Para Priya, ele não representa mortes ou vitórias em combate, mas o peso de cada escolha feita no campo de batalha. É um lembrete silencioso de que nem todo alvo precisa cair, nem todo disparo precisa ser feito e nem toda missão vale a perda de si mesma.",
    },

    "Vinil Nirvana": {
      imagem: "img/itens/Priya/Vinil Nirvana.png",
      descricao:
        "Um vinil antigo da banda Nirvana, herdado de sua avó. Mesmo riscado e cheio de chiados, guarda um tipo de paz que Priya raramente encontra no mundo ao seu redor. Para ela, o som imperfeito do disco funciona como refúgio, memória e humanidade em meio às ordens, guerras e alvos.",
    },

    "Coleção Facas de Combate": {
      imagem: "img/itens/Priya/Coleção Facas de Combate.png",
      descricao:
        "Uma coleção de facas antigas e lâminas de combate, mantidas com cuidado quase ritual. Algumas vieram do passado militar de sua família, outras foram adquiridas em missões ou situações extremas. Para Priya, cada lâmina representa disciplina, sobrevivência e a lembrança de que habilidade sem ética se torna apenas violência treinada.",
    },
  },

  // --------------------------------------------------------------------
  // IMPLANTES CIBERNÉTICOS
  // --------------------------------------------------------------------

  implantes: {
    Cyberarm: {
      descricao:
        "Prótese cibernética de membro superior desenvolvida para substituição total do braço orgânico. Oferece estrutura modular interna para integração de múltiplos sistemas especializados, mantendo ergonomia, força e controle refinado. Projetada para aplicações civis, industriais e táticas.",
    },
    Cybereye: {
      descricao:
        "Substituto ocular artificial de alta precisão, projetado para restaurar e expandir capacidades visuais humanas. Funciona como plataforma modular para sistemas ópticos avançados, interfaces de dados e sobreposições informacionais em tempo real.",
    },
    Cyberleg: {
      descricao:
        "Prótese cibernética de membro inferior desenvolvida para substituição total da perna orgânica. Oferece mobilidade aprimorada, estabilidade estrutural e integração com módulos de desempenho físico, mantendo padrões elevados de segurança biomecânica.",
    },
    "Enhanced Antibodies": {
      descricao:
        "Tratamento biocibernético focado no fortalecimento do sistema imunológico e nos processos naturais de recuperação corporal. Aumenta significativamente a eficiência da regeneração fisiológica após esforço extremo, ferimentos ou intervenções cirúrgicas.",
    },
    "Grapple Hand": {
      descricao:
        "Sistema de mobilidade tática integrado à prótese de braço, permitindo o disparo controlado da mão acoplada a um cabo de ancoragem de longo alcance. Ideal para escalada urbana, travessias verticais e acesso rápido a zonas elevadas.",
    },
    "Grip Foot": {
      descricao:
        "Módulo de tração avançada instalado em próteses de membros inferiores, projetado para maximizar aderência em superfícies irregulares ou verticais. Otimiza deslocamento em ambientes industriais, urbanos ou naturais de alta complexidade.",
    },
    "Jump Booster": {
      descricao:
        "Sistema de propulsão hidráulica integrado aos membros inferiores, projetado para ampliar a impulsão vertical e controle de aterrissagem. Otimiza deslocamentos em ambientes urbanos densos, zonas industriais e operações de mobilidade avançada.",
    },
    "Low Light / Infrared / UV": {
      descricao:
        "Conjunto óptico multiespectral que amplia drasticamente a capacidade de percepção visual em condições adversas. Permite leitura precisa do ambiente em cenários de baixa luminosidade, interferência atmosférica ou espectros invisíveis ao olho humano.",
    },
    MicroOptics: {
      descricao:
        "Sistema óptico de ampliação extrema integrado à visão cibernética. Ideal para vigilância, análise técnica, inspeção de precisão e operações que exigem observação detalhada a longas distâncias.",
    },
    "Shift Tacts": {
      descricao:
        "Lentes ópticas inteligentes implantadas que ajustam dinamicamente coloração e tonalidade visual. Utilizadas tanto para adaptação ambiental quanto para personalização estética ou padronização visual corporativa.",
    },
    "Skate Foot": {
      descricao:
        "Sistema de locomoção integrado aos pés, composto por mecanismos retráteis de deslizamento linear. Desenvolvido para deslocamento rápido em ambientes urbanos e industriais, mantendo perfil oculto quando não está em uso.",
    },
    Skinwatch: {
      descricao:
        "Dispositivo cronológico subdérmico com interface visual discreta. Oferece acesso rápido a informações temporais e sincronização com sistemas pessoais ou corporativos, eliminando a necessidade de dispositivos externos visíveis.",
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
    TeleOptics: {
      descricao:
        "Sistema óptico de ampliação visual de longo alcance que permite observação detalhada a grandes distâncias. Utilizado para vigilância, reconhecimento e suporte a operações de precisão.",
    },
    "Web Foot": {
      descricao:
        "Modificação estrutural nos pés que otimiza a locomoção aquática por meio de superfícies de propulsão discretas. Desenvolvido para operações anfíbias ou ambientes urbanos alagados.",
    },
    "Kill Display": {
      descricao:
        "Sistema dérmico de exibição luminosa que apresenta contadores personalizados sob a pele. Desenvolvido para ambientes onde intimidação, reputação ou identidade simbólica fazem parte da presença do usuário, com forte apelo visual e psicológico.",
    },
    "Berserk Implant": {
      descricao:
        "Implante de regulação neuro-hormonal projetado para otimizar respostas fisiológicas em situações de estresse extremo. Atua ajustando a liberação de adrenalina, cortisol e outros agentes químicos, maximizando reflexos, resistência e agressividade controlada durante cenários de ameaça iminente.",
    },
    "Gorilla Arm": {
      descricao:
        "Conjunto clássico de aprimoramentos estruturais para membros superiores artificiais, desenvolvido para trabalho pesado e aplicações industriais de alta demanda. Reconhecido por sua confiabilidade e durabilidade, é amplamente utilizado em setores de construção, logística, extração e segurança.",
    },
  },
};
