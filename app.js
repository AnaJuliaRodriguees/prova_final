const express = require("express");

const app = express();

app.listen(8080, ()=>{
    console.log("servidor iniciado")
});

app.get("/", (req, res)=>{
    res.send("opa")
});

app.get("/informacoes", (req, res)=>{
    const empresa = {nome: "2I", idade:2}
    return res.json(empresa)
});

app.get("/buscar", (req, res)=>{
    const nome = req.query.nome;

 let filtro = clientes.filter((e)=> e.nome == nome);


    return res.json(
       filtro
    );
});

let cliente1 = {nome:"agliberto", email:"ag@gmail"}
let cliente2 = {nome:"aglibert", email:"agl@gmail"}
let cliente3 = {nome:"agliber", email:"agli@gmail"}

let clientes = [cliente1, cliente2, cliente3]

app.get("/listarClientes", (req, res)=>{
    return res.json(clientes)
});

app.post("/salvar", (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    let clienteRecebido = {nome, email};
    clientes.push(clienteRecebido);
    return res.json(clientes);
});


app.put("/editar/:nome", (req, res)=>{
    const parametro = req.params.nome;
    const {email, nome} = req.body;
    let objeto = {nome, email}
    let posicao = clientes.findIndex(el => el. nome == nome);
    clientes[posicao] = objeto;
    return res.json(clientes);
});

app.delete("/deletar/:nome", ()=>{
    const parametro = req.params.nome;
    let posicao = clientes.findIndex(el => el. nome == nome);
    clientes.slice(1, posicao);
    res.send("apagado");
});