// src/components/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  
        <div class=" bg-red-500">
          <img src={user.image} alt={user.username} className='w-full' />
        </div>
         
        <div class="">
          <h1 className='text-center'>Personal Information</h1>
          <div className='grid grid-cols md:grid-cols-2 px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <label>First Name:{user?.first_name}</label>
            <label>last Name:{user?.last_name}</label>
            <label>Email:{user?.email}</label>
            <label>Age:{user?.age}</label>
            </div>
            <div className='col-span-2 mt-8'>
              <h1 className='text-center col-span-2'>Address</h1>
                <div className='grid grid-cols-2'>
                <label>street:{user?.address?.street}</label>
            <label>City:{user?.address?.city}</label>
            <label>State:{user?.address?.state}</label>
            <label>Zip code:{user?.address?.zip_code}</label>
                </div>
            </div>

          </div>
        </div>
  
        </div>
        
        
  );
};

export default UserProfile;
// first_name
// last_name
// email
// age
// address
// street
// city
// state
// zip_code