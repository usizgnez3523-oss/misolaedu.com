import Link from 'next/link'
import { services } from '@/data/site'
export const metadata = { title: '留学服务', description: 'MISOLA 意大利时尚设计留学服务：申请规划、作品集指导、院校申请、签证与行前、海外支持。' }
export default function ServicesPage() { return <main className="inner-page shell"><Link className="back-link" href="/">← 返回首页</Link><p className="eyebrow">MISOLA / SERVICES</p><h1>把灵感，变成<br /><em>你的录取。</em></h1><p className="lead">从方向选择到抵达米兰，MISOLA 以设计师的视角陪伴每一次重要选择。</p><div className="service-list">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.text}</p></article>)}</div><Link className="solid-button" href="/contact">开始咨询 →</Link></main> }
