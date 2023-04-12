import React from "react";
import ReactEcharts from "echarts-for-react";

function Results() {
  // classiifiers goes here
  let algo = [
    "knn",
    "naive bayes",
    "sgd",
    "logistic reg",
    "decision trees",
    "svm",
    "mlp",
  ];
  let perf_metrics = [
    "accuracy",
    "f1 score",
    "recall",
    "precision",
    "auc roc score",
    "proba x",
  ];

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
        data: [320, 332, 301, 334, 390, 200],
      },
      {
        name: algo[1],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 290],
      },
      {
        name: algo[2],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 300],
      },
      {
        name: algo[3],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [98, 77, 101, 99, 40, 190],
      },
      {
        name: algo[4],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [98, 77, 101, 99, 40, 77],
      },
      {
        name: algo[5],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [98, 77, 101, 99, 40, 300],
      },
      {
        name: algo[6],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: [98, 77, 101, 99, 40, 250],
      },
    ],
  };

  return (
    <div>
      <div className="w-full mx-auto">
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    </div>
  );
}

export default Results;
