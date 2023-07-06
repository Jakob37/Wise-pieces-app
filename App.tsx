import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [entries, setEntries] = useState([])

  return (
    <View>
      <Text>Hello world!</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'white' }}
        onChangeText={() => {
          console.log('Changing text')
        }}
        value={text}></TextInput>
    </View>
  )
}

export default App
