select
    ROW_NUMBER() over (
        order by
            td.SalesInvoiceID desc
    ) as SNo,
    td.SalesInvoiceID,
    td.InvoiceNumber,
    td.InvoiceDate,
    td.PoRefNumber,
    td.PoRefDate,
    td.TotalAmount,
    td.Discount,
    td.netAmount,
    td.Remarks,
    td.Customerid,
    tsm.CustomerName
from
    TblSalesInvoice as td
    left join TblCustomerMst as tsm on td.Customerid = tsm.Customerid
order by
    td.SalesInvoiceID desc