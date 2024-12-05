import { Tabs } from "expo-router";
import React from "react";
import { Home, User, LayoutGrid, List, MapPin, AlignCenter} from "lucide-react-native";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="telaInicial" 
                options= 
            {{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (<Home size={30} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
            <Tabs.Screen name="addProduto"
            options=
            {{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (<LayoutGrid size={30} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
            <Tabs.Screen name="addCategoria" 
            options=
            {{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (<List size={30} color={focused ? '#14AE5C' : '#14AE5C'} />)}} >
            </Tabs.Screen>
            <Tabs.Screen name="addLocal" 
            options=
            {{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (<MapPin size={30} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>  
            <Tabs.Screen name="perfil" 
            options=
            {{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (<User size={30} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout;