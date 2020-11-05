import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import 'fontsource-roboto';



function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("Ricardo");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf: {valido:true, texto:""}});

    return (<form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar(nome, sobrenome, cpf, novidades, promocoes);
        }}
    >
        <TextField
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
            }}
            id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

        <TextField
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
            }}
            id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
        <TextField
        value={cpf} 
        onChange={(event) => {
            setCpf(event.target.value);
        }}
        onBlur={(event)=> {
            const ehvalido = validarCPF(event.target.value);
            setErros({cpf: ehvalido});
        }}
        helperText={erros.cpf.texto}
        error={!erros.cpf.valido}
        id="cpf" 
        label="CPF" 
        variant="outlined" 
        fullWidth 
        margin="normal" />

        <FormControlLabel  label="Promoções"  control={<Switch checked={promocoes} onChange={(event) => {
            setPromocoes(event.target.checked);
        }} name="promocoes" color="primary" />} />
        
        <FormControlLabel  label="Novidades" control={<Switch checked={novidades} onChange={(event) => {
            setNovidades(event.target.checked);
        }} name="novidades" color="primary" />} />


        <Button type="submit"
            variant="contained"
            color="primary">Cadastrar</Button>
    </form>);

}

export default FormularioCadastro;