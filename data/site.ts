export const siteConfig = {
  name: 'MISOLA 米岛时尚设计留学',
  url: 'https://misolaedu.com',
  description: 'MISOLA 米岛时尚设计留学，专注意大利时尚与设计院校申请、作品集指导、导师辅导与海外支持。',
  keywords: ['米岛时尚设计留学', 'MISOLA', '意大利时尚留学', '意大利服装设计留学', '作品集指导'],
}

export const schools = [
  { slug: 'politecnico-di-milano', name: 'POLITECNICO MILANO', cn: '米兰理工大学', mark: 'POLI', logo: '/images/school-politecnico.png', image: '/images/service-03.jpg', category: 'Design' },
  { slug: 'istituto-marangoni', name: 'ISTITUTO MARANGONI', cn: '马兰欧尼时装与设计学院', mark: 'IM', logo: '/images/school-marangoni.png', image: '/images/hero-background.jpg', category: 'Fashion' },
  { slug: 'domus-academy', name: 'DOMUS ACADEMY MILANO', cn: '多莫斯设计学院', mark: 'DA', logo: '/images/school-domus.png', image: '/images/reference-hero.jpg', category: 'Design' },
  { slug: 'istituto-secoli', name: 'ISTITUTO SECOLI', cn: '卡罗世纪服装学院', mark: 'S', logo: '/images/school-secoli.png', image: '/images/service-02.jpg', category: 'Fashion' },
  { slug: 'naba', name: 'NABA', cn: '米兰新美术学院', mark: 'NABA', logo: '/images/school-naba.png', image: '/images/service-01.jpg', category: 'Design' },
  { slug: 'polimoda', name: 'POLIMODA', cn: '柏丽慕达时装学院', mark: 'P', logo: '/images/school-polimoda.png', image: '/images/service-04.jpg', category: 'Fashion' },
  { slug: 'ied', name: 'IED', cn: 'IED欧洲设计学院', mark: 'IED', logo: '/images/school-ied-user.png', image: '/images/service-05.jpg', category: 'Design' },
]

