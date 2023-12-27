If Exists(
  Select
    ProductCategoryName
  From
    TblProductCategory
  Where
    ProductCategoryid not in (@ProductCategoryid)
    and ProductCategoryName = @ProductCategoryName
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblProductCategory
set
  ProductCategoryName = @ProductCategoryName,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  ProductCategoryid = @ProductCategoryid
end