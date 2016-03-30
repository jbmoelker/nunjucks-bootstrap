# Nav

## Functionality

> Navigation available in Bootstrap share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.
>
> -- [Bootstrap > Nav](http://v4-alpha.getbootstrap.com/components/navs/)

## Usage

Import the macros:

```html
{% import "nav/nav/nav.html" as nav %}
```

Create a nav (base, inline, tabs or pills) with (active) items:

```html
{% call nav.inline() %}
    {{ nav.activeItem('Active', '#item1') }}
    {{ nav.item('Default item', '#item2') }}
    {{ nav.item('Another item', '#item3') }}
    {{ nav.disabledItem('Disabled', '#item4') }}
{% endcall %}
```

### `.base()`, `.inline()`, `.tabs()`, `.pills()`, `.stackedPills()`

Creates a [base](http://v4-alpha.getbootstrap.com/components/navs/#base-nav), [inline](http://v4-alpha.getbootstrap.com/components/navs/#inline), [tabs](http://v4-alpha.getbootstrap.com/components/navs/#tabs), [pills](http://v4-alpha.getbootstrap.com/components/navs/#pills) or [stacked pills](http://v4-alpha.getbootstrap.com/components/navs/#stacked-pills) nav element.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the nav.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the nav element.

### `.item()`, `activeItem()`, `disabledItem()`

Creates a nav list item.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside item.
1 | url | string *optional* | Url item links to. Not needed for `activeItem()`, `disabledItem()`.

### `.link()`, `activeLink()`, `disabledLink()`

Creates a nav link.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside link.
1 | url | string *optional* | Url link links to. Not needed for `activeLink()`, `disabledLink()`.