import React from "react";

function Reset(props){
    return <button onClick={()=>{
        props.reset();
    }} className="reset"> Reset </button>
}

export default Reset;