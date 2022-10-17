import "./App.css";
import useCheckHtml from "./utils/use-check-html";

function App() {
    const [html, setHtml, checkHtml] = useCheckHtml("");

    return (
        <div className="App">
            <h1 className="my-20 text-5xl">HTML Checker</h1>
            <div className="flex w-full flex-col items-center justify-center">
                <textarea
                    className="mb-20 h-96 w-1/2 border border-black p-2 align-top"
                    wrap="off"
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                />
                <button
                    onClick={() => checkHtml()}
                    className="h-20 w-40 bg-blue-200"
                >
                    CHECK HTML
                </button>
            </div>
        </div>
    );
}

export default App;
