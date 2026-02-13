import { useState } from "react";
import menuIcon from "/menu_icon.svg";
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
                <a href="#">
                    <img
                        src={menuIcon}
                        className="logo w-12 m-3"
                        alt="menu icon"
                    />
                </a>
            </nav>
            <h1>Vite + React</h1>
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
