function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-8xl font-bold">Hackelite</h1>
      <br />
      <p className="text-xl">Something awesome is coming soon...</p>
      <br />
      <img
        src="/logo.png"
        alt="logo"
        className="w-32 h-32 m-5 animate-bounce hover:animate-ping"
      />
    </div>
  );
}

export default App;
