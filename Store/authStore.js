import { create } from "zustand";

const useAuthStore =  create((set)=> ({
    usuarioLogado: false,
    usuario: "",
    senha: "",
    token: "",
    mensagemErro: "",
    avatar: "",

    login: async (usuario, senha) =>{
        try {
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: usuario,
                  password: senha, 

                }),
                credentials: 'include'
              })

              const loginData = await loginResponse.json();
              console.log('loginData', loginData);

              if (loginData.accessToken){
                const logarUsuario = await fetch('https://dummyjson.com/auth/me', {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${loginData.accessToken}`, 
                  }, 
                  credentials: 'include'
                })
                
                const logarUsuarioData = await logarUsuario.json();
                console.log('logarUsuarioData', logarUsuarioData);

                
                if(logarUsuarioData && logarUsuario){
                  set({usuarioLogado: true, usuario: usuario, senha: senha, token: loginData.accessToken,
                  avatar: logarUsuarioData.avatar});
                }

              }

        }catch (error) {

        }
    },
    logout: () => set({usuarioLogado: false, usuario: "", senha: "", token: "", avatar: ""}),

}));
    
export default useAuthStore;