# Navbar

## Functionality

> The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header.
>
> -- [Bootstrap > Navbar](http://v4-alpha.getbootstrap.com/components/navbar/)

## Usage

Import the macros:

```html
{% import "nav/navbar/navbar.html" as navbar %}
```

Typically used in combination with `nav` macros:

```
{% import "nav/nav/nav.html" as nav %}

{% call navbar.bar(color='dark', background='primary') %}
    {{ navbar.brand('My company') }}
    {% call nav.inline() %}
        {# ... nav items ... #}
    {% endcall %}
{% endcall %}
```

### `.bar()`

Creates a navbar element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content (brand, nav, etc) inside block is displayed inside the navbar.

index | parameter | type | description
--- | --- | --- | ---
0 | color | string *optional* | Text color. Options: `light` (default), `dark`.
1 | background | string *optional* | Background color. Options: `faded` (default), `inverse`, `primary`.
2 | placement | string *optional* | Alignment within parent. Options: `full`, `fixed-top`, `fixed-bottom`.

### `.nav()`

Creates a navbar nav element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the nav.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the nav element.

### `.brand()`

Creates a brand anchor element.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside link.
1 | url | string *optional* | Url brand element links to. Defaults to `/`.


## Notes

* Since *navbar* element is typically the main navigation element on the page, its decorated with `[role="navigation"]`.
* Since *brand* element typically always links to home page, its decorated with `[rel="home"]`.