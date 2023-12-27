If Exists(
  Select
   ProductDetailId
  From
    TblPurchaseDetails
  Where
    PurchaseDetailsID = @PurchaseDetailsID
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblPurchaseDetails(
    ProductDetailId,
    PurchaseInvoiceID,
    Quantity,
    Discount,
    netAmount,    
    CreatedBy, 
    CreatedDate
    )
Values
  (
    @ProductDetailId,
    @PurchaseInvoiceID,
    @ProductCategoryid,
    @Quantity,
    @netAmount,
    @ActiveStatus,
    @CreatedBy, 
    GETDATE()
    )
SELECT
  SCOPE_IDENTITY() AS PurchaseDetailsID
End