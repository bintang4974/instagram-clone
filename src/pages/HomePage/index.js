import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap, Header, Post, Story } from '../../components';

const HomePage = () => {
    return (
        <View style={styles.page}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Gap height={20} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.wrapperStory}>
                            <Story image="https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b"
                                name="Ayu Mei"
                            />
                            <Story image="https://mars.nasa.gov/people/images/profile/2x2/mwsmith-23258-profile-hi_20BFFA1F-F1AD-414F-8550C9E61A6CB3B6.jpg"
                                name="Aris Wahyu"
                            />
                            <Story image="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                name="Abidin"
                            />
                            <Story image="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc29yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                name="Aldi Pra"
                            />
                            <Story image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                name="David Cahya"
                            />
                            <Story image="https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/alex/alex-sierra_profile_1536x1152.jpg?mw=400&car=2:2"
                                name="Feryansyah"
                            />
                            <Story image="https://www.catleylakeman.co.uk/assets/img/CATLEY_LAKEMAN-Andy.jpg"
                                name="Anugerah"
                            />
                        </View>
                    </ScrollView>
                </View>
                <Gap height={10} />
                <View style={styles.post}>
                    <Post />
                    <Post />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    page: {
        paddingVertical: 10
    },
    wrapper: {
        paddingHorizontal: 10
    },
    wrapperStory: {
        flexDirection: 'row',
    },
    post: {
        width: '100%'
    }
})
