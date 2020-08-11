import React from 'react';
import { View, Text } from 'react-native';

import { RepositoryProps } from '../../pages/RepositoryDetailsPage';

import styles from './styles';


const ItemComponent: React.FunctionComponent<RepositoryProps> = ({ repository }) => {
    return (
        <View style={styles.container}>
            <View style={styles.repository}>
                <Text style={styles.repositoryName}>{repository.name}</Text>
                <Text style={styles.repositoryOwner}>{repository.owner.login}</Text>
            </View>
        </View>
    );
}

export default ItemComponent;