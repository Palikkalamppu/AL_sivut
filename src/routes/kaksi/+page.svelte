<script>
	import { base } from '$app/paths';
    // Tuodaan ilmoitukset suoraan JSON-tiedostosta
    import ilmoitukset from '$lib/ilmoitukset.json';

    const halututIdt = [13, 15];

    const naytettavatIlmoitukset = ilmoitukset.filter(ilmoitus => halututIdt.includes(ilmoitus.id));
</script>

<!-- Sivun yläpalkki -->
<header class="navbar">
    <div class="logo"><a href="{base}/">IRTO</a></div>
    <div class="nav-icons">
        <!-- Värittömät SVG-ikonit -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
</header>

<!-- Pääsisältö -->
<main class="container">
    <div class="grid">
        {#each naytettavatIlmoitukset as ilmoitus}
            <article class="card">
                <div class="image-container">
                    <img src={ilmoitus.kuva} alt={ilmoitus.otsikko} loading="lazy" />
                </div>
                
                <div class="card-content">
                    <h2 class="title">{ilmoitus.otsikko}</h2>
                    <p class="price">{ilmoitus.hinta} €</p>
                    <!--<p class="location">{ilmoitus.sijainti}</p>-->
                </div>
            </article>
        {/each}
    </div>
</main>

<style>
    /* --- Yleiset tyylit (Vaalea teema) --- */
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #f8f9fa; /* Vaalea tausta koko sivulle */
        font-family: 'Rubik', sans-serif;
        color: #212529; /* Tumma leipäteksti */
    }

    /* --- Yläpalkki (Navbar) --- */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background-color: #ffffff; /* Valkoinen yläpalkki */
        border-bottom: 1px solid #e5e5e5;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);

        position: sticky;
        top: 0;
        z-index: 100;
    }

    a {
        color: #F94F55;
        text-decoration: none;
    }

    .logo {
        font-family: 'Archivo Black', sans-serif;
        font-size: 32px;
        color: #00a896; /* Raikas turkoosi logo vaalealle taustalle */
        letter-spacing: 1px;
    }

    .nav-icons {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .nav-icons svg {
        width: 24px;
        height: 24px;
        color: #6c757d; /* Harmaat ikonit */
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .nav-icons svg:hover {
        color: #00a896; /* Ikonit muuttuvat logon värisiksi koskettaessa */
    }

    /* --- Pääsisältö ja ruudukko --- */
    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media (min-width: 600px) {
        .grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (min-width: 900px) {
        .grid { grid-template-columns: repeat(4, 1fr); }
    }

    /* --- Ilmoituskortti (Card) --- */
    .card {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        border-color: #d1d5db;
    }

    .image-container {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        background-color: #f1f3f5;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        padding: 12px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .title {
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 8px 0;
        line-height: 1.3;
        color: #212529;
    }

    .price {
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 8px 0;
        color: #111827;
    }
</style>