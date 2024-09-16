import { Formik } from "formik"


export const Register = () => {

    const initialValues = {
        username: '',
        passwaord: '',
        address: '',
        phone: '',
        dni: '',
        email: ''
        //role_id: '',
        //status: ''

    }

    const handleSubmit = (values) => {
        console.log(values)
    }


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {
                ({ values, handleChange, handleSubmit }) => (<form onSubmit={handleSubmit} >
                    <input
                        placeholder="Nombre"
                        name="username"
                        type="text"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Contraseña"
                        name="passwaord"
                        type="text"
                        value={values.passwaord}
                        onChange={handleChange}
                    />
                     <input
                        placeholder="Dirección"
                        name="address"
                        type="text"
                        value={values.address}
                        onChange={handleChange}
                    />
                    
                    <input
                        placeholder="Teléfono"
                        name="phone"
                        type="number"
                        value={values.phone}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="DNI"
                        name="dni"
                        type="number"
                        value={values.dni}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />


                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>)
            }
        </Formik>
    )
}
