1- what are the HTTP methods?
The HTTP request methods:
GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH.

2- what are the difference between them?
GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.
POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects
on the server.
PUT
The PUT method replaces all current representations of the target resource with the request payload.
DELETE
The DELETE method deletes the specified resource.
CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.
OPTIONS
The OPTIONS method describes the communication options for the target resource.
TRACE
The TRACE method performs a message loop-back test along the path to the target resource.
PATCH
The PATCH method applies partial modifications to a resource.

3- what is JSON format?
JSON can be defined as a Java Script Object Notation file format that is used for sending, receiving
and storing the data from the same or different systems in a network. It is generally used in
the REST request and response application program interface (API) services, as JSON is uncomplicated
and in a readable format. Its filename extension for written programming code is .json.
The Internet media type for JSON is application/json, and its Uniform Type Identifier is public.json.

4- what are the headers and body in the post call?
HTTP header:
The HTTP headers are used to pass additional information between the clients and the server
through the request and response header. All the headers are case-insensitive, headers fields are
separated by colon, key-value pairs in clear-text string format. The end of the header section denoted
by an empty field header. There are a few header fields that can contain the comments. And a few headers
can contain quality(q) key-value pairs that separated by an equal sign.

HTTP body:
The HTTP body used to pass data between the clients and the server.POST is an HTTP method designed to
send data to the server from an HTTP client. To send data using the HTTP POST method, you must include
the data in the body of the HTTP POST message and specify the MIME type of the data with a Content-Type header.

5- what is the "all" mehtod in express routing?
The router.all() function is just like the router.METHOD() methods, except that it matches all HTTP methods
(verbs). It is very helpful for mapping global logic for arbitrary matches or specific path prefixes.

6- what are the res and req? and how are they useful?
res:
The res is the reponse from server to client, res.send() function basically sends the HTTP response.

req:
The req is the request from the server side to the client side, request is used to get the data in the
server side from body which includes the data.

ex: app.post('/api/update', (req, res) => {
const comm = req.body.comment;
}
const sqlInsert =
'UPDATE Pr SET selist=?, platform=?, releaseVerion=?, comment=?, prlink=?, size=?, difficulity=?, statuslist=?, reveiwedbyby=?, reveiwedbyah=?, reveiwedbyht=? WHERE id=?';
con.query(
sqlInsert,[ comm],function (err, result) {
console.log(result);
if (err) throw err;
res.send(' successfully');

    });

});
