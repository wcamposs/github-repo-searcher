import React from "react";
import { View, Text } from "react-native";

import { RepositoryInterface } from "../../pages/RepositoryDetailsPage";

import styles from "./styles";

const ItemComponent: React.FunctionComponent<RepositoryInterface> = ({
  repository,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.repository}>
        <Text style={styles.repositoryName}>{repository.name}</Text>
        <Text style={styles.repositoryOwner}>{repository.owner.login}</Text>
      </View>
    </View>
  );
};

export default ItemComponent;
