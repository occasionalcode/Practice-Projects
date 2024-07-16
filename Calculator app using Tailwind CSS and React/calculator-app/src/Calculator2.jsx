import Buttons from "./Buttons";

const Calculator2 = () => {
    return ( 


        <div className="flex flex-col justify-center items-center h-screen ">
            
            <div className=" bg-calcBg  rounded-calcBord w-calcW overflow-hidden">
            <div className="flex flex-row ml-8">
                <div className="bg-calcTopRect1 w-2.5 h-14  mb-0  "></div>
                <div className="bg-calcTopRect2 w-2.5 h-14 ml-1 mb-0  "></div>
                <div className="bg-calcTopRect3 w-2.5 h-14 ml-1 mb-0  "></div>
            </div>
                <div className="pr-3 pl-3 pb-3">

                    {/* beginning of calculator screen */}
                    <div className="block shadow-inner  bg-screenBG  h-28 border-black border-spacing-2 border-8 rounded-calcScreenBord overflow-hidden ">
                            {/* <input type="inputBox" className="bg-transparent  text-right font-gemunu font-bold text-5xl  "  placeholder="0"/> */}
                            <div className="flex flex-col  justify-between mx-3 my-3">
                                <h1 className="text-right font-gemunu font-semibold text-5xl">1822</h1>
                                <p className="text-right font-gemunu font-semibold text-sm text-gray-500 mt-2">19 x 96 ÷ 12 - 14</p>
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
                                <button>
                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E3DEDA" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*end of history and backspace */}
                    {/* Beginning of buttons */}
                    <div className=" bg-mainButtonBg rounded-md ">
                        <div className="grid grid-cols-4  mt-10 rounged-md items-center px-1 py-1 justify-around mb-9 pb-2">
                            <Buttons display="C" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"}  display="±" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"} display="%" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"} display="÷" />
                            <Buttons  mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"} display="7" />
                            <Buttons  mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"} display="8" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="9" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"} display="×" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="4" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="5" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"} display="6" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"} display="-" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="1" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="2" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain"} innerDiv={"bg-mainButtonNum"}  display="3" />
                            <Buttons mainDiv={"bg-mainButtonFunc"} innerDiv={"bg-mainButtonFuncBG"} display="+" />
                            {/* <div className="flex justify-center col-span-2 ">
                                <div className="bg-mainButtonNumBG  w-full h-full flex justify-center rounded-md">
                                    <button className="bg-mainButtonNum h-mainButton0   mt-mainButtonTop rounded-md" onClick={() => handleCalculation(0)}>0</button>
                                </div>
                            </div> */}
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain "} className={'col-span-2'} innerDiv={"bg-mainButtonNum w-full h-10 mx-3"} display="0" />
                            <Buttons mainDiv={"bg-mainButtonNumBG text-buttonFontMain "} innerDiv={"bg-mainButtonNum"}  display="." />
                            <Buttons mainDiv={"bg-mainButtonEqBG  "} innerDiv={"bg-mainButtonEq"} display="=" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Calculator2;