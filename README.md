<h1>Cointel M.O.B</h1> 
<h4>Universal JavaScript boilerplate built with Express.js, Node.js, React.js, MySQL, React-Router, and bundled with Webpack</h4>

<p>Built using the server-client model; The back-end is handled on a server, while the front-end is rendered on the client. A quality explanation on the differences between rendering the front-end on a server, versus on the client-side, plus the pros and cons of each, is given <a href="https://spin.atomicobject.com/2015/04/06/web-app-client-side-server-side"/>here.</a>
</p>
<p>
Built with react, express, node, and MySQL.  Webpack is used to compile the dependencies and view components into the static JavaScript bundle that is rendered by the client.  The front-end architecture is built to follow the Flux design pattern.  The Flux library is used to build the Store, Actions, and the Dispatcher.  Routing was built with react-router.  
</p>

<p>
Http authentication implemented for database requests, prepared statements implemented for POST/GET requests to protect againts SQL Injection.
</p>

<p>
To launch the development version, clone the repo, then run
</p>

<pre>
cd cointelmob
npm install
npm run build
npm start
</pre>

<p>The dev mode can then be viewed at <a href="http://localhost:3000"/> http://localhost:3000 </a> </p>
