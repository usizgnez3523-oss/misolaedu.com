import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { programs } from '@/data/site'

export function generateStaticParams() {
  return programs.map(program => ({ slug: program.slug }))
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = programs.find(item => item.slug === slug)
  if (!program) notFound()

  return <main className="inner-page shell program-detail">
    <Link className="back-link" href="/#programs">← 返回专业推荐</Link>
    <p className="eyebrow">{program.category} / PROGRAM PROFILE</p>
    <h1>{program.title}</h1>
    <p className="program-detail-english">{program.english}</p>
    <Image className="program-detail-image" src={program.image} alt={`${program.title} ${program.english}`} width={1400} height={720} priority />
    <div className="program-profile-content">
      <section className="profile-section"><h2>专业介绍</h2>{program.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
      <section className="profile-section"><h2>专业课程</h2><div className="profile-group"><ul>{program.courses.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="profile-section"><h2>就业方向</h2><div className="profile-group"><ul>{program.careers.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="profile-section"><h2>推荐院校</h2><div className="program-school-tags">{program.schools.map(school => <span key={school}>{school}</span>)}</div></section>
    </div>
    <Link className="solid-button" href="/contact">咨询这个专业 <ArrowRight size={16} /></Link>
  </main>
}
