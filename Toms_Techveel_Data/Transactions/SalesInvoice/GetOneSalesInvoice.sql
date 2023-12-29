select 
ROW_NUMBER() over(order by td.SalesInvoiceID desc) as SNo,
td.InvoiceNumber,
td.InvoiceDate,
td.PoRefNumber,
td.PoRefDate,
td.TotalAmount,
td.Discount,
td.netAmount,
td.Remarks,
td.Supplierid,
tsm.SupplierName
from 
TblSalesInvoice as td 
left join 
TblSupplierMst as tsm on td.Supplierid = tsm.Supplierid  
where SalesInvoiceID=@SalesInvoiceID