webpackJsonp([0xb7f336ae1478],{426:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>The Introduction to JavaScript Electronics Ebook is now ready to be downloaded from Web on Devices (see bottom of this page to download). The examples throughout the Free Ebook use an Arduino UNO connected to the USB port of a computer running Node.js and the Johnny-Five JavaScript library. Luckily, it is now possible to run both Node.js and Johnny-Five on any Raspberry PI computer as well.</strong></p>\n<p>This means that if you have a Raspberry PI at home you can still get started with JavaScript Electronics and the Free Ebook. This article will show you how to get your PI ready to run JavaScript.</p>\n<p><img src="http://www.webondevices.com/posts/rpi_1.jpg" alt="Raspbeery PI running Node.js"></p>\n<h3 id="javascript-and-nodejs-on-the-raspberry-pi"><a href="#javascript-and-nodejs-on-the-raspberry-pi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript and Node.js on the Raspberry PI</h3>\n<p>JavaScript has always been the scripting language of the Internet running inside browsers. Node.js is built on top of Google’s V8 JavaScript engine which can <strong>run independently from the browser</strong> and on the server which can be any computer, in our case it will be the Raspberry PI.</p>\n<p>If you have a PI that is brand new or haven’t been used for a while you should run some system update tasks first by entering these commands into the command line interface one-by-one:</p>\n<p><code>sudo apt-get update</code></p>\n<p><code>sudo apt-get upgrade -y</code></p>\n<p><code>sudo apt-get diet-upgrade -y</code></p>\n<p><code>sudo dpi-update -y</code></p>\n<p>You might want to prepare a tea while these updates run as they can potentially take an hour in total to finish.</p>\n<p>After the preparations it’s time to install NPM, the Node Package Manager and Node itself.</p>\n<p><code>echo "deb http://node-arm.herokuapp.com/ /" | sudo tee --append /etc/apt/sources.list</code></p>\n<p><code>sudo apt-get update</code></p>\n<p><code>sudo apt-get install -y --force-yes node libusb-1.0-0-dev</code></p>\n<p><code>sudo npm install -g npm --unsafe-perm</code></p>\n<p>Check the version of Node to see if the installation was successful:</p>\n<p><code>node -v</code></p>\n<p>If this didn’t work try installing Node by following the instructions on the Node ARM website:</p>\n<p><code>wget http://node-arm.herokuapp.com/node_latest_armhf.deb</code></p>\n<p><code>sudo dpkg -i node_latest_armhf.deb</code></p>\n<p><strong>Node.js should now be installed.</strong> Create a new file called hello.js and add your JavaScript code into it. A hello world message is the most appropriate at this stage:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Saving this file and entering node hello.js will result in the Hello World message appearing. This means that Node.js is fully installed.</p>\n<p><img src="http://www.webondevices.com/posts/rpi_2.jpg" alt="Raspberry PI running Node.js"></p>\n<h3 id="installing-johnny-five-and-raspi-io"><a href="#installing-johnny-five-and-raspi-io" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing Johnny-Five and Raspi-IO</h3>\n<p>We can now run JavaScript on the Raspberry PI so the next step is to install the Johnny-Five library and Raspi-IO to help us access and interact with the GPIO (General Purpose Input and Output) pins of the Raspberry PI. If all this makes no sense or sounds complicated, please download the Free JavaScript Electronics Ebook and read the first few chapters.</p>\n<p>For some reason —unsafe-perm has to be added to each command to give root access to them. Thanks for Barry Schiffer for the <a href="http://www.barryschiffer.com/how-to-raspberry-pi-johnny-five-and-octoblu/">info and guidance</a> in his blog post.</p>\n<p><code>git clone git://github.com/rwaldron/johnny-five.git</code></p>\n<p><code>cd johnny-five</code></p>\n<p><code>sudo npm install --unsafe-perm</code></p>\n<p><code>sudo npm install serial port --unsafe-perm</code></p>\n<p><code>wget http://node-arm.herokuapp.com/node_latest_armhf.deb</code></p>\n<p><code>sudo dpkg -i node_latest_armhf.deb</code></p>\n<p><code>cd ..</code></p>\n<p><code>sudo npm install johnny-five --unsafe-perm</code></p>\n<p><code>cd johnny-five</code></p>\n<p><code>sudo npm install -g raspi-io —unsafe-perm</code></p>\n<p>Everything should now be installed. If you still have problems installing any of these, please refer to the individual installation pages or send me an email to hello@webondevices.com</p>\n<p><a href="http://node-arm.herokuapp.com/">Node-ARM</a></p>\n<p><a href="https://github.com/rwaldron/johnny-five">Johnny-Five</a></p>\n<p><a href="https://github.com/nebrius/raspi-io">Raspi-IO</a></p>\n<h3 id="blink-an-led"><a href="#blink-an-led" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blink an LED</h3>\n<p>In the 7th chapter of the JavaScript Electronics Ebook we blink an LED light with the Arduino UNO. Moving this circuit over to the Raspberry PI is easy. We have many GND and digital output pins to choose from. I picked number 16 for the LED.</p>\n<p><img src="http://www.webondevices.com/posts/circuit_led.jpg" alt="LED circuit on the PI"></p>\n<p>There are actually three different ways these pins are numbered which is really confusing. There’s the peripheral, the wiring and the physical pin numbering. Instead of discussing all these different ways we will simply use the wiring pin numbering:</p>\n<p><img src="http://www.webondevices.com/posts/raspberry-wiring-pins.jpg.jpg" alt="Wiring pin numbering on the Raspberry PI"></p>\n<p>These pin numbers should be the same on all PI models. According to this the LED is connected to pin 15 so let’s now write the JavaScript code for blinking the LED.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Blink the LED</span>\n\n<span class="token keyword">var</span> five <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"johnny-five"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Rasp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"raspi-io"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Board</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    io<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Rasp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nboard<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"ready"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> led <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Led</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    led<span class="token punctuation">.</span><span class="token function">blink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The only difference between this and the Arduino sketch from the Ebook is the addition of the the Raspi IO library and the different pin numbering.</p>\n<p>Save this into a file called raspberry.js and run <code>node raspberry.js</code> from the command line.</p>\n<h3 id="working-with-sensors"><a href="#working-with-sensors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with sensors</h3>\n<p>In the Ebook we learned how to use analog light and analog temperature sensor. These examples leverage the <strong>Analog to Digital Converter</strong> (ADC) of the Arduino UNO. Being “analog” means we can measure values on a whole range and not just digital on/off, bright/dark or hot/cold states. Unfortunately, the Raspberry PI doesn’t have an Analog to Digital Converter which means it can only detect digital states. In case of the light sensor it means that it will return either 1 when there’s enough light or 0 when it’s dark.</p>\n<p>To build the voltage divider, light sensor circuit on the Raspberry PI follow the below image:</p>\n<p><img src="http://www.webondevices.com/posts/circuit_ldr.jpg" alt="Raspberry PI LDR circuit"></p>\n<p>In the 7th chapter of the Ebook I explain this circuit in detail. It’s quite important to understand the circuit if you wish to adjust the threshold of the sensor as you will need to change the resistor to do that.</p>\n<p>The circuit is complete so it’s time to write the JavaScript code to handle this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Read the light sensor</span>\n\n<span class="token keyword">var</span> five <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"johnny-five"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Rasp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"raspi-io"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Board</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    io<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Rasp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nboard<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"ready"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pinMode</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> fivePin<span class="token punctuation">.</span>INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">digitalRead</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the callback function of the digitalRead method the value variable will return 1 when there’s enough light or 0 when it’s dark.</p>\n<p>Let’s combine the two examples and switch the LED on when it’s dark and off when the environment is bright enough.</p>\n<p>Here’s the circuit for that on the Raspberry PI:</p>\n<p><img src="http://www.webondevices.com/posts/circuit_both.jpg" alt="Raspberry PI LDR circuit"></p>\n<p>And here’s the combined source code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> five <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"johnny-five"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Rasp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"raspi-io"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Board</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    io<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Rasp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nboard<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"ready"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pinMode</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> fivePin<span class="token punctuation">.</span>INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> led <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">five<span class="token punctuation">.</span>Led</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    led<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">digitalRead</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            led<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            led<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Running this will switch the LED on when it’s dark and off when it’s bright enough. Combine this with an AC relay module and a desk lamp and you have an automatically switching lamp. We could also swap the light sensor with a digital motion sensor to automate the lamp in a different way.</p>\n<p><img src="http://www.webondevices.com/posts/rpi_1.jpg" alt="Raspbeery PI running Node.js"></p>\n<p>Now that you have installed Node.js on your Raspberry PI you opened up a whole lot of possibilities. You can build <strong>home automation</strong> systems with JavaScript, setup and run Node.js <strong>web servers</strong>, connect to browsers through real-time <strong>WebSockets</strong>, build <strong>kiosks</strong> and access and install Node libraries from the 100 thousand available on NPM. The Raspberry PI is actually powerful enough to run a Chrome browser so on the same computer you can host the Node.js server that connects to the physical buttons and sensors and the browser that access and displays these in real-time.</p>\n<p>Do you already have a project in mind?</p>',timeToRead:6,excerpt:"The Introduction to JavaScript Electronics Ebook is now ready to be downloaded from Web on Devices (see bottom of this page to download…",frontmatter:{title:"Install Node.js on a Raspberry PI and run JavaScript",cover:"http://www.webondevices.com/posts/rpi_hero.jpg",date:"01/09/2015",category:"moar",tags:["javascript"]},fields:{slug:"/install-node-js-on-a-raspberry-pi-and-run-java-script"}}},pathContext:{slug:"/install-node-js-on-a-raspberry-pi-and-run-java-script"}}}});
//# sourceMappingURL=path---install-node-js-on-a-raspberry-pi-and-run-javascript-caf97f3982e0f4773ee0.js.map