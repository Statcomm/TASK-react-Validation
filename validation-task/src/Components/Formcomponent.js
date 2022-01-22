import React from 'react';
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"


function Formcomponent() {

    const schema = yup.object().shape({

        FirstName: yup.string().matches(/[a-zA-Z]/,"Letters only!").required("this field is required"),
        LastName: yup.string().matches(/[a-zA-Z]/,"Letters only!").required("this field is required"),
        PhoneNUmber: yup.string().max(8).matches(/[569]\d{7}$/, "this field should be numbers only and a Kuwaiti number").required("this field is required"),
        Email: yup.string().email().required("this field is required"),
        CivilID: yup.string().min(12).max(12).matches(/^\d+$/, "this field should be numbers only").required("this field is required"),
        HighSchoolGrade: yup.number().min(0).max(100).required("this field is required"),

    })
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Success!")
    }

  return <div>
<form onSubmit={handleSubmit(onSubmit)}> 

<input {...register("FirstName")} type="text" placeholder='First Name'></input>
<p className="error">{errors.FirstName?.message}</p>

<input {...register("LastName")} type="text" placeholder='Last Name'></input>
<p className="error">{errors.LastName?.message}</p>

<input {...register("PhoneNUmber")} type="text" placeholder='Phone Number'></input>
<p className="error">{errors.PhoneNUmber?.message}</p>

<input {...register("Email")} type="text" placeholder='Email'></input>
<p className="error">{errors.Email?.message}</p>

<input {...register("CivilID")} type="text" placeholder='Civil Id'></input>
<p className="error">{errors.CivilID?.message}</p>

<input {...register("HighSchoolGrade")} type="text" placeholder='High School Grade'></input>
<p className="error">{errors.HighSchoolGrade?.message}</p>

<button type="submit">Submit</button>
      
</form>
  </div>;
}

export default Formcomponent;
