select 
ROW_NUMBER() over(order by ProductCategoryid desc) as SNo,
ProductCategoryid,
ProductCategoryName,ActiveStatus,CreatedBy, CreatedDate
 from 
TblProductCategory order by ProductCategoryid desc