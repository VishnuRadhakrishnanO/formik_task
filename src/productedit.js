import {Link} from "react-router-dom";
import ProductContext from "./productcontext"
import { useContext,useEffect, useState } from 'react';
export default function ProductEdit(props){
    let ProductData = useContext(ProductContext)
    let [ProductName, setProductName] = useState("")
    let [Productdetails, setProductdetails] = useState("")
    let [Price, setPrice] = useState("")
    let [Productpurchase, setProductpurchase] =useState("")
    let [Productex, setproductex] = useState("")

    let ProductSubmit = async(e) => {
        alert("Product " +props.match.params.id+ "is Upadted")
        e.preventDefault()
        ProductData.setproductList([...ProductData.productList,

            {
                ProductName,
              Productdetails,
              Price,
              Productpurchase,
              Productex
            }] )


            await fetch(`https://5ff9537617386d0017b51c4a.mockapi.io/test/users/${props.match.params.id}`,{

                method :"PUT",
                body : JSON.stringify({
                    ProductName,
                    Productdetails,
                    Price,
                    Productpurchase,
                    Productex
                
                }),
                headers : {
                    "Content-type" : "application/json"
                }
                })

        
    }

    useEffect ( async(e)=>{

        //fetching the data when user list gets loaded
        let Productap = await fetch (`https://5ff9537617386d0017b51c4a.mockapi.io/test/users/${props.match.params.id}`)
        let productDatas = await Productap.json();
        console.log(productDatas)
    },[])

    return<>
    <div className="container">
    
    <form onSubmit={ProductSubmit}>
        <div className="row">
            <div className="col-lg-12">
                <h1>Product {props.match.params.id} Edit  Form</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <label>ProductName</label>
                <input className="form-control" value={ProductName} onChange={(e) => setProductName(e.target.value)}></input>
            </div>
    
            <div className="col-lg-6">
                <label>Product Details</label>
                <input className="form-control" value={Productdetails} onChange={(e) => setProductdetails(e.target.value)}></input>
    
            </div>
        </div>
    
        <div className="row">
            <div className="col-lg-6">
                <label>Price</label>
                <input className="form-control" value={Price} onChange={(e) => setPrice(e.target.value)} ></input>
            </div>
    
            <div className="col-lg-6">
                <label>Product Purchase date</label>
                <input className="form-control" value={Productpurchase} onChange={(e) => setProductpurchase(e.target.value)}></input>
            </div>
            <div className="col-lg-6">
                <label>Product Expires on</label>
                <input className="form-control" value={Productex} onChange={(e) => setproductex(e.target.value)}></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-6">
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </div>
        </div>
    </form>
    </div>
        </>
      
}