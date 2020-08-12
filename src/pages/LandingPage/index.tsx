import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

function LandingPage() {
  const { navigate } = useNavigation();

  function handleNavigateToSearchPage() {
    navigate("SearchPage");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Github
        {"\n"}
        Repo Searcher
      </Text>

      <Text style={styles.subtitle}>
        Clique no botão abaixo e procure
        {"\n"}
        por respositórios públicos
      </Text>

      <View style={styles.buttonContainer}>
        <RectButton onPress={handleNavigateToSearchPage} style={styles.button}>
          <Text style={styles.buttonText}>Procurar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default LandingPage;
