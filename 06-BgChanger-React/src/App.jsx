import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // const ColorChange=(newC)=>{
  //   setColor(() =>newC )
  // }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      
      <h1 className="text-4xl text-center px-4 py-1 rounded-3xl pt-2 pb-2 tet text-black font-semibold bg-white shadow-lg">
        Background Changer App
      </h1>

      {/* Without Using Button Component */}
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl bg-white ">
          <button
            onClick={() => setColor("red")}
            className=" cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>

          <button
            onClick={() => setColor("blue")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("olive")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            OLIVE
          </button>

          <button
            onClick={() => setColor("grey")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            GREY
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            YELLOW
          </button>
          <button
            onClick={() => setColor("pink")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            PINK
          </button>
          <button
            onClick={() => setColor("purple")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            PURPLE
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            LAVENDER
          </button>
          <button
            onClick={() => setColor("white")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            WHITE
          </button>
          <button
            onClick={() => setColor("black")}
            className="cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            BLACK
          </button>
        </div>
      </div>

      {/* TO Avoid Code repeatation Make an Components names Button and pass required props in it */}
      {/* <div> */}
      {/* <button className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline'
        onClick={()=>{ColorChange("red")}}>
            RED
        </button> */}
      {/* <button className='border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline'
        onClick={()=>{ColorChange("blue")}}>
            Blue
        </button> */}
      {/* <button className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline'
        onClick={()=>{ColorChange("green")}}>
            Green
        </button> */}
      {/* <button className='border border-pink-500 bg-pink-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline'
        onClick={()=>{ColorChange("pink")}}>
            Pink
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default App;
