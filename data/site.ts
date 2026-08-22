export const siteConfig = {
  name: 'MISOLA 米岛时尚设计留学',
  url: 'https://misolaedu.com',
  description: 'MISOLA 米岛时尚设计留学，专注意大利时尚与设计院校申请、作品集指导、导师辅导与海外支持。',
  keywords: ['米岛时尚设计留学', 'MISOLA', '意大利时尚留学', '意大利服装设计留学', '作品集指导'],
}

export const schools = [
  { slug: 'politecnico-di-milano', name: 'POLITECNICO MILANO', cn: '米兰理工大学', mark: 'POLI', logo: '/images/school-politecnico-logo-user.jpg', image: '/images/school-politecnico-card.jpg', category: 'Design' },
  { slug: 'istituto-marangoni', name: 'ISTITUTO MARANGONI', cn: '马兰欧尼时装与设计学院', mark: 'IM', logo: '/images/school-marangoni-logo-user.jpg', image: '/images/school-marangoni-card.jpg', category: 'Fashion' },
  { slug: 'domus-academy', name: 'DOMUS ACADEMY MILANO', cn: '多莫斯设计学院', mark: 'DA', logo: '/images/school-domus-logo-user.jpg', image: '/images/school-domus-card.jpg', category: 'Design' },
  { slug: 'istituto-secoli', name: 'ISTITUTO SECOLI', cn: '卡罗世纪服装学院', mark: 'S', logo: '/images/school-secoli-logo-user.jpg', image: '/images/school-secoli-card.jpg', category: 'Fashion' },
  { slug: 'naba', name: 'NABA', cn: '米兰新美术学院', mark: 'NABA', logo: '/images/school-naba-logo-user.jpg', image: '/images/school-naba-card.jpg', category: 'Design' },
  { slug: 'polimoda', name: 'POLIMODA', cn: '柏丽慕达时装学院', mark: 'P', logo: '/images/school-polimoda-logo-user.jpg', image: '/images/school-polimoda-card.jpg', category: 'Fashion' },
  { slug: 'ied', name: 'IED', cn: 'IED欧洲设计学院', mark: 'IED', logo: '/images/school-ied-logo-user.jpg', image: '/images/school-ied-card.jpg', category: 'Design' },
]

export type SchoolIntroMedia = {
  src: string
  alt: string
  caption: string
}

export const schoolIntroMedia: Record<string, readonly SchoolIntroMedia[]> = {
  'politecnico-di-milano': [
    {
      src: '/images/school-politecnico-campus.jpg',
      alt: '米兰理工大学 Bovisa 校区',
      caption: 'MILANO BOVISA / DESIGN CAMPUS',
    },
  ],
  'istituto-marangoni': [
    {
      src: '/images/school-marangoni-classroom.jpg',
      alt: '马兰欧尼时装与设计学院课堂',
      caption: 'ISTITUTO MARANGONI / MILANO',
    },
    {
      src: '/images/school-marangoni-runway.jpg',
      alt: '马兰欧尼学院时装秀',
      caption: 'FASHION / INDUSTRY / PRACTICE',
    },
  ],
  'domus-academy': [
    {
      src: '/images/school-domus-campus.jpg',
      alt: '多莫斯设计学院校园',
      caption: 'DOMUS ACADEMY / MILANO',
    },
  ],
  'istituto-secoli': [
    {
      src: '/images/school-secoli-studio.jpg',
      alt: '卡罗世纪服装学院服装工作室',
      caption: 'ISTITUTO SECOLI / CRAFT & PATTERN',
    },
  ],
  naba: [
    {
      src: '/images/school-naba-studio.jpg',
      alt: '米兰新美术学院设计工作室',
      caption: 'NABA / ART & DESIGN',
    },
  ],
  polimoda: [
    {
      src: '/images/school-polimoda-campus.jpg',
      alt: '柏丽慕达时装学院校园',
      caption: 'POLIMODA / FLORENCE',
    },
  ],
  ied: [
    {
      src: '/images/school-ied-fashion.jpg',
      alt: 'IED 欧洲设计学院时尚课堂',
      caption: 'IED / DESIGN & INDUSTRY',
    },
  ],
}

export const services = [
  { title: '留学申请规划', text: '个性化申请方案，精准匹配意大利院校与专业。', image: '/images/service-01.jpg' },
  { title: '作品集指导', text: '专业作品集老师一对一辅导，完成从创意开发到项目制作。', image: '/images/service-02.jpg' },
  { title: '院校申请', text: '精准文书、面试辅导、申请递交与录取跟进。', image: '/images/service-03.jpg' },
  { title: '签证与行前', text: '签证办理、住宿安排、接机服务与行前辅导。', image: '/images/service-04.jpg' },
  { title: '海外支持', text: '海外生活支持、学业跟进与职业发展陪伴。', image: '/images/service-05.jpg' },
]

export type Program = {
  slug: string
  title: string
  english: string
  category: string
  image: string
  intro: string[]
  courses: string[]
  careers: string[]
  schools: string[]
}

const fashionIntro = '意大利时装以风格化的设计语言、精美面料、卓越工艺与完整产业链闻名世界。MISOLA将专业方向与意大利院校、时尚产业和作品集申请结合，帮助学生建立从灵感研究、设计开发到系列呈现的完整能力。'

