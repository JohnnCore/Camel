import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import moment from 'moment-timezone';

import './AdminListUsers.css'

const AdminListUsers = () => {
    const { retriveAllUsers } = useUsers();
    const { usersData, usersError, usersLoading } = retriveAllUsers();

    if (usersLoading) {
        return <div>Loading...</div>;
    }

    if (usersError) {
        return <div>Error</div>;
    }

    console.log(usersData);

    return (
        <div className="AdminListUsers">
            <div className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USERNAME</th>
                            {/* <th>PRICE</th> */}
                            {/* <th>USER</th> */}
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((data) => (
                            <tr key={data.id}>
                                <th>{data.id}</th>
                                {/* <td>{moment(data.date).tz('Europe/London').format('YYYY-MM-DD HH:mm:ss')}</td> */}
                                {/* <td>{data.total}</td> */}
                                <td>{data.username}</td>
                                <td>
                                    <a href={`/dashboard/users/${data.id}`}>VIEW</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AdminListUsers;
