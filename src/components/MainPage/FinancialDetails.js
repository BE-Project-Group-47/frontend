import React, { useState } from "react";

const FinancialDetails = (props) => {
  const [income, setIncome] = useState(0);
  const [length, setLength] = useState(0);

  const handleChange = (e) => {
    const income_inp = document.getElementById("income_input");
    const length_inp = document.getElementById("length_input");
    if (income_inp !== null && length_inp !== null) {
      props.onSubmit(income_inp.value, length_inp.value);
    } else console.log("null");
  };

  return (
    <div className="w-full h-80 my-5">
      <div className="flex flex-col space-y-10 text-white">
        <div className="text-2xl">Financial Details</div>
        <div className="w-3/4 self-end space-y-5">
          <div>Income</div>
          <input
            type="text"
            id="income_input"
            class="block w-full p-2 border rounded-lg sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="eg. 60000"
            onChange={(e) => {
              setIncome(e.target.value);
              handleChange(e);
            }}
          />
          <div className="flex justify-between pt-5">
            <div className="space-y-5">
              <div>Home Ownership</div>
              <input
                type="text"
                id="length_input"
                
                class="block w-full p-2 border rounded-lg sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="eg. Owner"
              />
              
            </div>
            <div className="space-y-5">
              <div>Employment Length</div>
              <input
                type="text"
                id="length_input"
                onChange={(e) => {
                  setLength(e.target.value);
                  handleChange(e);
                }}
                class="block w-full p-2 border rounded-lg sm:text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="eg. 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;
