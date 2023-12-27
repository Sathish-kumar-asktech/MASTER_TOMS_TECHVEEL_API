select 
ROW_NUMBER() over(order by td.Customerid desc) as SNo,
td.Customerid,
td.CustomerName,
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
TblCustomerMst as td 
order by td.Customerid desc
