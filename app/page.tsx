import { ArrowDownRight, ArrowRight, GraduationCap, Menu, PencilRuler, Plane, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { schools, services, siteConfig } from '@/data/site'

function Brand() { return <Link className="brand" href="/"><span className="brand-symbol">M</span><span><strong>MISOLA</strong><small>米岛时尚设计留学</small></span></Link> }
const icons = [GraduationCap, PencilRuler, ArrowDownRight, Plane, UsersRound]

export default function Home() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, areaServed: 'CN', knowsAbout: ['Italian Fashion Design', 'Fashion Education'] }
  return <div className="site" id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <header className="header shell"><Brand /><nav className="nav"><Link className="active" href="/">首页</Link><Link href="/#about">关于米岛</Link><Link href="/services">留学服务</Link><Link href="/schools">院校与专业</Link><Link href="/#cases">成功案例</Link><Link href="/#events">资讯活动</Link><Link href="/contact">联系我们</Link></nav><div className="header-actions"><Link className="outline-button" href="/contact">免费咨询 <ArrowRight size={14} /></Link><button className="menu-button" aria-label="打开菜单"><Menu size={22} /></button></div></header>
    <main>
      <section className="hero shell" id="about"><div className="hero-copy"><p className="eyebrow">MISOLA / 01</p><h1>MISOLA</h1><h2>米岛时尚设计留学</h2><div className="rule" /><p className="hero-desc">专注意大利时尚留学<br /><span>Italian Fashion Design · 设计 · 时尚 · 未来</span></p><Link className="solid-button" href="/services">探索更多 <ArrowRight size={16} /></Link><div className="hero-index"><b>01</b><i></i><span>03</span></div></div><div className="hero-art"><div className="glow-mark">M</div><span className="art-caption">MILANO / ITALIA<br /><b>Design the future.</b></span></div></section>
      <section className="section shell" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>我们的服务</h2></div><p>全方位艺术留学服务，助你实现世界名校梦想。</p></div><div className="service-grid">{services.map(({ title, text }, index) => { const Icon = icons[index]; return <article className={`service-card service-${index + 1}`} key={title}><div className="card-icon"><Icon size={20} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><span className="card-number">0{index + 1}</span></article> })}</div></section>
      <section className="school-band" id="portfolio"><div className="shell"><div className="section-heading school-heading"><div><p className="eyebrow">OUR NETWORK</p><h2>意大利热门院校</h2></div><Link href="/schools" className="text-link">查看全部院校 <ArrowRight size={16} /></Link></div><div className="school-grid">{schools.map(school => <Link className="school" href={`/schools/${school.slug}`} key={school.slug}><div className="school-mark">{school.mark}</div><div><strong>{school.name}</strong><span>{school.cn}</span></div></Link>)}</div></div></section>
      <section className="cases shell" id="cases"><div className="case-intro"><p className="eyebrow">SELECTED CASES</p><h2>成功案例</h2><p>帮助数百名学生斩获意大利顶尖设计院校录取。<br />你的下一个录取，就是我们共同的目标。</p><Link className="outline-button" href="/contact">查看案例 <ArrowRight size={14} /></Link></div><div className="case-stack">{['Marangoni', 'POLIMODA', 'NABA', 'Domus Academy'].map((name, index) => <article key={name}><div className={`case-image case-${index + 1}`}><span>{['FASHION RESEARCH', 'FORM STUDY', 'NEW MATERIAL', 'LIGHT OBJECT'][index]}</span></div><p>{name}<br /><small>Fashion / Design</small></p></article>)}</div></section>
      <section className="contact-strip shell" id="events"><p className="eyebrow">START YOUR JOURNEY</p><h2>让你的设计，被世界看见。</h2><Link className="solid-button" href="/contact">预约免费咨询 <ArrowRight size={16} /></Link></section>
    </main>
    <footer className="footer shell"><Brand /><div className="footer-contact"><span>☎　400-888-1234</span><span>✉　info@misolaedu.com</span><span>⌖　上海市静安区南京西路1266号</span></div><div className="footer-bottom">© 2024 MISOLA 米岛时尚设计留学　All Rights Reserved.</div></footer>
  </div>
}
