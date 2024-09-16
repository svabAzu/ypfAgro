import { Formik, Form } from "formik"
import * as Yup from 'yup'
import './Register.css'
import { LogoPrueba } from "../assets/logo"

interface myFormValues {
    username: string,
    password: string,
    address: string,
    phone: string,
    dni: string,
    email: string;
}


export const Register = () => {

    const initialValues: myFormValues = {
        username: '',
        password: '',
        address: '',
        phone: '',
        dni: '',
        email: ''
        //role_id: '',
        //status: ''

    }


    const schema = Yup.object().shape({
        username: Yup.string().max(20, 'Maximo permitido 20 caracteres').required('Se requiere de un nombre de usuario'),
        password: Yup.string().max(20, 'Maximo permitido 20 caracteres').required('Se requiere contraseña'),
        address: Yup.string().max(50, 'Maximo permitido 50 caracteres').required('Se requiere Dirección'),
        phone: Yup.number().required('Se requiere teléfono'),
        dni: Yup.number().required('Se requiere DNI'),
        email: Yup.string().email('Email invalido').required('Se requiere email'),
    })

    const handleSubmit = (values: myFormValues) => {
        console.log(values)
    }


    return (
        <section>
            <article className="flex justify-center items-center flex-col">
                <div>
                    <LogoPrueba />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iure? Officia velit quod culpa qui corporis explicabo, alias vitae eligendi quis aperiam eaque ipsa sint perferendis ullam minima. Labore, possimus.</p>
                </div>
            </article>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                {
                    ({ values, handleChange, handleSubmit, errors, touched }) => (<Form onSubmit={handleSubmit} >

                        <div>
                            <input
                                placeholder="Nombre de usuario"
                                className="placeholder-black"
                                name="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && touched.username ? (
                                <div className="text-red-600 flex items-center">{errors.username}</div>) : null}

                        </div>
                        <div>
                            <input
                                placeholder="Contraseña"
                                className="placeholder-black"
                                name="password"
                                type="text"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password ? (
                                <div className="text-red-600 flex items-center">{errors.password}</div>) : null}
                        </div>
                        <div>
                            <input
                                placeholder="Dirección"
                                className="placeholder-black"
                                name="address"
                                type="text"
                                value={values.address}
                                onChange={handleChange}
                            />
                            {errors.address && touched.address ? (
                                <div className="text-red-600 flex items-center">{errors.address}</div>) : null}
                        </div>
                        <div>
                            <input
                                placeholder="Teléfono"
                                className="placeholder-black"
                                name="phone"
                                type="number"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && touched.phone ? (
                                <div className="text-red-600 flex items-center">{errors.phone}</div>) : null}
                        </div>
                        <div>
                            <input
                                placeholder="DNI"
                                className="placeholder-black"
                                name="dni"
                                type="number"
                                value={values.dni}
                                onChange={handleChange}
                            />
                            {errors.dni && touched.dni ? (
                                <div className="text-red-600 flex items-center">{errors.dni}</div>) : null}
                        </div>
                        <div>
                            <input
                                placeholder="Email"
                                className="placeholder-black"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email ? (
                                <div className="text-red-600 flex items-center">{errors.email}</div>) : null}
                        </div>


                        <div>
                            <button type="submit" className="m-1 flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enviar</button>
                        </div>
                    </Form>)
                }
            </Formik>
        </section>
    )
}
