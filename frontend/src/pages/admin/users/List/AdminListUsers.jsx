import React from 'react';
import TableContent from '../../../../components/Dashboard/TableContent';
import useUsers from '../../../../hooks/useUsers';

const AdminListUsers = () => {
    const { retriveAllUsers } = useUsers();
    const { usersData, usersError, usersLoading } = retriveAllUsers();

    if (usersLoading) {
        return <div>Loading...</div>;
    }

    if (usersError) {
        return <div>Error</div>;
    }

    return (
        <TableContent data={usersData}/>
    );
}
export default AdminListUsers;
