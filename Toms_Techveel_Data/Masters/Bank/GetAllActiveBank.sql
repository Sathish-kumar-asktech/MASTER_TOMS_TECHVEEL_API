select ROW_NUMBER() over(order by Bankid desc) as SNo,
Bankid,Bankname,AccNum,IFSCCode,Branch,ActiveStatus, CreatedBy, CreatedDate from 
TblBankMst where ActiveStatus = 'y' order by Bankid desc