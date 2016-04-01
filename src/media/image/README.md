# Image

## Functionality

> Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
>
> -- [Boostrap > Images](http://v4-alpha.getbootstrap.com/content/images/)

## Usage

Import the macros:

```html
{% import "media/image/image.html" as image %}
```

Create image (responsive, shaped and/or aligned):

```html
{{ image.responsive('Responsive image', 'path/to/image.jpg') }}
{{ image.rounded('Rounded shape', 'path/to/image.jpg') }}
{{ image.circle('Circle shaped', 'path/to/image.jpg') }}
{{ image.thumbnail('Thumbnail frame', 'path/to/image.jpg') }}
{{ image.rounded('Rounded shape', 'path/to/image.jpg', align = 'right') }}
```

### `.responsive()`

Create a responsive image (with fluid behaviour).

index | parameter | type | description
--- | --- | --- | ---
0 | alt | string | Textual alternative which conveys the same essential information as the image.
1 | src | string | Url of the source of the image.

### `.rounded()`, `.circle()`, `.thumbnail()`

Create a shaped image (rounded, circle or thumbnail).

index | parameter | type | description
--- | --- | --- | ---
0 | alt | string | Textual alternative which conveys the same essential information as the image.
1 | src | string | Url of the source of the image.
2 | align | string *optional* | Options: `left`, `center` or `right`.

