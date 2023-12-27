If Exists(
  Select
   SupplierName
  From
    TblSupplierMst
  Where
    SupplierName = @SupplierName
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblSupplierMst(SupplierName,Address,PinCode,City,State,Country,PhoneNo,EmailId,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@SupplierName,@Address,@PinCode,@City,@State,@Country,@PhoneNo,@EmailId,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS Supplierid
End