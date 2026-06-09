const Header = () => {
  return (
    <header className="from-primary to-secondary bg-linear-to-r py-4 text-white shadow-md sm:py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-start px-4 sm:px-6">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Task Manager
        </h1>
        <p className="mt-1 text-xs opacity-90 sm:text-sm md:text-base">
          Stay organized. Get things done.
        </p>
      </div>
    </header>
  );
};

export default Header;
