select
ROW_NUMBER() over(order by UomID desc) as SNo,
UomID, UOM,ActiveStatus,CreatedBy, CreatedDate
 from 
TblUomMst order by UomID desc