import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconBookmark, IconComment, IconDots, IconHeart, IconPaper } from '../../../assets';
import { Gap } from '../../atoms';

const Post = ({ profile, name, post }) => {
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.wrapperProfile}>
                    <Image
                        source={{ uri: profile }}
                        style={styles.imageProfile}
                    />
                    <Text style={styles.nameProfile}>{name}</Text>
                </View>
                <IconDots />
            </View>
            <Gap height={8} />
            <View>
                <Image
                    source={{ uri: post }}
                    style={styles.postProfile}
                />
                <View style={styles.wrapperBottom}>
                    <View style={styles.wrapperShare}>
                        <View style={styles.wrapperIcon}>
                            <TouchableOpacity>
                                <IconHeart />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconComment />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconPaper />
                            </TouchableOpacity>
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
                    <Gap height={3} />
                    <Text style={styles.comment}>Tampilkan semua 200 komentar</Text>
                </View>
            </View>
        </>
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
    },
    comment: {
        fontWeight: '100'
    }
})
