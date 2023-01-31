import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductMgrList = (props) => {

    const {productMgr, setProductMgr} = props;
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        console.log(res.data);
            setProductMgr(res.data);
	})
    .catch((err)=> console.log(err));
    }, [])
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log(res.data);
                const newList = productMgr.filter((product, index) => product._id !== productId)
                setProductMgr(newList);
            })
            .catch((err) => {console.log(err);
    });
}
    return (
        <div >
            <h1 style={{ textAlign: "center", margin: "15px" }}>Product Management</h1>
            {
                productMgr.map((product, index)=>(
                    <div key={index} style={{ width: '18rem', margin: "10px", marginLeft: "725px" }}>
                        <Link style={{ margin: '10px', textDecoration: 'none', color: "black" }} to={`/product/${product._id}`}>{product.title} </Link>
                        <br />
                        <button style={{ margin: '10px', textDecoration: 'none', color: "black" }} 
                        onClick={() => navigate(`/product/edit/${product._id}`)}> 
                        edit
                        </button>
                        <button style={{ margin: '10px', textDecoration: 'none', color: "black" }} onClick={() => deleteProduct(product._id)} >
                            Delete 
                        </button>
                    </div>
                ))
                }
        </div>

    );
};
export default ProductMgrList;

