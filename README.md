What are JOIN, INNER JOIN, LEFT JOIN, RIGHT JOIN? and give an example of where they are usedul.
A join is an SQL operation performed to establish a connection between two or more database tables based on matching columns, thereby creating a relationship between the tables. Most complex queries in an SQL database management system involve join commands. There are different types of joins.
players −
name team_name national
R.klos BGF spanish
Ronaldo AFS france
joniur HHY italian
teams −
name team_name history position age
oliv JUK 1995 goalkeeper 23
R.klos BGF 1992 strikers 33
Ronaldo AFS 1997 defence 28

JOIN / FULL OUTER JOIN: You can think of full outer joins like a union of LEFT JOIN and RIGHT JOIN. This query will return one row for each unique entry that exists in either the right table or the left table.
ex: SELECT players.name, players.team_name, teams.history
FROM players
FULL OUTER JOIN teams on players.team_name = teams.team_name
name team_name history
null null 1995
R.klos BGF 1992
Ronaldo AFS 1997
joniur HHY null

INNER JOIN: It returns only those rows for which entries are present in both the tables.
ex: SELECT players.name, players.team_name, teams.history
FROM players
INNER JOIN teams on players.team_name = teams.team_name
name team_name history
R.klos BGF 1992
Ronaldo AFS 1997

LEFT JOIN: This will include add entries of the left table, irrespective of whether a corresponding entry exists in the right table or not. In the query below, the marks table is the left table.
ex: SELECT players.name, players.team_name, teams.history
FROM players
LEFT JOIN teams on players.team_name = teams.team_name
name team_name history
R.klos BGF 1992
Ronaldo AFS 1997
joniur HHY null

RIGHT JOIN:This will include add entries of the right table, irrespective of whether a corresponding entry exists in the left table or not. In the query below, the student_info table is the left table.
ex: SELECT players.name, players.team_name, teams.history
FROM players
RIGHT JOIN teams on players.team_name = teams.team_name
name team_name history
null null 1995
R.klos BGF 1992
Ronaldo AFS 1997

what is indexing and how do we benefit from it? and when it is necessary?
Indexing: makes columns faster to query by creating pointers to where data is stored within a database.Indexing is a data structure technique which allows you to quickly retrieve records from a database file. An Index is a small table having only two columns. The first column comprises a copy of the primary or candidate key of a table. Its second column contains a set of pointers for holding the address of the disk block where that specific key value stored.
When to use Indexes: Indexes are meant to speed up the performance of a database, so use indexing whenever it significantly improves the performance of your database. As your database becomes larger and larger, the more likely you are to see benefits from indexing.
is it always worth querying between 2 tables to get some data?
it depends on the need and usage of the created query sometimes for getting a single value / data it is enough to get the value/data form one table, but if i need to collect all the data from more than one table i can use query to do this. The query is created to bring the data as our request, as it depends if data needed from one table no need querying between 2 tables else it is needed.
Use MySQL (Here, you need to create the table(s) needed for your app both react and react native).
Plan the needed table(s), their columns, types, etc.
react :
Table 1: PR Table[ 13 columns, (date: varchar(255), seList: varchar(2), id: int, platform: varchar(20), releaseverion: varchar(255), comment: varchar(255), prlink: varchar(255), size: varchar(10), difficulity: varchar(10), statuslist: varchar(10), reveiwedbyby: varchar(3), reveiwedbyah: varchar(3), reveiwedbyht: varchar(10))]
react native :
Table 1: PR Table[ 13 columns, (date: varchar(255), seList: varchar(2), id: int, platform: varchar(20), releaseverion: varchar(255), comment: varchar(255), prlink: varchar(255), size: varchar(10), difficulity: varchar(10), statuslist: varchar(10), reveiwedbyby: varchar(3), reveiwedbyah: varchar(3), reveiwedbyht: varchar(10))]

Prepare the queries to create them.
CREATE TABLE Pr (
date varchar(255),
selist varchar(2),
id INT PRIMARY KEY,
platform VARCHAR(20),
releaseVerion VARCHAR(255) NOT NULL,
comment VARCHAR(255) NOT NULL,
prlink VARCHAR(255) NOT NULL,
size VARCHAR(10),
difficulity VARCHAR(10),
statuslist VARCHAR(15),
reveiwedbyby VARCHAR(3),
reveiwedbyah VARCHAR(3),
reveiwedbyht VARCHAR(3),
);
Send the queries to the dev team to review and run them on the database.
send to be checked.
