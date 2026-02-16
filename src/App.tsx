import githubIcon from "/github-logo.svg";
import logo from "/logo.png";
import ProjectCard from "./components/ProjectCard";

function App() {
    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 md:h-16 bg-fishing-aqua fixed">
                <a href="#top">
                    <img
                        src={logo}
                        className="logo w-12 md:w-14 m-3"
                        alt="Serena logo"
                    />
                </a>
                <a
                    href="https://github.com/serenainzani"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={githubIcon}
                        className="logo w-12 md:w-14 m-3"
                        alt="github"
                    />
                </a>
            </nav>
            <hgroup className="font-roboto-slab pt-14  md:pt-18">
                <div className="font-semibold text-fishing-peach justify-self-center text-shadow-[3px_3px_0_#197978]">
                    <h1 className="text-6xl md:text-8xl tracking-tighter pl-11 md:pl-16">
                        Serena
                    </h1>
                    <h1 className="text-9xl md:text-[12rem]  tracking-tighter -mt-11 md:-mt-18">
                        Inzani
                    </h1>
                </div>
                <div className="bg-fishing-aqua w-10/12 md:w-3/12 justify-self-center h-10 md:h-14 content-center">
                    <p className="tracking-tighter text-2xl md:text-4xl font-semibold font-roboto-slab justify-self-center text-shadow-[2px_1px_0_#000] text-fishing-yellow">
                        Software Engineer
                    </p>
                </div>
            </hgroup>
            <main className="border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 justify-self-center">
                <h2 className=" justify-self-center font-roboto-slab font-semibold text-2xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] py-2">
                    My Projects
                </h2>
                <ProjectCard project="rpgNotes" />
                <ProjectCard project="aiRestReccs" />
                <ProjectCard project="arduino" />
            </main>
        </>
    );
}

export default App;
