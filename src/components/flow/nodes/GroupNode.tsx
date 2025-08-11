import { type NodeProps } from "@xyflow/react";
import { Fieldset } from "primereact/fieldset";

export function GroupNode({ data }: NodeProps) {
  return <Fieldset legend={String(data?.label || "")}></Fieldset>;
}
