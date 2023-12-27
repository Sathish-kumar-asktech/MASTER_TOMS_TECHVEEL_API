If Exists(
  Select
   ProductDescription
  From
    TblProductDescription
  Where
    ProductDescription = @ProductDescription
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblProductDescription(ProductDescription,ProductCategoryid,Rate,UomID,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@ProductDescription,@ProductCategoryid,@Rate,@UomID,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS ProductDetailId
End