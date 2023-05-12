export const revalidate = 1200; // not necessary, just for ISR demonstration

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const postsJson = await fetch('http://localhost:3000/api/content');
  const posts: Post[] = await postsJson.json();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const postsJson = await fetch('http://localhost:3000/api/content');
  const posts: Post[] = await postsJson.json();
  const post: Post | undefined = posts.find(
    (post) => post.slug === params.slug
  );
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
