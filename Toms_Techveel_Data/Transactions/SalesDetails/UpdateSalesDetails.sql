If Exists(
  Select
    ProductDetailId
  From
    TblSalesDetails
  Where
    SalesDetailsID not in (@SalesDetailsID)
    and ProductDetailId = @ProductDetailId
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblSalesDetails
set
  ProductDetailId = @ProductDetailId,
  SalesInvoiceID=@SalesInvoiceID,
  Quantity=@Quantity,
  Rate=@Rate,
  Discount=@Discount,
  netAmount=@netAmount,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  SalesDetailsID = @SalesDetailsID
end