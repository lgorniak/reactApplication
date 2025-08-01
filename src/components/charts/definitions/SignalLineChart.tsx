import { signal } from "@preact/signals-react";
import ReactECharts from "../ReactECharts";
import { type EChartsOption } from "../../../lib/echarts";
import { Signal } from "@preact/signals-react";

// Create reactive signals for chart data
const chartDataSignal = signal([120, 200, 150, 80, 70, 110, 130]);
const chartTitleSignal = signal("Reactive Line Chart");
const chartThemeSignal = signal<string | undefined>(undefined);

// Create a computed signal for the chart option
const createReactiveLineOption = (): Signal<EChartsOption> => {
  return signal({
    title: {
      text: chartTitleSignal.value,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: chartDataSignal.value,
        type: "line",
        smooth: true,
      },
    ],
  });
};

const SignalLineChart = () => {
  const optionSignal = createReactiveLineOption();

  const handleChartClick = (params: unknown) => {
    console.log("Chart clicked:", params);
  };

  return (
    <div>
      <ReactECharts
        option={optionSignal}
        theme={chartThemeSignal}
        onEvents={{ click: handleChartClick }}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default SignalLineChart;
