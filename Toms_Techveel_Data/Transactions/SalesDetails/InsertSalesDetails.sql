insert into
  TblSalesDetails(
    ProductDetailId,
    SalesInvoiceID,
    Quantity,
    Rate,
    Discount,
    netAmount,    
    CreatedBy, 
    CreatedDate
    )
Values
  (
    @ProductDetailId,
    @SalesInvoiceID,
    @Quantity,
    @Rate,
    @Discount,
    @netAmount,
    @CreatedBy, 
    GETDATE()
    )
SELECT
  SCOPE_IDENTITY() AS SalesDetailsID
