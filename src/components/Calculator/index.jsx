import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import "./style.css";

export default function Calculadora() {
	const [value, setValue] = useState(0);
	const [oldValue, setOldValue] = useState(0);
	const [operator, setOperator] = useState();
  
	function inputValue(e) {
		if(value === 0) {
			setValue(e.target.value);
		} else {
			setValue( value + e.target.value);
		}
	}

	function clear(e){
		setValue(0);
	}

	function percentage(){
		setValue(value/100);
	}

	function changeSign(){
		if(value > 0) {
			setValue(-value);
		}else{
			setValue(Math.abs(value));
		}
	}

	function operatorHandler(e){
		var operatorInput = e.target.value;
		setOperator(operatorInput);
		setOldValue(value);
		setValue(0);
	}

	function calculate(){
		if(operator==="/"){
			setValue(parseFloat(oldValue) / parseFloat(value));
		} else if(operator==="X"){
			setValue(parseFloat(oldValue) * parseFloat(value));
		} else if(operator==="-"){
			setValue(parseFloat(oldValue) - parseFloat(value));
		} else if(operator==="+"){
			setValue(parseFloat(oldValue) + parseFloat(value));
		}
	}
  
	return (
		<div>
			<Box m={3}/>
			<Container maxWidth='xs'>
				<div className='wrapper'>
					<p className='result'>{value}</p>
					<button onClick={clear}>AC</button>
					<button onClick={changeSign}>+/-</button>
					<button onClick={percentage}>%</button>
					<button className='orange' onClick={operatorHandler} value={"/"}>/</button>
          
					<button className='gray' onClick={inputValue} value={7}>7</button>
					<button className='gray' onClick={inputValue} value={8}>8</button>
					<button className='gray' onClick={inputValue} value={9}>9</button>
					<button className='orange' onClick={operatorHandler} value={"X"}>X</button>

					<button className='gray' onClick={inputValue} value={4}>4</button>
					<button className='gray' onClick={inputValue} value={5}>5</button>
					<button className='gray' onClick={inputValue} value={6}>6</button>
					<button className='orange' onClick={operatorHandler} value={"-"}>-</button>

					<button className='gray' onClick={inputValue} value={1}>1</button>
					<button className='gray' onClick={inputValue} value={2}>2</button>
					<button className='gray' onClick={inputValue} value={3}>3</button>
					<button className='orange' onClick={operatorHandler} value={"+"}>+</button>
          
					<button className='gray' onClick={inputValue} value={0}>0</button>
					<button className='gray' onClick={inputValue} value={"."}>.</button>
					<button className='gray' style={{visibility: "hidden"}}>.</button>
					<button className='orange' onClick={calculate}>=</button>
				</div>
			</Container>
		</div>
	);
}
