import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchScreen

