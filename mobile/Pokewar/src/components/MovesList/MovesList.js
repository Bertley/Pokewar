import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import CustomText from "../Text/CustomText"; 

/**
 * todo: 
 * import Redux packages 
 * import actions 
 * import helper functions 
 * 
 * */ 
import { connect } from "react-redux"; 
import {
    setOpponentPokemonHealth, 
    removePokemonFromOpponentTeam, 
    setOpponentPokemon, 
    setMove
} from "../../actions"; 

import getMoveEffectivenessAndDamage from "../../helpers/getMoveEffectivenessAndDamage"; 

const MovesList = ({
    moves 
    // access props that were set using mapStateToProps
}) => {
    return (
        <FlatList
            data={moves}
            numColumns={2}
            scrollEnabled={false}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => {
                        /**
                         * todo: 
                         * dispatch action for setting message to display in the message box 
                         * dispatch action for updating the health of the opponent's current Pokemon 
                         * if opponent Pokemon's health goes below 1, dispatch action for removing opponent's current Pokemon from their team 
                        */
                       let {damage} = getMoveEffectivenessAndDamage(
                           item, 
                           opponent_pokemon
                       ); 
                       let health = opponent_pokemon.current_hp - damage; 

                       setOpponentPokemonHealth(opponent_pokemon.team_member_id, health); 

                       if(health < 1) {
                           removePokemonFromOpponentTeam(opponent_pokemon.team_member_id); 
                           setMove("select-move"); 
                           setOpponentPokemon(); 
                       }
                    }}
                >
                    <CustomText style={styles.label}>{item.title}</CustomText>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = {
    container: {
        width: 130,
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center",
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffd43b",
        marginBottom: 10
      },
    label: {
        fontSize: 14
    }
}; 

// todo: add mapStateToProps (opponent_team, pokemon, opponent_pokemon)
const mapStateToProps = ({battle}) => {
    const { opponent_pokemon } = battle; 

    return {
        opponent_pokemon
    }; 
}; 

/**
 * todo: add mapDispatchToProps: 
 * setOpponentPokemonHealth 
 * removePokemonFromOpponentTeam 
 * setOpponentPokemon
 * setMessage
 * setMove
*/
const mapDispatchToProps = dispatch => {
    return {
        setOpponentPokemonHealth: (team_member_id, health) => {
            dispatch(setOpponentPokemonHealth(team_member_id, health)); 
        },

        removePokemonFromOpponentTeam: team_member_id => {
            dispatch(removePokemonFromOpponentTeam(team_member_id)); 
        }, 

        setOpponentPokemon: () => {
            dispatch(setOpponentPokemon()); 
        },

        setMove: move => {
            dispatch(setMove(move)); 
        }
    }; 
}; 

export default MovesList; // todo: convert the component into a connected component 