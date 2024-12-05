import React from "react";
import { router } from "expo-router";
import { Text, View, Image, TouchableHighlight} from "react-native";
import { SearchBar } from "react-native-screens";

const local = () => {
    return (
        <View>
            <Text>Ola mundo</Text>
            <SearchBar></SearchBar>
        </View>
    )
}

export default local;