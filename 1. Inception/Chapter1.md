# Day 1

Hello, so today we have achieved writing react code, without using CRA.

## Notes!

**What is Emmet?**

Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.

Reference youtube video: https://www.youtube.com/watch?v=V8vizNQKtx0


**Difference between a Library and Framework?**

The key difference between a library and a framework is "Inversion of Control".

You are in charge when you invoke a method from a library. The control, however, is reversed when using a framework: the framework makes the call.

A library can be easily replaceable by another library, but a framework cannot.
 
If you don't like the jQuery date picker library, you can replace it with another date picker such as bootstrap date picker or pickdate.
 
If you don't like AngularJs on which you built your product, you cannot just replace it with any other framework. You need to rewrite your entire code base.
 
Mostly, a library requires less of a learning curve compared to frameworks.
 
For example, react.js is a library, angular.js is a framework.

References: 
* https://www.c-sharpcorner.com/uploadfile/a85b23/framework-vs-library/
* https://www.youtube.com/watch?v=sXA1zpv4DhA


**What is CDN? Why do we use it?**

A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

References:
* https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/
* https://www.keycdn.com/blog/why-use-a-cdn
* https://www.youtube.com/watch?v=Bsq5cKkS33I


**What is crossorigin in script tag?**

The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

References:
* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
* https://reactjs.org/docs/cdn-links.html#why-the-crossorigin-attribute


**What is diference between React and ReactDOM?**

The react package holds the react source for components, state, props and all the code that is react.

The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

**What is async and defer?**

Async - means execute code when it is downloaded and do not block DOM construction during downloading process. 
Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.

References:
* https://www.youtube.com/watch?v=IrHmpdORLu8
