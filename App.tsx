import React, { useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [entries, setEntries] = useState<string[]>(['A', 'B', 'C'])

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'white' }}
        onChangeText={newText => {
          setText(newText)
        }}
        value={text}
        placeholder="Enter your wisdom"></TextInput>
      <Button
        title="Test"
        onPress={() => {
          const currEntries = [...entries]
          currEntries.push(text)
          setEntries(currEntries)
          setText('')
        }}></Button>
      <FlatList
        data={entries}
        renderItem={({ item }) => <Text>{item}</Text>}></FlatList>
    </View>
  )
}

export default App
