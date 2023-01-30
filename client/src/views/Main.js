import React, { useState } from 'react'
import axios from 'axios';
import ProductMgrForm from '../components/ProductMgrForm';
import ProductMgrList from '../components/ProductMgrList';
const Main = (props) => {
    
    const [productMgr, setProductMgr] = useState([])
    
    return (
        <div>
            <ProductMgrForm productMgr={productMgr} setProductMgr={setProductMgr} />
            <hr/>
            <ProductMgrList productMgr={productMgr} setProductMgr={setProductMgr} />
        </div>
    )
}
export default Main;
