import React from 'react';
import { Link } from 'react-router-dom';

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
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">
                        ID
                    </th>
                    <th scope="col">
                        NAME
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
                {productsData.map((data) => {
                    console.log(data);
                    return (
                        <tr key={data.id}>
                            <th className="align-middle">{data.id}</th>
                            <td className="align-middle">{data.name}</td>
                            <td className="align-middle">{data.name}</td>
                            <td className="align-middle">{data.name}</td>
                            <td className="align-middle">
                                <a className="btn btn-outline-info">Edit</a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default AdminProductsList;
