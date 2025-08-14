import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Card } from "primereact/card";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";
import { type EdgeColorType } from "../utils/edgeStyles";

// Custom node with only a top handle using Card
export function Top({ data }: NodeProps) {
  const handleColors =
    (data?.handleColors as Record<string, EdgeColorType>) || {};
  return (
    <div>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={getSmartHandleStyle(
          "target",
          Position.Top,
          {},
          handleColors["top"]
        )}
      />
      <Card
        style={{
          minWidth: "100px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {String(data?.label || "")}
      </Card>
    </div>
  );
}
