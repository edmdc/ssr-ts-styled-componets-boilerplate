# Server Side Rendered Boilerplate
A boilerplate of sorts to start experimenting with different technologies and ways of bundling them together.

## Goal

Over the last few months, I've been experimenting with different Webpack configurations to deepen my knowledge
of the modern front end ecosystem and how they are bundled. After learning to configure Webpack to construct
simple SPAs, I wanted to continue learning more advanced Webpack topics and expose myself to automation tools.
With this boilerplate, I accomplish a server-side rendered app using gulp to automate and start server and client 
builds during development. Long-term goals include incorporating module federation introduced by Webpack 5 to create a
portfolio page showcasing previous projects.

## Challenges

Server-side rendering comes with several difficulties revolving around aligning client and server builds.

### Styles

On previous boilerplates, I had used css-loader and sass-loader to inject styles onto my applications, but it's not
as straightforward as I initially thought and proved to be a rewarding challenge. Eventually, it led me to CSS-in-JS
libraries which support server-side rendering. I opted for styled-components since it's one of the older, more popular
libraries that has since inspired other CSS-in-JS libraries. Since being able to successfully render
this boilerplate, I have been using it to create a library of styled-components for later use.


### Automating Parallel Builds

Running both builds concurrently proved equally challenge/rewarding. It's been a solid introduction to task automation
using gulp including some of the limitations such as implementing Hot module replacement and cleanly exiting multiple parallel tasks.
Both these items are on improvements to be made within this boilerplate. It will require implementing webpack-dev-middleware within
the express app to render and serve both the HTML and Javascript code. A clean exit requires using gulp helper functions provided under
'gulpjs/bach', and diving deeper into asynchronous tasks. However, this may not be required after using webpack-dev-middleware since
the client side build would be handled within the express app eliminating a task and perhaps the need for gulp altogether.
