import React from "react";
import Buttons from "./components/Buttons";
import { DeleteIcon } from "lucide-react";
import { History } from "lucide-react"; // Import Buttons component

// const gugi = Gugi({ weight: ["400"] });

const Calculator2 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-calcBg rounded-calcBord w-calcW overflow-hidden">
        <div className="flex flex-row ml-8">
          <div className="bg-calcTopRect1 w-2.5 h-14 mb-0"></div>
          <div className="bg-calcTopRect2 w-2.5 h-14 ml-1 mb-0"></div>
          <div className="bg-calcTopRect3 w-2.5 h-14 ml-1 mb-0"></div>
        </div>
        <div className="pr-3 pl-3 pb-3">
          <div className="block shadow-inner bg-screenBG h-28 border-black border-spacing-2 border-8 rounded-calcScreenBord overflow-hidden">
            <div className="flex flex-col justify-between mx-3 my-3">
              <h1 className="text-right font-gemunu font-semibold text-5xl">
                1822
              </h1>
              <p className="text-right font-gugi font-semibold text-sm text-gray-500 mt-2">
                19 x 96 ÷ 12 - 14
              </p>
            </div>
          </div>
          <div className="flex justify-end my-2 mt-4">
            <div className="twoButtonBG mr-3">
              <div className="twoButton">
                <button>
                  <History />
                </button>
              </div>
            </div>
            <div className="twoButtonBG">
              <div className="twoButton">
                <button>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-mainButtonBg rounded-md">
            <div className="grid grid-cols-4 mt-10 rounged-md items-center px-1 py-1 justify-around mb-9 pb-2">
              <Buttons display="C" mainDiv="" innerDiv="" />
              <Buttons
                display="±"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="%"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="÷"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="7"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="8"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="9"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="×"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="4"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="5"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="6"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="-"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="1"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="2"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="3"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="+"
                mainDiv="bg-mainButtonFunc"
                innerDiv="bg-mainButtonFuncBG"
              />
              <Buttons
                display="0"
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
                className="col-span-2"
              />
              <Buttons
                display="."
                mainDiv="bg-mainButtonNumBG text-buttonFontMain"
                innerDiv="bg-mainButtonNum"
              />
              <Buttons
                display="="
                mainDiv="bg-mainButtonEqBG"
                innerDiv="bg-mainButtonEq"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator2;
