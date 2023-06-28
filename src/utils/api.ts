import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Blog = {
  title: string
  date: string
  excerpt: string
  image: string
  tags: string[]
  content: string
  slug: string
}

export type BlogMetaData = {
  title: string
  date: string
  excerpt: string
  image: string
  tags: string[]
  slug: string
  reading: string
}

export const getPath = (folder: string) => {
  return path.join(process.cwd(), `/src/content/${folder}`)
}

export const getFileContent = (filename: string, folder: string) => {
  const POSTS_PATH = getPath(folder)
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8')
}

export function getAllPosts(folder: string): BlogMetaData[] {
  const POSTS_PATH = getPath(folder)
  const result = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.md$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName, folder)
      const slug = fileName.replace(/\.md$/, '')
      const { data } = matter(source)
      return {
        ...data,
        slug: slug,
      }
    })

  return result as BlogMetaData[]
}

export const getSinglePost = (slug: string, folder: string) => {
  const source = getFileContent(`${slug}.md`, folder)
  const { data, content } = matter(source)

  return {
    ...data,
    content,
  } as Blog
}