export const programs: Program[] = [
  { slug: 'fashion-design', title: '服装设计', english: 'Fashion Design', category: 'FASHION', image: '/images/program-fashion-user.png', intro: [fashionIntro, '服装设计师不只是设计服饰，也在创造和改变生活方式。课程将覆盖设计技巧、版型制作、系列创作与品牌语境，适合希望成为服装设计师并进入意大利时尚产业的学生。'], courses: ['设计结构学', '作品集设计', '艺术与服装史', '作品集研发与专业作品集筹备', '时尚趋势研究'], careers: ['服装设计师', '品牌时尚顾问', '系列设计师', '时装工作室设计师'], schools: ['马兰欧尼学院', '柏丽慕达时装学院', '卡罗世纪服装学院'] },
  { slug: 'menswear-fashion-design', title: '男装设计', english: 'Menswear Fashion Design', category: 'FASHION', image: '/images/program-menswear-user.png', intro: ['男装是一个重视合身、线条、材料与细节的专业方向。随着男装市场不断细分，设计师需要同时掌握创造力、制版裁剪和系列开发能力。', '马兰欧尼提供男装设计方向，卡罗世纪则以男装制版和手缝工艺见长，适合希望深入研究男装结构与制作的学生。'], courses: ['服装史与文化', '材料科学与技术', '男装设计', '男装系列设计', '视觉研究', '设计模式原型'], careers: ['男装设计师', '男装配饰设计师', '时装插画师', '男装趋势预测师', '产品经理'], schools: ['马兰欧尼学院', '卡罗世纪服装学院'] },
  { slug: 'sustainable-fashion-design', title: '可持续服装设计', english: 'Sustainable Fashion Design', category: 'FASHION', image: '/images/program-sustainable-user.png', intro: ['可持续时尚关注材料、生产、消费和品牌社会责任。随着环保材料、循环系统和道德制造成为行业的重要议题，可持续服装设计已经成为时尚产业的新方向。', '课程帮助学生以可持续视角研究趋势，选择环保、可再生和可降解面料，并建立循环时尚系统。'], courses: ['可持续设计流程和技术', '当代时尚与趋势', '可持续材料选择和采购', '环保纺织品开发', '道德制造与循环时尚系统'], careers: ['可持续服装设计师', '时装品牌可持续性设计顾问', '材料研究员', '可持续时尚策划'], schools: ['柏丽慕达时装学院'] },
  { slug: 'costume-design', title: '戏服设计', english: 'Costume Design', category: 'FASHION', image: '/images/program-costume-user.png', intro: ['戏服设计将服装、艺术、影视和舞台叙事结合。设计师需要研究服装文化与历史，理解剧本和人物性格，并完成从视觉研究、草图、面料到成衣制作的完整过程。', '这是服装设计的延伸方向，适合对电影、戏剧、舞台与造型叙事感兴趣的学生。'], courses: ['戏剧服装史', '纺织品设计', '面料类型', '配饰设计', '戏服设计', '视觉陈列技术'], careers: ['戏服设计师', '影视服装设计师', '舞台造型师', '服装制作与造型顾问'], schools: ['米兰新美术学院'] },
  { slug: 'fashion-prototyping', title: '样衣制作', english: 'Fashion Prototyping', category: 'FASHION', image: '/images/program-prototyping-user.png', intro: ['样衣制作位于设计构思与大规模生产之间，是检验款式、尺寸、面料、色彩和工艺可行性的关键环节。样衣师需要理解人体结构、版型与缝制，并与设计师、制版师和生产部门高效协作。'], courses: ['服装风格', '面料分析', '男女装制版', '男女装缝制', '工业生产流程', '时间与方法分析', '样衣制作'], careers: ['样衣师', '原型设计师', '品牌设计部门样衣制作', '服装工厂产品开发', '定制服装工作室'], schools: ['卡罗世纪服装学院'] },
  { slug: 'digital-fashion', title: '数字时尚', english: 'Digital Fashion', category: 'FASHION BUSINESS', image: '/images/program-digital-user.png', intro: ['数字时尚通过三维建模、数字渲染、虚拟服装和数据技术，重新思考产品开发、传播、运营与销售。它适合希望将时尚创造力与数字技术、商业和新媒体结合的学生。'], courses: ['时尚运营', '产品开发', '营销与零售', '时尚创业', '数字产品与品牌传播'], careers: ['电子商务经理', '数字经理', '零售经理', '产品开发经理', '时尚营销经理'], schools: ['柏丽慕达时装学院'] },
  { slug: 'knitwear-design', title: '针织服装设计', english: 'Knitwear Design', category: 'TEXTILE', image: '/images/program-knitwear-user.png', intro: ['针织设计融合色彩、图纹、纱线、结构与工艺，是兼具实用性和艺术性的时尚方向。学生将从材料与织造出发，完成创意研究、原型制作和针织系列开发。'], courses: ['针织品设计', '创意原型制作', '制版', '针织纺织操作', '刺绣', '当代纺织实践'], careers: ['针织品设计师', '自由设计师', '编织设计师', '产品经理', '生产经理'], schools: ['米兰新美术学院'] },
  { slug: 'fashion-retail-management', title: '时尚零售管理', english: 'Fashion Retail Management', category: 'FASHION BUSINESS', image: '/images/program-retail-user.png', intro: ['时尚零售管理结合时尚知识、品牌管理与商业运营，研究零售模式、消费行为、国际组织管理、时尚营销和买手体系，适合对品牌推广和商业管理感兴趣的学生。'], courses: ['商业技术', '时尚营销', '时尚运营', '零售管理', '时装采购和销售', '电子商务', '消费者行为'], careers: ['零售经理', '商店经理', '销售经理', '零售买手', '分销经理'], schools: ['柏丽慕达时装学院'] },
  { slug: 'fashion-business-communication', title: '服装商业传播与新媒体', english: 'Fashion Business Communication & New Media', category: 'FASHION BUSINESS', image: '/images/program-communication-user.png', intro: ['时尚品牌需要通过视觉、内容、社交媒体和跨界合作建立与消费者的联系。该方向培养学生理解品牌语言、造型传播、数字媒体和整合营销。'], courses: ['商业社交媒体', '传统和数字媒体', '广告和市场营销策略', '服装品牌推广', '图像处理与平面设计', '视觉传播'], careers: ['数字营销经理', '传媒经理', '传播经理', '市场营销经理', '多媒体内容设计师'], schools: ['马兰欧尼时装与设计学院'] },
  { slug: 'fashion-business', title: '服装商业', english: 'Fashion Business', category: 'FASHION BUSINESS', image: '/images/program-business-user.png', intro: ['服装商业结合时尚创意与经济管理，帮助学生理解品牌运营、生产、传播、营销和零售体系，培养面向时尚企业的商业判断力。'], courses: ['经济', '金融', '市场营销', '品牌推广', '项目管理', '视觉营销', '时尚心理学'], careers: ['营销经理', '品牌经理', '产品经理', '采购员', '零售经理', '视觉营销'], schools: ['马兰欧尼时装与设计学院', '柏丽慕达时装学院'] },
  { slug: 'luxury-management', title: '奢侈品管理', english: 'Luxury Management', category: 'LUXURY BUSINESS', image: '/images/program-luxury-user.png', intro: ['奢侈品管理结合品牌历史、产品品质、传播、零售和客户关系，适合希望进入时尚与奢侈品企业管理、营销和品牌战略岗位的学生。'], courses: ['奢侈品生产与品牌管理', '客户关系管理', '奢侈品零售管理', '奢侈品传播', '奢侈品造型'], careers: ['营销经理', '传播经理', '品牌经理', '业务经理', '采购经理', '零售经理'], schools: ['马兰欧尼时装与设计学院', '柏丽慕达时装学院', '多莫斯设计学院'] },
  { slug: 'fashion-buying', title: '服装买手', english: 'Fashion Buying', category: 'FASHION BUSINESS', image: '/images/program-buying-user.png', intro: ['服装买手以销售数据、潮流趋势、消费群体和库存流动为依据，参与选品、采购、促销与零售策略制定，适合拥有时尚兴趣和商业基础的学生。'], courses: ['服装营销管理', '买手概论', '买手技巧与采购', '当代时尚概况', '高级采购'], careers: ['买手', '零售买手', '产品经理', '采购经理', '促销活动策划'], schools: ['马兰欧尼时装与设计学院', '柏丽慕达时装学院'] },
  { slug: 'footwear-accessories-design', title: '鞋类及配饰设计', english: 'Footwear and Accessories Design', category: 'FASHION', image: '/images/program-accessories-user.png', intro: ['鞋类和配饰设计融合材料、结构、功能与品牌语言。意大利皮革产业和工艺传统为学生提供了研究鞋履、箱包、皮具与奢侈品配饰的专业环境。'], courses: ['鞋履设计', '工匠技术', '皮革研究与技术', '时尚插画', '版型与制作', '配饰产品', '奢侈品材料与产品管理'], careers: ['配饰设计师', '产品研发员', '艺术指导', '产品研究员', '趋势研究员'], schools: ['马兰欧尼时装与设计学院', '柏丽慕达时装学院'] },
]

