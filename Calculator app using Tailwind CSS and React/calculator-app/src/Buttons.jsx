import { twMerge } from 'tailwind-merge'

const Buttons = ({ color, BG, display, mainDiv, innerDiv, className}) => {
    return ( 
        <div className={twMerge('flex justify-center col-span-1 font-gugi text-xl font-medium text-calcBg',className)}>
            <div className={twMerge("bg-mainButtonCBorder  w-full h-16 mx-1.5  my-1.5 flex justify-center items-center rounded-md drop-shadow-mainButtons ", mainDiv)}>
                <button className={twMerge(' bg-mainButtonC w-11 h-11 mb-1 rounded-md', innerDiv)}>{display}</button>
            </div>
        </div> 
     );
}

 
export default Buttons;


// const Buttons = ({ color, BG, display }) => {
//     return ( 
//         <div style={{display: "flex", justifyContent: "center", marginTop: '0.5rem'}}>
//             <div style={{backgroundColor: BG, width: '4rem', height: '4rem', justifyContent: 'center', borderRadius: '0.5rem', display:'flex'}}>
//                 <button style={{marginTop: '0.25rem', backgroundColor: color, width: '3rem', height: '3rem', borderRadius:'0.3rem' }}>{display}</button>
//             </div>
//         </div> 
//      );
// }

 
// export default Buttons;

// import { twMerge } from 'tailwind-merge'

// const Buttons = ({ color, BG, cmd, display, className }) => {
//     return ( 
//         <div className={ twMerge("flex justify-center m-0.5 bg-blue-500", className)}>
//             <div style={{ width: '4rem', height: '4rem', justifyContent: 'center', borderRadius: '0.5rem', display:'flex'}}>
//                 <button style={{marginTop: '0.25rem', backgroundColor: color, width: '3rem', height: '3rem', borderRadius:'0.3rem' }} onClick={cmd}>{display}</button>
//             </div>
//         </div> 
//      );
// }


// export default Buttons;