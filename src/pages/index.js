import React, {useState} from "react";
//import Input from "../../components/Input";
import Button from "../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if(email !== emailConf) {
      setError("Os emails não são iguais")
      return;
    }  

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  }


  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
          <input
            type="email"
            placeholder="Digite o seu Email"
            value={ email }
            onChange= { (e) => [setEmail(e.target.value), setError("")] }
          />

          <input
            type="email"
            placeholder="Confirme seu Email"
            value={ emailConf }
            onChange= { (e) => [setEmailConf(e.target.value), setError("")] }
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={ senha }
            onChange= { (e) => [setSenha(e.target.value), setError("")] }
          />
          <C.LabelError>{ error }</C.LabelError>

          <Button Text="Entrar" onClick={ handleSignup }/>

          <C.LabelSignup>
            Já tem uma conta?
            <C.Strong>
              <Link to="/">&nbsp;Entre</Link>
            </C.Strong>
          </C.LabelSignup>
      </C.Content> 
    </C.Container>
  );   
};

export default Signup;

