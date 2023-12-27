select 
ROW_NUMBER() over(order by td.Supplierid desc) as SNo,
td.Supplierid,
td.SupplierName,
td.Address,
td.PinCode,
td.City,
td.State,
td.Country,
td.PhoneNo,
td.EmailId,
td.CreatedDate,
td.CreatedBy,
td.ActiveStatus
from 
TblSupplierMst as td 
order by td.Supplierid desc
