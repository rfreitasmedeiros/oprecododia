import { Tabs } from "expo-router";
import React from "react";
import { Home, User, LayoutGrid, List, MapPin} from "lucide-react-native";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="telaInicial" 
                options=
                {{tabBarIcon: ({focused}) => (<Home size={24} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
            <Tabs.Screen name="addProduto"
            options=
            {{tabBarIcon: ({focused}) => (<LayoutGrid size={24} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
            <Tabs.Screen name="addCategoria" 
            options=
            {{tabBarIcon: ({focused}) => (<List size={24} color={focused ? '#14AE5C' : '#14AE5C'} />)}} >
            </Tabs.Screen>
            <Tabs.Screen name="addLocal" 
            options=
            {{tabBarIcon: ({focused}) => (<MapPin size={24} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>  
            <Tabs.Screen name="perfil" 
            options=
            {{tabBarIcon: ({focused}) => (<User size={24} color={focused ? '#14AE5C' : '#14AE5C'} />)}}>
            </Tabs.Screen>
        </Tabs>
    )
}

export default TabLayout;