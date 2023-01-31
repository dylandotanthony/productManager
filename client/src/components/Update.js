import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setHeaderTitle(res.data.title);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,    
            price, 
            description     
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Update {headerTitle}t</Card.Title>
                    <Form onSubmit={updateProduct}>
                        <Form.Group  controlId="formBasictitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" value={title}  type="text" placeholder="Enter Title" onChange = {(e)=>setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group  controlId="formBasicprice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" value={price}  type="text" placeholder="Enter Price" onChange = {(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                        <Form.Group  controlId="formBasictitle">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" value={description} type="text" placeholder="Enter Description" onChange = {(e)=>setDescription(e.target.value)}/>
                        </Form.Group>
                        <Button style={{ margin: '10px' }} variant="outline-success" type="submit" value="update"> Update </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Update;

