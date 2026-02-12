import { View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    backgroundColor: 'green',
  },
});
