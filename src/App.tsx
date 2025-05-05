import './App.css';
import zynxLogo from './assets/zynx-logo.png';

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col p-6">
      <header className="flex items-center justify-start mb-6">
        <a href="/" className="flex items-center">
          <img src={zynxLogo} alt="Zynx Logo" className="h-10 w-auto mr-2" />
          <span className="text-xl font-semibold text-blue-600">Zynx</span>
        </a>
      </header>
      <section className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Zynx Meta Agent</h1>
          <p className="text-gray-700 text-lg mb-6">
            Automate GitHub Pages deployment with CI/CD, DNS, and AI agents.
          </p>
          <a
            href="https://github.com/zynx-chanont/zynxdata-site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            View on GitHub
          </a>
          <div className="mt-8 text-sm text-gray-500">
            Built with ❤️ by Zynx Copilot & ChatGPT
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
