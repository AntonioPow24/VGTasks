import express from 'express'
import admin from 'firebase-admin'
import cors from 'cors'
const serviceAccount = {
    "type": "service_account",
    "project_id": import.meta.env.PROJECT_ID,
    "private_key_id": import.meta.env.PRIVATE_KEY_ID,
    "private_key": import.meta.env.PRIVATE_KEY,
    "client_email": import.meta.env.CLIENT_EMAIL,
    "client_id": import.meta.env.CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-btuj2%40vidrieriagaratea.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  


const app = express();

    app.use(cors());
// Inicializar Firebase Admin SDK


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Ruta para obtener la lista de usuarios
app.get('/api/users', async (req, res) => {
  try {
    const userRecords = await admin.auth().listUsers();
    const usersData = userRecords.users.map((userRecord) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      // Otros datos que desees incluir
    }));

    console.log(usersData);
    res.json(usersData);
  } catch (error) {
    console.error("Error al obtener la lista de usuarios:", error);
    res.status(500).json({ error: "Error al obtener la lista de usuarios" });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});