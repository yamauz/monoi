"use client";

import { action } from "../action";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      onClick={async () => {
        const res = await action("hello");
        console.log(res);
      }}
    >
      {children}
    </button>
  );
};
