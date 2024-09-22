import { useField } from "formik";
import * as SwitchComponent from "@radix-ui/react-switch";

import { SwitchProps } from "./Switch.types.ts";

export const Switch = ({ children, name, wrapperClassNames }: SwitchProps) => {
  const fieldDescriptor = useField(name);

  return (
    <div className={`flex items-center gap-2 ${wrapperClassNames || ""}`}>
      <SwitchComponent.Root
        checked={fieldDescriptor[0].value}
        onCheckedChange={value => fieldDescriptor[2].setValue(value)}
        className="h-7 w-11 rounded-full bg-gray-300 data-[state=checked]:bg-blue-600"
        id={name}
      >
        <SwitchComponent.Thumb className="block h-5 w-5 translate-x-1 rounded-full bg-white data-[state=checked]:translate-x-5" />
      </SwitchComponent.Root>
      <label className="Label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};
