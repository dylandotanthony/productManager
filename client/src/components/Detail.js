import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Detail = (props) => {
    const [productMgr, setProductMgr] = useState({})
    const navigate = useNavigate();
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProductMgr(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div>
        <Card style={{ width: '18rem', margin: "10px", marginLeft: "725px" }}>
            <Card.Body >
                <Card.Title>{productMgr.title}</Card.Title>
                    <Card.Text>
                        <p>$ {productMgr.price}</p>
                        <p>{productMgr.description}</p>
                        <button onClick={deleteHandler} ></button>
                    </Card.Text>
            </Card.Body>

        </Card>
        </div>
    );
}
export default Detail;

