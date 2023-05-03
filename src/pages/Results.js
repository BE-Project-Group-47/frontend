import React from "react";
import ReactEcharts from "echarts-for-react";

function Results() {
  // classiifiers goes here
  let algo = ["logistic reg", "knn", "decision trees", "naive bayes", "mlp"];
  let perf_metrics = [
    "accuracy",
    "recall",
    "f1-score",
    "precision",
    "roc_auc_score",
    "result",
  ];

  const my_data = {
    lgr: [84.13, 45.74, 56.05, 72.35, 85.46, 0],
    knn: [85.22, 40.19, 54.6, 85.11, 87.65, 1],
    dt: [92.25, 70.81, 80.16, 92.34, 90.8, 0],
    nb: [81.81, 64.15, 60.94, 58.03, 84.6, 0],
    mlp: [91.23, 68.96, 77.68, 88.91, 91.11, 0],
  };

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
        data: my_data["lgr"],
      },
      {
        name: algo[1],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: my_data["knn"],
      },
      {
        name: algo[2],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: my_data["dt"],
      },
      {
        name: algo[3],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: my_data["nb"],
      },
      {
        name: algo[4],
        type: "bar",
        label: labelOption,
        emphasis: {
          focus: "series",
        },
        data: my_data["mlp"],
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