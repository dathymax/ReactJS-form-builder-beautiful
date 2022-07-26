import React from 'react'

import InputSidebar from '../component-sidebar/InputSidebar'
import IntegerSidebar from '../component-sidebar/IntegerSidebar'
import TextareaSidebar from '../component-sidebar/TextareaSidebar'
import {v4} from "uuid";


const Sidebar=(props)=>{
    const list=[
        {name: "input", id: v4()},
        {name: "textarea",id: v4()},
        {name: "integer",id: v4()}
    ]
    return(
    <div style={{backgroundColor:"#EBEBEB",width:300,display:"flex",flexDirection:"column",alignItems:"center"}}>
        <br/>
        <h3 style={{color:"black",margin:10}}>Widgets</h3>
        {list.map((ele,index)=>{
            if(ele.name==="input"){
                return(<InputSidebar key={index} name={ele.name} _id={ele.id}/>)
            }
            if(ele.name==="textarea"){
                return(<TextareaSidebar key={index} name={ele.name} _id={ele.id}/>)
            }
            if(ele.name==="integer"){
                return(<IntegerSidebar key={index} name={ele.name} _id={ele.id}/>)
            }
           
        })}

    </div>)
}

export default Sidebar