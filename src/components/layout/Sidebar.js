import React from 'react';
import BoxWrapper from "../boxes/BoxWrapper";

function SidebarFormBuilder(props) {
    const list = [
        {id: 1, name: "Input"},
        {id: 2, name: "Textarea"},
    ]

    return (
        <div style={{backgroundColor: "#EBEBEB", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{color: "black", margin: 10}}>Widgets</h3>
            {list.map((item, index) => (
                <BoxWrapper key={index} id={item.id} name={item.name}/>
            ))}
        </div>
    );
}

export default SidebarFormBuilder;