import React from 'react';

const Page = () => {
  return (
    <div>
      <h1>Dashboard users</h1> 

      <ul className='mt-10'>
        <li><a href="/dashboard/users/1">User 1</a></li>
        <li><a href="/dashboard/users/2">User 2</a></li>
        <li><a href="/dashboard/users/3">User 3</a></li>
        <li><a href="/dashboard/users/4">User 4</a></li>
      </ul>      
    </div>
  );
};

export default Page;
