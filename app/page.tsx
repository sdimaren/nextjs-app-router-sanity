// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/components/Posts";
import PostsPreview from "@/components/PostPreview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial: any = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} params={[]}/>
  ) : (
    <Posts posts={initial.data} />
  )
}