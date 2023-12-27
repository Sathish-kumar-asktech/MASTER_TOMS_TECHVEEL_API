If Exists(
  Select
   CompanyName
  From
    TblCompanyMst
  Where
    CompanyName = @CompanyName
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblCompanyMst(CompanyName,Address,PinCode,City,State,Country,PhoneNo,EmailId,Bankid,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@CompanyName,@Address,@PinCode,@City,@State,@Country,@PhoneNo,@EmailId,@Bankid,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS CompanyId
End