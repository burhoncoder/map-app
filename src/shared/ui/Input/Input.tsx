import { useField } from "formik";

import { InputProps } from "./Input.types.ts";

export const Input = ({ placeholder, label, name, wrapperClassNames }: InputProps) => {
  const [field] = useField(name);

  return (
    <div className={wrapperClassNames || ""}>
      {label && <label className="mb-2">{label}</label>}

      <input
        {...field}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border-2 border-solid border-blue-500 p-2 focus:border-blue-600"
      />
    </div>
  );
};
