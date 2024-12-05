import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="telaInicial"></Tabs.Screen>
            <Tabs.Screen name="addProduto"></Tabs.Screen>
            <Tabs.Screen name="addCategoria"></Tabs.Screen>
            <Tabs.Screen name="addLocal"></Tabs.Screen>  
            <Tabs.Screen name="perfil"></Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout;