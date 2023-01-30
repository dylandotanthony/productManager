import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductMgrList = (props) => {

    const {productMgr, setProductMgr} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        console.log(res.data);
            setProductMgr(res.data);
	})
    .catch((err)=>{
            console.log(err);
    })
    }, [])
    
    return (
        <div>
            {
                productMgr.map((productMgr, index)=>{
                return (
                    <Card key={index} style={{ width: '18rem', margin: "10px", marginLeft: "725px" }}>
                        <Card.Body >
                        <Card.Title>{productMgr.title}</Card.Title>
                        <Card.Text>
                            <p>$ {productMgr.price}</p>
                            <p>{productMgr.description}</p>
                        </Card.Text>
                        <Button variant="outline-secondary"><Link style={{ textDecoration: 'none', color: "black" }} to={`/product/${productMgr._id}`}> Visit {productMgr.title}'s Page! </Link></Button>
                        </Card.Body>

                    </Card>





                    // <div key={index}> 
                    
                    //     <p>{productMgr.title}</p> 
                    //     <p>{productMgr.price}</p>
                    //     <p>{productMgr.description}</p>
                    //     {/* Look to Code Block 3. That :id gets its value right here. 
                    //     Clicking this element will assign the "id" param the value of this document's _id field 
                    //     This will take us to a path similar to "localhost:3000/people/627837837af9898989c9848"  */}
                    //     <Link to={`/product/${productMgr._id}`}> {productMgr.title}'s Page! </Link>
                    // </div> 
                )})
            }
        </div>
    )
}
export default ProductMgrList;

