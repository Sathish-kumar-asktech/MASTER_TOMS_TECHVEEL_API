Update
  TblSalesInvoice
set
  -- InvoiceNumber = @InvoiceNumber,
  InvoiceDate=@InvoiceDate,
  PoRefNumber = @PoRefNumber,
  PoRefDate=@PoRefDate,
  Supplierid=@Supplierid,
  TotalAmount=@TotalAmount,
  Discount=@Discount, 
  netAmount=@netAmount,
  Remarks=@Remarks,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  SalesInvoiceID = @SalesInvoiceID