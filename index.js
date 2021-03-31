console.log('privacy-policy pages test')

class PrivacyPolicySection extends HTMLElement {
    connectedCallback() {
	this.number = this.getAttribute('number')
	this.render()
    }

    render() {
	const $number = document.createElement('privacy-policy-section-number')
	$number.innerText = this.number
	this.prepend($number)
    }
}


customElements.define('privacy-policy-section', PrivacyPolicySection)
