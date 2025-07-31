/**
 * Simple skeleton loader for chart components
 */
const ChartSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        fontSize: "16px",
        color: "#6c757d",
      }}
    >
      Loading chart...
    </div>
  );
};

export default ChartSkeleton;
