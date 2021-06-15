import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MyContext from './MyContext';

const Provider = (props) => {

    const [cars, setCars] = useState({
        car001: { name: 'Honda', price: 100 },
        car002: { name: 'BMW', price: 150 },
        car003: { name: 'Mercedes', price: 200 }
    })
    
    return (
        <MyContext.Provider
            value={{
                cars: cars,
                incrementPrice: selectedID => {
                    var newCars = Object.assign({}, cars);
                    newCars[selectedID].price = newCars[selectedID].price + 1;
                    setCars(newCars)
                },
                decrementPrice: selectedID => {
                    var newCars = Object.assign({}, cars);
                    newCars[selectedID].price = newCars[selectedID].price - 1;
                    setCars(newCars)
                }
            }}
        >
            {props.children}
        </MyContext.Provider>
    )
}


export default Provider;
