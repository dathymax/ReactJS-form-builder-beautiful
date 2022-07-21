import React, {useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import SidebarFormBuilder from "./components/layout/Sidebar";
import ContentFormBuilder from "./components/layout/Content";
import {copy, move, reorder} from "./components/functions/functions";
import {ITEMS} from "./components/items/items";
import {v4} from "uuid";

function App() {
    const [state, setState] = useState({
        [v4()]: []
    });

    const onDragEnd = (result) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                setState((prevState) => ({
                    ...prevState,
                    [destination.droppableId]: reorder(
                        state[source.droppableId],
                        source.index,
                        destination.index
                    )
                }));
                break;
            case "ITEMS":
                setState((prevState) => ({
                    ...prevState,
                    [destination.droppableId]: copy(
                        ITEMS,
                        prevState[destination.droppableId],
                        source,
                        destination
                    )
                }));
                break;
            default:
                setState((prevState) => ({
                    ...prevState,
                    ...move(
                        prevState[source.droppableId],
                        prevState[destination.droppableId],
                        source,
                        destination
                    )
                }));
                break;
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{display: "flex"}}>
                <SidebarFormBuilder/>
                <ContentFormBuilder state={state}/>
            </div>
        </DragDropContext>
    );
}

export default App;
