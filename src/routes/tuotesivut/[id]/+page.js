// src/routes/ilmoitus/[id]/+page.js
import ilmoitukset from '$lib/ilmoitukset.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    // Etsitään ilmoitus, jonka id vastaa URL:n id-parametria
    // Huom: varmista että vertailet oikeita tietotyyppejä (esim. String vs String)
    const ilmoitus = ilmoitukset.find(i => String(i.id) === params.id);

    if (!ilmoitus) {
        throw error(404, 'Ilmoitusta ei löytynyt');
    }

    // Palautetaan data sivulle
    return {
        ilmoitus
    };
}