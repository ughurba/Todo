import { useFormik } from "formik";
import { FC } from "react";
import { StyledField, StyledForm } from "./style";

interface Props {
  setTask: (task: Task) => void;
}
export const CustomForm: FC<Props> = ({ setTask }) => {
  const formik = useFormik({
    initialValues: {
      taskName: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (values.taskName) {
        setTask({
          taskName: values.taskName,
          completed: false,
          isActive: true,
        });
        formik.resetForm({});
      }
    },
  });
  return (
    <StyledForm
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          formik.handleSubmit();
        }
      }}
      onSubmit={formik.handleSubmit}
    >
      <StyledField
        value={formik.values.taskName || ""}
        id="taskName"
        name="taskName"
        placeholder="What needs to be done?"
        onChange={formik.handleChange}
      />
    </StyledForm>
  );
};
