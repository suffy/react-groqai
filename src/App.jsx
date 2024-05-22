import { useState } from "react";
import "./App.css";
import { requestToGroqAi } from "./utils/groq";
import { Light as SyntaxHighLight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
function App() {
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    const ai = await requestToGroqAi(content.value);
    // console.log({ ai });
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-4xl text-indigo-500">REACT | GROQ AI</h1>
      <form className="flex flex-col gap-4 py-4 w-full">
        <input
          placeholder="Ketik permintaan disini ..."
          className="py-2 px-4 text-md rounded-md"
          id="content"
          type="text"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
        >
          Kirim
        </button>
      </form>
      <div className="max-w-xl w-full">
        {data ? (
          <SyntaxHighLight
            language="swift"
            style={darcula}
            wrapLongLines={true}
          >
            {data}
          </SyntaxHighLight>
        ) : null}
      </div>
    </main>
  );
}

export default App;
