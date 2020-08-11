import React from 'react';
import { View, Text, Image } from 'react-native';

import HeaderComponent from '../../components/HeaderComponent';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';


function RepositoryDetailsPage() {
    return (
        <View style={styles.container}>
            <HeaderComponent title="Detalhes do Repositório" />

            <ScrollView 
                style={styles.repositoryContainer}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}    
            >
                <View style={styles.profile}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'http://github.com/wcamposs.png' }}
                    />

                    <View style={styles.repositoryOwnerContainer} >
                        <Text style={styles.repositoryOwner} >wcamposs</Text>
                    </View>
                </View>

                <Text style={styles.repositoryName} >tech-challenge/react-native-tech-challenge</Text>

                <Text style={styles.repositoryDescription} >
                    Tech challenge offered by DeliveryMuch
                    {'\n'}
                    {'\n'}
                    Technologies used:
                    {'\n'}
                    - React native
                    {'\n'}
                    - Expo
                    {'\n'}
                    - Axios

                </Text>
            </ScrollView>
        </View>
    );
}

export default RepositoryDetailsPage;


