const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const routerAuth = require("./routes/authRouter");
app.use("/api/auth", routerAuth);
const condominioRouter = require("./routes/condominioRouter");
app.use("/api/condominio",condominioRouter)
const condominoRouter = require("./routes/condominoRouter");
app.use("/api/condomino",condominoRouter)
const porteiroRouter = require("./routes/porteiroRouter");
app.use("/api/porteiro",porteiroRouter)
const sindicoRouter = require("./routes/sindicoRouter");
app.use("/api/sindico",sindicoRouter)
const visitanteRouter = require("./routes/visitanteRouter");
app.use("/api/visitante",visitanteRouter)
const reservasRouter = require("./routes/reservasRouter");
app.use("/api/reservas",reservasRouter)
const comunicacaoRouter = require("./routes/comunicacaoRouter");
app.use("/api/comunicacao",comunicacaoRouter)
const AreaRouter = require("./routes/areaRouter");
app.use("/api/Area", AreaRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});