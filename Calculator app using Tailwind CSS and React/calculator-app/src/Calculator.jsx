import Buttons from "./Buttons";
import Calculation from "./Calculation";
import { useState } from "react";
const Calculator = () => {

    const [input, setInput] = useState('');
    const [hist, setHist] = useState('');

    const handleCalculation = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setHist('');
    };

    const handleDelete = () => {
        if (typeof input === 'string') {
            setInput(''); 
        } else {
            setInput(input.slice(0, -1));
        }
    };

    const handleEqual = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
            setHist(input);
            console.log(hist);

        } catch (err) {
            setInput('Invalid Expression');
        }
    };

    return ( 
        <div className="flex flex-col justify-center items-center h-screen ">
            
            <div className="p-8 bg-calcBg  rounded-calcBord w-calcW ">

                {/* beginning of calculator screen */}
                <div className="block  bg-screenBG  h-28 border-black border-spacing-2 border-8 rounded-calcScreenBord overflow-hidden">
                    <div className="flex flex-col  justify-end mx-2 my-3">
                        <input type="inputBox" value={input} className="bg-transparent  text-right font-gemunu font-bold text-5xl  " readOnly placeholder="0"/>
                        <p className="text-right">{hist}</p>
                    </div>
                </div>

                {/* end of calculator screen */}

                {/* beginning of history and backspace */}
                <div className="flex justify-end my-2 mt-4 ">
                    <div className="twoButtonBG mr-3">
                        <div className="twoButton ">
                            <button >
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E3DEDA" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="twoButtonBG">
                        <div className="twoButton">
                            <button onClick={handleDelete}>
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E3DEDA" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/*end of history and backspace */}

                {/* Beginning of buttons */}
                <div className=" bg-mainButtonBg rounded-md">
                    {/* <div className="flex justify-center">
                        <div className="bg-mainButtonCBorder  w-14 h-14 flex justify-center rounded-md">
                            <button className="mt-1 bg-mainButtonC w-10 h-10  rounded-md" onClick={handleClear}>C</button>
                        </div>
                    </div>
                    
                    <button className="btn " onClick={() => handleCalculation('±')}>±</button>


                    <button className="btn " onClick={() => handleCalculation('%')}>%</button>
                    <button className="btn " onClick={() => handleCalculation('/')}>÷</button>
                    <button className="btn " onClick={() => handleCalculation(7)}>7</button>
                    <button className="btn " onClick={() => handleCalculation(8)}>8</button>
                    <button className="btn " onClick={() => handleCalculation(9)}>9</button>
                    <button className="btn " onClick={() => handleCalculation('*')}>x</button>
                    <button className="btn " onClick={() => handleCalculation(4)}>4</button>
                    <button className="btn " onClick={() => handleCalculation(5)}>5</button>
                    <button className="btn " onClick={() => handleCalculation(6)}>6</button>
                    <button className="btn " onClick={() => handleCalculation('-')}>-</button>
                    <button className="btn " onClick={() => handleCalculation(1)}>1</button>
                    <button className="btn " onClick={() => handleCalculation(2)}>2</button>
                    <button className="btn " onClick={() => handleCalculation(3)}>3</button>
                    <button className="btn " onClick={() => handleCalculation('+')}>+</button>
                    <button className="btn col-span-2" onClick={() => handleCalculation(0)}>0</button>
                    <button className="btn " onClick={() => handleCalculation('.')}>.</button>
                    <button className="btn " onClick={handleEqual}>=</button> */}

                    <div className="grid grid-cols-4  mt-10 rounded-md items-center px-2 py-5">
                        <Buttons className="" color="#DB6429" BG="#B14F1E" cmd={handleClear} display="C" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('±')} display="±" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('%')} display="%" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('/')} display="/" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(7)} display="7" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(8)} display="8" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(9)} display="9" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('*')} display="x" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(4)} display="4" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(5)} display="5" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(6)} display="6" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('-')} display="-" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(1)} display="1" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(2)} display="2" />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(3)} display="3" />
                        <Buttons color="#EAB071" BG="#E39744" cmd={() => handleCalculation('+')} display="+" />
                        {/* <div className="flex justify-center col-span-2 ">
                            <div className="bg-mainButtonNumBG  w-full h-full flex justify-center rounded-md">
                                <button className="bg-mainButtonNum h-mainButton0   mt-mainButtonTop rounded-md" onClick={() => handleCalculation(0)}>0</button>
                            </div>
                        </div> */}

                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(".")} display="." />
                        <Buttons color="#F5F0EB" BG="#E4D8CA" cmd={() => handleCalculation(".")} display="." />
                        <Buttons color="#A49DAA" BG="#8A8192" cmd={handleEqual} display="=" />
                    </div>

                </div>
            </div>
            
        </div>
     );
}
 
export default Calculator;