import React from 'react';

const TableContent = ({ data, handleEdit }) => {
    if (!data || typeof data !== 'object') {
        return <div>Error: Invalid data</div>;
    }

    return (
        <div>
            {/* <button style={{ float: 'right', marginTop: '10px', marginRight: '10px', }} className="btn btn-info">New</button>
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        {Object.keys(data).length > 0 &&
                            Object.keys(data[Object.keys(data)[0]]).map((key) => (
                                <th key={key} scope="col">
                                    {key.toUpperCase()}
                                </th>
                            ))}
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key, i) => {
                        const rowData = data[key];
                        return (
                            <tr key={i}>
                                {Object.values(rowData).map((value, j) => (
                                    <td key={j} className="align-middle">
                                        {typeof value === 'object' ? JSON.stringify(value) : value}
                                    </td>
                                ))}
                                <td className="align-middle">
                                    <button
                                        className="btn btn-outline-info"
                                        onClick={() => handleEdit(rowData.id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
        </div>
    );
};

export default TableContent;
