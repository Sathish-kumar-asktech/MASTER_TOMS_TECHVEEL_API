If Exists(
  Select
   UOM
  From
    TblUomMst
  Where
    UOM = @UOM
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblUomMst(UOM,ActiveStatus,CreatedBy, CreatedDate)
Values
  (@UOM,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS UomID
End