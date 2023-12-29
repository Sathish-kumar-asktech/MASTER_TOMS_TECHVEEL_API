insert into
  TblPurchaseDetails(
    ProductDetailId,
    PurchaseInvoiceID,
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
    @PurchaseInvoiceID,
    @Quantity,
    @Rate,
    @Discount,
    @netAmount,
    @CreatedBy, 
    GETDATE()
    )
SELECT
  SCOPE_IDENTITY() AS PurchaseDetailsID
