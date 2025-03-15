import React from "react";

// Default value can be passed by = operator in function
const card = ({ Username = "User", btnText, urlImg }) => {
  // console.log('Props are :',props);
  console.log(Username);
  console.log(btnText);
  console.log(urlImg);
  // console.log(urlImg)
  // console.log(info)

  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-900">
      <div className=" max-w-full m-5 rounded-md shadow-md bg-black text-gray-100 mb-6 transition-all duration-300 group hover:bg-gray-800 hover:text-white">
        <img
          //   src="https://cdn.pixabay.com/photo/2024/02/05/10/48/bird-8554204_1280.jpg"
          src={urlImg}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-52 transition-all duration-300 hover:h-62 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 tracking-wide group-hover:text-yellow-400">
            <h2 className="text-3xl font-semibold tracking-wide">{Username}</h2>
            <p className="text-gray-400 text-sm group-hover:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 "
          >
            {/* Read more */}
            {/* || is used to get default value when no paramwter is passed */}
            {btnText || "Visit me"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