export const services = [
  { title: '留学申请规划', text: '个性化申请方案，精准匹配意大利院校与专业。', image: '/images/service-01.jpg' },
  { title: '作品集指导', text: '专业作品集老师一对一辅导，完成从创意开发到项目制作。', image: '/images/service-02.jpg' },
  { title: '院校申请', text: '精准文书、面试辅导、申请递交与录取跟进。', image: '/images/service-03.jpg' },
  { title: '签证与行前', text: '签证办理、住宿安排、接机服务与行前辅导。', image: '/images/service-04.jpg' },
  { title: '海外支持', text: '海外生活支持、学业跟进与职业发展陪伴。', image: '/images/service-05.jpg' },
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
        paragraphs: ['马兰欧尼2026/27米兰校区已经同时覆盖一年制和两年制硕士课程。米兰时装学院一年制硕士包括服装设计、时尚与奢侈品牌管理、时尚传播、买手与营销等多个方向。'],
      },
      {
        title: '申请要求',
        groups: [
          { title: '本科通常要求', items: ['高中毕业或同等学历', '英语授课课程一般需要英语能力证明', '部分AFAM课程需要通过学校面试/入学评估'] },
          { title: '硕士通常要求', items: ['本科毕业或等同学历', '相关专业背景或相应专业经历', 'CV', '动机材料', 'Portfolio（根据课程要求）', '英语/意大利语语言证明'] },
        ],
        paragraphs: ['根据目前整理的米兰校区信息显示，硕士课程通常要求大学毕业，英语授课课程可参考 IELTS 5.0，建议6.0；不同专业的具体要求仍应以对应课程页面为准。'],
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
        paragraphs: ['以米兰校区2026年秋季一年制硕士为例：', '学费约 €33,500/年；注册费约 €5,500；合计约 €39,000。', '具体专业费用可能存在差异。', '奖学金方面，马兰欧尼针对不同课程和入学季设置奖学金。例如2026 Autumn Early Talent Scholarship，欧洲校区最高可获得€5,000学费减免；部分专项奖学金针对硕士课程最高可达到€10,000。'],
      },
    ],
  },
  'domus-academy': {
    sections: [
      { title: '院校介绍', paragraphs: ['Domus Academy 多莫斯设计学院1982年创立于米兰，是意大利最早的研究生设计教育机构之一。', '学校最具代表性的教育理念是 Learning by Designing，即通过真实项目、设计实践和跨学科合作学习。学校早期就曾邀请 Ettore Sottsass、Alessandro Mendini、Philippe Starck 等设计界人物参与教学，长期强调设计研究、创新、跨学科和产业合作。', '目前学校的硕士课程覆盖 Design、Fashion、Experience、Business 四大领域，并提供意大利MUR认可的Academic Master以及英国体系的Dual Award课程。', 'Design · Innovation · Research', '跨学科设计与创新'] },
      { title: '热门专业', groups: [{ title: 'Fashion', items: ['Fashion Design', 'Fashion Management', 'Fashion Styling & Visual Merchandising', 'Fashion: Design, Art & Technology'] }, { title: 'Design', items: ['Product Design', 'Interaction Design', 'Service Design & UX', 'Interior & Living Design', 'Visual Brand Design', 'Design Futures', 'Design x AI'] }, { title: 'Business', items: ['Business Design', 'Fashion Management'] }] },
      { title: '申请要求', groups: [{ title: '硕士通常要求', items: ['本科或同等学历', '相关专业背景优先', '部分课程接受其他专业背景申请者', 'Portfolio', 'CV', 'Motivation Letter', '英语语言能力'] }], paragraphs: ['Domus Academy部分课程对跨专业申请比较开放。例如 Fashion Design 对非时尚背景申请者也开放，但要求申请人通过作品集展示完整的设计过程。'] },
      { title: '申请时间线', paragraphs: ['Domus Academy的很多硕士课程一年有多个入学时间：February、September、November。因此相比公立大学，申请灵活度比较高。'], timeline: [{ label: '提前9–12个月', text: '确定专业' }, { label: '提前6–9个月', text: '准备作品集' }, { label: '提前3–6个月', text: '递交申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['以目前官网公开的 Fashion Design / Fashion Management 一年制Academic Master为例：非欧盟学生约 €28,900，其中 Pre-enrollment €3,000，Tuition €25,900。Academic Master另有相应学位费用。', '如果选择Dual Award，非欧盟学生约 €32,900。学校还提供不同形式的奖学金和项目竞赛，针对2027年2月入学的项目奖学金最高可覆盖 €8,000 学费。'] },
    ],
  },
  'istituto-secoli': {
    sections: [
      { title: '院校介绍', paragraphs: ['卡罗世纪服装学院（Istituto Secoli）成立于1934年，位于米兰，是意大利历史悠久的专业服装教育机构。', '与马兰欧尼、IED等综合型设计学院不同，卡罗世纪最大的特色是服装设计、制版、样衣与工艺。学校长期专注于服装产业实践，与 Armani、Versace、Prada、Zegna、Gucci、Fendi、Dolce & Gabbana 等时尚企业保持合作关系。相关资料显示，学校自成立以来培养了超过6万名设计师、制版师及相关专业人才。', '因此，如果学生明确想走服装设计、Pattern Making、Tailoring、Garment Construction，卡罗世纪是非常有特色的选择。', 'Pattern Making · Craftsmanship · Made in Italy', '服装制版与工艺'] },
      { title: '热门专业', groups: [{ title: '本科', items: ['Fashion Design & Pattern Making'] }, { title: '硕士', items: ["Women's Wear Pattern Making", "Men's Wear Pattern Making & Tailoring", 'Lingerie & Bridal Wear Pattern Making'] }, { title: '强化 / 进修', items: ['Sample Making', "Women's / Men's Pattern Making", 'CAD Pattern Making', 'Fashion Design', 'Sewing'] }], paragraphs: ['学校目前还在米兰及诺瓦拉设置教学空间，其中诺瓦拉更加接近意大利服装工业生产体系。'] },
      { title: '申请要求', groups: [{ title: '本科', items: ['高中毕业或同等学历', '服装设计与制版本科主要为意大利语授课', '意大利语建议B1'] }, { title: '硕士', items: ['服装相关本科背景，或具有相关专业工作经验', '意大利语能力', '部分课程可以申请英语同步翻译'] }], paragraphs: ['学校的相关课程资料显示，硕士申请一般需要服装相关学历或专业工作经历。'] },
      { title: '申请时间线', paragraphs: ['卡罗世纪的主力长期课程以秋季入学为主。本科通常为10月入学，硕士通常为9月或秋季入学。另外学校会提供暑期课程、预备课程及短期课程。'], timeline: [{ label: '提前6–9个月', text: '准备语言 + 专业基础' }, { label: '提前3–6个月', text: '完成申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['2026/27学年参考：本科 €11,800/年，注册费 €2,000，合计 €13,800/年；硕士 €18,700，注册费 €2,000，合计 €20,700；强化课程 €11,800–12,000，注册费 €2,000，合计 €13,800–14,000。部分课程如果需要英语同步翻译，还需要额外支付相关费用。'] },
    ],
  },
  'politecnico-di-milano': {
    sections: [
      { title: '院校介绍', paragraphs: ['米兰理工大学（Politecnico di Milano，简称PoliMi）成立于1863年，是意大利历史最悠久、国际影响力最强的理工类大学之一，也是意大利工程、建筑与设计领域的代表性高校。', '米理目前在全球大学排名中表现突出，QS世界大学排名2026位列全球第98位、意大利第1位，首次进入全球Top 100。QS 2026建筑与建成环境排名全球第6，艺术与设计排名全球第7，工程与技术排名全球第20，三个领域均位居意大利第1。', '米理的核心优势集中在建筑、设计、工程、城市规划、数字技术与创新等领域，学校强调设计与工程、科技、产业和科研之间的结合。', '与传统私立艺术设计学院相比，米兰理工大学更加注重学术研究、专业能力、设计方法和跨学科创新。米兰主要校区包括 Milano Leonardo 以及设计学院所在的 Milano Bovisa。', 'Design · Engineering · Research', '设计与工程融合'] },
      { title: '热门专业', groups: [{ title: 'Design 设计方向', items: ['Design for the Fashion System', 'Digital and Interaction Design', 'Integrated Product Design', 'Product Service System Design', 'Communication Design', 'Interior and Spatial Design', 'Design & Engineering'] }, { title: 'Architecture 建筑方向', items: ['Architecture', 'Architectural Design and History', 'Sustainable Architecture and Landscape Design', 'Landscape Architecture', 'Urban Planning and Policy Design'] }, { title: 'Engineering 工程方向', items: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Computer Science and Engineering', 'Management Engineering', 'Design & Engineering'] }], paragraphs: ['Design for the Fashion System 是米理与时尚方向最直接相关的硕士项目，主要围绕时尚系统、产品设计、创新、可持续性以及时尚产业展开。2026/27学年，该专业在 Milano Bovisa 校区提供70个招生名额，其中30个面向Extra-EU学生。'] },
      { title: '申请要求', groups: [{ title: '通常需要', items: ['本科/学士学位', '专业背景匹配', '符合学校要求的课程及学分', '成绩单', 'CV', 'Motivation Letter', 'Portfolio', '英语语言证明'] }, { title: '重点审核', items: ['本科课程', 'ECTS', '专业学分', '课程内容', 'GPA'] }], paragraphs: ['米兰理工大学与私立设计学院最大的区别，是对本科专业背景、课程匹配度和学术条件要求更严格。设计学院硕士申请明确要求非米理本科学生提交项目作品集、动机信、CV、成绩材料和英语证明。作品集、专业背景、学术成绩与英语，是米理设计类硕士申请的核心。'] },
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
      { title: '申请要求', groups: [{ title: '研究生申请通常需要', items: ['本科 / First-Level Academic Diploma', '成绩单', 'CV', 'Passport', 'Motivation Letter', 'Portfolio', '语言证明'] }], paragraphs: ['不同专业的作品集要求有所区别。目前官方明确要求多数 Master of Arts / Academic Master 申请提交作品集，但部分课程可以免作品集。英语授课通常需要 IELTS 5.0 或相应水平，部分意大利语课程要求意大利语B1。'] },
      { title: '申请时间线', paragraphs: ['NABA的主要入学季为 October，同时部分课程提供 February Fast Track，因此相对于公立大学，时间比较灵活。2026/27 Academic Offer列出了10月第一批和部分2月Fast Track入学。'], timeline: [{ label: '提前9–12个月', text: '选专业' }, { label: '提前6–9个月', text: '准备作品集' }, { label: '提前3–6个月', text: '提交申请' }, { label: '录取后', text: '注册 → 签证' }] },
      { title: '费用 & 奖学金', paragraphs: ['2026/27 Master of Arts 非欧盟学生标准费用约 €22,250/年；Academic Master部分非欧盟课程约 €23,800/年，具体课程费用需要以对应项目为准。NABA采用不同收入档位的费用机制，具体情况根据学生身份及相关经济材料确定。', 'NABA针对国际研究生提供 International Postgraduate Scholarship，2026/27学年最高可获得 €6,000 学费减免，主要评审材料包括 Portfolio、CV、Motivation Letter、成绩材料与语言证明。该轮奖学金申请截止日期为2026年5月27日。'] },
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
