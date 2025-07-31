// Core ECharts engine - REQUIRED
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";

export type { EChartsOption, ECharts } from "echarts";

export function registerEChartsModules(): void {
  echarts.use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
  ]);
}

export { echarts };
