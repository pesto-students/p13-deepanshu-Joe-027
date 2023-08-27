# What is Protocol Stack?

Protocol stack is the implementation of the computer networking communication. This stack comprises of layers which deals with each of the concepts that facilitates the communication that occurs in the networking suite. Each layer in the stack interacts with the layer above and below it. Lower level of the stacks are abstracted over by the higher layers. This intra layer communication is essential.
The layers can be broadly categorized into :

1. Link Layer : This is the lowest layer in the stack and deals with the physical link of the network architecture. Here the signal is transported as bits. Ex: Ethernet, WLAN.
2. Network Layer : Communication over the internet is done by uniquely identifying the devices which are involved in the communication. IP or Internet Protocol achieves this IPv4 (32 bit address), IPv6 (128 bit address).
3. Transport Layer : Over the internet the information is sent as packets for efficiancy. TCP is used to communicate with high level of reliability and to ensure delivery, UDP is a fast but unreliable form of communication.
4. Application Layer : HTTP is the transmission protocol for the internet , DNS is involved in resolving the domain names into IP addresses, TLS is involved in encryption and security.

![Protocol Stack](<Protocol Stack.png>)

# What are the different types of web servers? How do they differ in terms of functionality and performance?

Content on the web is served by web servers and the content is consumed in the web browser by the user. Each application goes through several web servers before reaching the user. And when it comes to each server, it performs a unique function and role in the process.

Some types of web servers include:

1. Application servers : This is where the application resides. Here the application has all necessary components like a backend, database, runtime libraries,
2. Client servers : These are servers into which the application load is distributed.
3. Mail servers : This deals with the email delivery over the internet. It sends and recives mail from the client server and routes it to the appropriate end clients.
4. FTP Server : These servers deals with the file transfer. These servers are operated remotely and can be executed by it.
5. Proxy servers : Proxy server is a server application that acts as an intermediary for request from clients seeking resources from servers that provide those resources.

The functionality of web servers are clearly defined and is used for particular applications. This is to ensure availability and high performance in the respective roles these servers plays.

Web servers are also categorized based on the providers and the specific workflows it is involved in. They are :

1. Apache HTTP server: It is an open-source software which which is the most widely used web server in the modern internet. It is compatible with all the operating sytems that are commonly used. 
2. Microsoft Internet Information Services (IIS): This is a web server developed by Microsoft. It is a proprietary software that has all the benefits of a commercial software like feature updates, support and tight couplinng with the Microsoft ecosystem. 
3. Sun Java System: Developed by Sun Mycrosystems, it is used to handle Python and Web 2.0.
4. Jigsaw Server: It is developed using Java language and supports execution of various programming languages. It supports any machine that can run Java and was used to test the web protocols rather than be a fully fledged web server.
5. Lighttpd: Also known as Lightly, it is a lightweight server that does not consume large resources and is usefful in situations were the resources are constrained. Because it is lightweight, it is also speedy in performance.

# What is web hosting, and what are the different types of hosting services available for websites?

Websites and applications are served to clients by hosting them on to the internet on special computers called web servers that offer high availabilty, resources and specific environment for the application to run on. The process of running these applications on servers is called hosting.

The types of hosting that are commonly available are :

1. Shared Hosting : Here a single web server is where multiple applications share the resources provided by the main server. They are generally not very performant or reliable for heavy applications but instead are suitable for static content and simple apps. They are cheaper compared to other options available.
2. Dedicated Hosting : This is the type of hosting where an application is the sole program on the server and it has access to all its resources. Such hosting is more expensive but is suitable to run heavy apps. This also gives the server admins great deal of flexibility to configure the server in any way required.
3. VPS Hosting : Virtual Private Server is a kind of hosting that is shared but is running on high performance machines as well as gives the admin ample control over the server configurations.
4. Cloud Hosting : These servers are offred by services where we can scale our resources based on the demand of our application. Here we also only need to pay for the resources or bandwidth that we use and does not need to allocate a lot of resources beforehand thus reducing costs.As these are provided by huge corporations the data and application is very fault tolerant and has high availability and security.

# What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

Every application needs a minimum specification of resources to run on. This resources get used up as the number of users accessing the application increases. We can look at an example of an application that is on a web server that meets the minimum specification of the application. Everything goes well as long as the application is running within the specified user loads. but as soon as the number of users increases it stresses the resources that are available on the server and hits different parts of the server. If there are a lot of users accessing simultaneously the CPU and RAM utilization can max out causing the server to crash and the sapplication to to be unresponsive. Therefore in high performance and high availability applications it is imparative that the resources available to the application should not result in a bottleneck. An to facilitate this the application should be able to use resources that scale to the demand.

### Horizontal Scaling

This is a process by which the resources that are available to the server is expanded by adding more instances or machines to the existing server. We can think of this as adding additional DB servers, adding more machines to break the task up etc. This causes less downtime as the server can remain operational during scaling, while being more expensive as additional machines or nodes to be added should be same as the existing resources.

### Vertical Scaling

It is the process by which the server performance is enhanced by adding more absolute resources like increasing the RAM size, disk space, upgrading the CPU etc. This is the traditional way of scaling and is cost effective, but is less reliable and can cause single point failures.

# What is SEO? How can web developers optimize their websites for better search engine rankings?

SEO or Search Engine Optimization is the process of optimizing the a website in a manner that would allow it to rank higher in the search results. This involves a lot of work that includes making the website accessible, complying to best practices, using keywords and metadata that allows bots to crawl through the websites, adding meaningful and non plagiarized content that is relevant, adding backlinks and much more. The website responsiveness is also an important aspect, its page load times, performance etc also play a sizeable role in making the website SEO friendly.