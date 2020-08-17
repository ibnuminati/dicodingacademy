import './club-item.js';

class ClubList extends HTMLElement {
    // Fungsi set clubs digunakan untuk menetapkan properti this._clubs pada class ini. Nantinya properti tersebut akan digunakan pada fungsi render dalam membuat custom element <club-item>.
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`; // copy dari fungsi fallbackResult pada berkas main.js
    }

    render() {
        this.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club
            this.appendChild(clubItemElement);
        })
    }
}

customElements.define("club-list", ClubList); // mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM