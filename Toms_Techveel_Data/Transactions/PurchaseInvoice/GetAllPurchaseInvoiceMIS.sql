select 
ROW_NUMBER() over(order by td.PurchaseInvoiceID ) as SNo,
td.PurchaseInvoiceID,
td.InvoiceNumber,
td.InvoiceDate,
td.PINumber,
td.PIDate,
td.TotalAmount,
td.Discount,
td.netAmount,
td.Remarks,
td.Supplierid,
tsm.SupplierName
from 
TblPurchaseInvoice as td 
left join 
TblSupplierMst as tsm on td.Supplierid = tsm.Supplierid 
