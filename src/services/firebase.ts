import * as admin from 'firebase-admin'
import * as serviceAccount from './service-account.json'

const firebaseAdmin: admin.app.App = admin.initializeApp({
   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

export const db: admin.firestore.Firestore = firebaseAdmin.firestore()

export default firebaseAdmin
