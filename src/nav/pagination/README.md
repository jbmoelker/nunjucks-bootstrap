# Pagination

## Functionality

> Provide pagination links for your site or app with the multi-page pagination component,
> or the simpler [pager alternative](../pager/README.md).
>
> -- [Bootstrap > Pagination](http://v4-alpha.getbootstrap.com/components/pagination/)

## Usage

Import the macros:

```html
{% import "nav/pagination/pagination.html" as pagination %}
```

Create pagination. E.g. for pages 1 to 10 with active and disabled link:

```
{% call pagination.nav() %}
    {{ pagination.disabledPrevious() }}
    {{ pagination.activeItem(1) }}
    {% for page in range(2, 11) -%}
    {{ pagination.item(page, '#/path/to/?page=' + page) }}
    {%- endfor %}
    {{ pagination.next(url = '#/path/to/next-page') }}
{% endcall %}
```

### `.nav()`, `.largeNav()`, `smallNav()`.

Creates a (normal, large, small) pagination element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the pagination element.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the pagination element.

### `.item()`, `.activeItem()`, `.disabledItem()`

Creates a (normal, active, disabled) pagination item.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string *optional* | Text displayed inside item. Defaults to `Previous` / `Next`.
1 | url | string *optional* | Url item links to. Not needed for `activeItem()`, `disabledItem()`.

### `.previous()`, `.next()`, `disabledPrevious()`, `disabledNext()`

Creates a (previous, next) pagination link.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string *optional* | Text displayed inside item. Defaults to `Previous` / `Next`.
1 | url | string *optional* | Url item links to. Not needed for `disabledItem()`.


## Notes

* Previous and next links are decorated with `rel="prev"` / `rel="next"` to [indicate paginated content](https://support.google.com/webmasters/answer/1663744).
* Disabled links are formatted as `<span>` instead of `<a>` as there is no such thing as a "disabled link" in HTML.