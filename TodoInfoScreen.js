import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontWeight: "bold" }}>DATUM: 2024-12-3</Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <Button title="Remove" />
      </View>
    </View>
  );
};

//Route passing params navigation
export default function TodoInfoScreen({ route }) {
  const id = route.params;
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 40 }}>Description</Text>
        <Text>{id}</Text>
      </View>
      <Button title="Done" color="green" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    height: 60,
    backgroundColor: "#50E8FF",
  },
});
