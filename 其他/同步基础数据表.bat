@echo off
title backup bluewhite
echo rem ******MySQL  change database start******
echo backup date is %date% %time:~0,8%
c:
::sys_menu   sys_base_data
set "tableName=sys_base_data"
set "Ymd=%date:~0,4%%date:~5,2%%date:~8,2%"
cd C:\Program Files\MySQL\MySQL Server 5.7\bin\
mysqldump -h192.168.1.74 -uroot -p1234 bluewhite  %tableName% >C:\Users\Administrator\Desktop\bluewhiteDB\backup\bluewhie74_%Ymd%.sql
if errorlevel 1 (
    color 4
    echo basedata backup fail
) else (
    echo basedata backup success,start restore
    mysql -hlocalhost -uroot -p1234 bluewhite < C:\Users\Administrator\Desktop\bluewhiteDB\backup\bluewhie74_%Ymd%.sql
    if errorlevel 1 (
        color 4
        echo basedata restore fail
    ) else (
        echo basedata restore success,please checkout
    )
)
::forfiles /p "C:\Users\Administrator\Desktop\bluewhiteDB\backup" /m backup_*.sql -d -3 /c "cmd /c del /f @path"
echo rem ******MySQL  change database end******
@echo on
@pause

::%time:~0,2%%time:~3,2%%time:~6,2%
::mysqldump -h192.168.1.74 -uroot -p1234 bluewhite --ignore-table=bluewhite.pro_payb --ignore-table=bluewhite.pro_task >C:\Users\Administrator\Desktop\bluewhite.sql