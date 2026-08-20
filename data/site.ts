export const siteConfig = {
  name: 'MISOLA 米岛时尚设计留学',
  url: 'https://misolaedu.com',
  description: 'MISOLA 米岛时尚设计留学，专注意大利时尚与设计院校申请、作品集指导、导师辅导与海外支持。',
  keywords: ['米岛时尚设计留学', 'MISOLA', '意大利时尚留学', '意大利服装设计留学', '作品集指导'],
}

export const schools = [
  { slug: 'politecnico-di-milano', name: 'POLITECNICO MILANO', cn: '米兰理工大学', mark: 'POLI', logo: '/images/school-politecnico.png', category: 'Design' },
  { slug: 'istituto-marangoni', name: 'ISTITUTO MARANGONI', cn: '马兰欧尼时装与设计学院', mark: 'IM', logo: '/images/school-marangoni.png', category: 'Fashion' },
  { slug: 'domus-academy', name: 'DOMUS ACADEMY MILANO', cn: '多莫斯设计学院', mark: 'DA', logo: '/images/school-domus.png', category: 'Design' },
  { slug: 'istituto-secoli', name: 'ISTITUTO SECOLI', cn: '卡罗世纪服装学院', mark: 'S', logo: '/images/school-secoli.png', category: 'Fashion' },
  { slug: 'naba', name: 'NABA', cn: '米兰新美术学院', mark: 'NABA', logo: '/images/school-naba.png', category: 'Design' },
  { slug: 'polimoda', name: 'POLIMODA', cn: '柏丽慕达时装学院', mark: 'P', logo: '/images/school-polimoda.png', category: 'Fashion' },
  { slug: 'ied', name: 'IED', cn: 'IED欧洲设计学院', mark: 'IED', logo: '/images/school-ied-user.png', category: 'Design' },
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
} as const
