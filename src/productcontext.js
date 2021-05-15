import React,{useState} from "react";
let ProductContext = React.createContext();
export default ProductContext;

//creating provider fro the product
export const ProductProvider= ({children}) => { 
   
    let [productList, setproductList] = useState([]) // creating useState for the userlist
   
    return <ProductContext.Provider value={{productList, setproductList}} > 
{children}
</ProductContext.Provider> 
}