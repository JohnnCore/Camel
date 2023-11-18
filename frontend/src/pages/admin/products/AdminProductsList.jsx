import React from 'react';
import TableContent from '../../../components/Dashboard/TableContent';
import useProducts from '../../../hooks/useProducts';

const AdminProductsList = () => {
    const { retriveAllProducts } = useProducts();
    const { productsData, productsError, productsLoading } = retriveAllProducts();

    if (productsLoading) {
        return <div>Loading...</div>;
    }

    if (productsError) {
        return <div>Error</div>;
    }

    return (
        <TableContent data={productsData}/>
    );
}
export default AdminProductsList;
