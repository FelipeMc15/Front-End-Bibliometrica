import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function useHookFormInit(model, schema, defaultValue){
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm<model>({
        resolver: yupResolver(schema),
        defaultValues: defaultValue
      });
    return {register, errors, handleSubmit}
}