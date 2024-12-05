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

              const loginData = await loginResponse.json();

              if (loginResponse.ok && loginData.accessToken){
                  set({ token: loginData.accessToken });

                const logarUsuario = await fetch('https://dummyjson.com/auth/me', {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${loginData.accessToken}`,
                  }, 
                  credentials: 'include'
                })
                
                const logarUsuarioData = await logarUsuario.json()
                
                if(logarUsuario.ok && logarUsuarioData.usuario){
                  set({usuarioLogado: true});
                  set({usuario: usuario});
                  set({senha: senha});
                  set({token: loginData.accessToken});
                  set({avatar: logarUsuarioData.avatar});
                }else{
                  throw new Error("Erro ao fazer login");
                }
              }else{
                set({ mensagemErro: "Credenciais Inválidas"});
              }

        }catch (error) {
          set({ mensagemErro: "Erro ao realizar login" + error.message});
        }
    },
    logout: () => {
      set({usuarioLogado: false, usuario: "", senha: "", token: "", avatar: ""})
    },
    setErrorMessage: (message) => set({ errorMessage: message }),
}));
    
export default useAuthStore;