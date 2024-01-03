Update
  TblSalesInvoice
set
  -- InvoiceNumber = @InvoiceNumber,
  InvoiceDate=@InvoiceDate,
  PoRefNumber = @PoRefNumber,
  PoRefDate=@PoRefDate,
  Customerid=@Customerid,
  TotalAmount=@TotalAmount,
  Discount=@Discount, 
  netAmount=@netAmount,
  Remarks=@Remarks,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  SalesInvoiceID = @SalesInvoiceID