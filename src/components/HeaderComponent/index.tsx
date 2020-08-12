import React, { ReactNode, Children } from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const HeaderComponent: React.FunctionComponent<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Feather name="arrow-left" size={25} color="#FFF" />
        </BorderlessButton>

        <Text style={styles.logoText}>
          Repo
          {"\n"}
          Searcher
        </Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default HeaderComponent;
