import React, { useRef } from 'react'
import './LoginPage.css' 
import {useForm} from 'react-hook-form' 
import { z } from 'zod'  
import { zodResolver } from '@hookform/resolvers/zod'

const schema =z.object({                         /*......Defining Schema ......*/
    email:z.string().min(3),
    password:z.string().min(8)
})
const LoginPage = () => {  

    const {register,handleSubmit,formState:{errors}} =useForm({resolver:zodResolver(schema)})   /*....setting resolver to zodResolver(schema) ......... */
   
    const passwordRes=useRef() 
    const nameRef=useRef()  

     const onSubmit = (formData) => console.log(formData) 
  return ( 
     
    <section className="align_center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
            <h2 > Login Form </h2> 
            <div className="form_inputs">
                <div>
                    <label htmlFor="email">Email</label>
                    <input ref={nameRef} type="email" id="email" className='form_text_input' placeholder='Enter your email address' {...register('email')}  /> 
                    {errors.email && (<em className="form_error">{errors.email.message}</em>)} 
                    
                </div> 
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className='form_text_input' placeholder='Enter your password ' ref={passwordRes} {...register('password')} />    
                    {errors.password && (<em className="form_error">{errors.password.message}</em>)} 
                    {/* <button  className='j' type="button" onClick={()=>passwordRes.current.type='password'} >Hide Password</button>
                    <button className='j' type="button" onClick={()=>passwordRes.current.type='text'}>Show Password</button> */}
                </div> 
                <button type="submit" className='search_button'>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage
