<script>
    import { base } from '$app/paths';
    
    // +page.js tiedostosta tuleva data
    export let data;
    
    // Reaktiivinen muuttuja ilmoitukselle
    $: ilmoitus = data.ilmoitus;
</script>

<header class="navbar">
    <div class="logo"><a href="{base}/">IRTO</a></div>
    <div class="nav-icons">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
</header>

<main class="container">
    <nav class="breadcrumb">
        <a href="{base}/">Etusivu</a> / 
        <span>{ilmoitus.otsikko}</span>
    </nav>

    <div class="product-layout">
        <div class="image-section">
            <div class="main-image">
                <img src={ilmoitus.kuva} alt={ilmoitus.otsikko} />
                <button class="favorite-btn" aria-label="Lisää suosikkeihin">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>
        </div>

        <div class="details-section">
            <span class="status-label">Myydään</span>
            
            <h1 class="title">{ilmoitus.otsikko}</h1>
            <p class="price">{ilmoitus.hinta} €</p>
            
            <div class="attributes">
                <span class="badge">Sijainti: <strong>{ilmoitus.sijainti}</strong></span>
            </div>
            
            <div class="actions">
                <button class="btn btn-primary">Osta heti</button>
                <button class="btn btn-secondary">Lähetä viesti</button>
                <button class="btn btn-outline">Soita myyjälle</button>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #f8f9fa;
        font-family: 'Rubik', sans-serif;
        color: #212529;
    }

    a {
        color: #F94F55;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background-color: #ffffff;
        border-bottom: 1px solid #e5e5e5;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .logo {
        font-family: 'Archivo Black', sans-serif;
        font-size: 32px;
        color: #111827;
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
        color: #6c757d;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .nav-icons svg:hover {
        color: #00a896;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }

    .breadcrumb {
        font-size: 14px;
        color: #6c757d;
        margin-bottom: 24px;
    }

    .breadcrumb a {
        color: #00a896; 
    }

    .product-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    @media (min-width: 768px) {
        .product-layout {
            grid-template-columns: 1.2fr 1fr;
        }
    }

    .image-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .main-image {
        position: relative;
        width: 100%;
        background-color: #f1f3f5;
        border-radius: 12px;
        overflow: hidden;
    }

    .main-image img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: contain;
        aspect-ratio: 4/3;
    }

    .favorite-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        background: #ffffff;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s ease;
    }

    .favorite-btn:hover {
        transform: scale(1.05);
    }

    .favorite-btn svg {
        width: 20px;
        height: 20px;
        color: #212529;
    }

    .details-section {
        display: flex;
        flex-direction: column;
    }

    .status-label {
        font-size: 13px;
        font-weight: 600;
        color: #6c757d;
        text-transform: uppercase;
        margin-bottom: 8px;
        letter-spacing: 0.5px;
    }

    .title {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 16px 0;
        color: #111827;
        line-height: 1.2;
    }

    .price {
        font-size: 28px;
        font-weight: 700;
        margin: 0 0 24px 0;
        color: #111827;
    }

    .attributes {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
        flex-wrap: wrap;
    }

    .badge {
        padding: 8px 16px;
        background-color: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 20px;
        font-size: 14px;
        color: #495057;
    }

    .badge strong {
        color: #111827;
    }

    .actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .btn {
        width: 100%;
        padding: 14px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        transition: background-color 0.2s ease, border-color 0.2s ease;
        font-family: inherit;
    }

    .btn-primary {
        background-color: #F94F55;
        color: #ffffff;
        border: none;
    }

    .btn-primary:hover {
        background-color: #e04449;
    }

    .btn-secondary {
        background-color: #ffffff;
        color: #212529;
        border: 1px solid #d1d5db;
    }

    .btn-secondary:hover {
        background-color: #f8f9fa;
        border-color: #adb5bd;
    }

    .btn-outline {
        background-color: transparent;
        color: #00a896;
        border: 2px solid #00a896;
    }

    .btn-outline:hover {
        background-color: #00a896;
        color: #ffffff;
    }
</style>