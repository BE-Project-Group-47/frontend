import React from "react";
import ReactEcharts from "echarts-for-react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Results() {
  // classiifiers goes here

  let location = useLocation();
  const results = location.state.results.results;
  console.log(results);

  let algo = ["logistic reg", "knn", "decision trees", "naive bayes", "mlp"];
  let perf_metrics = [
    "accuracy",
    "recall",
    "f1-score",
    "precision",
    "roc_auc_score",
    "result",
  ];

  // const my_data = {
  //   lgr: [84.13, 45.74, 56.05, 72.35, 85.46, 0],
  //   knn: [85.22, 40.19, 54.6, 85.11, 87.65, 1],
  //   dt: [92.25, 70.81, 80.16, 92.34, 90.8, 0],
  //   nb: [81.81, 64.15, 60.94, 58.03, 84.6, 0],
  //   mlp: [91.23, 68.96, 77.68, 88.91, 91.11, 0],
  // };

  // Their value in the respective order goes here

  const labelOption = {
    show: true,
    position: "insideBottom",
    distance: 10,
    align: "left",
    verticalAlign: "middle",
    rotate: 90,
    formatter: "{c}  {name|{a}}",
    fontSize: 16,
    color: "rgb(220, 220, 220)",
    rich: {
      name: {},
    },
  };

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: algo,
      textStyle: {
        color: "rgb(255, 255, 255)",
      },
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: perf_metrics,
        axisLabel: {
          color: "rgb(200, 200, 200)",
          fontSize: 18,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: algo[0],
        type: "bar",
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: results["lgr"],
      },
      {
        name: algo[1],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: results["knn"],
      },
      {
        name: algo[2],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: results["dt"],
      },
      {
        name: algo[3],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: results["nb"],
      },
      {
        name: algo[4],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: results["mlp"],
      },
    ],
  };

  return (
    <div>
      <div className="w-fit mx-auto text-2xl text-center font-bold text-[#ED13FF]">
        Risk Factors <br></br>
      </div>
      <hr className="w-20 mx-auto mt-2 mb-5  "></hr>
      <div className="grid grid-cols-1 divide-y">
        <div className="d-inline mx-auto p-5 text-2xl font-bold text-slate-200">
          Logistic Regression :
          <span className="ml-3 text-2xl font-sans font-extrabold underline text-[#5470c6]">
            {results["risk_factors"][0] * 100}
            <br></br>
          </span>
        </div>
        <div className="d-inline mx-auto p-5 text-2xl font-bold text-slate-200">
          K-Nearest Neighbors :
          <span className="ml-3 text-2xl font-sans font-extrabold underline text-[#91cc75]">
            {results["risk_factors"][1] * 100}
          </span>
        </div>
        <div className="d-inline mx-auto p-5 text-2xl font-bold text-slate-200">
          Decision Tree :
          <span className="ml-3 text-2xl font-sans font-extrabold underline text-[#fac858]">
            {results["risk_factors"][2] * 100}
          </span>
        </div>
        <div className="d-inline mx-auto p-5 text-2xl font-bold text-slate-200">
          Naive Bayes :
          <span className="ml-3 text-2xl font-sans font-extrabold underline text-[#ee6666]">
            {results["risk_factors"][3] * 100}
          </span>
        </div>
        <div className="d-inline mx-auto p-5 text-2xl font-bold text-slate-200">
          Multilayer Perceptron (ANN) :
          <span className="ml-3 text-2xl font-sans font-extrabold underline text-[#73c0de]">
            {results["risk_factors"][4] * 100}
          </span>
        </div>
      </div>
      <div className="w-fit mx-auto mt-10 text-2xl text-center font-bold text-[#ED13FF]">
        Visualisation <br></br>
      </div>
      <hr className="w-20 mx-auto mt-2 mb-5  "></hr>
      <div className="mt-5 w-full mx-auto">
        <ReactEcharts option={option}></ReactEcharts>
      </div>
      <div className="grid grid-cols-1">
        <div className="mx-auto p-5 mt-7 justify-center">
          <NavLink
            to="/"
            className="bg-blue-600 hover:bg-blue-500 text-slate-100 font-bold py-2 px-6 rounded inline-flex items-center"
          >
            <span>Submit a new response</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Results;
