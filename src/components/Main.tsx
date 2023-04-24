type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="w-full flex flex-wrap justify-center gap-6 pb-8">
      {children}
    </main>
  );
};

export default Main;
