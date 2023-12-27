If Exists(
  Select
    SupplierName
  From
    TblSupplierMst
  Where
    Supplierid not in (@Supplierid)
    and SupplierName = @SupplierName
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblSupplierMst
set
  SupplierName = @SupplierName,
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
  Supplierid = @Supplierid
end