import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import PersonalDetails from "../components/MainPage/PersonalDetails";
import FinancialDetails from "../components/MainPage/FinancialDetails";
import LoanDetails from "../components/MainPage/LoanDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  // const { data, setData } = useState();
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

  // let data = {
  //   age: 24,
  //   income: 24000,
  //   employment_length: 4.5,
  //   loan_amount: 25000,
  //   loan_intent: "axy",
  //   loan_grade: "C",
  //   loan_intrest: 0.7,
  //   loan_status: 0,
  //   loan_percent_income: 20.1,
  //   cb_person_default_on_file: "N",
  //   cb_credit_history_len: 0,
  // };
  const formData = new FormData();
  formData.append("age", 24);
  formData.append("income", 24000);
  formData.append("employment_length", 4.5);
  formData.append("loan_amount", 25000);
  formData.append("loan_intent", "axy");
  formData.append("loan_grade", "C");
  formData.append("loan_intrest", 0.7);
  formData.append("loan_status", 0);
  formData.append("loan_percent_income", 20.1);
  formData.append("cb_person_default_on_file", "N");
  formData.append("cb_credit_history_len", 0);

  const getPersonalDet = (age) => {
    // data["age"] = age;
    formData.set("age", age);
  };
  const getFinancialDet = (income, length) => {
    // data["income"] = income;
    // data["employment_length"] = length;
    formData.set("income", income);
    formData.set("employment_length", length);
  };
  const getLoanDet = (amount, intent, tenure, interest) => {
    // data["loan_amount"] = amount;
    // data["loan_intent"] = intent;
    // data["loan_intrest"] = interest;
    formData.set("loan_amount", amount);
    formData.set("loan_intent", intent);
    formData.set("loan_intrest", interest);

    // Apparently we dont want tenure?????
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
          <button
            className="w-3/4 py-[2px] text-white bg-green-400 self-end rounded-md"
            onClick={async (e) => {
              const config = {
                headers: { "content-type": "multipart/form-data" },
              };

              axios
                .post("https://backend2-production-5239.up.railway.app/add-data/", formData, config)
                .then((response) => {
                  console.log(response);
                  const data = response.data
                  navigate("/results", { state: { results: data } });    
                })
                .catch((error) => {
                  console.log(error);
                });
              
            }}
          >
            <div className="text-center font-bold">PROCEED</div>
          </button>
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
