import { type NodeProps } from "@xyflow/react";
import { Fieldset } from "primereact/fieldset";

// Group node using PrimeReact Fieldset
export function GroupNode({ data }: NodeProps) {
  return <Fieldset legend={String(data?.label || "")}></Fieldset>;
}
