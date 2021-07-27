import React, { Component } from "react"; // import from react

import { Window, App, Text, View, Button, Box, CircleButton, Image, TouchableOpacity } from "proton-native"; // import the proton-native components

import { makeAutoObservable, observe } from "mobx"
import { observer } from "mobx-react"
import { exec } from 'child_process'


class Store {

  secondsPassed = 0
  timesClicked = 0

  constructor() {
    makeAutoObservable(this)
  }
}

const store = new Store();

class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 300, height: 350, backgroundColor: "white" }}>
          <View style={{ width: '100%', alignItems: 'center', padding: 16 }}>
            <Text style={{fontSize: 24, marginBottom: 8, fontWeight: 600}}>proton native + mobx test</Text>
            <Button
              style={{ marginBottom: 8 }}
              title="Click me"
              onPress={() => {
                store.timesClicked++;
              }} />
            <Text>Times clicked: {store.timesClicked}</Text>
            <Text>Seconds passed: {store.secondsPassed}</Text>
            <TouchableOpacity
              onPress={() => {
                exec('touch /tmp/clicked');
                console.log('clicked');
              }}>
              <Image
                source={{ uri: "https://secure.gravatar.com/avatar/cef640b4420bd65002ea8919bd9693d6?s=200&r=g" }}
                style={{
                  width: 200,
                  height: 200,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* all your other components go here*/}
        </Window>
      </App>
    );
  }
}

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  store.secondsPassed++;
}, 1000)

export default observer(Example);