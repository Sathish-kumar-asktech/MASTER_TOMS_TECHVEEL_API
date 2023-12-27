select 
td.ProductDetailId,
td.ProductDescription,
td.ProductCategoryid,
tpc.ProductCategoryName, 
td.Rate,
td.UomID,
tu.UOM,
td.ActiveStatus
from 
TblProductDescription as td 
left join 
TblProductCategory as tpc on td.ProductCategoryid = tpc.ProductCategoryid 
left join 
TblUomMst as tu on td.UomID = tu.UomID   
where ProductDetailId=@ProductDetailId