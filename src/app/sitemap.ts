import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buxino.co.za'
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/business`, lastModified: new Date() },
    { url: `${baseUrl}/governance`, lastModified: new Date() },
    { url: `${baseUrl}/profile`, lastModified: new Date() },
    { url: `${baseUrl}/investments`, lastModified: new Date() },
    { url: `${baseUrl}/corporate-gifting`, lastModified: new Date() },
  ]
}