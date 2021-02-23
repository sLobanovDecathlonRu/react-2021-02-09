import React from 'react';
import {connect} from 'react-redux';
import Product from '../product';

import styles from './basket.module.css';


const Basket = ({order, restaurants}) => {
    const products = restaurants.flatMap((restaurant) => restaurant.menu);
    const productsInBasket = products.filter((product) => {
        if (order.hasOwnProperty(product.id)) return product;
    });
    return (
        <div className={styles.basket}>
            {productsInBasket.length
                ? productsInBasket.map((product) => (
                    <Product key={product.id} product={product} isBasketBlock/>
                ))
                : 'Ваша корзина пуста!'}
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    order: state.order || {},
    restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Basket);
