import Link from 'next/link'
import { schools } from '@/data/site'
export const metadata = { title: '院校与专业', description: '探索 MISOLA 重点关注的意大利时尚、设计院校。' }
export default function SchoolsPage() { return <main className="inner-page shell"><Link className="back-link" href="/">← 返回首页</Link><p className="eyebrow">MISOLA / SCHOOLS</p><h1>意大利院校<br /><em>档案库。</em></h1><div className="school-directory">{schools.map(school => <Link href={`/schools/${school.slug}`} key={school.slug}><span className="directory-mark">{school.mark}</span><span><b>{school.name}</b><small>{school.cn} · {school.category}</small></span><span>↗</span></Link>)}</div></main> }
