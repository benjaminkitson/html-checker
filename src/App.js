import "./App.css";
import useCheckHtml from "./utils/use-check-html";

function App() {
    const [html, setHtml, checkHtml] = useCheckHtml("");

    return (
        <div className="App">
            <h1 className="text-xl">HTML Parser</h1>
            <div className="flex w-full flex-col items-center justify-center">
                <textarea
                    className="h-96 w-1/2 border border-black align-top"
                    wrap="off"
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                />
                <button onClick={() => checkHtml()}>CHECK HTML</button>
            </div>
        </div>
    );
}

export default App;
