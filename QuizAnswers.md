do some queries to fill the tables and retrieve from them:
1- insert 10 different prs from the code index sheet to the tables:
INSERT INTO Pr
(date, selist, id,platform, releaseversion, comment, prlink, size, difficulity, statuslist, reveiwedbyby, reveiwedbyah, reveiwedbyht)
values ('Mon, 09 Mar 2022 13:24:50 GMT', 'BY', 1, 'kh-website', '8.0.10', 'checking', 'git@github.com:m95/mounir=.git', 'medium', 'eamediumsy', 'merged', 'yes', 'no', 'no');
, ('Tue, 10 Mar 2022 10:00:10 GMT', 'BY', 2, 'kh-website', '8.0.11', 'start', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'merged', 'no', 'yes', 'no');
, ('Tue, 10 Mar 2022 11:24:12 GMT', 'AH', 3, 'mobile-client', '6.0.0', 'pending', 'git@github.com:m95/mounir=.git', 'medium', 'easy', 'merged', 'yes', 'yes', 'no');
, ('Tue, 10 Mar 2022 13:24:34 GMT', 'HT', 4, 'kh-website', '8.1.12', 'pending', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'merged', 'yes', 'no', 'yes');
, ('Wed, 11 Mar 2022 12:24:45 GMT', 'BY', 5, 'kh-website', '8.1.13', 'done for first part', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'merged', 'yes', 'yes', 'no');
, ('Wed, 11 Mar 2022 13:24:21 GMT', 'AH', 6, 'kh-website', '8.1.14', 'new request', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'Has Comments', 'yes', 'yes', 'no');
, ('Wed, 11 Mar 2022 15:24:23 GMT', 'BY', 7, 'kh-website', '8.2.0', 'updated', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'Merged', 'yes', 'no', 'no');
, ('Wed, 11 Mar 2022 11:24:50 GMT', 'HT', 8, 'mobile-client', '6.0.1', 'checking', 'git@github.com:m95/mounir=.git', 'easy', 'easy', 'Needs Review', 'no', 'no', 'yes');
, ('Thu, 12 Mar 2022 12:24:11 GMT', 'BY', 9, 'fa-mobile-client', '7.0.1', 'updated', 'git@github.com:m95/mounir=.git', 'easy', 'easy', 'Has Comments', 'yes', 'yes', 'no');
, ('Fri, 13 Mar 2022 16:30:22 GMT', 'AH', 10, 'kh-website', '8.2.1', 'done', 'git@github.com:m95/mounir=.git', 'medium', 'hard', 'Closed', 'yes', 'yes', 'yes');

2- wtire a query to update the status of all the pr that has status Needs Review for more than 10 days to closed.
Update Pr
SET statuslist = 'Closed'
WHERE statuslist = 'Needs Review' AND date < date - INTERVAL 10 day;

3- write a query to retrieve all the close prs.
SELECT \*,
FROM Pr
WHERE statuslist = 'Closed'

4- write a query to retrieve prs on a particular date
SELECT \*,
FROM Pr
WHERE date = 'Wed, 11 Mar 2022 13:24:21 GM'

5- write a query to get the number of prs on each days
SELECT \*, count(\*) as Pr_count
FROM Pr
GROUP BY id
WHERE date = new Date(Date.now()).toUTCString()

6- write a query to retrieve the prs that look more than 2 days to review
SELECT \*
FROM Pr
WHERE statuslist = 'Needs Review' AND date > date - INTERVAL 2 day;
