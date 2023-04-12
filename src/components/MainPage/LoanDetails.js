import React from "react";
import Draggable from "react-draggable";

function LoanDetails() {
  return (
    <div className="w-full h-80 my-5 ">
      <div className="grid grid-cols-4 gap-5 text-white items-center">
        <div className="text-2xl col-span-4">Loan Amount</div>
        <div className="col-span-3 col-start-2">
          <div className="w-full space-y-3">
            <div className="w-full relative bg-slate-100 h-2 rounded-md bg-gradient-to-r from-red-500 via-yellow-400 to-green-400">
              <Draggable axis="x">
                <div className="w-4 h-4 bg-cyan-400 absolute -top-1/2 rounded-full"></div>
              </Draggable>
            </div>
            <div className="flex justify-between text-sm text-slate-100">
              <div>500k</div>
              <div>5000k</div>
            </div>
          </div>
        </div>
        <div className="text-right">Amount</div>
        <div className="">
          <input
            type="text"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter loan amount"
          />
        </div>
        <div className="text-2xl col-span-4 mb-2">Other Details</div>
        <div className="text-right">Purpose</div>
        <div className="col-span-3">
          <input
            type="text"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mention the Purpose of the loan"
          />
        </div>
        <div className="text-right">Tenure</div>
        <div className="">
          <input
            type="text"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select tenure of loan"
          />
        </div>
        <div className="text-right">Interest</div>
        <div className="">
          <input
            type="text"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select Interest of loan"
          />
        </div>
      </div>
    </div>
  );
}

export default LoanDetails;
