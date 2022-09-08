import express from 'express'
import { personalDatas } from './datas'

const app = express()
const PORT = 3001

// CORSを許可する
app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.get('/data', (_, res) => {
	res.send(personalDatas)
})

app.listen(PORT, () => {
	console.log('start server:', `http://localhost:${PORT}/`)
})
