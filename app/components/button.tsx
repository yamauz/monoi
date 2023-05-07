"use client";

import { getPosts } from "../libs/actions/post";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      onClick={async () => {
        const res = await getPosts();
        console.log(res);
      }}
    >
      {children}
    </button>
  );
};
