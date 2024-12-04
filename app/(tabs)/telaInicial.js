import React from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import useAuthStore from "../../Store/authStore";

const inicio = () => {

    return (
        <View>
            <View>
                <Text style={{color: 'purple'}}>ola mundo</Text>
            </View>
        </View>
    )
}

export default inicio;