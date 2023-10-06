import express, { Express, Request, Response , Application } from 'express'
import firebaseAdmin, { db } from '@services/firebase'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

const products: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> = db.collection("products")

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to StockWise')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
