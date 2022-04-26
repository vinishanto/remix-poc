import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPost } from "~/models/post.server";

export const loader: LoaderFunction = async ({
    params,
  }) => {
    const post = await getPost(params.slug);
    return json({ post });
  };


export default function PostSlug() {
    const { slug } = useLoaderData();

    return (
      <main className="mx-auto max-w-4xl">
        <h1 className="my-6 border-b-2 text-center text-3xl">
            Some Post: {slug}
        </h1>
      </main>
    );
  }