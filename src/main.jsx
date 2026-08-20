import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowRight, GraduationCap, Menu, PencilRuler, Plane, UsersRound } from 'lucide-react'
import './styles.css'

const schools = [
  { name: 'Istituto Marangoni', cn: '马兰欧尼时装设计学院', mark: 'IM' },
  { name: 'NABA', cn: '新美术学院', mark: 'NABA' },
  { name: 'POLIMODA', cn: '波利莫达时装学院', mark: 'P' },
  { name: 'DOMUS ACADEMY', cn: '多莫斯设计学院', mark: 'DA' },
  { name: 'IED', cn: '卡罗世纪学院', mark: 'IED' },
  { name: 'POLITECNICO DI MILANO', cn: '米兰理工大学', mark: 'POLI' },
]

const services = [
  { icon: GraduationCap, title: '留学申请规划', text: '个性化申请方案\n精准匹配意大利院校与专业' },
  { icon: PencilRuler, title: '作品集指导', text: '海外名师一对一辅导\n创意开发｜项目制作' },
  { icon: ArrowDownRight, title: '院校申请', text: '精准文书｜面试辅导\n递交申请｜录取跟进' },
  { icon: Plane, title: '签证与行前', text: '签证办理｜行前辅导\n住宿安排｜接机服务' },
  { icon: UsersRound, title: '海外支持', text: '海外生活支持\n学业跟进｜职业发展' },
]

function Brand() {
  return <a className="brand" href="#top" aria-label="MISOLA 首页">
    <span className="brand-symbol">M</span>
    <span><strong>MISOLA</strong><small>米岛时尚设计留学</small></span>
  </a>
}

function App() {
  return <div className="site" id="top">
    <header className="header shell">
      <Brand />
      <nav className="nav">
        <a className="active" href="#top">首页</a><a href="#about">关于米岛</a><a href="#services">留学服务</a>
        <a href="#portfolio">院校与专业</a><a href="#cases">成功案例</a><a href="#events">资讯活动</a><a href="#contact">联系我们</a>
      </nav>
      <div className="header-actions"><a className="outline-button" href="#contact">免费咨询 <ArrowRight size={14} /></a><button className="menu-button" aria-label="打开菜单"><Menu size={22} /></button></div>
    </header>

    <main>
      <section className="hero shell" id="about">
        <div className="hero-copy">
          <p className="eyebrow">MISOLA / 01</p>
          <h1>MISOLA</h1>
          <h2>米岛时尚设计留学</h2>
          <div className="rule" />
          <p className="hero-desc">意大利艺术留学全案服务专家<br /><span>设计 · 时尚 · 未来</span></p>
          <a className="solid-button" href="#services">探索更多 <ArrowRight size={16} /></a>
          <div className="hero-index"><b>01</b><i></i><span>03</span></div>
        </div>
        <div className="hero-art" aria-label="意大利设计空间视觉">
          <div className="glow-mark">M</div><div className="art-lines"></div>
          <span className="art-caption">MILANO / ITALIA<br /><b>Design the future.</b></span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>我们提供</h2></div><p>全方位艺术留学服务，助你实现世界名校梦想。</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <article className={`service-card service-${index + 1}`} key={title}>
          <div className="card-icon"><Icon size={20} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><span className="card-number">0{index + 1}</span>
        </article>)}</div>
      </section>

      <section className="school-band" id="portfolio"><div className="shell">
        <div className="section-heading school-heading"><div><p className="eyebrow">OUR NETWORK</p><h2>意大利热门院校</h2></div><a href="#contact" className="text-link">查看全部院校 <ArrowRight size={16} /></a></div>
        <div className="school-grid">{schools.map((school) => <div className="school" key={school.name}><div className="school-mark">{school.mark}</div><div><strong>{school.name}</strong><span>{school.cn}</span></div></div>)}</div>
      </div></section>

      <section className="cases shell" id="cases">
        <div className="case-intro"><p className="eyebrow">SELECTED CASES</p><h2>成功案例</h2><p>帮助数百名学生斩获意大利顶尖设计院校录取。<br />你的下一个录取，就是我们共同的目标。</p><a className="outline-button" href="#contact">查看案例 <ArrowRight size={14} /></a></div>
        <div className="case-stack"><article><div className="case-image case-one"><span>FASHION<br />RESEARCH</span></div><p>Marangoni<br /><small>Fashion Design</small></p></article><article><div className="case-image case-two"><span>FORM<br />STUDY</span></div><p>POLIMODA<br /><small>Fashion Design</small></p></article><article><div className="case-image case-three"><span>NEW<br />MATERIAL</span></div><p>NABA<br /><small>MA Design</small></p></article><article><div className="case-image case-four"><span>LIGHT<br />OBJECT</span></div><p>Domus Academy<br /><small>Design</small></p></article></div>
      </section>

      <section className="contact-strip shell" id="events"><p className="eyebrow">START YOUR JOURNEY</p><h2>让你的设计，被世界看见。</h2><a className="solid-button" href="#contact">预约免费咨询 <ArrowRight size={16} /></a></section>
    </main>

    <footer className="footer shell" id="contact"><Brand /><div className="footer-contact"><span>☎　400-888-1234</span><span>✉　info@misola.com</span><span>⌖　上海市静安区南京西路1266号</span></div><div className="footer-bottom">© 2024 MISOLA 米岛时尚设计留学　All Rights Reserved.</div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
