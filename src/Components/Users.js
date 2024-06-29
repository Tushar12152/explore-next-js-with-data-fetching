'use client'
import React, { useEffect, useState } from 'react';

const Users = () => {
   
    const [users,setUsers]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then (data=>setUsers(data))
    },[])



    return (
        <div>
              Total users from client side rendaring {users?.length}
        </div>
    );
};

export default Users;