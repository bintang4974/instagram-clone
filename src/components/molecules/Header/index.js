import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconHeart, IconPaper, IconSearch } from '../../../assets';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Instagram</Text>
            <View style={styles.wrapperIcon}>
                <IconHeart />
                <IconSearch />
                <IconPaper />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24
    },
    wrapperIcon: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'
    }
})
