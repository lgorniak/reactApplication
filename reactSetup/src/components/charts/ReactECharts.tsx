import { useRef, useEffect, type CSSProperties } from "react";
import { Signal } from "@preact/signals-react";
import { echarts, type EChartsOption } from "../../lib/echarts";

interface ReactEChartsProps {
  option: EChartsOption | Signal<EChartsOption>;
  theme?: string | object | Signal<string | object>;
  onEvents?: Record<string, (params: unknown) => void>;
  style?: CSSProperties;
  className?: string;
}
const ReactECharts = ({
  option,
  theme,
  onEvents,
  style = { width: "100%", height: "100%" },
  className,
}: ReactEChartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<ReturnType<typeof echarts.init> | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Helper function to get value from signal or regular value
  const getValue = <T,>(value: T | Signal<T>): T => {
    return value && typeof value === "object" && "value" in value
      ? (value as Signal<T>).value
      : (value as T);
  };

  // Effect 1: Chart initialization and cleanup
  useEffect(() => {
    if (!chartRef.current) return;

    // Get theme value (could be signal or regular value)
    const themeValue = theme ? getValue(theme) : undefined;

    // Initialize ECharts instance
    const chart = echarts.init(chartRef.current, themeValue);
    chartInstanceRef.current = chart;

    // Setup ResizeObserver for automatic chart resizing
    resizeObserverRef.current = new ResizeObserver(() => {
      chart.resize();
    });
    resizeObserverRef.current.observe(chartRef.current);

    // Cleanup function - CRITICAL for preventing memory leaks
    return () => {
      // Disconnect ResizeObserver
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }

      // Dispose ECharts instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, [theme]); // Re-initialize if theme changes (requires new echarts.init call)

  // Effect 2: Apply chart options (reactive to signal changes)
  useEffect(() => {
    if (!chartInstanceRef.current) return;

    // Get option value (automatically reactive to signals)
    const optionValue = getValue(option);

    // Apply the configuration to the chart
    chartInstanceRef.current.setOption(optionValue);
  }, [option]); // Dependency on option - automatically re-runs when signal changes

  // Effect 3: Event handling with cleanup
  useEffect(() => {
    const chart = chartInstanceRef.current;
    if (!chart || !onEvents) return;

    // Clear all existing event listeners first
    chart.off();

    // Add new event listeners
    Object.entries(onEvents).forEach(([eventName, handler]) => {
      chart.on(eventName, handler);
    });

    // Cleanup: remove event listeners
    return () => {
      if (chart) {
        Object.keys(onEvents).forEach((eventName) => {
          chart.off(eventName);
        });
      }
    };
  }, [onEvents]); // Re-bind events when onEvents changes

  // Render the chart container
  return <div ref={chartRef} style={style} className={className} />;
};

export default ReactECharts;
