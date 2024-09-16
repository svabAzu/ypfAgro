import React from 'react'
import { useFormik } from 'formik'

const LoginYPF = () => {
    const {handleSubmit,handleChange} = useFormik({
        initialValues:{
            usename:'',
            password: '',
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    
    return (
        <div>
         <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='username' 
            name='username' 
            onChange={handleChange}/>

            <input 
            type="password" 
            placeholder='password' 
            name='password' 
            onChange={handleChange}/>
            
            <button type='submit'> Iniciar Sesión</button>
         </form>
        </div>
    )
}

export default LoginYPF
