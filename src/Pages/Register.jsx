import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProviderComponent";
import { useForm} from "react-hook-form";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";



import { Flip, toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {

const {emailLogin}=useContext(AuthContext)
const [showPass,setShowPass]=useState(false)


  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    
  //  const name=data.name;
  //  const photoURL=data.photoUrl
   const email=data.email
   const password=data.password
   
   if(password.length<6){
    toast.error('Length must be at least 6 character');
    return;
   }
   if(!/[A-Z]/.test(password)){
    toast.error('Must have an Uppercase letter in the password');
    return;
   }
   if(!/[a-z]/.test(password)){
    toast.error('Must have an Lowercase letter in the password');
    return;
   }

   emailLogin(email,password)
   .then(result=>{
    toast.success("Registration Successful")
    console.log(result.user)
   })
   .catch(error=>{
    console.log(error.message)
   })


  //  console.log(name,email,password,photoURL)



  }





  return (
    <div className="flex flex-col justify-center items-center">
            <Helmet>
              <title>Nestora | Register</title>
            </Helmet>
      <h1 className="text-4xl font-semibold font-serif">Register</h1>

      <div className=" bg-base-200 w-full max-w-xl shadow-3xl p-30  mt-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}   >
            <label className="label">Name</label>
            <input type="text" className="input"  placeholder="Name"
             {...register("name")} />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email"
             {...register("email", { required: true })} />

            <label className="label">PhotoURL</label>
            <input type='text' className="input" placeholder="PhotoURL"
            {...register("photoURL")} />

            <label className="label">Password</label>
            <div className="relative">
              <input type={showPass?"text":"password"} className="input" placeholder="Password"
            {...register("password", { required: true })} /> 
            <span onClick={()=>setShowPass(!showPass)}  className="absolute -ml-8 mt-3"> 
              {
                 showPass? <VscEyeClosed size={20} >  </VscEyeClosed>  :  <VscEye size={20}></VscEye> 
              }   
               </span>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-green-600 mt-4">Login</button>

            <div className="flex items-center">
                 <p>Already Have Account : </p> <Link to={'/login'}><button className="btn btn-link">Login</button></Link>
            </div>
             {errors.exampleRequired && <span>This field is required</span>}

           
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Register;
