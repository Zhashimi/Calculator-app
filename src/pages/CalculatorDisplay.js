import React, { useEffect, useState } from "react";
import Buttons from "../components/buttons";


const resculatorDisplay = () => {
    const [input, setInput] = useState('0');
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [result, setResult] = useState(false);
    const [operation, setOperation] = useState(null);


    const inputNum = (event) => {
        event.preventDefault();
        let key = (event.target.value).toString();
        if (currentOperand.includes('.') && key === '.') return
        if (result) {
            setPreviousOperand('')
        }
        currentOperand ? setCurrentOperand((pre) => pre + key) : setCurrentOperand(key)
        setResult(false);
    };

    useEffect(() => {
        setInput(currentOperand);
    }, [currentOperand])

    useEffect(() => {
        setInput('0');
    }, [])

    const Clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
        setResult(false);
    };
    const inputOperator =(event)=>{
        let key=String(event.target.value);
        setOperation(key);
        if(currentOperand === '')return
        if(previousOperand !== ''){
            equal();
        }setPreviousOperand(currentOperand);
        setCurrentOperand('');
    };
    const inputMines =()=>{

    }
    const equal=(event)=>{
        if(event?.target.value === '='){
            setResult(true);
        }
        let res
        let current = parseFloat(currentOperand);
        let previous = parseFloat(previousOperand);        

         switch (operation) {
            case '*':
            res=String(current * previous);
                break;
            case '/':
                res=String (previous / current);
                break;
            case '+':
                res=String(previous + current);
                break;
            case '-':
                res=String(previous - current);
               Clear();
                break;
               default:
                break;
        }
        setInput('');
        console.log(res);
        setPreviousOperand(res);
        setCurrentOperand('')

    };
    const inputPercent = ()=>{

    }
    return (<div className="container w-4/4 flex justify-center">

        <div className="grid grid-cols-4 col-span-1 bg-slate-900"
        >
            <div className="bg-slate-600 px-10 py-10 text-right col-span-4">
                {input !== "" || input ==='0'? input : previousOperand}{operation}{currentOperand}
            </div>
            <Buttons value="Ac" id="number" className="bg-slate-600" numberKey onClick={Clear} >
                Ac
            </Buttons>
            <Buttons value="+/-" id="number" numberKey onClick={inputMines}>
                +/-
            </Buttons>
            <Buttons value="%" numberKey onClick={inputPercent}>
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
export default resculatorDisplay;