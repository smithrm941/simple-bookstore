-- replace '/PATH/TO/bookData.csv' with the full path:
COPY book (name, author, genre, pages, publisher) FROM '/PATH/TO/bookData.csv'
DELIMITER ',' CSV HEADER;
