const router = require("express").Router();

//import todo model
const InvoiceModel = require("../models/Invoice");

// get data from database
router.get("/invoice/pending", (req, res) => {
  InvoiceModel.find({ status: false }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.get("/invoice/approved", (req, res) => {
  InvoiceModel.find({ status: true }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
// add invoice to database
router.post("/invoice/new", (req, res) => {
  const newInvoice = new InvoiceModel({
    invoice_number: req.body.invoice_number,
    total: req.body.total,
    currency: req.body.currency,
    invoice_date: req.body.invoice_date,
    due_date: req.body.due_date,
    vendor_name: req.body.vendor_name,
    remittance_address: req.body.remittance_address,
  });
  //save this item in database
  newInvoice.save((err) => {
    if (!err) {
      res.send("Invoice submitted successfully.");
    } else {
      res.send(err);
    }
  });
});

// Get Invoice to approve
router.get("/invoice/update/:id", async (req, res) => {
  const invoice = await InvoiceModel.findById(req.params.id);
  invoice.status = !invoice.status;

  invoice.save((err) => {
    if (!err) {
      res.send("Invoice updated successfully.");
    } else {
      res.send(err);
    }
  });

  //res.json(invoice)
});

module.exports = router;
