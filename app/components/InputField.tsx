export default function InputField({
  register,
  name,
  available,
  label,
  type,
  placeholder,
  errors,
  handleChange,
  className,
}) {
  return (
    <fieldset className="flex w-full justify-between">
      {type !== "checkbox" && (
        <>
          {" "}
          <label>{label}: </label>
          <input
            {...register(name, { required: true })}
            aria-invalid={errors[name] ? "true" : "false"}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={
              !errors.name
                ? `${className}`
                : `${className} border-2 border-solid border-red-500`
            }
          />
        </>
      )}
      {type === "checkbox" && (
        <div className="w-full gap-12 flex">
          <label>{label}: </label>
          <input
            {...register(name, { required: true })}
            aria-invalid={errors[name] ? "true" : "false"}
            type={type}
            onChange={handleChange}
            value={available}
            className={
              !errors.name
                ? `${className} `
                : `${className} border-2 border-solid border-red-500`
            }
          />
        </div>
      )}
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </fieldset>
  );
}
