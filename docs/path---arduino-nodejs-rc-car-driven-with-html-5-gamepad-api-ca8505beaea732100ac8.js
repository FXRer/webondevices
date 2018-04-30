webpackJsonp([0xebe1187f6df2],{427:function(n,a){n.exports={data:{markdownRemark:{html:'<p><strong>We constantly see developers pushing the limits of JavaScript; mobile and desktop applications, 3D games and so much more … but it’s a different story to connect a USB racing wheel to the browser and read it with the HTML5 Gamepad API and drive a Radio Controlled toy car through WebSockets and a Node.js server.</strong></p>\n<p><a class="youtube-video" href="https://www.youtube.com/embed/nUDJVbKPmxA" target="_blank">Click to see Youtube video</a></p>\n<h3 id="the-javascript-code"><a href="#the-javascript-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The JavaScript code</h3>\n<p>I started the project off by experimenting with reading raw data from USB joysticks, gamepads and racing wheels from the browser. This is a relatively easy task in browsers supporting the <strong>HTML5 Gamepad API</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// USB gamepad data retrieved from the navigator object</span>\n\n<span class="token keyword">var</span> rawGamepads <span class="token operator">=</span>\n    <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>getGamepads <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span><span class="token function">getGamepads</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>\n    <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>webkitGetGamepads <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span><span class="token function">webkitGetGamepads</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I got the <a href="https://github.com/html5rocks/www.html5rocks.com/blob/master/content/tutorials/doodles/gamepad/static/gamepad-tester/gamepad.js#L187">original code</a> from Marcin Wichary who built it for the <a href="https://www.google.com/doodles/hurdles-2012">London Olympics Google doodle hurdles game</a>. Yes, this doodle game supports any USB gamepad.</p>\n<p>You might wonder why we need so much code in that gamepad.js file if all the joystick raw sensor data is available in <code>navigator.getGamepads</code>. Well, it handles feature detection, event listening for connection/disconnection and a fix for Chrome which doesn’t fire gamepad events.</p>\n<p><img src="http://www.webondevices.com/posts/IMG_20150330_195450.jpg" alt="Arduino rc car"></p>\n<p>After gamepad.js is loaded and initialised the gamepad object is filled with the sensor data:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// USB gamepad data retrieved from the navigator object</span>\n\nmyGamepad <span class="token operator">=</span> gamepadSupport<span class="token punctuation">.</span>gamepads<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// Steering:</span>\nmyGamepad<span class="token punctuation">.</span>axes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// Acceleration:</span>\nmyGamepad<span class="token punctuation">.</span>axes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// Breaking:</span>\nmyGamepad<span class="token punctuation">.</span>axes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// Buttons from 0 - 12:</span>\nmyGamepad<span class="token punctuation">.</span>buttons<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Once the steering wheel and pedal control data is filtered and compiled into a JSON object it’s ready to be sent to the car. In the background we are running a Node.js server which connects everything together.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// USB gamepad data retrieved from the navigator object</span>\n\n<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>           \n    server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// respond to web GET requests with the index.html page:</span>\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    response<span class="token punctuation">.</span><span class="token function">sendfile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">\'/index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Running this javascript file from the terminal with <code>node index.js</code> will start the server up and serve index.html at the localhost:8080 url. After that we initialise the <strong>Web Socket which creates a real-time connection</strong> between the browser and the server. With web sockets you could actually connect multiple users and browsers together to create multiplayer games for example.</p>\n<p>Setting up the web socket and sending a message from the browser and receiving it from the server is really easy:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Node.js server code to start the web socket</span>\n\n<span class="token keyword">var</span> io <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'socket.io\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// listen for new socket.io connections</span>\n<span class="token comment">// we don\'t start reading anyting until the browser has connected</span>\nio<span class="token punctuation">.</span>sockets<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'connection\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>socket<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// data sent from the browser</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Front-end code to send web socket message</span>\n<span class="token comment">// dataString is the JSON with the wheel and pedal control data</span>\nsocket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> dataString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>After this, magic happens in Node.js. We establish connection with the Arduino microcontroller board that is connected to the USB port. This is something you would never be able to do from the browser without a third-party plugin due to security reasons.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Node.js code to send serial message to the USB port</span>\n\n<span class="token comment">// open the USB serial port</span>\n<span class="token keyword">var</span> myPort <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SerialPort</span><span class="token punctuation">(</span><span class="token string">"/dev/tty.usbmodem1421"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> \n    <span class="token comment">// look for return and newline at the end of each data packet</span>\n    parser<span class="token punctuation">:</span> serialport<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span><span class="token function">readline</span><span class="token punctuation">(</span><span class="token string">"\\r\\n"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmyPort<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>messageReceivedFromTheBrowser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The write function needs to go inside the socket on connect and socket on message functions so our message to the Arduino is the JSON object we received from the browser through the web socket.</p>\n<h3 id="the-rc-car"><a href="#the-rc-car" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The RC car</h3>\n<p>The work has started off by taking out the original radio and motor drive modules and the antenna from the car. I was left with two motors, one for steering and one for acceleration, and the plan was to rebuild the whole architecture using Arduinos. I succeeded and the motors are now driven with a powerful H-bridge module (L298n) and the wireless connection is handled by two nRF24l01 antennas. The Arduino and the motors are both powered from the original 6V battery pack (4xAA).</p>\n<p><img src="http://www.webondevices.com/posts/IMG_20150330_193544.jpg" alt="Arduino rc car"></p>\n<p>The onboard Arduino Nano receives wireless messages from the Arduino UNO connected to the my Macbook Pro which is the one communicating with the Node.js server and the browser.</p>\n<h3 id="future-plans"><a href="#future-plans" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Future plans</h3>\n<p>There are so many parts of this projects that are really exciting and interesting and parts that are a little bit more difficult to fully implement. <strong>So please let me know and leave a comment if you want me to create and extended tutorial on this project!</strong></p>\n<p><img src="http://www.webondevices.com/posts/IMG_20150330_192351.jpg" alt="Arduino rc car"></p>\n<p>I’m also planning to improve the car by installing an onboard wireless camera, a more powerful RC battery pack and maybe a few more sensors or lights.</p>',timeToRead:4,excerpt:"We constantly see developers pushing the limits of JavaScript; mobile and desktop applications, 3D games and so much more … but it’s a…",frontmatter:{title:"Arduino Node.js RC Car Driven with the HTML5 Gamepad API",cover:"http://www.webondevices.com/posts/IMG_20150330_195450.jpg",date:"29/06/2015",category:"moar",tags:["arduino","javascript","project"]},fields:{slug:"/arduino-node-js-rc-car-driven-with-the-html-5-gamepad-api"}}},pathContext:{slug:"/arduino-node-js-rc-car-driven-with-the-html-5-gamepad-api"}}}});
//# sourceMappingURL=path---arduino-nodejs-rc-car-driven-with-html-5-gamepad-api-ca8505beaea732100ac8.js.map