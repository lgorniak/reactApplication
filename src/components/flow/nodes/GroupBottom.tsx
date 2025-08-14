import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Fieldset } from "primereact/fieldset";
import { getSmartHandleStyle } from "../utils/smartHandleStyles";
import { type EdgeColorType } from "../utils/edgeStyles";

export function GroupBottom({ data }: NodeProps) {
  const handleColors =
    (data?.handleColors as Record<string, EdgeColorType>) || {};
  return (
    <div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={getSmartHandleStyle("source", Position.Bottom)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-right"
        style={getSmartHandleStyle("source", Position.Bottom, {
          right: "25%",
        })}
      />
      <Fieldset legend={String(data?.label || "")}></Fieldset>
    </div>
  );
}
