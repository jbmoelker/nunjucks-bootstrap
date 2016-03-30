# Core template

## Functionality

This [starter template](http://v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template)
ensures Bootstrap files are included and you have your pages set up with the latest design and development standards.

## Usage

Extend the template:

```html
{% extends "core/template/template.html" %}
```

Add content inside `content` block:

```html
{% block content %} your content here {% endblock %}
```

Optionally add code to `head` or `foot` (before closing `</body>`):

```html
{% block head %}
    {{ super() }}
    <title>Pag title</title>
    <!-- etc -->
{% endblock %}

{% block foot %}
    {{ super() }}
    <script src="path/to/script.js></script>
    <!-- etc -->
{% endblock %}
```

## Notes

* Template uses CSS and JS from remote CDNs. Should be served from `node_modules/bootstrap/`.