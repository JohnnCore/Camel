import React, { useReducer, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from "../../../../hooks/useProducts";

const initialState = {
    campName: "",
    campPrice: "",
    campImagem: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setFieldValue':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

const AdminProductEdit = () => {
    const {id} = useParams();
    const {editProduct, retriveOneProduct} = useProducts();

    const {productData, productLoading, productError} = retriveOneProduct(id); 
    const {mutate ,error} = editProduct();

    const navigate = useNavigate();
    console.log(productData);
    const [state, dispatch] = useReducer(reducer, initialState);

    const { campName, campImagem, campPrice } = state;


    useEffect(() => {
        if (productData) {
            dispatch({ type: 'setFieldValue', field: 'campName', value: productData.name });
            dispatch({ type: 'setFieldValue', field: 'campPrice', value: productData.price });
        }
    }, [productData]);

    const SendSave = () => {
        const formData = new FormData();
        formData.append("name", campName);
        formData.append("price", campPrice);
        // formData.append("imagem", campImagem);
        formData.append("userId", 1);

        mutate({id, formData});
    };


    const handleInputChange = (field, value) => {
        dispatch({ type: 'setFieldValue', field, value });
    };

 
    return (
        <div className='tabela-centro'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" value={campName} onChange={(e) => handleInputChange('campName', e.target.value)} />
                    </div>
                    <div className="col">
                        <label>Price</label>
                        <input type="number"  step="any" className="form-control" placeholder="Price" value={campPrice} onChange={(e) => handleInputChange('campPrice', e.target.value)} />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => SendSave()}>Submeter</button>
        </div>
    );
}

export default AdminProductEdit;