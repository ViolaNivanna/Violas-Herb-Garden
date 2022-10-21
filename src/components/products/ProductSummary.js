
import classes from './ProductSummary.module.css';

import herbImage from '../../pictures/nightAndDay.jpg';

const ProductSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Gifts from nature to you</h2>
            <div className={classes['main-image']}>
                <img src={herbImage} alt='A violet flower surrounded by green leaves'/>
            </div>
            <p>All the herbs are harvested from nature with respect</p>
        </section>
    );
} 

export default ProductSummary;