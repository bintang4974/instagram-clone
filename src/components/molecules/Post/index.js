import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IconBookmark, IconComment, IconDots, IconHeart, IconPaper } from '../../../assets';
import { Gap } from '../../atoms';

const Post = () => {
    return (
        <View>
            <View style={styles.wrapper}>
                <View style={styles.wrapperProfile}>
                    <Image
                        source={{ uri: 'https://www.catleylakeman.co.uk/assets/img/CATLEY_LAKEMAN-Andy.jpg' }}
                        style={styles.imageProfile}
                    />
                    <Text style={styles.nameProfile}>Anugerah</Text>
                </View>
                <IconDots />
            </View>
            <Gap height={8} />
            <View>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc29yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={styles.postProfile}
                />
                <View style={styles.wrapperBottom}>
                    <View style={styles.wrapperShare}>
                        <View style={styles.wrapperIcon}>
                            <IconHeart />
                            <IconComment />
                            <IconPaper />
                        </View>
                        <IconBookmark />
                    </View>
                    <Gap height={4} />
                    <View style={styles.like}>
                        <Text>Liked by</Text>
                        <Text style={styles.bold}>dark_emeralds</Text>
                        <Text>and</Text>
                        <Text style={styles.bold}>others</Text>
                    </View>
                    <Gap height={4} />
                    <View style={styles.desc}>
                        <Text style={styles.bold}>Anugerah</Text>
                        <Text> Like this feeling</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20
    },
    wrapperProfile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageProfile: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    nameProfile: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    postProfile: {
        height: 300,
    },
    wrapperIcon: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        marginTop: 4
    },
    wrapperBottom: {
        paddingHorizontal: 10
    },
    wrapperShare: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    like: {
        flexDirection: 'row',
        width: 220,
        justifyContent: 'space-between',
    },
    bold: {
        fontWeight: 'bold'
    },
    desc: {
        flexDirection: 'row',
    }
})
