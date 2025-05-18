import React, { useContext } from 'react';
import { AuthContext } from '../Layout/AuthProviderComponent';

const UserProfile = () => {

    const {user}=useContext(AuthContext)

   
    return (
        <div className="max-w-2xl mx-auto mt-10 grid grid-cols-1 ">

      {/* User Info Card */}
      <div className="bg-white shadow-xl rounded-2xl py-20 px-6  border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-500"
            src={user.photoURL}
            alt="User Avatar"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.displayName}</h2>
          <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
        </div>
        <div className="mt-6 text-gray-700 space-y-1">
          <p><strong>Phone:</strong> {user?.phone || 'Not available'}</p>
          <p><strong>Address:</strong> {user?.address || 'Not provided'}</p>
          <p><strong>Role:</strong> {user?.role || 'User'}</p>
        </div>
      </div>

      {/* Update Form */}
      
    </div>
    );
};

export default UserProfile;