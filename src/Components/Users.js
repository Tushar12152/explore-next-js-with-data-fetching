'use client'
import React, { useEffect, useState } from 'react';
import style from './Users.module.css'


const Users = () => {
   
    const [users,setUsers]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then (data=>setUsers(data))
    },[])



    return (
        <div>
          <h1 className={style.header_text}>Total users from client side rendaring {users?.length}</h1>

               <div className='mt-10 w-[70%] mx-auto grid grid-cols-3 gap-6'>
                 
                 {
                    users.map(user=><div key={user?.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{user?.name}</h2>
                                <p>{user?.email}</p>                                        
                            </div>
                        </div>
                    </div>)
                 }

               </div>

        </div>
    );
};

export default Users;