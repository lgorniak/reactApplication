import { Handle, Position } from "@xyflow/react";

export function MiniLeftRight() {
  return (
    <div>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{ opacity: 0, left: "1px" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        style={{ opacity: 0, right: "3px" }}
      />
      <div
        style={{
          width: "1px",
          height: "1px",
        }}
      />
      {String("testomg")}
    </div>
  );
}
