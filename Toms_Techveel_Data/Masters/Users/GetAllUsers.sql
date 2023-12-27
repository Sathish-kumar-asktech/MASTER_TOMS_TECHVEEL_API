select
    ROW_NUMBER() over (
        order by
            Userid desc
    ) as SNo,
    Userid,
    UserCode,
    UserName,
    UserPassWord,
    ActiveStatus,
    CreatedBy,
    CreatedDate
from
    TblUserMst
order by
    Userid desc