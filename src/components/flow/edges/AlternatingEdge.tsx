import { useEffect, useState } from "react";
import { BaseEdge, getSmoothStepPath, type EdgeProps } from "@xyflow/react";

export function AlternatingEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) {
  const [isReversed, setIsReversed] = useState(false);
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIsReversed((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <BaseEdge
      path={edgePath}
      style={{
        ...style,
        stroke: "#e74c3c",
        strokeWidth: 2,
        strokeDasharray: "5,5",
        animationDirection: isReversed ? "reverse" : "normal",
      }}
    />
  );
}
