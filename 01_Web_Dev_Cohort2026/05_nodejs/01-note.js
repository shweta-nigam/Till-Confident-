// 8th march 2026
// Intro to backend 

/*
Http methods → sometimes known as verbs → such as GET,POST,PUT,DELETE,PATCH, HEADER and OPTION(these 2 are rarley used.

![Screenshot 2026-03-08 104828.png](attachment:e1b94429-30eb-4ff5-b7c4-4676cab9adbf:Screenshot_2026-03-08_104828.png)

 

## Learning how the line/connection between frontend and backend works

every time you request something from the internet, each time a specific method is used ex: to submit a form or to delete something uses different methods.

 

## Methods of http

![Screenshot 2026-03-08 114055.png](attachment:a6cab0da-53ef-4548-8af0-327b46ac91b3:Screenshot_2026-03-08_114055.png)

GET: 

- get method is used to read/retrieve a resource. It has no side effects, meaning it does not affect other data while getting a resource (isolated).
- It is IDEMPOTENT, in simple words calling something 10x is same as calling it in one time.

 (IDEMPOTENT describes **an operation or function that produces the same result regardless of whether it is executed once or multiple times)**

- It is made cacheable my browser and CDN (content delivery network), [prefetching]

POST: 

- post method has only one work and that is to create a new resource
- It is not IDEMPOTENT and it shouldn’t be. (posting 10x may create 10 resources)

note: if a post is same then you stop it with logic, so ideally post shouldn’t be IDEMPOTENT.

note:  it is not mandatory that post always sends some data, it can be empty as well.

PUT:

- This method is used to replace/update a resource COMPLETELY
- PUT is usually IDEMPOTENT.
- It needs to be send with full object/data

PATCH:

- This method is used to replace/update a resource PARTIALLY
- It needs to send ONLY changed field

note: PATCH is more bandwidth efficient than PUT.

DELETE:

- To remove a resource.
- It is also IDEMPOTENT.

There are 2 more methods but used rarely.

HEAD:

- Same as GET but returns only HEADER no body.

OPTIONS:

- It is used for preflight / capability check
- To send CORS request. Browser automatically send CORS request.

Note: Browser send CORS request just before a request. 

## Response Status Code

HTTP response status codes are indicator whether a http request has been successfully completed.

![Screenshot 2026-03-08 115440.png](attachment:1c3208a3-de53-40b3-aa20-796e01d72bff:Screenshot_2026-03-08_115440.png)
*/