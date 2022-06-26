import React from "react";

function Refresh(props){
    return <button onClick={()=>{
        props.refresh();
    }} className="refresh">Refresh </button>
}

export default Refresh;