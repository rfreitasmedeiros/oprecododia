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
                  username: usuario, //'emilys',
                  password: senha, //'emilyspass',

                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
              })

              const loginData = await loginResponse.json()
              console.log('loginData', loginData);

             // if (loginData.message != "" || loginData.message != undefined){
             //   console.log('ERRO:',loginData.message);
             //  set ({mensagemErro: `ocorreu um erro: ${loginData.message}`});
             // }

              if (loginData.accessToken){
                const logarUsuario = await /* providing accessToken in bearer */
                fetch('https://dummyjson.com/auth/me', {
                  method: 'GET',
                  headers: {
                    'Authorization': 'Bearer' + loginData.accessToken, // Pass JWT via Authorization header
                  }, 
                  credentials: 'include' // Include cookies (e.g., accessToken) in the request
                })
                
                const logarUsuarioData = await logarUsuario.json()
                
                if(logarUsuarioData.ok){
                  set({usuarioLogado: true, usuario: usuario, senha: senha, token: loginData.accessToken,
                  avatar: logarUsuarioData.avatar});
                }

              }

        }catch (error) {

        }
    },
    logout: () => set({usuarioLogado: false, usuario: "", senha: "", token: ""}),

}));
    
export default useAuthStore;