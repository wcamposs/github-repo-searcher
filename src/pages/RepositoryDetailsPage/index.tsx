import React from 'react';
import { View, Text, Image } from 'react-native';

import HeaderComponent from '../../components/HeaderComponent';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export interface RepositoryProps {
    id: number;
    name: string;
    owner: {
        id: number;
        login: string;
    }
    description: string;
}

const RepositoryDetailsPage: React.FunctionComponent<RepositoryProps> = ({ name, owner, description }) => {
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
                        source={{ uri: `http://github.com/${owner.login}.png` }}
                    />

                    <View style={styles.repositoryOwnerContainer} >
                        <Text style={styles.repositoryOwner} >{owner.login}</Text>
                    </View>
                </View>

                <Text style={styles.repositoryName} >{name}</Text>

                <Text style={styles.repositoryDescription} >
                    {description}
                </Text>
            </ScrollView>
        </View>
    );
}

export default RepositoryDetailsPage;


