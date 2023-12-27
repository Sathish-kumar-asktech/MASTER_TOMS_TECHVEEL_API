If Exists(
  Select
    UOM
  From
    TblUomMst
  Where
    UomID not in (@UomID)
    and UOM = @UOM
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblUomMst
set
  UOM = @UOM,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  UomID = @UomID
end