console.log('privacy-policy pages test')

/* An element for displaying privacy policies */
class PrivacyPolicy extends HTMLElement {
    connectedCallback() {
	this.date = this.getAttribute('date')
	this.name = this.getAttribute('name')
	this.render()
    }

    render() {
	const $header = document.createElement('privacy-policy-header')

	const $headerTitle = document.createElement('privacy-policy-header-title')
	$headerTitle.innerText = this.name || 'Privacy Policy'

	const $updatedDate = document.createElement('privacy-policy-updated-date')
	$updatedDate.innerText = `Updated: ${this.date}`

	this.date && $header.prepend($updatedDate)
	$header.prepend($headerTitle)
	this.prepend($header)
    }
}

/* An element, to display a section of privacy polcies.
   - it shows the number of the section
   - a section should be direct child of a pricacy-policy-list
 */
class PrivacyPolicySection extends HTMLElement {
    connectedCallback() {
	this.number = this.getAttribute('number')
	this.render()
    }

    render() {
	if (!this.number) return
	const $number = document.createElement('privacy-policy-section-number')
	$number.innerText = this.number
	this.prepend($number)
    }
}

customElements.define('privacy-policy', PrivacyPolicy)
customElements.define('privacy-policy-section', PrivacyPolicySection)
