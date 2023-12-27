select 
td.CompanyId,
td.CompanyName,
td.Address,
td.PinCode,
td.City,
td.State,
td.Country,
td.Bankid,
tb.Bankname,
td.PhoneNo,
td.EmailId,
td.CreatedDate,
td.CreatedBy,
td.ActiveStatus
from 
TblCompanyMst as td 
TblBankMst as tb on td.Bankid = tb.Bankid    
order by td.CompanyId desc
