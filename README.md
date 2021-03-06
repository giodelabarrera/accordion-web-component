# Accordion Web Component

Accordion native [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) built with vanilla js, es6, sass

Check demo [ https://giodelabarrera.github.io/accordion-web-component]( https://giodelabarrera.github.io/accordion-web-component). 

> **Web component support:** Some versions of web browsers do not support web components. The browsers in which this component has been supported have been Chrome, Opera, Brave. I wanted to do this project with web components for my experimentation of its use.
[More info](https://developer.mozilla.org/en-US/docs/Web/Web_Components#Browser_support)

### Running test

Open the [test file](./tests/index.html) and execute it in the browser

````
$ chrome tests/index.html
````

To see the results of test open the devtools console

## Frontend Exercise

With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time.
Sure to follow the [SUIT](https://suitcss.github.io/) convention when working with CSS.


```html
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

### Conditions
* Use Sass for generate CSS
* Use ES6
* Use only Vanilla JS, without any JS framework
* Generate gh-page for publish


### Bonus
* Add new section with Ajax content