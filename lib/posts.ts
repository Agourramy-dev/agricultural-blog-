import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  /** معرف رقمي ثابت للمقال */
  id: number;
  /** الجزء المستخدم في رابط المقال */
  slug: string;
  title: string;
  excerpt: string;
  /** تاريخ النشر بصيغة YYYY-MM-DD */
  date: string;
  /** مسار صورة الغلاف */
  coverImage: string;
  /** محتوى المقال بصيغة Markdown */
  content: string;
}

type PostFrontmatter = {
  id?: number;
  slug?: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getAllPosts(): Post[] {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  const posts = filenames.map((filename, index) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    if (
      !frontmatter.title ||
      !frontmatter.date ||
      !frontmatter.excerpt ||
      !frontmatter.coverImage
    ) {
      throw new Error(`بيانات Frontmatter غير مكتملة في الملف: ${filename}`);
    }

    return {
      id: frontmatter.id ?? index + 1,
      slug: frontmatter.slug ?? filename.replace(/\.md$/, ""),
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      coverImage: frontmatter.coverImage,
      content: content.trim(),
    } satisfies Post;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export const posts: Post[] = getAllPosts();
