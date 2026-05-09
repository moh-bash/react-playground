import "./App.css";
import resultReducer from "./Reducers/resultReducer";

import { useReducer, useState } from "react";

function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);

  const [state, dispatch] = useReducer(resultReducer, null);

	// EVENT HANDLERS
	function handleSumClick() {
		dispatch({
			type: "SUM",
			payload: {
				num1: firstNumberInput,
				num2: secondNumberInput
			}
		});
	}

	function handleSubClick() {
		dispatch({
			type: "SUB",
			payload: {
				num1: firstNumberInput,
				num2: secondNumberInput
			}
		});
	}

	function handleMultClick() {
		dispatch({
			type: "MULT",
			payload: {
				num1: firstNumberInput,
				num2: secondNumberInput
			}
		});
	}

	function handleDivClick() {
		dispatch({
			type: "DIV",
			payload: {
				num1: firstNumberInput,
				num2: secondNumberInput
			}
		});
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>

				<button onClick={handleSumClick}>sum</button>

				<button onClick={handleSubClick}>subtract</button>

				<button onClick={handleMultClick}>multiply</button>

				<button onClick={handleDivClick}>divide</button>

				<hr />

				<h2>{state}</h2>
			</div>
		</div>
	);
}

export default App;