"use server";

import { prisma } from "../prisma";

// import { cache } from "react";

// export const getPosts = cache(async () => {
//   const posts = await prisma.post.findMany();
//   return posts;
// });

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

// const newPost = await prisma.post.create({
//   data: {
//     title: "hello2",
//     description: "test2",
//   },
// });
