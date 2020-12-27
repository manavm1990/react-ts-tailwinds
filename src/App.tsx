import logo from "./logo.svg";

const App: React.FC = () => (
  <div className="text-center">
    <header className="bg-primary flex flex-col align-center justify-center text-10+2 min-h-screen text-white">
      <img
        src={logo}
        className="motion-safe:animate-spin-slow h-40-vmin pointer-events-none"
        alt="logo"
      />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
