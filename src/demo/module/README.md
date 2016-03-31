# Demo module

## Functionality

Display a module in isolation, in all its variations.

## Usage

Extend the template:

```html
{% extends "demo/module/module.html" %}
```

Add demos inside the `content` block using `<demo aria-label="Demo title">` markup:

```html
{% block content %}
<demo arial-label="Primary button - extra visual weight and identifies the primary action.">
    <button type="button" class="btn btn-primary">Primary</button>
</demo>

<demo arial-label="Success button - indicates a successful or positive action">
    <button type="button" class="btn btn-success">Success</button>
</demo>

<!-- etc -->
{% endblock %}
```