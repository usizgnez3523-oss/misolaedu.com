import type { MetadataRoute } from 'next'
import { schools, siteConfig } from '@/data/site'
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return [{ url: siteConfig.url, lastModified: now }, { url: `${siteConfig.url}/services`, lastModified: now }, { url: `${siteConfig.url}/schools`, lastModified: now }, { url: `${siteConfig.url}/contact`, lastModified: now }, ...schools.map(school => ({ url: `${siteConfig.url}/schools/${school.slug}`, lastModified: now }))] }
