"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function action(str: string) {
  //   const newPost = await prisma.post.create({
  //     data: {
  //       title: "hello2",
  //       description: "test2",
  //     },
  //   });
  //   console.log(newPost);
  const posts = await prisma.post.findMany();
  return posts;
}
