type Props = {
  children: React.ReactNode;
  additionallClass?: string;
};

const Title = ({ children, additionallClass }: Props) => {
  return (
    <h1 className={`text-2xl text-zinc-100 font-bold ${additionallClass}`}>
      {children}
    </h1>
  );
};

export default Title;
