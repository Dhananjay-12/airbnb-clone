import { Controller, useForm } from "react-hook-form";

function Checkbox({ label, value, control, icon, apartment, name }) {
  return (
    <div className="flex items-center gap-1">
      <Controller
        name={value}
        control={control}
        render={({ field }) => (
          <input
            type="checkbox"
            checked={
              apartment?.perks?.filter((perk) => perk === name).length > 0
            }
            id={value}
            {...field}
          />
        )}
      />
      <label
        htmlFor={value}
        className="inline-flex items-center justify-center gap-2"
      >
        {icon} {label}
      </label>
    </div>
  );
}

export default Checkbox;
