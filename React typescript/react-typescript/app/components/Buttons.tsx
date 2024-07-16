import { twMerge } from "tailwind-merge";

type ButtonsProps = {
  display: string;
  mainDiv: string;
  innerDiv: string;
  className?: string;
};

const Buttons = ({ display, mainDiv, innerDiv, className }: ButtonsProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-center col-span-1 font-gugi text-xl font-medium text-calcBg",
        className
      )}
    >
      <div
        className={twMerge(
          "bg-mainButtonCBorder w-full h-16 mx-1.5 my-1.5 flex justify-center items-center rounded-md drop-shadow-mainButtons",
          mainDiv
        )}
      >
        <button
          className={twMerge(
            "bg-mainButtonC w-11 h-11 mb-1 rounded-md",
            innerDiv
          )}
        >
          {display}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
