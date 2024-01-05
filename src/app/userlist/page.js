import React from 'react'
import getUsers from '../../../services/user';
import Link from 'next/link';


const page = async () => {
    const getUsersList = getUsers();
    const users = await getUsersList;
    console.log(users);

    return (
        <div>
            <h1>User List are Given Below</h1>
            {
                users.map((user) => (
                    <h2 key={user.id} >
                        <Link href={`/userlist/${user.id}`}>{user.name}</Link>
                    </h2>
                ))
            }
        </div >
    )
}

export default page
