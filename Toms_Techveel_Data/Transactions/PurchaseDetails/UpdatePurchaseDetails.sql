If Exists(
  Select
    ProductDetailId
  From
    TblPurchaseDetails
  Where
    PurchaseDetailsID not in (@PurchaseDetailsID)
    and ProductDetailId = @ProductDetailId
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblPurchaseDetails
set
  ProductDetailId = @ProductDetailId,
  PurchaseInvoiceID=@PurchaseInvoiceID,
  Quantity=@Quantity,
  Rate=@Rate,
  Discount=@Discount,
  netAmount=@netAmount,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  PurchaseDetailsID = @PurchaseDetailsID
end