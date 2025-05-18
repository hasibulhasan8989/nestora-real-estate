import  { useContext } from 'react';
import { AuthContext } from '../Layout/AuthProviderComponent';
import { toast, ToastContainer } from 'react-toastify';


const UpdateProfile = () => {

    const {updateUserProfile}=useContext(AuthContext)
     const handleUpdate=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const url=e.target.photo.value
        updateUserProfile(name,url)
        .then(()=>{
            toast.success('Profile Update Successful')
        })
        .catch(error=>{
            toast.error('Create a profile first')
            console.log(error)
        })
    }
    return (
       <div className=" max-w-2xl mx-auto  bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
       <div className='py-20 px-6'>
         <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
        <form   onSubmit={ handleUpdate}  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name='name'
             
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name='photo'
            
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 btn  text-white px-4 py-4 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Save Changes
          </button>
        </form>
       </div>
       <ToastContainer></ToastContainer>
      </div>
    );
};

export default UpdateProfile;