select 
ROW_NUMBER() over(order by td.PurchaseDetailsID desc) as SNo,
td.PurchaseDetailsID,
td.PurchaseInvoiceID,
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
TblPurchaseDetails as td 
left join 
TblPurchaseInvoice as tpc on td.PurchaseInvoiceID = tpc.PurchaseInvoiceID 
left join 
TblProductDescription as tpd on td.ProductDetailId = tpd.ProductDetailId 
left join 
TblUomMst as tu on tpd.UomID = tu.UomID  
left join 
TblProductCategory as pct on tpd.ProductCategoryid = pct.ProductCategoryid 
 
where td.PurchaseInvoiceID=@PurchaseInvoiceID