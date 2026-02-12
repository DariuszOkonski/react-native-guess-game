import { View, StyleSheet, TextInput } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
  },
});
