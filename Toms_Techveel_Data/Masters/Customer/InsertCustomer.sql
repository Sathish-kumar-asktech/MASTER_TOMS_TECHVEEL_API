If Exists(
  Select
   CustomerName
  From
    TblCustomerMst
  Where
    CustomerName = @CustomerName
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblCustomerMst(CustomerName,Address,PinCode,City,State,Country,PhoneNo,EmailId,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@CustomerName,@Address,@PinCode,@City,@State,@Country,@PhoneNo,@EmailId,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS Customerid
End