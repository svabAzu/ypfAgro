import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  ussername: Yup.string().min(5).required(),
  password: Yup.string().min(8).required(),
});

export const LoginYPF = () => {
  const submitForm = (values) => {};

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      ussername: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: schema,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Usuario</h2>
        <input
          type="text"
          placeholder="Username"
          name="ussername"
          onChange={handleChange}
        />
        <br />
        {errors.ussername && <span>Email invalido</span>}
        <br />
        <h2>Contraseña</h2>
        <input
          type="password"
          placeholder="********"
          name="password"
          onChange={handleChange}
        />
        <br />
        {errors.password && <span>Password invalido</span>}
        <br />
        <button type="submit"> Iniciar Sesión</button>
      </form>
    </div>
  );
};
