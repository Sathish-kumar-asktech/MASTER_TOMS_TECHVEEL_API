If Exists(
  Select
    ProductDescription
  From
    TblProductDescription
  Where
    ProductDetailId not in (@ProductDetailId)
    and ProductDescription = @ProductDescription
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblProductDescription
set
  ProductDescription = @ProductDescription,
  ProductCategoryid=@ProductCategoryid,
  Rate=@Rate,
  UomID=@UomID,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  ProductDetailId = @ProductDetailId
end