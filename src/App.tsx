import { useState } from "react";
import githubIcon from "/github-logo.svg";
import logo from "/logo.png";
import ProjectCard from "./components/Project";

function App() {
    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 bg-fishing-aqua fixed">
                <a href="#top">
                    <img
                        src={logo}
                        className="logo w-12 m-3"
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
                        className="logo w-12 m-3"
                        alt="menu icon"
                    />
                </a>
            </nav>
            <hgroup className="font-roboto-slab pt-14">
                <div className="font-semibold text-fishing-peach justify-self-center text-shadow-[2px_2px_0_#197978]">
                    <h1 className="text-6xl tracking-tighter pl-11">Serena</h1>
                    <h1 className="text-9xl tracking-tighter -mt-11">Inzani</h1>
                </div>
                <div className="bg-fishing-aqua w-10/12 justify-self-center h-10 content-center">
                    <p className="tracking-tighter text-2xl font-semibold font-roboto-slab justify-self-center text-shadow-[2px_1px_0_#000] text-fishing-yellow">
                        Software Engineer
                    </p>
                </div>
            </hgroup>
            <main className="border-fishing-yellow border-3 m-3 bg-white/50">
                <h2 className=" justify-self-center font-roboto-slab font-semibold text-2xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070]">
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
