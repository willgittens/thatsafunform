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
                frames: 10
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

The settings for each action are the same as onLoad, define the animation line in the sprite, the amount of frames and in the case of onKeyUp define the key you want.

## See a full example:

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
                frames: 10
            },                    
            onFocusOut: {
                spriteRow: 5,
                frames: 10
            }                                          
        }                
    ]

});
```

## Tell the truth, it was easy, right??
If you need help to implement or if you found any bug, just comment here on Github or talk to me on Linkedin.

## Contribute

Be sure to contribute with modifications, requests for improvements and reporting bugs. Let's make this code more powerful and fun. Sharing is the word!

## Credits

If you like this code and use it in some way, help by sharing it on your Linkedin or in any way you think is fairer. I could be having a beer, but I'm here creating this content ;-)

## License

MIT © Will Gittens
www.linkedin.com/in/will-gittens-b100071b4
