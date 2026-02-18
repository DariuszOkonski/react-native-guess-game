import { Text, View, StyleSheet } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>GameScreen</Text>

      {/* GUESS */}

      <View>
        <Text>Higher or lower?</Text>

        {/** + - */}
      </View>

      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: 'yellow',
  },
});
