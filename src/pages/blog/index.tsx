import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import NotFoundPage from '../404';

const BlogPage = ({ data }: any) => {
  /*
            font-sans	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

            */
  return <Layout pageTitle="Blog Posts" current="Blog">
    <p className="mb-10 text-neutral-500">
      I will share random things from time to time.
    </p>
    {
      data.allMdx.nodes.map((node: any) => (
        <Link to={`/blog/${node.slug}`}>
          <article key={node.id} className="bg-slate-300 hover:bg-slate-400 active:brightness-90 py-3 px-8 rounded-3xl flex place-content-between">
            <h2 className='text-lg font-[Consolas]'>
              {node.frontmatter.title}
            </h2>
            <p className="text-slate-500">
              {node.frontmatter.date}
            </p>
          </article>
        </Link>
      ))
    }
  </Layout>
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;