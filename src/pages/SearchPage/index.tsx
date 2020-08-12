import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  BorderlessButton,
  TextInput,
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import HeaderComponent from "../../components/HeaderComponent";
import ItemComponent from "../../components/ItemComponent";

import api from "../../services/api";

import styles from "./styles";
import { RepositoryProps } from "../RepositoryDetailsPage";

// USAR "KEYBOARD AVOIDING VIEW" AO SUBIR O TECLADO

const SearchPage: React.FunctionComponent<RepositoryProps> = ({
  id,
  name,
  owner,
  description,
}) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const { navigate } = useNavigation();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function getPublicRepositories() {
      api
        .get("repositories")
        .then((response) => setRepositories(response.data))
        .finally(() => setMounted(true));
    }

    if (!mounted) {
      getPublicRepositories();
    }
  }, [mounted]);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function handleToggleNavigateToRepositoryDetails(
    repository: RepositoryProps
  ) {
    navigate("RepositoryDetailsPage", { repository });
  }

  function handleSearchSubmit() {
    api
      .get(`search/repositories?q=${searchTerm}`)
      .then((response) => setRepositories(response.data))
      .finally(() => setMounted(true));

    setIsFiltersVisible(false);

    console.log("Search term: ", searchTerm);
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="Buscar Repositórios"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="search" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Repositório</Text>
            <TextInput
              style={styles.input}
              value={searchTerm}
              onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
              placeholder="Procure por um repositório público"
              placeholderTextColor="#595857"
            />

            <RectButton
              onPress={() => handleSearchSubmit()}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Buscar</Text>
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
        {repositories.map((repository: RepositoryProps) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                handleToggleNavigateToRepositoryDetails(repository)
              }
              key={repository.id}
            >
              <ItemComponent repository={repository} />
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchPage;
