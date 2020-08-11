import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function ItemComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.repository}>
                <Text style={styles.repositoryName}>tech-challenge/react-native-tech-challenge</Text>
                <Text style={styles.repositoryOwner}>wcamposs</Text>
            </View>
        </View>
    );
}

export default ItemComponent;