-- replace '/PATH/TO/bookData.csv' with the full path:
COPY book (title, author, genre, pages, publisher) FROM '/Users/ramonesweasel/Desktop/LearnersGuild/phase-3/simple-bookstore/test/seedData.csv'
DELIMITER ',' CSV HEADER;
