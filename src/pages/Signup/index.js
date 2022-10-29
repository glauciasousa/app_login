import React , {useState}from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from '../../components/button'
import Input from "../../components/input"

const Signup = () => {
  const navigate = useNavigate();

  const [nome,           setNome] = useState("");
  const [email,         setEmail] = useState("");
  const [senha,         setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error,         setError] = useState("");

  return (
    <C.Container>
      <C.Content> 
      <C.Label>CRIE SUA CONTA</C.Label>
          <Input
            type="nome"
            placeholder="Digite seu nome completo"
            value={ nome }
            onChange= { (e) => [setNome(e.target.value), setError("")] }
          />

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

          <Input
            type="senhaConf"
            placeholder="Confirme sua Senha"
            value={ senhaConf }
            onChange= { (e) => [setSenhaConf(e.target.value), setError("")] }
          />

          <C.LabelError>{ error }</C.LabelError> 
          <C.ContainerButton>
          <Button text="Registrar" />  
          </C.ContainerButton>
                 
          <C.LabelSignup>       
            Já tem uma conta? 
            <C.Strong>             
              <Link to="/SignIn">&nbsp;Entrar</Link>
            </C.Strong>            
          </C.LabelSignup>
        </C.Content>
    </C.Container>
  );    
};

export default Signup;