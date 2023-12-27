If Exists(
  Select
    AccNum
  From
    TblBankMst
  Where
    Bankid not in (@Bankid)
    and AccNum = @AccNum
) 

Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblBankMst
set
  Bankname = @Bankname,
  AccNum = @AccNum,
  IFSCCode = @IFSCCode,
  Branch = @Branch,
  ActiveStatus=@ActiveStatus,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  Bankid = @Bankid
end