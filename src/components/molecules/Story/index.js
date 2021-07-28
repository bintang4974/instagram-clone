import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Story = ({ image, name }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wrapperImage}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapperImage: {
        width: 76,
        height: 76,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#e056fd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6
    },
    image: {
        width: 66,
        height: 66,
        borderRadius: 50,
    },
    name: {
        fontSize: 13,
        fontWeight: '600'
    }
})
