This is a very simple function that I use in most of all the project. Usually I create it inside utils directory in my project, but I decide to put it in the npmjs package.

# How to use it:

## Vanila JS

```html
...
  <div id="container-wrapper">
      ...
    </div>
...
```

```javascript
import clickOutside from 'click-outside-element'


function handler() {
  // handle event
}

clickOutside(document.getElementById("container-wrapper"), handler)


```

## React JS

```javascript
import clickOutside from 'click-outside-element'


function App() {
  const wrapperRef = useRef(null);

  const handler = () => {
    console.log('Clicked outside of the element!');
  };

  clickOutside(wrapperRef, handler);

  return (
    <div ref={wrapperRef}>
      <p>Click outside of this element to trigger the handler function.</p>
    </div>
  );
}

```

## Svelte JS

```javascript
import clickOutside from 'click-outside-element'


  const handler = () => {
    console.log('Clicked outside of the element!');
  };

<div use:clickOutside={handler}>
      <p>Click outside of this element to trigger the handler function.</p>
    </div>


```

