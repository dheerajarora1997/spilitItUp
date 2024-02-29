import React from 'react';

interface User {
    name: string;
    email: string;
    phone: string;
    userId: string;
}

interface UserListProps {
    users: User[];
}
const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user:any, index:number) => (
                            <tr key={index}>
                                <td><input type="checkbox" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )

}

export default UserList;