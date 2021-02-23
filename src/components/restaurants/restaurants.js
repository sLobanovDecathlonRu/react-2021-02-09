import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Basket from "../basket/basket";

import styles from './restaurants.module.css';


const Restaurants = ({restaurants}) => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

    const activeRestaurant = useMemo(
        () => restaurants.find(({id}) => id === activeRestaurantId),
        [activeRestaurantId, restaurants]
    );

    return (
        <div>
            <Navigation
                restaurants={restaurants}
                onRestaurantClick={setActiveRestaurant}
            />
            <div className={styles.restaurants}>
                <div className={styles.restarauntBlock}>
                    <Restaurant restaurant={activeRestaurant}/>
                </div>
                <div className={styles.basketBlock}>
                    <Basket/>
                </div>
            </div>
        </div>
    );
};

Restaurants.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default Restaurants;
