import { Fragment } from "react";

import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return (
        <Fragment>
            <ul style={{padding: 0}}>
                {props.products.map((product) => (
                    <ProductItem
                        id={product.id}
                        key={product.id} 
                        name={product.name}
                        description={product.description}
                        info={product.info}
                        precautions={product.precautions}
                        price={product.price} 
                        herbImg={product.herbImg}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default ProductList;