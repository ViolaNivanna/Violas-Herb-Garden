import ProductList from "./ProductList";
import ListOfProducts from "./ListOfProducts";
import classes from "./AllProducts.module.css";

const AllProducts = () => {
    return(
        <section className={classes.theProducts}>
            <h2>Our Products</h2>
            <ProductList products={ListOfProducts()} />
        </section>
    );
};

export default AllProducts;