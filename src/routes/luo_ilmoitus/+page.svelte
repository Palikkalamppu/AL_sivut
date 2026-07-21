<script>
    // Tähän voit myöhemmin lisätä napin toiminnallisuuden, 
    // esim. funktio joka avaa lomakkeen tai siirtää toiselle sivulle.
    import { base } from '$app/paths';
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
    <button class="create-btn">Luo Ilmoitus</button>
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
        color: #00a896; /* Raikas turkoosi logo */
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

    /* --- Pääsisältö (Napin keskitys) --- */
    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        
        /* Flexbox-asetukset sisällön keskittämiseen koko ruudulle (miinus navbar) */
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 80px); /* Oletetaan että navbar vie n. 80px */
    }

    /* --- Luo Ilmoitus -painike --- */
    .create-btn {
        background-color: #F94F55; /* Vahva turkoosi nappi erottuu vaalealta taustalta */
        color: #ffffff; /* Valkoinen teksti napissa */
        border: none;
        border-radius: 30px; /* Pyöristetyt reunat */
        padding: 18px 48px;
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        box-shadow: 0 4px 12px rgba(0, 168, 150, 0.25);
    }

    .create-btn:hover {
        transform: translateY(-3px) scale(1.02); /* Nousee hieman ylöspäin ja kasvaa */
        box-shadow: 0 8px 20px rgba(0, 168, 150, 0.35);
        background-color: #F94F55; /* Tummempi turkoosi hover-tilassa */
    }

    .create-btn:active {
        transform: translateY(1px) scale(0.98); /* Painuu sisään klikattaessa */
    }
</style>