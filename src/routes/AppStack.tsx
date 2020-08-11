import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import SearchPage from '../pages/SearchPage';
import LandingPage from '../pages/LandingPage';
import RepositoryDetailsPage from '../pages/RepositoryDetailsPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="LandingPage" component={LandingPage} />
                <Screen name="SearchPage" component={SearchPage} />
                <Screen name="RepositoryDetailsPage" component={RepositoryDetailsPage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;