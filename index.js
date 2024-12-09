import express from 'express'
import {connect} from './config/database.js'
import cors from 'cors'
import { saveInvoice } from './routes/invoiceRoutes.js';

const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;
connect();

app.post('/', saveInvoice)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

