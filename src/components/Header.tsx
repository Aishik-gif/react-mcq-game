import githubLogo from "../assets/github-mark-white.svg";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-12 py-4 bg-violet-950">
        <div className="text-2xl font-bold text-white">React Quiz</div>
        <div>
          <a
            href="https://github.com/Aishik-gif/react-mcq-game"
            target="_blank"
          >
            <img src={githubLogo} alt="Github Logo" className="w-8 h-8" />
          </a>
        </div>
      </header>
    </>
  );
}
