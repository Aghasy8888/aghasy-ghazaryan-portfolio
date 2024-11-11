const NameAndProfession = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="text-purple-950 text-2xl sm:text-4xl">
        <h1 className="font-bold">Aghasy Ghazaryan</h1>
        <p className="font-semibold mt-3">
          I Am A{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-950 animate-typing">
            Front-End Developer
          </span>
        </p>
      </div>
    </div>
  );
};

export default NameAndProfession;
