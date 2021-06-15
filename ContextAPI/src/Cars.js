import React from 'react';
import { View } from 'react-native';
import MyContext from './MyContext';
import Car from './Car';

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <View>
                {Object.keys(context.cars).map(carID => {
                    return <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                })}
            </View>
        )}
    </MyContext.Consumer>
);

export default Cars;