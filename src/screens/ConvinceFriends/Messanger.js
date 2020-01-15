import React, { useState } from 'react';
import sample from 'lodash/sample';
import without from 'lodash/without';
import { Text, Button } from 'native-base';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Header } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import MainLayout from 'components/layouts/MainLayout.js'


const Messanger = (props) => {
  const topic = props.navigation.state.params.topic;
  const [value, onChangeText] = useState(topic.defaultMessages[0]);

  const changeDefaultMsg = () => onChangeText(
    sample(
      without(topic.defaultMessages, value)
    )
  )

  return (
    <MainLayout>
      <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} enabled style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>
            Let's convince your friends who value:
          </Text>
          <Text style={styles.text}>
            {topic.title}
          </Text>
          <TextInput
            style={styles.textInput}
            multiline
            onChangeText={text => onChangeText(text)}
            value={value}
            maxLength={2000}
          />
          <Button
            block
            light
            full
            large
            style={styles.button}
            onPress={changeDefaultMsg}
          >
            <Text>Pick another msg</Text>
          </Button>
          <Button block light full large style={styles.button}>
            <Text>Send</Text>
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT + 20} style={styles.container} behavior="padding" keyboardVerticalOffset={20} > */}
      {/* <KeyboardAwareScrollView extraHeight={180} style={{ borderWidth: 2, borderColor: 'red' }}>
          <View style={{ borderWidth: 2, borderColor: 'blue', height: 800 }}>
            <Text style={styles.text}>
              Let's convince your friends who value:
            </Text>
            <Text style={styles.text}>
              {topic.title}
            </Text>
            <TextInput
              style={styles.textInput}
              multiline
              onChangeText={text => onChangeText(text)}
              value={value}
              maxLength={2000}
            />
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
            <Button block light full large>
              <Text>Let's do it</Text>
            </Button>
          </View>
        </KeyboardAwareScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </MainLayout>
  )
}

Messanger.navigationOptions = {
  title: 'Convince Friends',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  text: {
    marginTop: 20,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  textInput: {
    flexGrow: 1,
    // height: 300,
    marginTop: 40,
    marginBottom: 40,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    textAlignVertical: 'top'
  },
  button: {
    marginBottom: 20
  }
});

export default Messanger;
