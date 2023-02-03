import { useState} from "react";
const useCalculate=()=>{
    const [input, setInput] = useState('0');
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [result, setResult] = useState(false);
    const [operation, setOperation] = useState(null);
    const [test, setTest] = useState('');
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const oper = ['/', '+', '-', '*'];
    const detectNumber=(key)=>{
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
        }
        
        const detectOperator =(key)=>{
            setOperation(key);
            if (currentOperand === '') return
            if (previousOperand !== '') {
                equal();
            }
            else{
                setPreviousOperand(currentOperand);
                setCurrentOperand('');
            }
    
        }
        const inputOperator = (event) => {
            let key = event.target.value;
            detectOperator(key);
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
      
    const handleKey = (event) => {
        if (num.includes(event.key)) {
            let keyboard = test + event.key;
            detectNumber(keyboard);
        }
        if (oper.includes(event.key)) {
            detectOperator(event.key);
        }
        if (event.key === '%') {
            inputPercent();
        }
        if (event.key === '=') {
            equal();
        }
    }
    const inputNum = (event) => {
        let key = event.target.value;
        detectNumber(key);
    };
    const Clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setInput('0');
        setOperation(null);
        setResult(false);
        setTest('');
        console.log("clear called")
    };
        return{
            previousOperand,
            currentOperand,
            operation,
            input,
            result,
            inputPercent,
            inputMines,
            equal,
            handleKey,
            inputOperator,
            inputNum,
            Clear,
        }

       
};
export {useCalculate} ;