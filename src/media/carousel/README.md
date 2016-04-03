# Carousel

## Functionality

> A slideshow component for cycling through elements—images or slides of text—like a carousel.
>
> -- [Bootstrap > Carousel](http://v4-alpha.getbootstrap.com/components/carousel/)

## Usage

Import the macros:

```html
{% import "media/carousel/carousel.html" as carousel %}
```

Create a carousel with controls and items:

```html
{% call carousel.allControls() %}
    {{ carousel.imageItem('img 1', 'path/to/image.jpg') }}
    {{ carousel.imageItem('img 2', 'path/to/image.jpg') }}
    {{ carousel.imageItem('img 3', 'path/to/image.jpg') }}
{% endcall %}
```

### `.allControls()`, `.noControls()`, `.indicatorsOnly()`, `.arrowsOnly()`

Create a carousel with the desired controls (all, none, indicators only or arrows only).

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the carousel.

index | parameter | type | default | description
--- | --- | --- | ---
0 | id | string | (unique id) | Used as element id. Defaults to unique id starting with `carousel-`.
1 | interval | number | 5000 | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
2 | pause | string | 'hover' | Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.
3 | wrap | boolean | true | Whether the carousel should cycle continuously or have hard stops.
4 | keyboard | boolean | true | Whether the carousel should react to keyboard events.

### `.item()`

Create a generic carousel item (without content).

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the item (slide).

### `.imageItem()`

Create a carousel item (slide) containing an image.

index | parameter | type | description
--- | --- | --- | ---
0 | alt | string | Textual alternative which conveys the same essential information as the image.
1 | src | string | Url of the source of the image.

### `.indicators()`

Creates carousel indicator buttons (one button for each item).

index | parameter | type | description
--- | --- | --- | ---
1 | carouselId | string *optional* | Used to link to the carousel. Defaults to the id the carousel was created with.
2 | itemCount | number *optional* | Number of items to create indicator buttons for. Defaults to the number of items created using `.item()` and `.imageItem()`.

### `.previous()`, `.next()`

Creates a button to go to the previous / next carousel item.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string *optional* | Text displayed inside item. Defaults to `Previous` / `Next`.
1 | carouselId | string *optional* | Used to link to the carousel. Defaults to the id the carousel was created with.