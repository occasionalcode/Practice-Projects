import { useEffect, useState } from "react";
import axios from "axios";

type quote = {
  text: string;
};

// function App() {
//   const [data, setData] = useState<string[]>([]);

//   useEffect(() => {
//     axios
//       .get("https://cat-fact.herokuapp.com/facts")
//       .then(function (response) {
//         // response.data.forEach((element: quote) => {
//         //   setData([...data, element.text]);
//         //   console.log(element.text);
//         // });
//         setData(
//           response.data.map((element: quote) => {
//             return element.text;
//           })
//         );
//         console.log(data);
//       })

//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="h-screen">
//         <div>
//           {data.map((text, index) => {
//             return (
//               <p className="text-black" key={index}>
//                 {text}
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("dogapi.dog/api/v2/facts  ")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="h-screen">
        <div></div>
      </div>
    </>
  );
}

export default App;
