import React from "react";

function Gpt_prompt({ text }) {
  return (
    
      <p className=" border-white bg-green-400 w-fit h-fit border-2 m-2 p-2 rounded text-black font-bold">
        {"You :  "}
        {text}
      </p>  
  );
}

export default Gpt_prompt;
