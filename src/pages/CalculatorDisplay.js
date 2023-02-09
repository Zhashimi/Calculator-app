import Buttons from "../components/buttons";
import React, { useEffect, useRef } from "react";
import { FaBackspace } from "react-icons/fa";
import { FcCalculator } from "react-icons/fc";

import { UseCalculate } from "../components/hooks/functions";
const CalculatorDisplay = () => {
    const { previousOperand,
        currentOperand,
        operation,
        input,
        result,
        inputMines,
        Clear,
        handleKey,
        inputX,
        equal,
        backSpace,
        inputPercent,
        inputOperator,
        inputNum ,
     } = UseCalculate();
    const divRef = useRef();

    useEffect(() => {
        if (divRef.current) {
            divRef.current.focus();
        }
    }, []);

    return (<div className="container w-4/4 flex justify-center">
        <div className="grid grid-cols-4 col-span-1 bg-slate-900 rounded-md"
            autoFocus
            ref={divRef}
            onKeyDown={handleKey} tabIndex="0"  >
            <div className="bg-slate-600 px-3 py-6 text-right col-span-4 rounded-md">
                <FcCalculator />
                {input === '0' && input}{previousOperand !== '' && previousOperand}
                {result === false ? operation : '0'}
                {currentOperand !== '' && currentOperand}
            </div>
            <Buttons value="1/x" id="number" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={inputX}>
                1/x
            </Buttons>
            <Buttons value="x" id="number" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={inputX} >
            &radic;x
            </Buttons>
            <Buttons value="x2" id="number" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={inputX} >
                x<sup>2</sup>
            </Buttons> 
            <Buttons value="Ac" id="number" operationKey onClick={backSpace} >
            <FaBackspace />
            </Buttons>
            <Buttons value="Ac" id="number" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={Clear} >
                Ac
            </Buttons> 
            <Buttons value="+/-" id="number" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={inputMines}>
                +/-
            </Buttons>
            <Buttons value="%" className="bg-gray-700 hover:bg-gray-500" numberKey onClick={inputPercent}>
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