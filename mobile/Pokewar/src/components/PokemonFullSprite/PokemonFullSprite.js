import React from 'react';
import { Image } from 'react-native';

const PokemonFullSprite = ({ spriteFront, spriteBack, orientation }) => {
    // if orientation is == front then sprite = spriteFront else sprite = spriteBack; 
    let sprite = orientation == "front" ? spriteFront : spriteBack; 
    return <Image source={sprite} resizeMode={"contain"} style={styles.image}/>
}

const styles = {
    image: {
        width: 150 
    }
}; 

export default PokemonFullSprite; 