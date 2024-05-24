const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//Condominio
const condominioRouter = require("./routes/condominioRouter");
app.use("/api/condominio",condominioRouter)

//Condomino
const condominoRouter = require("./routes/condominoRouter");
app.use("/api/condomino",condominoRouter)

//Porteiro
const porteiroRouter = require("./routes/porteiroRouter");
app.use("/api/porteiro",porteiroRouter)

//Sindico
const sindicoRouter = require("./routes/sindicoRouter");
app.use("/api/sindico",sindicoRouter)

//Visitante
const visitanteRouter = require("./routes/visitanteRouter");
app.use("/api/visitante",visitanteRouter)

//Reservas
const reservasRouter = require("./routes/reservasRouter");
app.use("/api/reservas",reservasRouter)


//Comunicação
const comunicacaoRouter = require("./routes/comunicacaoRouter");
app.use("/api/comunicacao",comunicacaoRouter)

const routerAuth = require("./routes/authRouter");
app.use("/api/auth", routerAuth);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});