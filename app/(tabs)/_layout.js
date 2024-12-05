import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="cadastro"></Tabs.Screen>
            <Tabs.Screen name="perfil"></Tabs.Screen>
            <Tabs.Screen name="telaInicial"></Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout;