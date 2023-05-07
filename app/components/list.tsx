import { getPosts } from "../libs/actions/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
