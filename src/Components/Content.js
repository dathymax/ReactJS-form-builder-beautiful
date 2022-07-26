import React, { useState } from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrop } from "react-dnd";
import IntegerComponent from "../components-render/IntegerComponent";
import InputComponent from "../components-render/InputComponent";
import TextareaComponent from "../components-render/TextareaComponent";
import RGL, { WidthProvider } from "react-grid-layout";
import "./Content.css";
const ReactGridLayout = WidthProvider(RGL);
const Content = (props) => {
	const [row, setRow] = useState([]);
	const [layout, setLayout] = useState([
		{ i: 1, x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1 }, // *** -- minH & maxH doesnt effect the grid items
		{ i: 2, x: 2, y: 0, w: 1, h: 1, minH: 1, maxH: 1 },
	]);
	const [resizeplotly, setResizePlotly] = useState(false);
	const onLayoutChange = (layout) => {
		setLayout(layout);
	};

	const onResize = (layouts) => {
		console.log(layouts);
		setLayout(layouts);
	};

	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => {
			setRow((old) => {
				props.change([...old, { name: item.name, id: item.id }]);
				return [...old, { name: item.name, id: item.id }];
			});
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});
	return (
		<div>
			<div ref={drop} style={{ maxWidth: "100%", height: "auto" }}>
				<ReactGridLayout
					compactType={"horizontal"}
					// rowHeight= {200}
					cols={4}
					onResize={onResize}
					width={100}
					layout={layout}
					onLayoutChange={onLayoutChange}
					// draggableHandle=".MyDragHandleClassName"
					draggableCancel=".MyDragCancel"
					isBounded={true}
					onDrop={() => console.log("123")}
				>
					{row.length !== 0 ? (
						row.map((ele, index) => {
							console.log(index);
							return (
								<div key={index + 1}>
									{ele.name === "input" ? (
										<InputComponent
											factor={index + 1}
										/>
									) : ele.name === "textarea" ? (
										<TextareaComponent/>
									) : (
										<IntegerComponent/>
									)}
								</div>
							);
						})
					) : (
						<div style={{ height: 500 }}></div>
					)}
				</ReactGridLayout>
			</div>
		</div>
	);
};

export default Content;
