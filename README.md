# Nunjucks Bootstrap

[Nunjucks](http://mozilla.github.io/nunjucks/) templates (macros) for [Bootstrap (v4)](http://v4-alpha.getbootstrap.com/) modules.

## Purpose

This project provides a collection of reusable macros for Bootstrap modules to quickly create web pages. Each module offers multiple very small macros, which allow you to mix and match, use them all, or just a few of them. 

The [macros](https://mozilla.github.io/nunjucks/templating.html#macro) produce HTML, so you can combine macros and HTML as you please. Here's an example:

```html
<nav>
	<h2 class="sr-only">Site menu</h2>
	{% call nav.inline() %}
    	{{ nav.activeItem('Active', '#item1') }}
	    {{ nav.item('Default item', '#item2') }}
    	<li>use <strong>custom HTML</strong> anywhere</li>
	    {{ nav.item('Another item', '#item3') }}
	{% endcall %}
</nav>
```

## Modules

You can [view the demos of all available modules](https://jbmoelker.github.io/nunjucks-bootstrap/).

* **nav**
  * [breadcrumb](https://jbmoelker.github.io/nunjucks-bootstrap/#nav/breadcrumb/breadcrumb.demo.html)
  * [nav](https://jbmoelker.github.io/nunjucks-bootstrap/#nav/nav/nav.demo.html)
  * [navbar](https://jbmoelker.github.io/nunjucks-bootstrap/#nav/navbar/navbar.demo.html)
  * [pager](https://jbmoelker.github.io/nunjucks-bootstrap/#nav/pager/pager.demo.html)
  * [tabs](https://jbmoelker.github.io/nunjucks-bootstrap/#nav/tabs/tabs.demo.html)

The source files of all modules can be found in `src/`. Each module has its own readme with instructions on how to use its macros.

## Template render engines

These templates are created for Nunjucks (JavaScript). The templates can also be used with template render engines in other languages (mostly without modification):
[Jinja2](http://jinja.pocoo.org/) (Python), [Twig](http://twig.sensiolabs.org/) (PHP), [Jinjava](https://github.com/HubSpot/jinjava) (Java) and [Pongo](https://github.com/flosch/pongo2) (Go Lang).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for [guidelines](CONTRIBUTING.md#guidelines) and [development scripts](CONTRIBUTING.md#scripts).