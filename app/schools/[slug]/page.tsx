import Link from 'next/link'
import { notFound } from 'next/navigation'
import { schools } from '@/data/site'
export function generateStaticParams() { return schools.map(school => ({ slug: school.slug })) }
export default async function SchoolDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const school = schools.find(item => item.slug === slug); if (!school) notFound(); return <main className="inner-page shell school-detail"><Link className="back-link" href="/schools">← 返回院校档案</Link><p className="eyebrow">{school.category} / SCHOOL PROFILE</p><div className="detail-mark">{school.mark}</div><h1>{school.name}</h1><p className="lead">{school.cn}<br />时尚与设计专业申请路径、作品集要求与导师规划，正在持续更新。</p><Link className="solid-button" href="/contact">咨询这所院校 →</Link></main> }
