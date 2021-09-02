import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

{
  /* npm run dev or start に実行される。 */
  /*
    試しに コマンド「npm run build」 実行後
    [.next>server>pages>blog-page.html]を確認すると
    HTMLが展開されている
  */
}
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
