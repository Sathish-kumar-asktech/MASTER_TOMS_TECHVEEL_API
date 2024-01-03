-- IF Exists(
--   Select
--    InvoiceNumber
--   From
--     TblSalesInvoice
--   Where
--     SalesInvoiceID = @SalesInvoiceID
-- ) Begin Raiserror(50001, 16, 3) 
-- Return
-- End
-- else 
-- begin
insert into
  TblSalesInvoice(
    InvoiceNumber,
    InvoiceDate,
    PoRefNumber,
    PoRefDate,
    Customerid,
    TotalAmount,
    Discount,
    netAmount,
    Remarks,
    CreatedBy, 
    CreatedDate
    )
Values
  (
  (SELECT COALESCE(Max(InvoiceNumber), 0) + 1 FROM TblSalesInvoice),
  @InvoiceDate,
  @PoRefNumber,
  @PoRefDate,
  @Customerid,
  @TotalAmount, 
  @Discount,
  @netAmount,
  @Remarks,
  @CreatedBy,
  GETDATE()
  )
SELECT
  SCOPE_IDENTITY() AS SalesInvoiceID
-- End
