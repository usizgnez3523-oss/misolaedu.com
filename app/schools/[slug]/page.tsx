import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  schoolDetails,
  schoolIntroMedia,
  schools,
  schoolSpecialtyGroupTranslations,
  schoolSpecialtyTranslations,
} from '@/data/site'
import styles from './school-detail.module.css'

export function generateStaticParams() {
  return schools.map((school) => ({ slug: school.slug }))
}

type ProfileGroup = {
  title: string
  items: readonly string[]
}

type ProfileSection = {
  title: string
  paragraphs?: readonly string[]
  groups?: readonly ProfileGroup[]
  timeline?: readonly { label: string; text: string }[]
}

type SchoolDetailContent = {
  sections: readonly ProfileSection[]
}

function BilingualSpecialtyGroup({ title, items }: ProfileGroup) {
  const groupLabel = schoolSpecialtyGroupTranslations[title] ?? {
    zh: title,
    en: '',
  }

  return (
    <div className={['profile-group', styles.bilingualProfileGroup].join(' ')}>
      <h3>
        <span className={styles.bilingualTitleZh}>{groupLabel.zh}</span>
        {groupLabel.en && (
          <span className={styles.bilingualTitleEn}>{groupLabel.en}</span>
        )}
      </h3>
      <ul className={styles.bilingualSpecialtyList}>
        {items.map((item) => (
          <li key={item}>
            <span className={styles.bilingualSpecialtyZh}>
              {schoolSpecialtyTranslations[item] ?? item}
            </span>
            <span className={styles.bilingualSpecialtyEn}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function SchoolDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const school = schools.find((item) => item.slug === slug)

  if (!school) notFound()

  const detail = schoolDetails[
    slug as keyof typeof schoolDetails
  ] as SchoolDetailContent | undefined
  const introMedia = schoolIntroMedia[school.slug] ?? [
    {
      src: school.image,
      alt: school.cn,
      caption: `${school.name} / ${school.category}`,
    },
  ]

  return (
    <main className="inner-page shell school-detail school-detail-clean-v2">
      <Link className="back-link" href="/schools">
        ← 返回院校档案
      </Link>
      <p className="eyebrow">{school.category} / SCHOOL PROFILE</p>
      <h1>{school.name}</h1>
      <h2 className="school-detail-cn">{school.cn}</h2>
      <section
        className={styles.schoolIntroMedia}
        aria-label={`${school.cn}视觉资料`}
      >
        <div className={styles.schoolIntroMediaGrid}>
          {introMedia.map((media, index) => (
            <figure
              className={[
                styles.schoolIntroPhoto,
                index === 0
                  ? styles.schoolIntroPhotoMain
                  : styles.schoolIntroPhotoSecondary,
              ].join(' ')}
              key={media.src}
            >
              <div className={styles.schoolIntroImageFrame}>
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? '(max-width: 760px) 100vw, 66vw'
                      : '(max-width: 760px) 100vw, 33vw'
                  }
                />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{media.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.schoolIntroMediaNote}>
          视觉资料 / 课程现场 / 设计语境
        </p>
      </section>
      {detail ? (
        <div className="school-profile-content">
          {detail.sections.map((section) => (
            <section className="profile-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.groups?.map((group) =>
                section.title === '热门专业' ? (
                  <BilingualSpecialtyGroup key={group.title} {...group} />
                ) : (
                  <div className="profile-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
              {section.timeline && (
                <div className="profile-timeline">
                  {section.timeline.map((item, index) => (
                    <div className="timeline-item" key={item.label}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <strong>{item.label}</strong>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      ) : (
        <p className="lead">
          时尚与设计专业申请路径、作品集要求与导师规划，正在持续更新。
        </p>
      )}
      <Link className="solid-button" href="/contact">
        咨询这所院校 →
      </Link>
    </main>
  )
}
