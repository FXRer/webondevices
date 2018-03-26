webpackJsonp([0x9a9144fc3215],{424:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>This IKEA lamp has been completely stripped and rebuilt using a Spark Core Wi-Fi board and a 12V RGB LED strip. The desk lamp can now shine in 16 million different colours and be controlled from the ‘If This Then That’ app. I use it for notifications and set it to change to different colours when something happens with my emails, Facebook, Twitter or Instagram. A visual notification centre, I call it.</strong></p>\n<p><img src="http://www.webondevices.com/posts/lamp_ikea_arduino.jpg" alt="The IKEA social notification desk lamp"></p>\n<h3 id="the-core-of-the-project"><a href="#the-core-of-the-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Core of the project</h3>\n<p>For this project I used a Spark Core which is an interesting Wi-Fi enabled, Arduino compatible cloud based board.</p>\n<p>Spark, was just a small startup company last year trying to get funding on Kickstarter for their first board, the Core. Now they are much larger, changed their name to <a href="http://www.particle.io/">Particle</a> and have released two new development boards.</p>\n<p><img src="http://www.webondevices.com/posts/core1.jpg" alt="Particle Core"></p>\n<p>The new <strong>Particle Photon</strong> works and behaves the same way as the original Spark Core. It’s essentially an updated version with a better <strong>Wi-Fi chip, faster speeds and half the price</strong> ($19 instead of $39)! This year they also released the Electron which has a SIM card in it and can connect to a cellular network.</p>\n<p>The killer feature of the Photon, and all Particle boards, is that they provide a cheap and reliable way to connect your project to your wireless network and to the Internet. The boards are <strong>Arduino compatible</strong> so you don’t have to learn a new language and all coding and management works from the cloud, from their website. You don’t need a USB, even uploading your code works wirelessly and from anywhere you can access the Internet.</p>\n<h3 id="shopping-list"><a href="#shopping-list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shopping List</h3>\n<p>Here’s a list of all the components for this project to give you a better understanding of what’s happening:</p>\n<ul>\n<li>\n<p><strong>IKEA Lampan</strong> desk lamp (£2.75)</p>\n</li>\n<li>\n<p>12V, 1A AC to DC wall <strong>adapter</strong> or psu (£3)</p>\n</li>\n<li>\n<p>12V, RGB <strong>LED strip</strong>, 1 meter long (£4)</p>\n</li>\n<li>\n<p><strong>Spark Core or Photon</strong> development board (£15)</p>\n</li>\n<li>\n<p>3 x 2N7000 <strong>NPN transistor</strong> (&#x3C;£1)</p>\n</li>\n<li>\n<p>3 x 1000Ω <strong>resistor</strong> (&#x3C;£1)</p>\n</li>\n<li>\n<p>1 x TS2940CZ 5V, 1A <strong>voltage regulator</strong> (&#x3C;£1)</p>\n</li>\n<li>\n<p>Breadboard and wires (&#x3C;£1)</p>\n</li>\n</ul>\n<p>I got the desk lamp from IKEA for £2.75 and all other components from eBay. First, I completely got rid of the original components then built the circuit on a breadboard which I later placed under the shade of the lamp.</p>\n<h3 id="building-the-circuit"><a href="#building-the-circuit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building the circuit</h3>\n<p>The tricky bit here is that the LED strip requires 12V power so it can’t be directly switched from the board’s output pins as they are 3.3V only (yes, it’s not 5V like on the Arduino UNO). To solve this problem I used an <strong>NPN transistor</strong> which <strong>can switch the 12V for the LEDs</strong>. The transistor has 3 legs. One leg takes the 12V input from my adapter, the other leg takes the 5V control signal from the Arduino’s output pin and we also have a third, output pin. When the Arduino sends signal (5V / HIGH) from the output pin it switches the 12V on on the output pin, when there’s no signal from the Arduino (0V / LOW) the output goes back to 0V.</p>\n<p>This is very similar to how we switch higher voltages with the Arduino. For example for 240V, mains voltage we use a relay. A relay also has input, output and control signal pins. The input takes 240V and when you send your 5V signal from your Arduino to the control pin, the 240V is switched on for the output pin.</p>\n<p>Let’s have a look at the final circuit of the desk lamp.</p>\n<p><img src="http://www.webondevices.com/posts/lamp-circuit.png" alt="Lamp circuit"></p>\n<p>Here’s the step-by-step guide on the build:</p>\n<ul>\n<li>\n<p>First we <strong>supply 12V DC power</strong> from the adapter (yellow and black wires at the bottom right).</p>\n</li>\n<li>\n<p>This is then connected to the <strong>5V regulator</strong> because the Spark Core can only be supplied with 3.6 – 6V DC. The 5V regulated voltage is then connected to the VIN and GND pins on the Core.</p>\n</li>\n<li>\n<p>The NPN transistors (black components with an N on them) are used to <strong>close the 12V circuit</strong> (switch ground) by the 3.3V logic level signal from the Spark Core.</p>\n</li>\n<li>\n<p>First we connect the grounds to the left pins of the transistors (Source) from the 12V circuit then connect the 3.3V switch signals (HIGH) from the A4, A5 and A6 pins (red, green, blue) to the middle pin of the transistor (Gate) through a 1000Ω resistor.</p>\n</li>\n<li>\n<p>Lastly <strong>the switched ground is taken to the LED strip</strong> from the right pin of the transistor (Drain) as well as the constant positive 12V from the power supply (yellow wire at the bottom left).</p>\n</li>\n</ul>\n<p><img src="http://www.webondevices.com/posts/leds.jpg" alt="Lamp leds"></p>\n<p>And here’s the code running on the core. The code is very simple but since this is just a quick prototype, has not been optimised at all:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// register the Spark function</span>\n    Spark<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token string">"notify"</span><span class="token punctuation">,</span> notify<span class="token punctuation">)</span><span class="token punctuation">;</span>\n     \n    <span class="token comment">// register pins</span>\n    <span class="token function">pinMode</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">pinMode</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">pinMode</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n     \n    <span class="token comment">// switch light on</span>\n    <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// this loops forever</span>\n<span class="token punctuation">}</span>\n \n<span class="token keyword">int</span> <span class="token function">notify</span><span class="token punctuation">(</span>String command<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token string">"gmail"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n     \n    <span class="token keyword">if</span><span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token string">"facebook"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n     \n    <span class="token keyword">if</span><span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token string">"instagram"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n     \n    <span class="token keyword">if</span><span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token string">"twitter"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A4<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A5<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">analogWrite</span><span class="token punctuation">(</span>A6<span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n     \n    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Please note that the initial, white values are R: 255 G: 200 B: 150. This is because the LED is too blue if simply set to R: 255 G: 255 B: 255 so I had to adjust the white balance a little bit.</p>\n<p><img src="http://www.webondevices.com/posts/final-led-lamp.jpg" alt="Lamp circuit"></p>\n<p>Once this code is uploaded then the exposed Spark function(notify) can be called from the If This Then That service.</p>\n<h3 id="ifttt"><a href="#ifttt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IFTTT</h3>\n<p>The other exciting piece of recent news from Particle is the ‘If This Then That’ support. IFTTT is an amazing service that allows you to create personal “recipes” consisting of a Trigger event and an Action. <strong>Triggers are notifications</strong> from popular services like Facebook, Instangram, Twitter, Google Calendar or Gmail, events from physical devices like the Nest thermostat, the Netatmo personal weather station or all of WeMo’s smart home accessories. <strong>Actions</strong> can also be chosen from a list of dozens and dozens of <strong>services and devices</strong>, <a href="https://ifttt.com/channels">167 channels in total</a>.</p>\n<p>For Particle developers this means that they can now connect their hardware projects to all 167 channels and setup hundreds of different tasks in a couple of minutes. Here are a few examples:</p>\n<ul>\n<li>\n<p>Send a notification to my Android smart watch if my home temperature drops below 16 degrees</p>\n</li>\n<li>\n<p>Email me when the dog’s water bowl is empty</p>\n</li>\n<li>\n<p>Blink a green light when a new commit has been pushed to my Github repository, and orange after a fork</p>\n</li>\n<li>\n<p>Create a calendar event or update my to-do list when the soil moisture sensor is dry to water my plants</p>\n</li>\n<li>\n<p>Log home sensor readings into my Google Drive</p>\n</li>\n</ul>\n<p>Here are a few more recipes to get you inspired: <a href="https://ifttt.com/recipes">IFTTT recipes</a>.</p>\n<p>Once you setup your own account you can create your own recipes and when you get to choose the Action, choose Particle and <strong>call the function you exposed in your application code</strong>, “notify” in our case.</p>\n<p><img src="http://www.webondevices.com/posts/ifttt.png" alt="IFTTT"></p>\n<p>And that is all you need to do to complete this project. Let me know what you think and how you would improve it.</p>',timeToRead:6,excerpt:"This IKEA lamp has been completely stripped and rebuilt using a Spark Core Wi-Fi board and a 12V RGB LED strip. The desk lamp can now shine…",frontmatter:{title:"IKEA social notification desk lamp",cover:"http://www.webondevices.com/posts/lamp_ikea_arduino.jpg",date:"26/08/2015",category:"moar",tags:["arduino","project idea"]},fields:{slug:"/ikea-social-notification-desk-lamp"}}},pathContext:{slug:"/ikea-social-notification-desk-lamp"}}}});
//# sourceMappingURL=path---ikea-social-notification-desk-lamp-30fa4e65cc10e515b937.js.map