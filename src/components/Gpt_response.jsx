import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import React from "react";

function Gpt_response({ text }) {
  return (
    <GrammarlyEditorPlugin>
      <p contentEditable="true" className=" border-blue-700 w-fit h-fit border-2 m-2 p-2 rounded text-white">
        {text}
      </p>
    </GrammarlyEditorPlugin>
  );
}

export default Gpt_response;
