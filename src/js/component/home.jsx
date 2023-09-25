import React, { useState, useEffect } from "react";
import "../../styles/index.css"

const Home = () => {
	const [color, setColor] = useState("red");
	const colorsList = ["red", "orange", "green"];
	let intervalId;
	
	const automatic = () => {
			if (intervalId) {
				clearInterval(intervalId);
				}
		
			let currentIndex = colorsList.indexOf(color);
			if (currentIndex === -1) { // -1 = not found in array
			currentIndex = 0;
			}

			intervalId = setInterval(() => {
			const nextIndex = (currentIndex + 1) % colorsList.length //(3);
			setColor(colorsList[nextIndex]); // use Index number of array to insert color into useState hook
			currentIndex = nextIndex;
			}, 1000);
		};		
			
	useEffect(() => {
		// Clear the interval when the component unmounts
		return () => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		};
	}, []);
	
	return (
		<>
		<div className="page">
			<div className="page__content">
				<div className="tl__background">
					<div 
					onClick={() => setColor("red")}
					className={color === "red"
						? "tl__circle tl__circle--red display"
						: "tl__circle tl__circle--red"}
					>
					</div>
					<div 
					onClick={() => setColor("orange")}
					className={color === "orange"
						? "tl__circle tl__circle--orange display"
						: "tl__circle tl__circle--orange"}
					></div>
					<div 
					onClick={() => setColor("green")}
					className={color === "green"
						? "tl__circle tl__circle--green display"
						: "tl__circle tl__circle--green"}
					>
					</div>
				</div>
			</div>
			<button onClick={() => automatic()}>Automatic Traffic Lights</button>
		</div>
		</>
	);
};

export default Home;
