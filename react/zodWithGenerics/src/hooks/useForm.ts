import { z } from "zod";

function useForm<TValues>(
  schema: z.Schema<TValues>,
  handleSubmit: (values: TValues) => void
) {
  return {
    handleSubmit: (values: unknown) => {
      const newValues = schema.parse(values);
      handleSubmit(newValues);
    },
  };
}

export default useForm;
