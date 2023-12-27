If Exists(
  Select
   InvoiceNumber
  From
    TblPurchaseInvoice
  Where
    InvoiceNumber = @InvoiceNumber
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblPurchaseInvoice(
    InvoiceNumber,
    InvoiceDate,
    PINumber,
    PIDate,
    Supplierid,
    TotalAmount,
    Discount,
    netAmount,
    Remarks,
    CreatedBy, 
    CreatedDate)
Values
  (@InvoiceNumber,
  @InvoiceDate,
  @PINumber,
  @PIDate,
  @Supplierid,
  @TotalAmount, 
  @Discount,
  @netAmount,
  @Remarks,
  @CreatedBy,
  GETDATE())
SELECT
  SCOPE_IDENTITY() AS PurchaseInvoiceID
End
