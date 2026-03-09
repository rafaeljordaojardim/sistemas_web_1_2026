const express = require("express")

// curl -v http://localhost:3000/alunos
// curl -X POST http://localhost:3000/alunos \
// -H "Content-Type: application/json" \
// -d '{"nome":"Joao"}'

const app = express()

app.use(express.json())

let alunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" }
]

app.get("/alunos", (req, res) => {
  return res.json(alunos)
})

app.post("/alunos", (req, res) => {

  const novoAluno = {
    id: alunos.length + 1,
    nome: req.body.nome
  }

  alunos.push(novoAluno)

  return res.status(201).json(novoAluno)
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})