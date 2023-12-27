If Exists(
  Select
    CustomerName
  From
    TblCustomerMst
  Where
    Customerid not in (@Customerid)
    and CustomerName = @CustomerName
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblCustomerMst
set
  CustomerName = @CustomerName,
  Address = @Address,
  PinCode = @PinCode,
  City = @City,
  State = @State,
  Country = @Country,
  PhoneNo = @PhoneNo,
  EmailId=@EmailId,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  Customerid = @Customerid
end