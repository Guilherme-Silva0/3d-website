type Props = {
  children: React.ReactNode;
};

const TextGroup = ({ children }: Props) => {
  return <div className="text-center">{children}</div>;
};

export default TextGroup;
