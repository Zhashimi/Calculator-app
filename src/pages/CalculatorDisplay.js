import React, { useState } from "react";
import Buttons from "../components/buttons";


const CalculatorDisplay = () => {
    const [mines, setMines] = useState(true);
    const [currentOperand, setCurrentOperand] = useState([]);
    const [previousOperand, setPreviousOperand] = useState([]);
    const [result,setResult]=useState(null);
    const [operation, setOperation] = useState();

    const handleClick = (event) => {
        event.preventDefault();
        setResult('');
        let key = parseInt(event.target.value);
        if (operation === undefined) {
           setPreviousOperand((previousOperand)=>[...previousOperand,key]);
          
        }
        if(operation !== undefined){
            setCurrentOperand((currentOperand)=>[...currentOperand,key]);
        }
        
    };

    function addition() {
        setOperation("+");
    };
    const Clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(undefined);
        setMines(true);
    };
    const Percentage = () => {
        setOperation("%");
    };
    const division = () => {
        setOperation("/");

    };
    const multiplication = () => {
        setOperation('*');


    };
    const subtraction = () => {
        setOperation("-");


    };
    const period = () => {
        
    }; 
    const equal = () => {
        let current=currentOperand.reduce((accum, digit) => (accum * 10) + digit, 0);
        let previous=previousOperand.reduce((accum, digit) => (accum * 10) + digit, 0);
        switch (operation) {
            case '*':
                setResult(previous * current);
                Clear();
                break;
            case '/':
                setResult(previous / current);
                Clear();
                break;
            case '+':
                setResult(previous + current);
                Clear();
                break;
            case '-':
                setResult(previous - current);
               Clear();
                break;
            case '%':
                setResult((previous * current)/100);
                Clear();
                break;
            default:
                break;
        }
        

    };



    return (<div className="container">
        <div className="bg-slate-600 px-10 py-10 text-right">
            {mines === true ? " " : "-"} {previousOperand}
            {operation}{currentOperand}{result !== null ? result:'' }
        </div>
        <div className="grid grid-cols-4 col-span-1 bg-slate-300"
        >
            <Buttons value="Ac" id="number" numberKey onClick={Clear} >
                Ac
            </Buttons>
            <Buttons value="+/-" id="number" numberKey onClick={() => { setMines(!mines) }}>
                +/-
            </Buttons>
            <Buttons value="%" numberKey onClick={Percentage}>
                %
            </Buttons>
            <Buttons value="/" operationKey onClick={division}>
                /
            </Buttons>
            <Buttons value="7" numberKey onClick={handleClick}>
                7
            </Buttons>
            <Buttons value="8" numberKey onClick={handleClick}>
                8
            </Buttons>
            <Buttons value="9" numberKey onClick={handleClick}>
                9
            </Buttons>
            <Buttons value="*" operationKey onClick={multiplication}>
                X
            </Buttons>
            <Buttons value="4" numberKey onClick={handleClick}>
                4
            </Buttons>
            <Buttons value="5" numberKey onClick={handleClick}>
                5
            </Buttons>
            <Buttons value="6" numberKey onClick={handleClick}>
                6
            </Buttons>
            <Buttons value="-" operationKey onClick={subtraction}>
                -
            </Buttons>
            <Buttons value="1" numberKey onClick={handleClick}>
                1
            </Buttons>
            <Buttons value="2" numberKey onClick={handleClick}>
                2
            </Buttons>
            <Buttons value="3" numberKey onClick={handleClick}>
                3
            </Buttons>
            <Buttons value="+" operationKey onClick={addition}>
                +
            </Buttons>
            <Buttons value="0" className="col-span-2" numberKey onClick={handleClick}>
                0
            </Buttons>
            <Buttons value="." numberKey onClick={period}>
                .
            </Buttons>
            <Buttons value="=" operationKey onClick={equal}>
                =
            </Buttons>
        </div>
    </div>
    );

};
export default CalculatorDisplay;