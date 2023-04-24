import React from "react";

type Props = {
  children: React.ReactNode;
  additionalClass?: string;
};

const Text = ({ children, additionalClass }: Props) => {
  return (
    <p className={`text-zinc-100/70 text-sm ${additionalClass}`}>{children}</p>
  );
};

export default Text;
