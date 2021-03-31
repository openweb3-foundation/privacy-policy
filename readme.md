HTML `privacy-policy` custom element and its children, to display privacy policies.

# Development

- open `./index.html` in a browser, refresh the page as change are made


## Stack

- HTML document, in which is the content of the policy, and its markup
- HTML custom-elements, to describe each element of the policy
- web-components (`./index.js`), to add features (ex: numbering of sections)

## custom-elements

In order to describe the content of the privacy policy, a few HTML custom elements are defined.

This way it is possible:
- use them as wrappers, arrount for the content elements of the
  policy, to describe it
- to target them with css, and lay out the content
- to define some of these custom-elements as web-components, and add
  javascript based functionalities to these markup elements
  
### General remarks

Be sure to use minimal HTML elements when creating/updating/deleting content.

For example:

```
<privacy-policy-section number="a">
	<p>This extra paragraph HTML tag is not needed.</p>
</privacy-policy-section>

<privacy-policy-section number="b">
	No extra paragraph here, simpler to read.
</privacy-policy-section>
```

But be sure to wrap text in HTML element when needed:
- `</br>` at the end of a line, to but a line break
- `<p></p>` element after each other
- `<ul>` & `<ol>` to list elements at the bottom of the HTML tree
- `<a>` anchor elements to create links
- `<strong>` to display text in bold

  
### `<privacy-policy>`

The root element, defining the privacy policies displayed on a
page/site. There should be only one, per policy, with the list of
sections inside.

Parameters:

- `date` [string]: a text to be displayed as date; ex: 2020/14/11
- `name` [string] (default: `Privacy Policy`): a text, name of the "page", policy

Example, in an `./index.html` file:
```html
<privacy-policy date="2020/14/11" name="Privacy Policy"></privacy-policy>
```

### `<privacy-policy-list>`

Parameters: none
Children: only `privacy-policy-section`

A parent element, to display neatly its list of children, `privacy-policy-section`.

### `<privacy-policy-section>`

Parameters:

- `number` [string]: a text to be displayed in front of the section element; used visually as the number of the section; ex: `A`, `a`, `3`, `IV` (should be kept short to not brake the layout).

Examples:

```html
<privacy-policy-list>
  <privacy-policy-section number="I"></privacy-policy-section>
  <privacy-policy-section number="II"></privacy-policy-section>
  <privacy-policy-section number="III"></privacy-policy-section>
</privacy-policy-list>
```
```html
<privacy-policy-list>
  <privacy-policy-section number="1"></privacy-policy-section>
  <privacy-policy-section number="2"></privacy-policy-section>
  <privacy-policy-section number="3"></privacy-policy-section>
</privacy-policy-list>
```

### `privacy-policy-section-title`

Used to show visually the title of a section. There should be only one per section, and it should be used as first element of a section.

Parameters: none
