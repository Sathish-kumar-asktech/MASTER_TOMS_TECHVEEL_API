If Exists(
  Select
    InvoiceNumber
  From
    TblPurchaseInvoice
  Where
    PurchaseInvoiceID not in (@PurchaseInvoiceID)
    and InvoiceNumber = @InvoiceNumber
) 
Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblPurchaseInvoice
set
  InvoiceNumber = @InvoiceNumber,
  InvoiceDate=@InvoiceDate,
  PINumber = @PINumber,
  PIDate=@PIDate,
  Supplierid=@Supplierid,
  TotalAmount=@TotalAmount,
  Discount=@Discount, 
  netAmount=@netAmount,
  Remarks=@Remarks,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  PurchaseInvoiceID = @PurchaseInvoiceID
end