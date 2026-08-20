import { ArrowRight, GraduationCap, Menu, PencilRuler, Plane, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { schools, services, siteConfig } from '@/data/site'

function Brand() { return <Link className="brand" href="/"><Image className="brand-image" src="/images/logo-main.jpg" alt="MISOLA 米岛时尚设计留学" width={1600} height={900} priority /></Link> }
const icons = [GraduationCap, PencilRuler, ArrowRight, Plane, UsersRound]

export default function Home() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, areaServed: 'CN', knowsAbout: ['Italian Fashion Design', 'Fashion Education'] }
  return <div className="site" id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <header className="header shell"><Brand /><nav className="nav"><Link className="active" href="/">首页</Link><Link href="/#about">关于米岛</Link><Link href="/schools">热门院校</Link><Link href="/services">留学服务</Link><Link href="/#team">团队介绍</Link><Link href="/#cases">成功案例</Link><Link href="/contact">免费咨询</Link></nav><div className="header-actions"><Link className="outline-button" href="/contact">预约咨询 <ArrowRight size={14} /></Link><button className="menu-button" aria-label="打开菜单"><Menu size={22} /></button></div></header>
    <main>
      <section className="hero shell" id="about"><div className="hero-copy"><p className="eyebrow">MISOLA / ITALIAN FASHION DESIGN</p><h1>MISOLA</h1><h2>米岛时尚设计留学</h2><div className="rule" /><p className="hero-desc">专注意大利时尚留学<br /><span>设计 · 时尚 · 未来</span></p><Link className="solid-button" href="/services">探索更多 <ArrowRight size={16} /></Link><div className="hero-index"><b>01</b><i></i><span>03</span></div></div><div className="hero-art"><span className="art-caption">MILANO / ITALIA<br /><b>Design the future.</b></span></div></section>
      <section className="section shell" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>我们的服务</h2></div><p>全方位艺术留学服务，助你实现世界名校梦想。</p></div><Image className="service-icons-art" src="/images/service-icons.jpg" alt="米岛留学服务" width={1536} height={1024} /><div className="service-grid">{services.map(({ title, text }, index) => { const Icon = icons[index]; return <article className={`service-card service-${index + 1}`} key={title}><div className="card-icon"><Icon size={20} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><span className="card-number">0{index + 1}</span></article> })}</div></section>
      <section className="school-band" id="portfolio"><div className="shell"><div className="section-heading school-heading"><div><p className="eyebrow">ITALIAN SCHOOL DIRECTORY</p><h2>意大利热门院校</h2></div><Link href="/schools" className="text-link">查看全部院校 <ArrowRight size={16} /></Link></div><Image className="school-logo-board" src="/images/school-logos.png" alt="意大利热门院校 Logo" width={1536} height={1024} /><div className="school-grid">{schools.map(school => <Link className="school" href={`/schools/${school.slug}`} key={school.slug}><div className="school-mark">{school.mark}</div><div><strong>{school.name}</strong><span>{school.cn}</span></div></Link>)}</div></div></section>
      <section className="team-band shell" id="team"><div className="section-heading"><div><p className="eyebrow">MISOLA TEAM</p><h2>团队介绍</h2></div><p>关于我们、顾问与作品集文书辅导团队。</p></div><div className="team-grid">{['我们的团队','顾问团队','作品集文书辅导团队'].map((title,index)=><article className="team-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>内容待补充</p></article>)}</div></section>
      <section className="cases shell" id="cases"><div className="case-intro"><p className="eyebrow">SELECTED CASES</p><h2>成功案例</h2><p>案例内容与学生信息将在后续持续更新。</p><Link className="outline-button" href="/contact">提交作品集 <ArrowRight size={14} /></Link></div><div className="case-stack">{['案例一','案例二','案例三','案例四'].map((name, index) => <article key={name}><div className={`case-image case-${index + 1}`}><span>{name}<br />CONTENT TO COME</span></div><p>案例内容待补充<br /><small>Fashion / Design</small></p></article>)}</div></section>
      <section className="contact-strip shell" id="events"><p className="eyebrow">START YOUR JOURNEY</p><h2>让你的设计，被世界看见。</h2><Link className="solid-button" href="/contact">预约免费咨询 <ArrowRight size={16} /></Link></section>
    </main>
    <footer className="footer shell"><Brand /><div className="footer-contact"><span>☎　联系方式待填写</span><span>✉　邮箱待填写</span><span>⌖　地址待填写</span></div><div className="footer-bottom">© 2026 MISOLA 米岛时尚设计留学　All Rights Reserved.</div></footer>
  </div>
}
