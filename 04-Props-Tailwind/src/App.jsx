import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

// To Use this card again and again to increase reusability
// Props are used to pass different values for same component so it can be reued again and again

function App() {
  let Myobj = {
    name: "Rahul",
    age: 25,
  };

  // passing an array
  let newArray = [1, 2, 3, 55];

  let myPhoto =
    "https://cdn.pixabay.com/photo/2021/08/03/12/34/sparrow-6519384_1280.jpg";

  return (
    <>
      <h1 className="bg-green-300 text-black p-3 rounded-2xl font-bold mb-5">
        Tailwind CSS Tutorial
      </h1>

      <div className="mb-4 text-2xl text-amber-500 list-image-none">
        <h3>Key Takeways : </h3>
        <ul>
          <li>How to use Tailwind CSS : Setup and implementation</li>
          <li>Props in Reacts</li>
          <p>
            Increases code reusability we can able to use existing components
            again and again with different values by passing and handling props{" "}
          </p>
        </ul>
      </div>

      <div className="flex flex-row">
        <Card
          urlImg="https://th.bing.com/th/id/OIP.I8kHRLXLPDxyqKB90DTmrQHaEy?pid=ImgDet&w=208&h=134&c=7&dpr=2"
          Username="Bumrah"
          btnText="Conatct me"
        />
        <Card
          Username="rahul20"
          btnText="Explore me"
          info={Myobj}
          score={newArray}
          urlImg="https://wallpaperaccess.com/full/3109981.jpg"
        />
        <Card
          Username="Rishabh"
          urlImg="https://img.mensxp.com/media/content/2023/Aug/Header-Credit-Instagram-rishabpant_64dca56ec336f.jpeg"
          btnText="About me"
        />
      </div>
      <h1 className="bg-green-300 text-black p-3 rounded-2xl font-bold mb-5">
        Tailwind CSS Tutorial
      </h1>

      <div className="flex flex-row">
        <Card
          urlImg="https://th.bing.com/th/id/OIP.I8kHRLXLPDxyqKB90DTmrQHaEy?pid=ImgDet&w=208&h=134&c=7&dpr=2"
          Username="Bumrah"
          btnText="Conatct me"
        />
        <Card
          Username="rahul20"
          btnText="Explore me"
          info={Myobj}
          score={newArray}
          urlImg="https://wallpaperaccess.com/full/3109981.jpg"
        />
        <Card
          Username="Rishabh"
          urlImg="https://img.mensxp.com/media/content/2023/Aug/Header-Credit-Instagram-rishabpant_64dca56ec336f.jpeg"
          btnText="About me"
        />
      </div>
    </>
  );
}

export default App;
