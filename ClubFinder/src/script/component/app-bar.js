class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar); // mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM