import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <Container maxWidth="sm" component="article">

   <Typography variant="h3" align="center">Formulario de Cadastro</Typography>
   <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
   </Container>

  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if (cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true, texto:""}

  }
}

export default App;
