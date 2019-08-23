import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?id=${props.id}`} as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}