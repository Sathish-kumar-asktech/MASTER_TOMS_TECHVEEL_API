If Exists(
  Select
    CompanyName
  From
    TblCompanyMst
  Where
    CompanyId not in (@CompanyId)
    and CompanyName = @CompanyName
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblCompanyMst
set
  CompanyName = @CompanyName,
  Address = @Address,
  PinCode = @PinCode,
  City = @City,
  State = @State,
  Country = @Country,
  PhoneNo = @PhoneNo,
  EmailId=@EmailId,
  Bankid=@Bankid,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  CompanyId = @CompanyId
end