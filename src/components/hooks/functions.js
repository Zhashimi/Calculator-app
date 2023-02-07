import { useState} from "react";
const useCalculate=()=>{
    const [input, setInput] = useState('0');
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [result, setResult] = useState(false);
    const [operation, setOperation] = useState(null);
    const [test, setTest] = useState('');
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const oper = ['/', '+', '-', '*','%'];

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
            if(key === "%"){
                inputPercent();
            }
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
        const equal = (key) => {
            if (key === '=' || key ==='Enter'){
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
            if(currentOperand === ''){
                return;
            }
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
            if (event.key === 'Enter') {
                equal(event.key);
            }
            if(event.key === 'Backspace'){
                backSpace();
            }
        }
    const inputNum = (event) => {
        let key = event.target.value;
        detectNumber(key);
    };
    const inputX =(event)=>{
        setResult(true);
        let key = event.target.value;
        if(key === 'x'){
            setCurrentOperand(Math.sqrt(currentOperand));
        }
        if(key === '1/x'){
            setCurrentOperand(1/currentOperand);
        }
        if(key === 'x2'){
            setCurrentOperand(currentOperand * currentOperand);
        }
        setResult(false);

    }
    const Clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setInput('0');
        setOperation(null);
        setResult(false);
        setTest('');
        console.log("clear called")
    };
    const backSpace=()=>{
        if(previousOperand ==='' && currentOperand !==''){
            setCurrentOperand(currentOperand.substring(0,currentOperand.length -1));
            if(currentOperand.length === 1){
                setInput('0');
            }
        }
        if(currentOperand === '' && previousOperand !==''){
            if(operation !== null){
                setOperation(null);
            }
            if(operation === null){
            setPreviousOperand(previousOperand.substring(0,previousOperand.length -1));
            if(previousOperand.length === 1){
                setInput('0');
            }}
        }
        if(previousOperand !=='' && currentOperand !==''){
            setCurrentOperand(currentOperand.substring(0,currentOperand.length -1));
        }
        
    }
        return{
            previousOperand,
            currentOperand,
            operation,
            input,
            result,
            inputMines,
            handleKey,
            inputX,
            equal,
            inputPercent,
            backSpace,
            inputOperator,
            inputNum,
            Clear,
        }

       
};
export {useCalculate} ;