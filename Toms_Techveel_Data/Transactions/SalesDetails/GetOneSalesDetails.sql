select 
ROW_NUMBER() over(order by td.SalesDetailsID desc) as SNo,
td.SalesDetailsID,
td.SalesInvoiceID,
td.ProductDetailId,
td.Quantity,
td.Rate,
td.Discount,
td.netAmount,
tpd.ProductDescription,
tpd.ProductCategoryid,
tpd.UomID,
tu.UOM,
tpc.InvoiceNumber, 
pct.ProductCategoryName

from 
TblSalesDetails as td 
left join 
TblSalesInvoice as tpc on td.SalesInvoiceID = tpc.SalesInvoiceID 
left join 
TblProductDescription as tpd on td.ProductDetailId = tpd.ProductDetailId 
left join 
TblUomMst as tu on tpd.UomID = tu.UomID  
left join 
TblProductCategory as pct on tpd.ProductCategoryid = pct.ProductCategoryid 
 
where td.SalesInvoiceID=@SalesInvoiceID