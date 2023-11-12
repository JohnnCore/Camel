import React from 'react';
import { Link } from 'react-router-dom';

import useUsers from '../../hooks/useUsers';

function ListUsers() {
    const { retriveAllUsers } = useUsers();
    const { usersData, usersError, usersLoading } = retriveAllUsers();

    if (usersLoading) {
        return <div>Loading...</div>;
    }

    if (usersError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        #
                    </th>
                </tr>
            </thead>
            <tbody>
                {usersData.map((user) => {
                    console.log(user);
                    return (
                        <tr key={user.id}>
                            <th className="align-middle">{user.id}</th>
                            <td className="align-middle">
                                {user.username}
                                <p style={{ fontSize: "13px" }}>{user.username}</p>
                            </td>
                            <td className="align-middle">{user.username}</td>
                            <td className="align-middle">{user.username}</td>
                            <td className="align-middle">
                                {user.username ? "Ativo" : "Inativo"}
                            </td>
                            <td className="align-middle">
                                <Link
                                    className="btn btn-outline-info"
                                    onClick={(e) => e.stopPropagation()}
                                    to={user.id + "/edit"}
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default ListUsers
