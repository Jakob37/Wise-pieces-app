import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [entries, setEntries] = useState<string[]>(['A', 'B', 'C'])

  return (
    <View>
      <Text>Hello world!</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'white' }}
        onChangeText={() => {
          console.log('Changing text')
        }}
        value={text}
        placeholder="Enter your wisdom"></TextInput>
      <FlatList
        data={entries}
        renderItem={({ item }) => <Text>{item}</Text>}></FlatList>
    </View>
  )
}

export default App
