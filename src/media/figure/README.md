# Figure

## Functionality

> Anytime you need to display a piece of content—like an image—with an optional caption, consider using a `<figure>`.
>
> -- [Bootstrap > Figures](http://v4-alpha.getbootstrap.com/content/figures/)

## Usage

Import the macros:

```html
{% import "media/figure/figure.html" as figure %}
```

Create figure with content and caption:

```html
{% call figure.element() %}
    <img alt="Alternative text" src="path/to/image.jpg">
    {{ figure.caption('A caption for the above image.', align = 'right') }}
{% endcall %}
```

### `.element()`

Creates a figure element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the figure element.

### `.caption()`

Create a figcaption.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text describing the image.
1 | align | string *optional* | Options: `left`, `center` or `right`.

