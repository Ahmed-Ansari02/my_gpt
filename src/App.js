import "./App.css";
import Header from "./components/Header";
import Gpt_response from "./components/Gpt_response";
import Text_prompt from "./components/Text_prompt";
import { useState } from "react";
import { Grammarly, GrammarlyButton } from "@grammarly/editor-sdk-react";

function App() {
  const [text, setText] = useState([
    <Gpt_response text="Hello, ask me anything!" />,
  ]);
  function onSubmit(text) {
    setText((prev) => [...prev, text]);
  }
  return (
    <div className="App">
      <Header />
      <Grammarly clientId="client_XtoqFN3XhE31iUKcKDpJTs" button>
        <div className="bg-black caret-blue-700 overflow-auto">
          {text}
          <GrammarlyButton menuPosition=""></GrammarlyButton>
        </div>
      </Grammarly>

      <Text_prompt onSubmit={onSubmit} />
    </div>
  );
}

export default App;
