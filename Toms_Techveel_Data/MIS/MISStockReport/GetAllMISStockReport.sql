select
    ROW_NUMBER() over (
        order by
            pd.ProductDescription
    ) as SNo,
    pd.ProductDescription,
    um.UOM,
    ISNULL (
        (
            select
                sum(td.Quantity) as Inward
            from
                TblPurchaseDetails as td
                left join TblPurchaseInvoice as tpc on td.PurchaseInvoiceID = tpc.PurchaseInvoiceID
                left join TblProductDescription as tpd on td.ProductDetailId = tpd.ProductDetailId
            where
                tpd.ProductDetailId = pd.ProductDetailId
            group by
                tpd.ProductDescription
        ),
        0
    ) as Inward,
    ISNULL (
        (
            select
                sum(td.Quantity) as Outwards
            from
                TblSalesDetails as td
                left join TblSalesInvoice as tpc on td.SalesInvoiceID = tpc.SalesInvoiceID
                left join TblProductDescription as tpd on td.ProductDetailId = tpd.ProductDetailId
            where
                tpd.ProductDetailId = pd.ProductDetailId
            group by
                tpd.ProductDescription
        ),
        0
    ) as Outward
from
    TblProductDescription as pd
    left join TblUomMst as um on um.UomID = pd.UomID