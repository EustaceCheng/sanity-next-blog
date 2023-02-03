import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import BlogList from '../../components/BlogList';
import PreviewBlogList from '../../components/PreviewBlogList';
import PreviewSuspense from '../../components/PreviewSuspense';

const query = groq`
*[_type=='post']{
...,
author->,
categories[]->
}|order(_createAt desc)`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading">
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
