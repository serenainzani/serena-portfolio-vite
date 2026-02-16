import { useState } from "react";
import githubIcon from "/github-logo.svg";
import logo from "/logo.png";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 bg-fishing-aqua">
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
            <hgroup className="font-roboto-slab">
                <div className="font-semibold text-fishing-peach justify-self-center text-shadow-[2px_2px_0_#197978]">
                    <h1 className="text-6xl tracking-tighter pl-11">Serena</h1>
                    <h1 className="text-9xl tracking-tighter -mt-11">Inzani</h1>
                </div>
                <div className="bg-fishing-aqua w-10/12 justify-self-center h-10 content-center">
                    <p className="tracking-tighter text-2xl fonts-semibold font-roboto-slab justify-self-center text-shadow-[2px_1px_0_#000] text-fishing-yellow">
                        Software Engineer
                    </p>
                </div>
            </hgroup>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p className="">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
