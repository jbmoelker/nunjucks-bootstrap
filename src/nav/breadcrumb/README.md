# Breadcrumb

## Functionality

> Indicate the current page’s location within a navigational hierarchy.
> 
> -- [Bootstrap > Breadcrumb](http://v4-alpha.getbootstrap.com/components/breadcrumb/)

## Usage

Import the macros:

```html
{% import "nav/breadcrumb/breadcrumb.html" as breadcrumb %}
```

Create breadcrumb list with (active) items:

```html
{% call breadcrumb.list() %}
    {{ breadcrumb.item('Home', '/') }}
    {{ breadcrumb.item('Library', '/library/') }}
    {{ breadcrumb.activeItem('Data') }}
{% endcall %}
```

### `.list()`

Creates a breadcrumb list.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the list.

### `.item()`, `.activeItem()`

Creates a breadcrumb item.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside item.
1 | url | string *optional* | Url item links to. Not needed for `activeItem()`.



## Notes

* [Breadcrumb structured data](https://developers.google.com/structured-data/breadcrumbs?rd=1#examples) added for enhanced semantics.