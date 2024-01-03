import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../env'; // Importa la configuración desde env.ts

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);