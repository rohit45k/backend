
import InvoiceModel from "../models/invoiceModel.js";

export const saveInvoice = async (req, res) => {
    try {
        const { sender, receiver, items, gstRate } = req.body;

        const subTotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
        const igst = subTotal * (gstRate / 100);
        const grandTotal = subTotal + igst;
        const roundOff = Math.floor(grandTotal);

        const invoice = new InvoiceModel({
            sender,
            receiver,
            items: items.map((item) => ({
                ...item,
                amount: item.quantity * item.rate,
            })),
            gstRate,
            subTotal,
            igst,
            grandTotal,
            roundOff,
        });

        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
