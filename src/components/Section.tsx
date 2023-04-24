const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-72 w-fit grid p-3 justify-center bg-slate-800/70  backdrop-blur-sm rounded-2xl shadow-xl">
      {children}
    </section>
  );
};

export default Section;
