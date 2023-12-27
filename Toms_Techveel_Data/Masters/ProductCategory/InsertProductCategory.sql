If Exists(
  Select
   ProductCategoryName
  From
    TblProductCategory
  Where
    ProductCategoryName = @ProductCategoryName
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblProductCategory(ProductCategoryName,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@ProductCategoryName,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS ProductCategoryid
End