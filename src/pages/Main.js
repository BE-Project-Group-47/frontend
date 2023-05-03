import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import PersonalDetails from "../components/MainPage/PersonalDetails";
import FinancialDetails from "../components/MainPage/FinancialDetails";
import LoanDetails from "../components/MainPage/LoanDetails";

function Main() {
  const hr_with_gradient = (
    <hr className="w-20 border-none h-[2px] bg-gradient-to-r from-cyan-600"></hr>
  );
  const hr_without_grad = (
    <hr className="w-20 border-none h-[2px] bg-cyan-300"></hr>
  );
  const hr_without_color = (
    <hr className="w-20 border-none h-[2px] bg-slate-500"></hr>
  );

  const [page, setPage] = useState(1);
  const onProceedhandler = () => {
    if (page !== 3) setPage(page + 1);

    // get the data from input fields
  };

  let data = {
    age: 24,
    income: 24000,
    employment_length: 4.5,
    loan_amount: 25000,
    loan_intent: "axy",
    loan_grade: "C",
    loan_intrest: 0.7,
    loan_status: 0,
    loan_percent_income: 20.1,
    cb_person_default_on_file: "N",
    cb_credit_history_len: 0,
  };
  const getPersonalDet = (age) => {
    data["age"] = age;
  };
  const getFinancialDet = (income, length) => {
    data["income"] = income;
    data["employment_length"] = length;
  };
  const getLoanDet = (amount, intent, tenure, interest) => {
    data["loan_amount"] = amount;
    data["loan_intent"] = intent;
    data["loan_intrest"] = interest;
    // Apparently we dont want tenure?????
    console.log(data);
  };
  const onSubmitHandler = async (e) => {
    // const sub_ = { subs };

    console.log(JSON.stringify(data));
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col px-40 space-y-5 bg-transparent bg-slate-800">
      <div className="bg-transparent flex items-center mx-auto w-fit">
        <button
          className={
            "text-white text-sm font-bold py-2 px-4 rounded-full " +
            (page > 1
              ? "bg-green-400"
              : page === 1
              ? "bg-blue-400"
              : "bg-slate-700")
          }
          onClick={() => {
            setPage(1);
          }}
        >
          Personal Details
        </button>

        {page > 1 ? hr_without_grad : hr_with_gradient}

        <button
          className={
            "text-white text-sm font-bold py-2 px-4 rounded-full " +
            (page > 2
              ? "bg-green-400"
              : page === 2
              ? "bg-blue-400"
              : "bg-slate-700")
          }
          onClick={() => {
            setPage(2);
          }}
        >
          Financial Details
        </button>

        {page > 2
          ? hr_without_grad
          : page === 2
          ? hr_with_gradient
          : hr_without_color}

        <button
          className={
            "text-white text-sm font-bold py-2 px-4 rounded-full " +
            (page > 3
              ? "bg-green-400"
              : page === 3
              ? "bg-blue-400"
              : "bg-slate-700")
          }
          onClick={() => {
            setPage(3);
          }}
        >
          Loan Amount and Tenure
        </button>
      </div>
      <div className="flex flex-col space-y-5 mx-36">
        <div>
          {page === 1 ? (
            <PersonalDetails onSubmit={getPersonalDet} />
          ) : page === 2 ? (
            <FinancialDetails onSubmit={getFinancialDet} />
          ) : (
            <LoanDetails onSubmit={getLoanDet} />
          )}
        </div>
        {page === 3 ? (
          <NavLink
            className="w-3/4 py-[2px] text-white bg-green-400 self-end rounded-md"
            onClick={async (e) => {
              const response = await fetch("http://127.0.0.1:8000/add-data/", {
                method: "POST", // or 'PUT'
                mode: "no-cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
            }}
            to="/submission"
          >
            <div className="text-center font-bold">PROCEED</div>
          </NavLink>
        ) : (
          <button
            className="w-3/4 py-[2px] text-white bg-green-400 self-end rounded-md"
            onClick={() => {
              onProceedhandler();
            }}
            name=""
          >
            <div className="text-center font-bold">PROCEED</div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
