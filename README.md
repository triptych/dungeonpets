# Dungeon Pets

https://observablehq.com/@triptych/dungeon-pets@6

[![Netlify Status](https://api.netlify.com/api/v1/badges/d89d0042-072c-4b50-a943-f616d0e4c0db/deploy-status)](https://app.netlify.com/sites/dungeonpets/deploys)

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
python -m SimpleHTTPServer
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/1ccefcf02271cb39@6.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@triptych/dungeon-pets";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
