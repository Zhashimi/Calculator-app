import Buttons from "../components/buttons";
import { useCalculate } from "../components/functions";
const CalculatorDisplay = () => {
    
    const { previousOperand,
        currentOperand,
        operation,
        input,
        result,
        inputPercent,
        inputMines,
        equal,
        Clear,
        handleKey,
        inputOperator,
        inputNum } = useCalculate();
        
    return (<div className="container w-4/4 flex justify-center">

        <div className="grid grid-cols-4 col-span-1 bg-slate-900 rounded-md" onKeyDown={handleKey} tabIndex="0"  >
            <input type="text"
                className="bg-slate-600 px-3 py-3 text-right col-span-4 rounded-md"
                value={(input === '0' && input) || (previousOperand !== '' && previousOperand) || (currentOperand !== '' && currentOperand) || (result === false ? operation : '')}
            >

            </input>

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