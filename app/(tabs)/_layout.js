import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="telaInicial"></Tabs.Screen>
            <Tabs.Screen name="telaLogin" options= {{headerShown: false}}></Tabs.Screen>
            <Tabs.Screen name="perfil"></Tabs.Screen>
            <Tabs.Screen name="cadastro"></Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout;