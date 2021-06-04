CREATE USER mshelpdesk WITH PASSWORD '123456' CREATEDB;
CREATE DATABASE db_ms_helpdesk
    WITH 
    OWNER = mshelpdesk 
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;