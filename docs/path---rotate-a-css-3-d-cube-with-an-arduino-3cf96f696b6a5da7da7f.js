webpackJsonp([0xe904abad3d7f],{435:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>I had a 3 axis gyroscope laying on my prototyping bench and I thought it would be cool to use it for something. Something with HTML and CSS...</strong></p>\n<h3 id="a-css-3d-cube"><a href="#a-css-3d-cube" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A CSS 3D cube</h3>\n<p>I recently spent some time playing with 3D transforms and creating 3D objects in CSS. You can construct a cube for example buy rotating and moving 6 divs in 3D, one for each side of the cube. It’s also possible to rotate the finished object by only rotating the parent DOM element.</p>\n<p>The idea was to combine the two techniques together: read the gyroscope sensor with an Arduino UNO, stream the data to the browser through the USB port, a Node.js server and WebSockets. Once I have the gyroscope sensor values in the browser I apply that to the transform CSS property and rotate the cube.</p>\n<p><a class="youtube-video" href="https://www.youtube.com/embed/TL6NFyhNdyM" target="_blank">Click to see Youtube video</a></p>\n<p>The gyroscope I have is quite simple and it only detects the rotation of the sensor and not the acceleration. Reading the values with the Arduino was quite straight forward. I used the <a href="https://www.sparkfun.com/tutorials/240">examples</a> published on Sparkfun’s website.</p>\n<h3 id="learning-the-basics-of-javascript-electronics"><a href="#learning-the-basics-of-javascript-electronics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Learning the basics of JavaScript electronics</h3>\n<p>Getting the sensor readings from the Arduino to the Node.js server then to the browser is a longer process. I received lot of requests for going into more detail and explaining this process further so I decided to write and publish a completely free ebook for beginners.</p>\n<p>This book will teach you the basics to get started with JavaScript Electronics. Scroll down to the bottom of the page to download for free.</p>\n<h3 id="rotatex"><a href="#rotatex" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>rotateX</h3>\n<p>Once you have the sensor values in the browser from the Node.js server through the WebSocket you can construct a CSS transform property that rotates the cube for you.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Rotating the cube</span>\n\n<span class="token keyword">var</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// listen for new socket.io messages from the serialEvent socket</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'serialEvent\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>rotation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rotation<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.cube\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span>\n        <span class="token string">\'-webkit-transform\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'rotateZ(\'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>rotation<span class="token punctuation">.</span>x<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">44</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'deg) \'</span> <span class="token operator">+</span>\n            <span class="token string">\'rotateX(\'</span> <span class="token operator">+</span> <span class="token operator">-</span>rotation<span class="token punctuation">.</span>y<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token string">\'deg)\'</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I had to divide the rotation values by two because the cube was rotating faster then the sensor was rotating in real life. The cube was also slightly off centre compared to the sensor so I added +44 to calibrate it.</p>\n<p><img src="http://www.webondevices.com/posts/rotate-3d-css-cube.jpg" alt="The gyroscope and the Arduino"></p>\n<p>Sometimes the sensor goes off for a frame or two and sends a random value. To prevent the cube from jittering I applied some smoothing. I could have done this with the sensor values in JavaScript but adding CSS transition to the transform property seemed like an easier option. The smoothing setting is currently on 0.2s. Increasing this number will make the animation smoother but will also add some lag:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.cube</span> <span class="token punctuation">{</span>\n    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.2s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',timeToRead:2,excerpt:"I had a 3 axis gyroscope laying on my prototyping bench and I thought it would be cool to use it for something. Something with HTML and CSS…",frontmatter:{title:"Rotate a CSS 3D cube with an Arduino",cover:"http://www.webondevices.com/posts/rotate-3d-css-cube.jpg",date:"06/08/2015",category:"moar",tags:["arduino","javascript"]},fields:{slug:"/rotate-a-css-3-d-cube-with-an-arduino"}}},pathContext:{slug:"/rotate-a-css-3-d-cube-with-an-arduino"}}}});
//# sourceMappingURL=path---rotate-a-css-3-d-cube-with-an-arduino-3cf96f696b6a5da7da7f.js.map