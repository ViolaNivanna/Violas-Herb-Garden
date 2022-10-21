import { useParams } from "react-router-dom";

import ListOfProducts from "../components/products/ListOfProducts";
import ViewedProduct from "../components/products/ViewedProduct";

const ProductDetail = () => {
    const params = useParams();

    const product = ListOfProducts().find(product => product.id === params.productId);

    return (
        <section>
            <ViewedProduct 
                id={product.id} 
                name={product.name} 
                info={product.info} 
                precautions={product.precautions} 
                price={product.price} 
                herbImg={product.herbImg}
            />
        </section>
    );
};

export default ProductDetail;