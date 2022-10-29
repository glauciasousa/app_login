import React , {useState}from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from '../../components/button'
import Input from "../../components/input"

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
      <C.Label>LOGIN</C.Label>
          <Input
            type="email"
            placeholder="Digite o seu Email"
            value={ email }
            onChange= { (e) => [setEmail(e.target.value), setError("")] }
          />          

          <Input
            type="password"
            placeholder="Digite a sua Senha"
            value={ senha }
            onChange= { (e) => [setSenha(e.target.value), setError("")] }
          />

          <C.LabelError>{ error }</C.LabelError>
          <C.LabelSignup>            
            <Button text="Entrar" onClick={ handleLogin }/>
          </C.LabelSignup>
          <C.LabelSignup>
            Não tem umka conta?
            <C.Strong>
              <Link to="/SignUp">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
    </C.Container>
  );    
};

export default Signin;