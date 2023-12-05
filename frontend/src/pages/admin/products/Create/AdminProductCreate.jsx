import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import useProducts from "../../../../hooks/useProducts";

import './AdminProductCreate.css'

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

const AdminProductCreate = () => {
    const { createProduct } = useProducts();
    const { mutate, error } = createProduct();

    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    const { campName, campImage, campPrice } = state;



    const SendSave = () => {
        const formData = new FormData();
        formData.append("name", campName);
        formData.append("price", campPrice);
        formData.append("imagem", campImage);
        formData.append("userId", 1);

        mutate({ formData });
    };

    const handleInputChange = (field, value) => {
        dispatch({ type: 'setFieldValue', field, value });
    };


    return (
        <div className="AdminProductCreate">
            <div className="form-card">
                <div className="form-group">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            value={campName}
                            onChange={(e) => handleInputChange('campName', e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            type="number"
                            step="any"
                            placeholder="Price"
                            value={campPrice}
                            onChange={(e) => handleInputChange('campPrice', e.target.value)}
                        />
                    </div>
                    <div className="file-input-container">
                        <label className="file-input-label">Image</label>
                        <div className="file-input-display">
                            {campImage && <img src={campImage} alt="Selected" />}
                            <input
                                type="file"
                                className="file-input"
                                onChange={(e) => handleInputChange('campImage', URL.createObjectURL(e.target.files[0]))}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            placeholder="Description"
                            // value={campDescription}
                            // onChange={(e) => handleInputChange('campDescription', e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" onClick={SendSave}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AdminProductCreate;