<div align="center">
  <img src="https://assets.betridee.com/thatsAfunForm_logo.jpg">
</div>

# That's a FUN form 

Create animations that interact with your form fields in an easy and intuitive way.

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)

## Motivation

Forms are the most boring part of a website but on the other hand they are fundamental for lead conversions or sales. With **ThatsAfunForm** you can bring a little interactivity to your form improving your filling rates and making everything more FUN for the user.

## Some Tech specs

**Use Jquery +**
I'm still working on getting everything Vanilla JS, but until then you need to use Jquery to make everything happens. 

## How to use?

Upload the *ThatsAfunForm.js* file to your server and create the basic settings to integrate your form fields with the library. I tried to keep it as simple as possible, here we go:

First call the library using the Script tag

```
<script src="thatsAfunForm.js"></script>
```
Now comes the magic, when invoking the library, you can now easily configure all fields in your email and even have animations for specific characters like @ for example. 

## Let's take it easy, step by step:
First pass the basic settings to the library like form id and size of your animation block.

If you want the animation to start automatically when the page opens, set the **autoplay** variable to true. If you want to have a specific action to start the animation, set **autoplay** to false.

```
var thatsAfunForm = new ThatsAfunForm({

    formId: "YOUR-FORM-ID",
    autoplay: false,
    size: {
        width: 300,
        height: 225
    }

});
```
If you have autoplay = false, you can call the animation later using the library's **start()** function. Just put the code below in the middle of your code, for example, when opening a modal.

```
thatsAfunForm.start();
```
Now let's configure our animation sprite, we use the same technique used by games to animate the form, see the example of a sprite:

<div align="center">
  <img src="https://assets.betridee.com/thatsAfunForm_sprite.jpg">
</div>

In a sprite the frames have a specific size, you will put this in the sprites configuration along with the image location.

```
var thatsAfunForm = new ThatsAfunForm({

    formId: "YOUR-FORM-ID",
    autoplay: false,
    size: {
        width: 300,
        height: 225
    },
    sprite:{
        location: "example_sprite.jpg",
        frameWidth: 300,
        frameHeight: 225
    }

});
```
Now let's configure the first animation, the one that happens when we call the start() function or if the autoplay equals true, happens automatically.

```
var thatsAfunForm = new ThatsAfunForm({

    formId: "YOUR-FORM-ID",
    autoplay: false,
    size: {
        width: 300,
        height: 225
    },
    sprite:{
        location: "example_sprite.jpg",
        frameWidth: 300,
        frameHeight: 225
    },
    onLoad: {
        spriteRow: 1,
        frames: 10,
        speed: 120
    }

});
```
In this case each animation has a specific number of frames and each line has a different animation, one for each form field. Setting this up in the library is very easy:

**spriteRow:** In our sprite we have several animations, here you choose the line that the animation you want is.
**frames:** Here you define how many frames this animation has.
**speed:** Here you define how many milliseconds each frame should last before going to the next one. Basically it's the same way cartoons are made. The smaller the number is, the faster your animation will be.

Now in the last part, we define the actions for each field of the form.
Let's look at this part singly outside of the full code to make it easier to understand:

```
    actions: [
        {
            selector: "input[name='register_email']",
            speed: 80,
            onFocusIn: {
                spriteRow: 3,
                frames: 10
            },
            onKeyUp: {
                char: "@",
                spriteRow: 4,
                frames: 10,
                speed: 100 
            },                    
            onFocusOut: {
                spriteRow: 5,
                frames: 10
            }                                          
        }                
    ]
```
You can have infinite fields and an action for each of the fields on your form. We have 3 types of action for each field:

**onFocusIn:** Here is when the user clicks on the field.
**onKeyUp:** This is when the user press a specific key into the field.
**onFocusOut:** This is when the user leaves the field.







```
```


```
```







## See a full example:

```
var thatsAfunForm = new ThatsAfunForm({

    formId: "doCaptureLead",
    autoplay: false,
    size: {
        width: 300,
        height: 225
    },
    sprite:{
        location: "<?= ROOT_URL ?>/assets/images/guruzinho_sprite.jpg",
        frameWidth: 300,
        frameHeight: 225
    },
    onLoad: {

        spriteRow: 1,
        frames: 10,
        speed: 120

    },
    actions: [
        {
            selector: "input[name='register_name']",
            speed: 80,
            onFocusIn: {
                spriteRow: 6,
                frames: 10
            },
            onFocusOut: {
                spriteRow: 7,
                frames: 10
            }                   
        },
        {
            selector: "input[name='register_email']",
            speed: 80,
            onFocusIn: {
                spriteRow: 3,
                frames: 10
            },
            onKeyUp: {
                char: "@",
                spriteRow: 4,
                frames: 10,
                speed: 100 
            },                    
            onFocusOut: {
                spriteRow: 5,
                frames: 10
            }                                          
        }                
    ]

});
```





















