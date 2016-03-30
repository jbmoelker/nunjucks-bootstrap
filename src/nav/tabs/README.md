# Tabs

## Functionality

> Create tabbable panes of local content.
>
> -- [Bootstrap > Navs > Javascript behaviour](http://v4-alpha.getbootstrap.com/components/navs/#javascript-behavior)

## Usage

Import the macros:

```html
{% import "nav/tabs/tabs.html" as tabs %}
```

Create a tab list with items (incl. active and optionally disabled):

```html
{% call tabs.list() %}
    {{ tabs.activeItem('Home', paneId='home') }}
    {{ tabs.item('Profile', paneId='profile') }}
    {{ tabs.item('Messages', paneId='messages') }}
    {{ tabs.disabledItem('Settings', paneId='settings') }}
{% endcall %}
```

Create tab panes linked (by *pane id*) to the tab list items:

```html
{% call tabs.content() %}
    {%- call tabs.activePane(id='home') -%}
    <p>Home content ...</p>
    {%- endcall -%}
    {%- call tabs.pane(id='profile') -%}
    <p>Profile content ...</p>
    {%- endcall -%}
    {%- call tabs.pane(id='messages') -%}
    <p>Messages content ...</p>
    {%- endcall -%}
    {#- note: Settings content not rendered, because its list item is disabled -#}
{% endcall %}
```

### `.list()`

Creates a tab list (excluding items).

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content (tab items) inside block is displayed inside the list.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the tab list element.

### `.item()`, `activeItem()`, `disabledItem()`

Creates a tab list item.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside item.
1 | paneId | string | Html id of pane to be controlled by this item. Not needed for `disabledItem()`.

### `.link()`, `activeLink()`, `disabledLink()`

Creates a tab link.

index | parameter | type | description
--- | --- | --- | ---
0 | text | string | Text displayed inside link.
1 | paneId | string | Html id of pane to be controlled by this item. Not needed for `disabledItem()`.

Note: You only need this macro for fine grained control. The tab item macro typically suffices.

### `.content()`

Creates a tab content element (excluding panes).

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content (tab panes) inside block is displayed inside the element.

index | parameter | type | description
--- | --- | --- | ---
0 | classes | string[] *optional* | List of classes to apply to the tab content element.

### `.pane()`, `.activePane()`

Creates a tab pane.

Use as [`call` block](http://mozilla.github.io/nunjucks/templating.html#call).
Content inside block is displayed inside the pane.

index | parameter | type | description
--- | --- | --- | ---
0 | id | string | Html id matching the id of the controlling tab item.
1 | classes | string[] *optional* | List of classes to apply to the tab pane.

