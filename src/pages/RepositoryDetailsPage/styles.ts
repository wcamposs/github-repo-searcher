import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFF",
    borderColor: "#E6E6F0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  repositoryContainer: {
    flexDirection: "column",
  },

  repositoryName: {
    alignContent: "center",
    alignItems: "center",
    margin: 10,
    fontFamily: "Archivo_700Bold",
    color: "#000",
    fontSize: 24,
  },

  profile: {
    marginTop: -10,
    marginLeft: -15,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 32,
    marginRight: 5,
    backgroundColor: "#EEE",
  },

  repositoryOwnerContainer: {
    marginLeft: 16,
  },

  repositoryOwner: {
    fontFamily: "Archivo_700Bold",
    color: "#333",
    fontSize: 22,
  },

  repositoryDescription: {
    paddingTop: 15,
    marginHorizontal: 15,
    fontFamily: "Archivo_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});

export default styles;
