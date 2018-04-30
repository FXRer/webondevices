webpackJsonp([17643620591141],{430:function(t,n){t.exports={data:{markdownRemark:{html:'<p><strong>Arduinos are not designed to play sound on their own as it’s quite a difficult task for that 16mhz microcontroller chip you have on an UNO to process and play sound at 64 – 128kbit per second rate which is the bit rate of a regular MP3 file.</strong></p>\n<p>However if you decrease the bit rate to only 8k and down sample the file then it is possible with the help of only two digital output pins and a few resistors. As you will see the sound volume will be quite low so we will build a simple amplifier with an NPN transistor.</p>\n<h3 id="play-sound"><a href="#play-sound" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Play sound</h3>\n<p>The first thing we do is build the circuit that will be connected to your mini speaker. For that you will need 6 resistors with the same amount of resistance and a few jumper wires.</p>\n<p><img src="http://www.webondevices.com/posts/arduino-audio.jpg" alt="Play sound with Arduino"></p>\n<p>Next thing to do is download and install the library called <a href="https://github.com/muayyad-alsadi/avr_sound">avr-sound</a> created by Muayyad Alsadi. Download the files from the repository and install it or manually place it into your libraries folder.</p>\n<h3 id="custom-audio-files"><a href="#custom-audio-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom audio files</h3>\n<p>Adding your own audio files is not as simple as uploading an MP3 file. You will need to down sample the file first. <a href="http://audacityteam.org/">Audacity</a> is a free application that let’s you do that. After recording and opening your audo file in Audacity first click <strong>Track / Stereo Track to Mono</strong>. Next change the <strong>Project Rate to 8000hz</strong> at the bottom of the project window. Finally go to <strong>File / Export Audio</strong> and select <strong>Other uncompressed files</strong> under file format the hit the <strong>Options...</strong> button. In here change the settings to <strong>RAW (header-less) and Unsigned 8-bit PCM</strong> then export. This has created a .raw file for you.</p>\n<p>When you downloaded the avr-sound library it came with a python application called snd2h.py. Copy your raw audio file into the same folder you have this python application then go to your command line tool and run the following command to convert your raw audio file into a .h file that you will then be able to use straight away in the Arduino IDE:</p>\n<p><code>python snd2.py myaudiofile.raw</code></p>\n<p>This has created a .h file for you which will need to be included in your new sketch just like it is for the 3 examples that came with the library. Once you have done that add this piece of code to your main sketch:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> </span>\n<span class="token macro property">#<span class="token directive keyword">include</span> “myaudiofile.h"</span>\n\n<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">avr_sound_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// the loop routine runs over and over again forever:</span>\n<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token function">play_myaudiofile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Final task left is to create the circuit.</p>\n<h3 id="amplifying-the-sounds"><a href="#amplifying-the-sounds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Amplifying the sounds</h3>\n<p>Unfortunately the sounds wouldn’t be loud enough from the output pins without an external power source so we need to build a simple amplifier to make it louder. Here’s the final circuit including a R-2R resistor ladder to generate the sound and an NPN resistor that switches power from an external battery:</p>\n<p><img src="http://www.webondevices.com/posts/arduino-play-sound-amplified.jpg" alt="Play sound with Arduino Fritzing circuit"></p>\n<p>I tried this with an external 3.7V lipo battery which worked perfectly.</p>\n<h3 id="further-improvements"><a href="#further-improvements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further improvements</h3>\n<p>Audio quality is obviously not amazing so I wouldn’t use this for human voice or music but might be perfect for simple sound effects, buzzes or tunes.</p>\n<p>I unfortunately wanted this for human voice so I will have to keep looking. I previously tried the WTV020SD-16P module which is really cheap on ebay but it was an absolute pain to work with. It only accepted a specific SD card and by that I mean a specific brand at a specific size and it was also quite picky about file compressions. Even when it worked it randomly stopped and wouldn’t play at all.</p>\n<p>I’m now looking at the new <a href="http://www.dfrobot.com/index.php?route=product/product&#x26;product_id=1121">DF Player Mini</a>. It’s quite promising and still cheap so I will order a few and test them out.</p>',timeToRead:3,excerpt:"Arduinos are not designed to play sound on their own as it’s quite a difficult task for that 16mhz microcontroller chip you have on an UNO…",frontmatter:{title:"Arduino Tone & MP3 Sound with No Shield",cover:"http://www.webondevices.com/posts/arduino-audio-hero.jpg",date:"03/02/2016",category:"moar",tags:["arduino"]},fields:{slug:"/arduino-tone-mp-3-sound-with-no-shield"}}},pathContext:{slug:"/arduino-tone-mp-3-sound-with-no-shield"}}}});
//# sourceMappingURL=path---arduino-tone-mp-3-sound-with-no-shield-d664cdc73cc211bdac52.js.map