import { useState } from "react";
import useUsers from "../../hooks/useUsers";
import useAuth from "../../hooks/useAuth";

import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { useLoginUser } = useUsers();

    const { mutateAsync, error, data, isSuccess } = useLoginUser();

    const { dispatch, REDUCER_ACTIONS } = useAuth();

    const sendLogin = async (e) => {

        e.preventDefault();
        
        const datapost = {
            username: username,
            password: password,
        }


        const token = await mutateAsync({ datapost })
        dispatch({type: REDUCER_ACTIONS.SET_TOKEN, payload:{token} })
        console.log(token);
    };

    return (
        <form method="POST">
            {0 === 1 ? (
                // Renderizar se o usuário estiver logado
                <p>Você está logado!</p>
            ) : (
                // Renderizar o formulário de login ou mensagem de erro
                <div>
                    <div className="Login">
                        <div className="login-card">
                            <h1>Login</h1>
                            <div className="input-group">
                                <label>Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button className="login-button" onClick={(e) => sendLogin(e)}>
                                Login
                            </button>
                        </div>
                    </div>

                    {error && (
                        // Exibe a mensagem de erro se houver um erro
                        <p style={{ color: 'red' }}>Erro ao fazer login. Tente novamente.</p>
                    )}
                </div>
            )}
        </form>
    );
};

export default Login;