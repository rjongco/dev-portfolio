import './globals.css';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';
import Cursor from '@/components/ui/Cursor';
import type { Metadata } from 'next';
import { MongoProvider } from '@/lib/hooks/use-db';
import { select } from '@/lib/utils/db'
import {seo as seoData} from '@/lib/content/seo'


export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
    },
  ],
  description: seoData.description,
  keywords: seoData.keywords.join(','),
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  openGraph: {
    type: 'website',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    siteName: seoData.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    site: seoData.url,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      url: '/favicons/fav512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/fav512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/fav512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/fav32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/fav16x16.png',
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [
    fields,
    cloud,
    seo,
    author,
    frwork,
    lang,
    tool,
    dbs,
    experience,
    workproj,
    myproj
  ] = await Promise.all([
    select('dev-fields'),
    select('icon-cloud'),
    select('seo'),
    select('author'),
    select('dev-frameworks'),
    select('dev-languages'),
    select('dev-tools'),
    select('dev-databases'),
    select('experience'),
    select('work-projects'),
    select('personal-projects')
  ]);
  
  const data = {
    fields: fields.map(row=>{
      return row.field
    }),
    cloud: cloud.map(row=>{
      return row.tech
    }),
    seo: seo.reduce<{ [key: string]: any }>((acc, { key, value }) => {
      acc[key] = acc[key] ? [...(Array.isArray(acc[key]) ? acc[key] : [acc[key]]), value] : value;
      return acc;
    }, {}),
    author: author.reduce<{ [key: string]: any }>((acc, { key, value }) => {
      acc[key] = acc[key] ? [...(Array.isArray(acc[key]) ? acc[key] : [acc[key]]), value] : value;
      return acc;
    }, {}),
    frameworks: frwork.map(row => ({name: row.key, icon: row.value})),
    databases: dbs.map(row => ({name: row.key, icon: row.value})),
    tools: tool.map(row => ({name: row.key, icon: row.value})),
    languages: lang.map(row => ({name: row.key, icon: row.value})),
    experience: experience.sort((a, b) => a.order - b.order),
    work_projects: workproj,
    personal_projects: myproj
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        {/* <Cursor className="hidden dark:lg:block" /> */}
        <MongoProvider data={data}>
        <ThemeProvider>{children}</ThemeProvider>
        </MongoProvider>
      </body>
    </html>
  );
}
