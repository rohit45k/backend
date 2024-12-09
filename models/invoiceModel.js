import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  gstin: { type: String, required: true },
  contact: { type: String, required: false },
  email: { type: String, required: false },
});

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const InvoiceSchema = new mongoose.Schema({
  sender: { type: CompanySchema, required: true },
  receiver: { type: CompanySchema, required: true },
  items: { type: [ItemSchema], required: true },
  gstRate: { type: Number, required: true, default: 18 },
  subTotal: { type: Number, required: true },
  igst: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  roundOff: { type: Number, required: true},
  date: { type: Date, default: Date.now },
});


const InvoiceModel =  new mongoose.model('Invoice', InvoiceSchema)
export default InvoiceModel;
