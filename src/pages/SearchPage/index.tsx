import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
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
import { RepositoryInterface } from "../RepositoryDetailsPage";

// USAR "KEYBOARD AVOIDING VIEW" AO SUBIR O TECLADO

const SearchPage: React.FunctionComponent<RepositoryInterface> = ({
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
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    getPublicRepositories();

    if (!mounted) {
      getPublicRepositories();
    }
  }, [mounted]);

  function getPublicRepositories() {
    setBusy(true);
    api
      .get("repositories")
      .then((response) => setRepositories(response.data))
      .finally(() => {
        setMounted(true);
        setBusy(false);
      });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function handleToggleNavigateToRepositoryDetails(
    repository: RepositoryInterface
  ) {
    navigate("RepositoryDetailsPage", { repository });
  }

  function handleSearchSubmit() {
    if (searchTerm.length === 0) {
      getPublicRepositories();
      setIsFiltersVisible(false);
      return;
    }
    setBusy(true);
    api
      .get(`search/repositories?q=${searchTerm}`)
      .then((response) => setRepositories(response.data.items))
      .finally(() => {
        setBusy(false);
      });

    setIsFiltersVisible(false);
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

      {busy ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={styles.activityIndicator}
        />
      ) : (
        <ScrollView
          style={styles.searchPage}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          {repositories.map((repository: RepositoryInterface) => {
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
      )}
    </View>
  );
};

export default SearchPage;
