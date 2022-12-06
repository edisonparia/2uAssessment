const mongoose = require("mongoose");

//Schema

const InvoiceSchema = new mongoose.Schema({
  invoice_number: { type: String },
  total: { type: String },
  currency: { type: String },
  invoice_date: { type: Date },
  due_date: { type: Date },
  vendor_name: { type: String },
  remittance_address: { type: String },
  status: { type: Boolean, default: false },
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;
