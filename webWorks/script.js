/*
What is HTTP?
Hyper Text Transfer Protocol, its how computers
communicate with eachother

What is a URL?
The address of a webpage

What is DNS?
Domain Name Service is how we convert hostname
into IP adress

What is a Query string?
Provides extra information when making a request

What are the two HTTP verbs?
GET allows us to get information without side affects
POST allows us to submit changes

What is an HTTP request?
browser is requesting all the needed info
to run the site

What is an HTTP response?
Server sends requested information back to browser

What is an HTTP header?

HTTP headers allow for information to be passed during requests
also known as Method, path, protocol

GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0

What are the processes that happen when you 
type “http://somesite.com/some/page.html” into a browser?

First, browser requests information, server responds
(possibly multiple times) and then your page is put together
as you reveive responses
*/