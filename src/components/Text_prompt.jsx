import React from "react";
import Gpt_response from "./Gpt_response";

function Text_prompt({ onSubmit }) {
  return (
    <div className="row-end-4 h-20 mb-3 ">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await fetch("https://gpt-3-api.azurewebsites.net/completion", {
            body: JSON.stringify({ text: e.target[0].value }),
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          e.target[0].value = "";
          const data = await response.json();
          console.log(data);
          onSubmit(<Gpt_response text={data} />);
        }}
        className="mt-3 w-full h-5/6 flex items-center justify-center">
    
        <input
          type="text"
          placeholder="Enter prompt"
          className=" border-none w-9/12 h-full rounded outline-none font-medium"
        />
        <input
          type="submit"
          value="Ask!"
          className=" w-1/5 rounded h-4/6 ml-3 text-white font-bold bg-blue-700 active:bg-green-700"
        />
        
      </form>
    </div>
  );
}

export default Text_prompt;
