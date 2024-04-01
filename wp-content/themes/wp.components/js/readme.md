# theme js

# `viewport.js`

```html
<body>
    <section data-viewport>
        Element will get viewport=true if top or bottom are inside the offsets default (0)
    </section>
</body>
```

# `accordion.js`

```html
<div data-accordion-group>
    <section data-accordion>
        <div data-accordion-title>Accordion Title</div>
        <div data-accordion-content> Lorem ispum dolor sit amet </div>
    </section>
     <section data-accordion>
        <div data-accordion-title>Accordion Title</div>
        <div data-accordion-content> Lorem ispum dolor sit amet </div>
    </section>
</div>
```

# `modal.js`

```html
<button data-modal-toggle="myModal">Toggle Modal</button>
<button data-modal-toggle-open="myModal">Open Modal</button>
<section data-modal id="myModal">
    <button data-modal-toggle-close="myModal">Close Modal</button>
    <p>My Modal Content</p>
</section>

```
# `tabs.js`

<section data-tabs>
    <nav>
        <button data-tabs-toggle="1">Tab 1</button>
        <button data-tabs-toggle="2">Tab 2</button>
    </nav>
    <section>
        <div data-tabs-content="1">
            Lorem Ipsum 1
        </div>
          <div data-tabs-content="2">
            Lorem Ipsum 2
        </div>
    </section>
</section>

# `tooltip.js`
```html
<section data-tooltip>
    <p>Lorem ipsum <span data-tooltip="dolor">dolor</span> ...</p>
</section>
<div data-tooltip-content="dolor">My Tooltip Content for the Word 'dolor'</div>
```

# `scoll-state.js`

`scroll-state.js` is a js library that provides a simple html api for checking of the useragent is currently scrolling up, down, is on top, bottom, how many pixels from the top, and if the user has scrolled once or if the user is currently scrolling.

## setup

```html
<body data-scroll-state>
    ... 
    <script src="scroll-state.js">    
</body>
```

## api

once the scroll-state attribute is set, the js will insert the following attributes onto the element:
- `data-scroll-state="{string}"`
- `data-scroll-state-scrolled="{int}"`
- `data-scroll-state-scrolled-relative="{float}"`
- `data-scroll-state-has-scroll="{bool}"`
- `data-scroll-state-is-scrolling="{bool}"`
- `data-scroll-state-document-height="{int}"`

the rendered DOM will look something like this:

```html
<body data-scroll-state="top" data-scroll-state-scrolled="0" data-scroll-state-scrolled-relative="0%"  data-scroll-state-has-scrolled="false"  data-scroll-state-is-scrolling="false" data-scroll-state-document-height="12305">
    ... 
    <script src="scroll-state.js">    
</body>
```

# `splash-screen.js`
```html
<div data-splash-screen>
    Loading ...
</div>
```
# `accessibility.js`

## installation

Place this Script Tag in the <head> or under the closing <body> tag

```
<script src="path/to/acessibility.js" defer></script>
```

accssibility.js now scans for the following things and will report:
- any image or svg with a missing or empty alt attribute
- any <button> element without or with an empty title attribute
- any font that has a computed size under 12px

# `audioplayer.js`

the idea to provide a simple yet powerful html-attribute-api to create a html5-friendly audioplayer that's styleable as any other DOM element and providing full html5-audio functionality. audioplayer.js itself provides no styling or extra functionality, it only manages play/pausing/muting-functionality to the elements.

there can be as many audioplayer on a single html page as you like, they all will work independently from each other.

## compatability

all common web-audio formats are supported: `.mp3`, `.wav`, `.webm`

## creating an `audioplayer`

to signify that an audioplayer is used you have to create a container/element with the `data-audioplayer` attribute, all other elements of the player must be inside this element.

`audioplayer.js` consists of three main parts: `controls`, `playlist` and `currently-playing`

- `data-audioplayer-controls`: hosts all controls element like, play, pause, mute inside. Have to be wrapped inside `data-audioplayer-controls` attribute.
- `data-audioplayer-playlist`: hosts all information about each track like: Name, Artist or Cover Image. Have to wrapped inside `data-audioplayer-playlist` attribute
- `data-audioplayer-current`: a set of data-attributes that dynamically render informations about the currently playing track. They only have to be wrapped inside `data-audioplayer` and can be playced anywhere inside.

### controls

all controls must be wrapped insde a `data-audioplayer-controls` element. 

all controls are optional, so if no matching html elemt is found the player skips the functionaliyt and uses the default setting in the JS.

the following `data-audioplayer-control="{control-name}"` attributes are available:
- `play-pause`
- `prev`
- `next`
- `mute-unmute`
- `repeat-track`
- `repeat-playlist`

### currently playing

use data-audioplayer-current-{name} to dynamically show informations about the currently playing track.
the following values are available:
- `data-audioplayer-current="title"`
- `data-audioplayer-current="title"`
- `data-audioplayer-current="cover"`

### creating the playlist

playlist have to wrapped inside a `data-audioplayer-playlist` element.

each track should be wrapped inside an element that has `data-audioplayer-track` and the `data-audioplayer-track-url="my/path/to/the/track.mp3"`. inside this element you can use the following data attributes to signify infiormtaions for the audioplayer:
- `data-audioplayer-track="title"`
- `data-audioplayer-track="artist"`
- `data-audioplayer-track="cover"` (use on `img` elements)

## Example Code
 
```html
    <!-- Initialize the audioplayer -->
    <section data-audioplayer>
        <div>
            <p data-audioplayer-current="title">
                <!-- Track will be inserted here via JS, default: first in list -->
            </p>
            <p data-audioplayer-current="artist">
                <!-- Artist will be inserted here via JS, default: first in list -->
            </p>
            <figure>
                <img data-audioplayer-current="cover">
            </figure>
        </div>
        <!-- Controls Wrapper -->
        <div data-audioplayer-controls>
            <input type="range" data-audioplayer-control="progress-bar">
            <div>
                <button data-audioplayer-control="prev">Prev</button>
                <button data-audioplayer-control="play-pause">Play/Pause</button>
                <button data-audioplayer-control="next">Next</button>
            </div>
            <div>
                <button data-audioplayer-control="repeat-track">Repeat Track</button>
                <button data-audioplayer-control="mute-unmute">Mute/Unmute</button>
                <button data-audioplayer-control="repeat-playlist">Repeat Playlist</button>
            </div>
            <input type="range" data-audioplayer-control="volume">
        </div>
        <section data-audioplayer-playlist>
            <button data-audioplayer-track data-audioplayer-track-url="song-1.mp3">
                <p data-audioplayer-track="title">Track 1</p>
                <p data-audioplayer-track="artist">Artist Name 1</p>
                <img src="https://placehold.co/600" data-audioplayer-track="cover">
            </button>
            <button data-audioplayer-track data-audioplayer-track-url="song-2.mp3">
                <p data-audioplayer-track="title">Track 2</p>
                <p data-audioplayer-track="artist">Artist Name 2</p>
                <img src="https://placehold.co/400" data-audioplayer-track="cover">
            </button>
             <button data-audioplayer-track data-audioplayer-track-url="song-3.mp3">
                <p data-audioplayer-track="title">Track 3</p>
                <p data-audioplayer-track="artist">Artist Name 3</p>
                <img src="https://placehold.co/500" data-audioplayer-track="cover">
            </button>
        </section>
    </section>
    <script src="path/to/audioplayer.js">
```