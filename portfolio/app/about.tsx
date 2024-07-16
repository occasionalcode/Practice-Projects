"use client";
import React, { useEffect } from "react";
import { useDarkmode } from "./stores/globalStates";
import css from "./assets/css.png";
import dart from "./assets/dart.png";
import flutter from "./assets/flutter.png";
import github from "./assets/github.png";
import Image from "next/image";
import { tools } from "./stores/tools";

export default function About() {
  const darkMode = useDarkmode((state) => state.darkMode);
  const isFading = useDarkmode((state) => state.isFading);
  const UpdateIsFading = useDarkmode((state) => state.updateIsFading);

  useEffect(() => {
    UpdateIsFading();
    const timer = setTimeout(() => UpdateIsFading(), 2000); // Duration of the fade animation
    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-screen h-screen dark:bg-black flex justify-center">
        <div className="grid grid-cols-2 justify-center items-center w-screen mx-32">
          <div className="flex flex-col font-Montserrat text-[12rem] font-black mt-20">
            <div>
              <p
                className={`font-black font-Montserrat h-44 flex pl-3 items-center bg-clip-text bg-gradient-to-r ${
                  darkMode
                    ? "from-white via-[#545454] to-white"
                    : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
                } from-5% via-50% to-75% text-transparent`}
              >
                AB
                <span
                  className={`size-36 border-2 bg-transparent rounded-full ${
                    darkMode ? "border-white" : "border-black"
                  }`}
                />
                UT
              </p>
              <p
                className={`h-44 flex items-center font-Poppins text-[12rem] font-black ${
                  darkMode
                    ? "text-black font-outline-2"
                    : "text-white font-outline-3"
                }`}
              >
                ME
              </p>
            </div>
            <div className="mr-20 mt-3">
              <p className="text-4xl font-normal text-white">
                I DESIGN and DEVELOP UNIQUE web - mobile - software graphic
                EXPERIENCE
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="border-gradient-rounded mx-20 aspect-[18/18] w-full rounded-[2.5rem]">
              <div className="flex flex-row gap-5 justify-center items-center">
                {/* {tools.map((tool) => {
                  return (
                    <Image
                      key={tool.id}
                      src={`${tool.src}`}
                      alt={tool.alt}
                      width={50}
                      height={50}
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