export const schoolDetails = {
  'istituto-marangoni': {
    sections: [
      {
        title: '院校介绍',
        paragraphs: [
          '马兰欧尼时装与设计学院（Istituto Marangoni）1935年创立于米兰，是意大利历史最悠久的时尚教育机构之一，目前已经发展为覆盖米兰、佛罗伦萨、巴黎、伦敦、上海、深圳、孟买、迈阿密等地的国际化创意教育集团。',
          '学校的核心优势集中在时尚、设计、艺术、美妆、奢侈品与商业等领域，强调意大利时尚文化、设计实践和行业联系。学校目前在 QS Art & Design 领域进入全球Top 45，并拥有来自100多个国家的国际学生群体。',
          '米兰校区尤其适合希望进入意大利时尚产业、奢侈品牌和设计行业的学生。',
        ],
      },
      {
        title: '热门专业',
        groups: [
          { title: 'Fashion 时尚方向', items: ['Fashion Design', 'Fashion Design & Accessories', 'Fashion Styling & Creative Direction', 'Fashion Promotion, Communication & Digital Media', 'Fashion & Luxury Brand Management', 'Fashion Buying & Merchandising', 'Fashion Product Management', 'Fashion Entrepreneurship', 'Fashion Omnichannel & E-Commerce'] },
          { title: 'Beauty & Luxury', items: ['Fragrance & Cosmetics', 'Luxury Brand Management', 'Fashion & Luxury Business'] },
          { title: 'Design 设计方向', items: ['Interior Design', 'Product & Furniture Design', 'Digital Art Direction', 'Fine Jewellery Design', 'Design Management & Strategic Innovation', 'Immersive Experience Digital Design'] },
        ],
        paragraphs: ['课程覆盖1年制及2年制硕士；服装学院方向主要集中在服装设计、时尚造型与传播、时尚与奢侈品牌管理、时尚买手与产品管理等，设计学院还覆盖室内、产品与家具、数字艺术指导等方向。'],
      },
      {
        title: '申请要求',
        groups: [
          { title: '基本申请要求', items: ['本科学士学位或同等学历', '意大利语授课课程建议意大利语B2；英语授课课程 IELTS 5.5（单项不低于5.5）', '创意类课程须提交 Portfolio', '部分2年制 AFAM 硕士须与专业导师进行一对一面试'] },
          { title: '申请材料', items: ['CV', 'Motivation Letter', '本科成绩单', '推荐信', '护照', '创意类作品集', '语言证明（按课程要求）'] },
        ],
      paragraphs: [
        '按当前课程资料，1年制AFAM硕士主要为60 CFA/ECTS一级硕士文凭，现阶段不按中国同等硕士学历认证；2年制AFAM硕士为120 CFA/ECTS二级硕士文凭，并可按相关规定办理中国学历学位认证。',
        '非AFAM课程或仍处于认证评估阶段的课程，认证结果以申请当年学院及相关部门公布的信息为准。'
      ],
      },
      {
        title: '申请时间线',
        paragraphs: ['马兰欧尼与公立大学最大的不同之一，是开学批次较灵活。米兰校区目前大量课程采用1月入学以及9月入学。部分一年制、两年制硕士课程主要集中在9月，部分一年制课程同时提供1月/9月入学。', '申请采用滚动式招生，建议至少提前6–12个月准备。'],
        timeline: [
          { label: '提前12个月', text: '确定专业 + 院校' },
          { label: '提前9个月', text: '作品集 + 语言' },
          { label: '提前6个月', text: '提交申请' },
          { label: '获得录取后', text: '缴纳注册费 → 签证 → 住宿 → 行前' },
        ],
      },
      {
        title: '费用 & 奖学金',
        paragraphs: ['2026年春季入学：一年制硕士学费 €33,000，注册费 €5,500，合计 €38,500。', '2026年秋季入学：部分一年制硕士为 €33,000–€33,500，注册费 €5,500，合计约 €38,500–€39,000；香水与化妆品方向学费约 €33,100。', '两年制硕士学费约 €22,450/年，注册费 €5,500/年，合计约 €27,950/年。', '不同专业、入学时间及学年费用可能调整，实际以申请当年学院公布的信息为准。', '奖学金方面，马兰欧尼针对不同课程和入学季设置奖学金。例如2026 Autumn Early Talent Scholarship，欧洲校区最高可获得€5,000学费减免；部分专项奖学金针对硕士课程最高可达到€10,000。'],
      },
    ],
  },
  'domus-academy': {
    sections: [
      { title: '院校介绍', paragraphs: ['Domus Academy 多莫斯设计学院1982年创立于米兰，是意大利最早的研究生设计教育机构之一。', '学校最具代表性的教育理念是 Learning by Designing，即通过真实项目、设计实践和跨学科合作学习。学校早期就曾邀请 Ettore Sottsass、Alessandro Mendini、Philippe Starck 等设计界人物参与教学，长期强调设计研究、创新、跨学科和产业合作。', '目前学校的硕士课程覆盖 Design、Fashion、Experience、Business 四大领域，并提供意大利MUR认可的Academic Master以及英国体系的Dual Award课程。', 'Design · Innovation · Research', '跨学科设计与创新'] },
      { title: '热门专业', groups: [{ title: 'Fashion', items: ['Fashion Design', 'Fashion Management', 'Fashion Styling & Visual Merchandising', 'Fashion: Design, Art & Technology'] }, { title: 'Design', items: ['Product Design', 'Interaction Design', 'Service Design & UX', 'Interior & Living Design', 'Visual Brand Design', 'Design Futures', 'Design x AI'] }, { title: 'Business', items: ['Business Design', 'Fashion Management'] }] },
      { title: '申请要求', groups: [{ title: '硕士申请要求', items: ['本科或同等学历；部分课程接受相关行业工作经验', 'IELTS 5.0（Design Futures、Design and Artificial Intelligence等课程）', 'IELTS 5.5，单项不低于5.5（部分Dual Award课程）', 'Portfolio按课程要求准备，部分课程非强制', 'CV、Motivation Letter、本科成绩单、推荐信', 'GPA较低、在读申请或课程要求时安排面试'] }], paragraphs: ['按当前课程资料，Design Futures、Design and Artificial Intelligence为约11个月课程；Product Design、Interior & Living Design、Urban Vision and Architectural Design、Interaction Design、Service Design & UX等Dual Award课程约14个月。', '纯Domus课程通常对应60 ECTS的意大利一级研究生学位且不按中国同等硕士学历认证；Dual Award课程约90 ECTS，并可获得意大利MIUR与英国合作院校双学位/双认证，具体以课程当年安排为准。'] },
      { title: '申请时间线', paragraphs: ['Domus Academy的很多硕士课程一年有多个入学时间：February、September、November。因此相比公立大学，申请灵活度比较高。'], timeline: [{ label: '提前9–12个月', text: '确定专业' }, { label: '提前6–9个月', text: '准备作品集' }, { label: '提前3–6个月', text: '递交申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['纯Domus课程非欧盟学费约 €28,900；Dual Award约 €32,900；入学季主要为2月、9月、11月（以专业为准）。', '学校还提供不同形式的奖学金和项目竞赛，针对2027年2月入学的项目奖学金最高可覆盖 €8,000 学费。'] },
    ],
  },
  'istituto-secoli': {
    sections: [
      { title: '院校介绍', paragraphs: ['卡罗世纪服装学院（Istituto Secoli）成立于1934年，位于米兰，是意大利历史悠久的专业服装教育机构。', '与马兰欧尼、IED等综合型设计学院不同，卡罗世纪最大的特色是服装设计、制版、样衣与工艺。学校长期专注于服装产业实践，与 Armani、Versace、Prada、Zegna、Gucci、Fendi、Dolce & Gabbana 等时尚企业保持合作关系。相关资料显示，学校自成立以来培养了超过6万名设计师、制版师及相关专业人才。', '因此，如果学生明确想走服装设计、Pattern Making、Tailoring、Garment Construction，卡罗世纪是非常有特色的选择。', 'Pattern Making · Craftsmanship · Made in Italy', '服装制版与工艺'] },
      { title: '热门专业', groups: [{ title: '本科', items: ['Fashion Design & Pattern Making'] }, { title: '硕士', items: ["Women's Wear Pattern Making", "Men's Wear Pattern Making & Tailoring", 'Lingerie & Bridal Wear Pattern Making'] }, { title: '强化 / 进修', items: ['Sample Making', "Women's / Men's Pattern Making", 'CAD Pattern Making', 'Fashion Design', 'Sewing'] }], paragraphs: ['学校目前还在米兰及诺瓦拉设置教学空间，其中诺瓦拉更加接近意大利服装工业生产体系。'] },
      { title: '申请要求', groups: [{ title: '本科', items: ['高中毕业或同等学历', '服装设计与制版本科主要为意大利语授课', '意大利语建议B1'] }, { title: '硕士', items: ['服装相关本科背景，或具有相关专业工作经验', '意大利/英语能力按课程要求准备', 'IELTS 5.0或TOEFL iBT 68（以课程要求为准）', 'Portfolio约10–15个项目', 'CV、Motivation Letter、成绩单、推荐信', '需参加面试'] }], paragraphs: ['学校资料显示，米兰校区女性制版、男性制版、高级定制与婚纱、针织技术、男装剪裁等研究生课程多为1年制，通常10月开学。'] },
      { title: '申请时间线', paragraphs: ['卡罗世纪的主力长期课程以秋季入学为主。本科通常为10月入学，硕士通常为9月或秋季入学。另外学校会提供暑期课程、预备课程及短期课程。'], timeline: [{ label: '提前6–9个月', text: '准备语言 + 专业基础' }, { label: '提前3–6个月', text: '完成申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['研究生课程参考总费用约 €20,700（学费 €18,700 + 注册费 €2,000）；如课程需要英语同步翻译，可能另收费用。实际以当年校方报价为准。', '本科及强化课程费用需按具体项目另行确认。'] },
    ],
  },
  'politecnico-di-milano': {
    sections: [
      { title: '院校介绍', paragraphs: ['米兰理工大学（Politecnico di Milano，简称PoliMi）成立于1863年，是意大利历史最悠久、国际影响力最强的理工类大学之一，也是意大利工程、建筑与设计领域的代表性高校。', '米理目前在全球大学排名中表现突出，QS世界大学排名2026位列全球第87位、意大利第1位。QS 2026建筑与建成环境排名全球第6，艺术与设计排名全球第7，工程与技术排名全球第20，三个领域均位居意大利第1。', '米理的核心优势集中在建筑、设计、工程、城市规划、数字技术与创新等领域，学校强调设计与工程、科技、产业和科研之间的结合。', '与传统私立艺术设计学院相比，米兰理工大学更加注重学术研究、专业能力、设计方法和跨学科创新。米兰主要校区包括 Milano Leonardo 以及设计学院所在的 Milano Bovisa。'] },
      { title: '热门专业', groups: [{ title: 'Design 设计方向', items: ['Design for the Fashion System', 'Digital and Interaction Design', 'Integrated Product Design', 'Product Service System Design', 'Communication Design', 'Interior and Spatial Design', 'Design & Engineering'] }, { title: 'Architecture 建筑方向', items: ['Architecture', 'Architectural Design and History', 'Sustainable Architecture and Landscape Design', 'Landscape Architecture', 'Urban Planning and Policy Design'] }, { title: 'Engineering 工程方向', items: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Computer Science and Engineering', 'Management Engineering', 'Design & Engineering'] }], paragraphs: ['Design for the Fashion System 是米理与时尚方向最直接相关的硕士项目，主要围绕时尚系统、产品设计、创新、可持续性以及时尚产业展开。2026/27学年，该专业在 Milano Bovisa 校区提供70个招生名额，其中30个面向Extra-EU学生。'] },
      { title: '申请要求', groups: [{ title: '通常需要', items: ['本科/学士学位', '专业背景匹配', '符合学校要求的课程及学分', '成绩单', 'CV', 'Motivation Letter', 'Portfolio', '雅思6.0'] }, { title: '重点审核', items: ['本科课程', 'ECTS', '专业学分', '课程内容', 'GPA'] }], paragraphs: ['米兰理工大学与私立设计学院最大的区别，是对本科专业背景、课程匹配度和学术条件要求更严格。设计学院硕士申请明确要求非米理本科学生提交项目作品集、动机信、CV、成绩材料和英语证明。作品集、专业背景、学术成绩与英语，是米理设计类硕士申请的核心。'] },
      { title: '申请时间线', paragraphs: ['对于持外国学历申请米理硕士的学生，2026/27学年Early Bird为2025年10月1日–12月1日，申请费 €50。建筑与设计专业2026年9月入学申请时间为2025年10月1日–2026年1月29日，Early Bird截止为2025年12月1日，申请结果于2026年5月底前公布。符合条件的学生还可关注2026年2月27日–3月31日的额外申请阶段。'], timeline: [{ label: '提前12–18个月', text: '确定专业 + 院校' }, { label: '提前9–12个月', text: '开始作品集 + 语言准备' }, { label: '提前6个月', text: '完成语言，准备CV / Motivation Letter' }, { label: '6–7月', text: '按照当年官方批次提交申请' }] },
      { title: '费用 & 奖学金', paragraphs: ['米理属于公立大学，费用体系与私立艺术院校完全不同。2026/27学年第一期通常为 €880.04，全年综合学费根据 ISEE / ISEEU、学分、学生身份及是否享受减免等因素计算。学校公开的全额综合贡献上限为 €3,943.04，另有地区税、印花税及保险等费用。', '国际学生重要奖学金包括 Platinum Scholarship，约 €10,000/年 + 学费减免；Gold Scholarship，约 €8,000/年 + 学费减免。此外还有 DSU / Diritto allo Studio，可根据家庭经济情况提供学费减免及生活、住宿等方面的支持。'] },
    ],
  },
  'polimoda': {
    sections: [
      { title: '院校介绍', paragraphs: ['Polimoda 柏丽慕达时装学院成立于1986年，位于佛罗伦萨，是意大利最具国际影响力的专业时尚教育机构之一。学校由佛罗伦萨、普拉托等当地机构与纽约FIT合作创建，长期强调 Fashion + Industry + Practice。', '目前学校拥有约2,000名学生，来自107个国家，课程覆盖本科、硕士和专业课程，并与2,000多家企业保持合作。学校官方2026年资料显示，其毕业生就业率达到90% within six months。', '与米兰的时尚院校相比，Polimoda最大的特点是佛罗伦萨、Made in Italy与高度专业化的时尚教育。', 'Fashion · Industry · Florence', '专业时尚与产业实践'] },
      { title: '热门专业', groups: [{ title: 'Fashion Design', items: ['Fashion Design', 'Fashion Accessories Design', 'Fashion Art Direction', 'Creative Direction'] }, { title: 'Fashion Business', items: ['Fashion Business', 'Fashion Brand Management', 'Fashion Marketing', 'Fashion Buying & Merchandising'] }, { title: 'Image', items: ['Fashion Styling', 'Fashion Art Direction', 'Fashion Communication'] }, { title: '其他', items: ['Fashion Curation', 'Fashion Management', 'Luxury Business'] }] },
      { title: '申请要求', groups: [{ title: '硕士一般需要', items: ['本科或同等学历，或相关行业工作经验', 'CV', 'Motivation Letter', '英语能力', 'Portfolio（设计类课程）', 'Interview'] }], paragraphs: ['例如2026年Fashion Design Master要求 Bachelor或同等学历 / 相关行业经验、CV + Motivation Letter、English proficiency、Portfolio，并通过学校的录取流程。'] },
      { title: '申请时间线', paragraphs: ['Polimoda不像公立大学那样采用单一统一申请窗口，而是根据具体课程设置入学批次。例如2026年Fashion Design Master于10月12日开课，课程持续32周，部分课程还有 February、October 等入学时间。'], timeline: [{ label: '提前6–12个月', text: '准备作品集 + 申请材料' }, { label: '申请阶段', text: '提交CV、动机信与作品集' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['以2026年Fashion Design Master为例：学费 €28,000，课程持续32周，英语授课，2026年10月12日开课。Fashion Accessories Design等部分硕士课程目前同样显示约 €28,000。学校也提供不同形式的奖学金，例如部分2026年硕士奖学金要求申请者达到B2英语并提交相关申请材料。'] },
    ],
  },
  'naba': {
    sections: [
      { title: '院校介绍', paragraphs: ['NABA（Nuova Accademia di Belle Arti）1980年成立于米兰，是意大利重要的私立艺术与设计学院之一。学校1981年获得意大利教育部认可，属于意大利AFAM高等艺术与音乐教育体系，受意大利大学与研究部（MUR）监管。', 'NABA的优势在于 Fashion、Design、Visual Arts、Communication 与 New Technologies，属于比较典型的综合型艺术设计学院。学校官方目前称其为意大利最大的艺术学院之一，并在QS Art & Design排名中进入全球Top 50。', 'Art · Design · Fashion · New Media', '综合艺术与设计'] },
      { title: '热门专业', groups: [{ title: 'Fashion', items: ['Fashion Design', 'Fashion Design & Management', 'Fashion Digital Marketing', 'Fashion Management相关方向'] }, { title: 'Design', items: ['Product and Service Design', 'Interior Design', 'Social Design', 'Design Innovation'] }, { title: 'Communication', items: ['Visual Design', 'Graphic Design', 'Creative Advertising', 'Communication'] }, { title: 'Media & Technology', items: ['User Experience Design', 'Media Design', 'New Technologies'] }, { title: 'Academic Master', items: ['Luxury Brand Management', 'Italian Design', 'Interior and Living Design', 'Fashion Digital Marketing', 'Sneaker Design'] }] },
      { title: '申请要求', groups: [{ title: '研究生申请通常需要', items: ['本科 / First-Level Academic Diploma', '成绩单、CV、Passport、Motivation Letter', 'IELTS 5.5或TOEFL iBT 68（如无证书，部分课程可参加校内语言测试）', 'Portfolio（设计、时尚及视觉类课程通常需要）', '推荐信及其他课程要求材料', '部分课程可能安排面试'] }], paragraphs: ['按当前课程资料，NABA部分1年制AFAM课程约 €23,800，部分1年制课程约 €22,300；2年制AFAM课程按专业约 €20,800/年或 €22,250/年。1年制AFAM通常为60 CFA，当前不按中国同等硕士学历认证；2年制AFAM通常为120 CFA，可按相关规定办理中国学历学位认证。', '具体作品集、面试、语言及费用要求按专业和入学年份确认。'] },
      { title: '申请时间线', paragraphs: ['NABA的主要入学季为 October，同时部分课程提供 February Fast Track，因此相对于公立大学，时间比较灵活。2026/27 Academic Offer列出了10月第一批和部分2月Fast Track入学。'], timeline: [{ label: '提前9–12个月', text: '选专业' }, { label: '提前6–9个月', text: '准备作品集' }, { label: '提前3–6个月', text: '提交申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['2026/27研究生课程参考：部分1年制课程约 €22,300–€23,800；2年制AFAM课程约 €20,800–€22,250/年，具体以对应项目及学生身份的官方报价为准。NABA采用不同收入档位的费用机制，具体情况根据学生身份及相关经济材料确定。', 'NABA针对国际研究生提供 International Postgraduate Scholarship，2026/27学年最高可获得 €6,000 学费减免，主要评审材料包括 Portfolio、CV、Motivation Letter、成绩材料与语言证明。该轮奖学金申请截止日期为2026年5月27日。'] },
    ],
  },
  'ied': {
    sections: [
      { title: '院校介绍', paragraphs: ['欧洲设计学院（IED）是意大利具有国际影响力的设计教育集团，在意大利多个城市设有校区，并延伸至西班牙、巴西等地。', 'IED的教育特点是 Design + Creativity + Industry，课程覆盖 Fashion、Design、Visual Arts、Communication、Management，并强调与企业、设计师及行业机构合作。IED官方将其Master课程定位为结合技术能力、创造力和职业能力的实践型教育。', 'Design · Creativity · Industry', '设计与产业实践'] },
      { title: '热门专业', groups: [{ title: 'Fashion', items: ['Fashion Design', 'Fashion Communication & Styling', 'Fashion Marketing', 'Fashion Art Direction', 'Fashion Brand Management', 'Fashion Merchandising & Buying', 'Fashion Trend Forecasting', 'Fashion Photography', 'Fashion Design – Haute Couture'] }, { title: 'Design', items: ['Interior Design', 'Design – Innovation, Strategy and Product', 'UX Design', 'Product Design', 'Transportation Design', 'Graphic Design'] }, { title: 'Communication', items: ['Visual Communication', 'Brand Strategy', 'Creative Direction', 'Marketing & Communication'] }] , paragraphs: ['IED米兰校区的Fashion和Design硕士课程非常丰富，2026年11月有多个专业开课。'] },
      { title: '申请要求', groups: [{ title: 'IED Master申请通常需要', items: ['本科学位 / 同等学历', 'Academic Transcript', 'CV', 'Motivation Letter', 'Portfolio', 'Passport', 'Language Certificate'] }], paragraphs: ['IED 2026年官方Master申请流程文件明确将Portfolio、CV、Motivation Letter、学历和成绩单列入核心申请材料；部分专业可能不要求Portfolio。英语授课课程通常需要英语能力证明，具体分数以课程页面为准。'] },
      { title: '申请时间线', paragraphs: ['IED的课程开学时间比较灵活。以2026年米兰校区为例，11月入学是大量Master课程的主要入学时间，部分课程还提供4月入学，例如Fashion Communication & Styling、Fashion Art Direction等。非欧盟学生需要考虑签证流程，IED官方特别建议海外非欧盟学生尽量在6–7月前完成注册流程。'], timeline: [{ label: '提前6–12个月', text: '确定专业' }, { label: '提前6个月', text: '作品集 + 语言' }, { label: '提前3–6个月', text: '提交申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['IED 2026/27意大利Master费用根据专业不同有所区别。例如米兰 Fashion Communication & Styling，EU/EFTA总费用 €20,300，非欧盟总费用 €22,300，其中注册费 €3,000。Fashion Trend Forecasting非欧盟约 €24,200。IED同时提供奖学金、学费减免与Financial Aid，具体根据课程和入学年份申请。'] },
    ],
  },
} as const

export type BilingualLabel = { zh: string; en: string }

export const schoolSpecialtyGroupTranslations: Record<string, BilingualLabel> = {
  'Fashion 时尚方向': { zh: '时尚方向', en: 'Fashion' },
  'Beauty & Luxury': { zh: '美妆与奢侈品', en: 'Beauty & Luxury' },
  'Design 设计方向': { zh: '设计方向', en: 'Design' },
  Fashion: { zh: '时尚方向', en: 'Fashion' },
  Design: { zh: '设计方向', en: 'Design' },
  Business: { zh: '商业方向', en: 'Business' },
  本科: { zh: '本科课程', en: 'Undergraduate' },
  硕士: { zh: '硕士课程', en: 'Master' },
  '强化 / 进修': { zh: '强化／进修课程', en: 'Advanced / Further Study' },
  'Architecture 建筑方向': { zh: '建筑方向', en: 'Architecture' },
  'Engineering 工程方向': { zh: '工程方向', en: 'Engineering' },
  'Fashion Design': { zh: '时尚设计', en: 'Fashion Design' },
  'Fashion Business': { zh: '时尚商业', en: 'Fashion Business' },
  Image: { zh: '形象与造型', en: 'Image' },
  其他: { zh: '其他方向', en: 'Other' },
  Communication: { zh: '传播方向', en: 'Communication' },
  'Media & Technology': { zh: '媒体与科技', en: 'Media & Technology' },
  'Academic Master': { zh: '学术硕士课程', en: 'Academic Master' },
}

export const schoolSpecialtyTranslations: Record<string, string> = {
  'Fashion Design': '服装设计',
  'Fashion Design & Pattern Making': '服装设计与制版',
  'Fashion Design & Accessories': '服装与配饰设计',
  'Fashion Styling & Creative Direction': '时尚造型与创意指导',
  'Fashion Promotion, Communication & Digital Media': '时尚推广、传播与数字媒体',
  'Fashion & Luxury Brand Management': '时尚与奢侈品牌管理',
  'Fashion Buying & Merchandising': '时尚买手与商品企划',
  'Fashion Product Management': '时尚产品管理',
  'Fashion Entrepreneurship': '时尚创业',
  'Fashion Omnichannel & E-Commerce': '时尚全渠道与电子商务',
  'Fragrance & Cosmetics': '香水与化妆品',
  'Luxury Brand Management': '奢侈品牌管理',
  'Fashion & Luxury Business': '时尚与奢侈品商业',
  'Interior Design': '室内设计',
  'Product & Furniture Design': '产品与家具设计',
  'Digital Art Direction': '数字艺术指导',
  'Fine Jewellery Design': '高级珠宝设计',
  'Design Management & Strategic Innovation': '设计管理与战略创新',
  'Immersive Experience Digital Design': '沉浸式体验数字设计',
  'Fashion Management': '时尚管理',
  'Fashion Styling & Visual Merchandising': '时尚造型与视觉陈列',
  'Fashion: Design, Art & Technology': '时尚：设计、艺术与科技',
  'Product Design': '产品设计',
  'Interaction Design': '交互设计',
  'Service Design & UX': '服务设计与用户体验',
  'Interior & Living Design': '室内与生活方式设计',
  'Visual Brand Design': '视觉品牌设计',
  'Design Futures': '未来设计',
  'Design x AI': '设计与人工智能',
  'Business Design': '商业设计',
  "Women's Wear Pattern Making": '女装制版',
  "Men's Wear Pattern Making & Tailoring": '男装制版与高级定制',
  'Lingerie & Bridal Wear Pattern Making': '内衣与婚纱制版',
  'Sample Making': '样衣制作',
  "Women's / Men's Pattern Making": '女装／男装制版',
  'CAD Pattern Making': 'CAD制版',
  Sewing: '缝制工艺',
  'Design for the Fashion System': '时尚系统设计',
  'Digital and Interaction Design': '数字与交互设计',
  'Integrated Product Design': '综合产品设计',
  'Product Service System Design': '产品服务系统设计',
  'Communication Design': '传播设计',
  'Interior and Spatial Design': '室内与空间设计',
  'Design & Engineering': '设计与工程',
  Architecture: '建筑学',
  'Architectural Design and History': '建筑设计与历史',
  'Sustainable Architecture and Landscape Design': '可持续建筑与景观设计',
  'Landscape Architecture': '景观建筑',
  'Urban Planning and Policy Design': '城市规划与政策设计',
  'Mechanical Engineering': '机械工程',
  'Civil Engineering': '土木工程',
  'Electrical Engineering': '电气工程',
  'Computer Science and Engineering': '计算机科学与工程',
  'Management Engineering': '管理工程',
  'Fashion Accessories Design': '时尚配饰设计',
  'Fashion Art Direction': '时尚艺术指导',
  'Creative Direction': '创意指导',
  'Fashion Brand Management': '时尚品牌管理',
  'Fashion Marketing': '时尚营销',
  'Fashion Styling': '时尚造型',
  'Fashion Communication': '时尚传播',
  'Fashion Curation': '时尚策展',
  'Luxury Business': '奢侈品商业',
  'Fashion Design & Management': '服装设计与管理',
  'Fashion Digital Marketing': '时尚数字营销',
  'Fashion Management相关方向': '时尚管理相关方向',
  'Product and Service Design': '产品与服务设计',
  'Social Design': '社会设计',
  'Design Innovation': '设计创新',
  'Visual Design': '视觉设计',
  'Graphic Design': '平面设计',
  'Creative Advertising': '创意广告',
  Communication: '传播',
  'User Experience Design': '用户体验设计',
  'Media Design': '媒体设计',
  'New Technologies': '新技术',
  'Italian Design': '意大利设计',
  'Sneaker Design': '运动鞋设计',
  'Fashion Communication & Styling': '时尚传播与造型',
  'Fashion Merchandising & Buying': '时尚商品企划与买手',
  'Fashion Trend Forecasting': '时尚趋势预测',
  'Fashion Photography': '时尚摄影',
  'Fashion Design – Haute Couture': '时尚设计—高级定制',
  'Design – Innovation, Strategy and Product': '设计—创新、策略与产品',
  'UX Design': '用户体验设计',
  'Transportation Design': '交通工具设计',
  'Visual Communication': '视觉传播',
  'Brand Strategy': '品牌战略',
  'Marketing & Communication': '市场营销与传播',
}


