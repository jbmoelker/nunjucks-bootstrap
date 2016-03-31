# Pager

## Functionality

> Quick previous and next links for simple pagination implementations with light markup and styles. It’s great for simple sites like blogs or magazines.
>
> -- [Bootstrap > Pager](http://v4-alpha.getbootstrap.com/components/pagination/#pager)

## Usage

Import the macros:

```html
{% import "nav/pager/pager.html" as pager %}
```

Create a pager with previous and next links:

```html
{% call pager.nav() %}
    {{ pager.disabledPrevious(text = 'Newer', url = '#/path/to/previous-page') }}
    {{ pager.next(text = 'Older', url = '#/path/to/next-page') }}
{% endcall %}
```

### `.nav()`

Creates a pager nav element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the pager nav.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the pager nav element.

### `.previous()`, `.next()`

Creates a pager link.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string *optional* | Text displayed inside item. Defaults to `Previous` / `Next`.
1 | url | string *optional* | Url item links to.
2 | aligned | boolean *optional* | Align link to the side of the pager. Defaults to `false`.

### `disabledPrevious()`, `disabledNext()`

Creates a disabled pager link.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string *optional* | Text displayed inside item. Defaults to `Previous` / `Next`.
1 | aligned | boolean *optional* | Align link to the side of the pager. Defaults to `false`.


## Notes

* Previous and next links are decorated with `rel="prev"` / `rel="next"` to [indicate paginated content](https://support.google.com/webmasters/answer/1663744).
* Disabled links are formatted as `<span>` instead of `<a>` as there is no such thing as a "disabled link" in HTML.