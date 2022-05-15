import { StyleSheet, Text, View } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.nav}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#2c2c2c",
    height: 50,
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "#f1f1f1",
  },
});

export default Header;
