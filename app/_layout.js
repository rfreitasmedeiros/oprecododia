import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options= {{headerShown: false,}}></Stack.Screen>
            <Stack.Screen name="telaLogin" options= {{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="telaInicial"></Stack.Screen>
            <Stack.Screen name="cadastro"></Stack.Screen>
            <Stack.Screen name="perfil"></Stack.Screen>
        </Stack>   
    )
}

export default RootLayout;