A good idea is to create a redirect in your .htaccess to another file name such as *images* or *superload*, it is not necessary, however, it gives a special touch, it is always good to hide the PHP extension first to make the link more user friendly and also for security reasons. Let's do it, just open the .htaccess file and add this two lines:
```
RewriteEngine On
RewriteRule ^superload/?$ superLoadSEO.php
```
Here you are creating a redirect called **superload** but it can be any name you find more appropriate. After that the new URL will create your file according to the variables you informed, example:
```
http://test.com/superload?url=XXX&size=YYY
```

## Variables you can send:

**url:** Address of the image you want to convert. This url must be url_encoded so the code don't give an error when sending the GET variable. Mandatory data string*.

**size:** Width in pixels of the image you want to generate. Mandatory data INT for JPG / JPEG / PNG images. 

**square:** 0 or 1 if you want to cut the image in square format. Optional data INT, default value 0.

**quality:** You can further reduce the weight of images by reducing their quality. Number from 0 to 100. Optional data INT, default value 50.

**cache:** Time the file will be cached. Optional data INT, default value 800000

**lastmodified:** You can control the file's last modified date that will be used in the cache header. Optional data TIMESTAMP, default value is 1577872800

**webp:** 0 or 1 if you want to convert your JPG / JPEG / PNG image to WEBP format. Optional data INT, default value 0.

## File compatibility

|File|Feature|Required variable|
|----|-------|-----------------|
|JPG|Resize, Square cut, Cache, WEBP|url,size|
|PNG|Resize, Square cut, Cache, WEBP|url,size|
|GIF|Cache|url|
|CSS|Cache|url|
|JS|Cache|url|

## How to use:

It's very simple, in the case of an image you need to send the url and size variables:
```
http://test.com/superLoadSEO.php?url=XXX&size=YYY
```
Don't forget to encode the link you want to copy to url, example:
```
For this: https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png
To this: https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F47%2FPNG_transparency_demonstration_1.png
```
## Some examples:

I open a 1911x1356 JPG image and convert it to a 600px square image with all the cache information in the header.
```
http://test.com/superLoadSEO.php?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F19%2F%25C3%2581guila_calva.jpg&size=600&square=1
```

I open a 1911x1356 JPG image and convert it to 600px width with 90% quality and with all the cache information in the header.
```
http://test.com/superLoadSEO.php?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F19%2F%25C3%2581guila_calva.jpg&size=600&quality=90&webp=1
```

I open a 1200x1737 JPG image and convert it to a 600px square image on WEBP format with all the cache information in the header.
**Attention to WEBP support in the GD library installed on the server.**
```
http://test.com/superLoadSEO.php?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1a%2FTrifolium_April_2010-2.jpg%2F1200px-Trifolium_April_2010-2.jpg&size=600&square=1
```
## It's not just about images! More examples:

Opens the Jquery library directly from the CDN with cache information and longer expiration time.
```
http://test.com/superLoadSEO.php?url=https%3A%2F%2Fcode.jquery.com%2Fjquery-3.5.1.js
```
Opens the Google Fonts link with cache information and longer expiration time.
```
http://test.com/superLoadSEO.php?url=https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DRoboto%3Awght%40300%26display%3Dswap
```

## SuperLoadSEO and Jquery

You can greatly improve the loading time of your website using **SuperLoadSEO** with Jquery or pure Javascript. Let's see:

Imagine that you have an image in a sidebar and do not know the size of that image as it will depend on the size of the screen. You can create a 1px JPG in solid color just to tell Javascript its width. This will load very very fast:

```html
<img id="example" src="2pximage.jpg" superload_url="full_image_url">
```
Now with Javascript you can dynamically create the URL and change the src attribute of the image easily, generating an image of the exact size you need. Powerful right?

```javascript
superLoad_size = Math.round( $("#example").width() );
superLoad_url = encodeURIComponent( $("#example").attr("superload_url") );
superLoad_result = "http://test.com/superLoadSEO.php?url"+superLoad_url+"&size="+superLoad_size;

$("#example").attr( "src" , superLoad_result );
```
One tip is to mix the scroll bar and load the images as they appear on the screen. This in addition to making your site load very fast, will save server bandwidth.

## Contribute

Be sure to contribute with modifications, requests for improvements and reporting bugs. Let's make this code more powerful for other SEO's that don't know about backend but can improve their results. Sharing is the word!

## Credits

If you like this code and use it in some way, help by sharing it on your Linkedin or in any way you think is fairer. I could be having a beer, but I'm here creating this content ;-)

## License

MIT © Will Gittens
www.linkedin.com/in/will-gittens-b100071b4



