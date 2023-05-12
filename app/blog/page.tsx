import Link from 'next/link';

interface Post {
  title: string;
  content: string;
  slug: string;
}

export default async function BlogPage() {
  const postsJson = await fetch('http://localhost:3000/api/content');
  const posts: Post[] = await postsJson.json();
  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
