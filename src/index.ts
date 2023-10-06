import express, { Express, Request, Response , Application } from 'express'
import firebaseAdmin, { db } from './services/firebase.ts'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

const products: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> = db.collection("products")

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to StockWise')
})

app.get('/get/:productName', async (req: Request, res: Response) => {
  const reqParams = req.params
  const getProducts = await products.doc(reqParams.productName).get()
  if (getProducts.exists) {
    res.status(200).json(getProducts)
  } else {
    res.status(404).json({status: "Not found"})
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
