import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []); // Added empty array so it only fetches once on mount!

    return (
        <div className='user-container'>
            <div>User Profile</div>
            {users.map((user) => (
                <div key={user.id}> {/* Added unique key prop */}
                    <h2>{user.firstName} {user.lastName}</h2>
                    <label>Age:</label>
                    <span>{user.age}</span>
                    <label>Gender:</label>
                    <span>{user.gender}</span>
                </div>
            ))}
        </div>
    );
}