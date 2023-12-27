If Exists(
  Select
   AccNum
  From
    TblBankMst
  Where
    AccNum = @AccNum
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblBankMst(Bankname,AccNum,IFSCCode,Branch,ActiveStatus, CreatedBy, CreatedDate)
Values
  (@Bankname,@AccNum,@IFSCCode,@Branch,@ActiveStatus, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS Bankid
End