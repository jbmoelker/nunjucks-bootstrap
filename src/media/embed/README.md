# Embed

## Functionality

> Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.
>
> -- [Bootstrap > Responsive embeds](http://v4-alpha.getbootstrap.com/components/utilities/#responsive-embeds)

## Usage

Import the macros:

```html
{% import "media/embed/embed.html" as embed %}
```

Wrap content in a fixed ratio (preset or custom) element:

```html
{% call embed.ratio16by9() %}
    <div class="embed-responsive-item">content</div>
{% endcall %}
```

Optionally use `item()` or `iframe()` helper to create content.

### `.ratio21by9()`, `.ratio16by9()`, `.ratio4by3()`, `.ratio1by1()`

Creates an element with a fixed aspect ratio.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the element.

### `.ratio()`

Creates an element with a custom aspect ratio.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the element.

index | parameter | type | description
--- | --- | --- | ---
0 | ratio | number | Aspect ratio (width:height) as number (between 0 and 1). E.g. `.4` or `2/1`.

### `.sizes()`

Creates an element with a custom aspect ratio based on the given width and height.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the element.

index | parameter | type | description
--- | --- | --- | ---
0 | width | number | Relative to height. Used to calculate aspect ratio. E.g. `width = 640`.
1 | height | number | Relative to width. Used to calculate aspect ratio. E.g. `height = 400`.

### `.item()`

Creates an item which takes the full with and height of the parent element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the item.

### `.iframe()`

Creates an iframe which takes the full with and height of the parent element.

index | parameter | type | description
--- | --- | --- | ---
0 | src | string | Url of the source.