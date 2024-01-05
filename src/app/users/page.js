async function usersList() {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users
}

const page = async () => {
    const users = await usersList();
    // console.log(users);

    return (
        <div>
            <h1>User Details Shown Below :</h1>
            {
                users.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            border: "2px solid black",
                            margin: "20px",
                            textAlign: "center",
                        }}>
                        <h2>Name : {item.firstName}</h2>
                        <h2>Age : {item.age}</h2>
                        <h2>Gender : {item.gender}</h2>
                        <h2>Phone : {item.phone}</h2>
                    </div>

                ))
            }
        </div>
    )
}

export default page
