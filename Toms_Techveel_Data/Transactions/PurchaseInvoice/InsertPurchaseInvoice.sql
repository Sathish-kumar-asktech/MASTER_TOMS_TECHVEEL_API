-- IF Exists(
--   Select
--    InvoiceNumber
--   From
--     TblPurchaseInvoice
--   Where
--     PurchaseInvoiceID = @PurchaseInvoiceID
-- ) Begin Raiserror(50001, 16, 3) 
-- Return
-- End
-- else 
-- begin
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
    CreatedDate
    )
Values
  (
  (SELECT COALESCE(Max(InvoiceNumber), 0) + 1 FROM TblPurchaseInvoice),
  @InvoiceDate,
  @PINumber,
  @PIDate,
  @Supplierid,
  @TotalAmount, 
  @Discount,
  @netAmount,
  @Remarks,
  @CreatedBy,
  GETDATE()
  )
SELECT
  SCOPE_IDENTITY() AS PurchaseInvoiceID
-- End
