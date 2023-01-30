import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductMgr= () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,    // this is shortcut syntax for firstName: firstName,
            price,
            description      // this is shortcut syntax for lastName: lastName
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Product Manager</Card.Title>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group  controlId="formBasictitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" onChange = {(e)=>setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group  controlId="formBasicprice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" onChange = {(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                        <Form.Group  controlId="formBasictitle">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" onChange = {(e)=>setDescription(e.target.value)}/>
                        </Form.Group>
                        <Button style={{ margin: '10px' }} variant="outline-success" type="submit" > Create </Button>
                    </Form>
                </Card.Body>
            </Card>




        </div>
    )
}
export default ProductMgr;

