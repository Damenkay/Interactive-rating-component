# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/screenshots/mobile-rating.png)
![](/screenshots/mobile-thankyou-state.png)
![](/screenshots/rating-active.png)
![](/screenshots/rating-hover.png)
![](/screenshots/rating.png)
![](/screenshots/thankyou-state.png)


### Links

- Solution URL: [](https://your-solution-url.com)
- Live Site URL: [](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h3><span id="spanText">You selected <span id="selectedRate"> </span> out of 5</span></h3>
```
```css
@media (max-width:320px ) {
    .flex{
       display: block;
    }

    button{
        color: hsl(0, 0%, 100%);
        background-color: hsl(25, 97%, 53%);
        border-radius: 20px;
        width: 90%;
        font-weight: 700;
        border: none;
        font-weight: 400;
    }
    .flex button{
        background-color: hsl(212, 15%, 23%);
        border: none;
        border-radius: 20%;
        color: hsl(217, 12%, 63%);
        font-weight: 400;
    }
}
```
```js
unction viewRate(button) {
    var rate = button.getAttribute("rate");
    selectedRate.innerHTML = rate;
}
```

### Continued development
Responsiveness is one area that i reall want to get very conversant with as I continue in this journey.


## Author

- Frontend Mentor - [@damenkay](https://www.frontendmentor.io/profile/damenkay)
- Twitter - [@damenkay](https://www.twitter.com/damenkay)