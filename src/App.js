import React, {useState} from "react";
import SidebarFormBuilder from "./components/layout/Sidebar";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ContentFormBuilder from "./components/layout/Content";
import './App.css';

function App() {
    const [userData, setUserData] = useState({});
    const changeHandler = (data) => {
        setUserData({...userData, ...data});
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                minHeight: "95%",
            }}>
                <SidebarFormBuilder/>
                <ContentFormBuilder
                    change={(data) => {
                        changeHandler(data);
                    }}
                />
            </div>
        </DndProvider>
    );
}

export default App;
