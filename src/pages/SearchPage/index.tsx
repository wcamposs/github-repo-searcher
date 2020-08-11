import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, TextInput, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import HeaderComponent from '../../components/HeaderComponent';
import ItemComponent from '../../components/ItemComponent';

import styles from './styles';

// USAR "KEYBOARD AVOIDING VIEW" AO SUBIR O TECLADO

function SearchPage() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const { navigate } = useNavigation();

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    function handleToggleNavigateToRepositoryDetails() {
        navigate('RepositoryDetailsPage');
    }

    async function handleFiltersSubmit() {
        

        setIsFiltersVisible(false);
    }

    return(
        <View style={styles.container} >
            <HeaderComponent 
                title="Buscar Repositórios"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="search" size={20} color="#FFF" />
                    </BorderlessButton>
                )}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Repositório</Text>
                        <TextInput
                            style={styles.input}
                            //value={publicRepo}
                            //onChangeText={text => setPublicRepo(text)}
                            placeholder="Procure por um repositório público"
                            placeholderTextColor="#595857"
                        />

                        <RectButton 
                            //onPress={handleFiltersSubmit} 
                            style={styles.submitButton}>
                            
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}        
            </HeaderComponent>
            
            <ScrollView
                style={styles.searchPage}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TouchableWithoutFeedback onPress={handleToggleNavigateToRepositoryDetails}>
                    <ItemComponent />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={handleToggleNavigateToRepositoryDetails}>
                    <ItemComponent />
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback onPress={handleToggleNavigateToRepositoryDetails}>
                    <ItemComponent />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={handleToggleNavigateToRepositoryDetails}>
                    <ItemComponent />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={handleToggleNavigateToRepositoryDetails}>
                    <ItemComponent />
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}

export default SearchPage;