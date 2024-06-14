import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue' : 'red',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <>
            {pressed && <Text style={styles.text}>Pressed!</Text>}
            {!pressed && <Text style={styles.text}>Press Me</Text>}
          </>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text style={styles.text} testID="pressable_press_console">
          {textLog}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    backgroundColor: 'black',
  },
});

export default App;
