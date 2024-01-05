import React from 'react'
import getUsers from '../../../../services/user'

const page = async ({ params }) => {
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = params.userid;
    const userData = users[currentId - 1];
    console.log(users[currentId - 1]);

    return (
        <div>
            <h1> User Details Page</h1>
            <h4> ID : {userData.id}</h4>
            <h4>Name : {userData.name}</h4>
            <h4>Email : {userData.email}</h4>
        </div>
    )
}

export default page

export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user => ({
        userid: user.id.toString()
    }))
}
