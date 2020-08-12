import React from 'react';

export default ({user}) =>  (
  <div>
    <div className="row justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
      { user.user ? 
        <h3 className="pt-5 text-center text-white">Welcome Back {user.user.email}</h3> 
        : 
        <h3 className="pt-5 text-center text-white">Welcome to SD - O M D B</h3>
      }
      </div>
    </div>
    <div className="row p-5 text-center">
      <div className="col-12 p-5">
        Use the Search Box to find your Movie / Serie
      </div>
      <div className="col-12 p-5">
        You can go through thousands of records
      </div>
    </div>
  </div>
)