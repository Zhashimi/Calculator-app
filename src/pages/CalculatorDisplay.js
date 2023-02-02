import React, {useState } from "react";
import Buttons from "../components/buttons";
const CalculatorDisplay = () => {
    const [input, setInput] = useState('0');
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [result, setResult] = useState(false);
    const [operation, setOperation] = useState(null);
    
    const inputNum = (event) => {
        let key = event.target.value;
        if (currentOperand.includes('.') && key === '.') return
        if (currentOperand === '0' && key === '0') return
        if (result)
        {
            setPreviousOperand('')
        }
        if(currentOperand.charAt(0)==='0'){
            setCurrentOperand(key);
            setInput(currentOperand);
        }
        else{currentOperand ? setCurrentOperand((pre) => pre + key) : setCurrentOperand(key)
            setInput(currentOperand);
        setResult(false);}
    };
    const Clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setInput('0');
        setOperation(null);
        setResult(false);
        console.log("clear called")
    };
    const inputOperator = (event) => {
        let key = event.target.value;
        setOperation(key);
        if (currentOperand === '') return
        if (previousOperand !== '') {
            equal();
        }
        else{
            setPreviousOperand(currentOperand);
            setCurrentOperand('');
        }

    };

    const inputMines = () => {
        if (currentOperand.charAt(0) === '-') {
            setCurrentOperand(currentOperand.substring(1));
        }
        else {
            setCurrentOperand('-' + currentOperand);
        }

    };
    const equal = (event) => {
        if (event?.target.value === '='){
            setResult(true);
        }
        let res
        let current = parseFloat(currentOperand);
        let previous = parseFloat(previousOperand);

        switch (operation) {
            case '*':
                res = String(current * previous);
                break;
            case '/':
                res = String(previous / current);
                break;
            case '+':
                res = String(previous + current);
                break;
            case '-':
                res = String(previous - current);
                break;
            default:
                break;
        }
        setInput('');
        setPreviousOperand(res);
        setCurrentOperand('');
    };
    const inputPercent = () => {
        previousOperand ?
            setCurrentOperand(String((parseFloat(currentOperand) / 100) * previousOperand))
            : setCurrentOperand(String(parseFloat(currentOperand) / 100))
    }
    return (<div className="container w-4/4 flex justify-center">

        <div className="grid grid-cols-4 col-span-1 bg-slate-900 rounded-md">
            <div className="bg-slate-600 px-8 py-8 text-right col-span-4  rounded-md">
                {input === '0' && input}
                {previousOperand !=='' && previousOperand }{result === false ? operation : ''}{currentOperand !=='' && currentOperand }
            </div>
            <Buttons value="Ac" id="number" className="bg-gray-700" numberKey onClick={Clear} >
                Ac
            </Buttons>
            <Buttons value="+/-" id="number"  className="bg-gray-700" numberKey onClick={inputMines}>
                +/-
            </Buttons>
            <Buttons value="%"  className="bg-gray-700" numberKey onClick={inputPercent}>
                %
            </Buttons>
            <Buttons value="/" operationKey onClick={inputOperator}>
                /
            </Buttons>
            <Buttons value="7" numberKey onClick={inputNum}>
                7
            </Buttons>
            <Buttons value="8" numberKey onClick={inputNum}>
                8
            </Buttons>
            <Buttons value="9" numberKey onClick={inputNum}>
                9
            </Buttons>
            <Buttons value="*" operationKey onClick={inputOperator} >
                X
            </Buttons>
            <Buttons value="4" numberKey onClick={inputNum}>
                4
            </Buttons>
            <Buttons value="5" numberKey onClick={inputNum}>
                5
            </Buttons>
            <Buttons value="6" numberKey onClick={inputNum}>
                6
            </Buttons>
            <Buttons value="-" operationKey onClick={inputOperator}>
                -
            </Buttons>
            <Buttons value="1" numberKey onClick={inputNum}>
                1
            </Buttons>
            <Buttons value="2" numberKey onClick={inputNum}>
                2
            </Buttons>
            <Buttons value="3" numberKey onClick={inputNum}>
                3
            </Buttons>
            <Buttons value="+" operationKey onClick={inputOperator}>
                +
            </Buttons>
            <Buttons value="0" className="col-span-2" numberKey onClick={inputNum}>
                0
            </Buttons>
            <Buttons value="." numberKey onClick={inputNum}>
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