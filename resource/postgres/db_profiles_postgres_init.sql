CREATE USER msprofile WITH PASSWORD '123456' CREATEDB;
CREATE DATABASE db_ms_profiles
    WITH 
    OWNER = msprofile
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;