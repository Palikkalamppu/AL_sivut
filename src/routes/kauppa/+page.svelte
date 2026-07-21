<script>
	import { base } from '$app/paths';

	let paakuva = "https://placehold.co/400x400/f0f4f8/1a1a1a?text=Punainen+Muki";
	let pikkukuvat = [
		"https://placehold.co/100x100/f0f4f8/1a1a1a?text=Sivuprofiili",
		"https://placehold.co/100x100/f0f4f8/1a1a1a?text=Pohja"
	];
</script>

<div class="parmis-app">
	<!-- Yläpalkki -->
	<header class="header">
		<div class="logo">
			<span class="circle-left"></span>
			<span class="circle-right"></span>
			<a href="{base}/">PARMIS</a>
		</div>
		<div class="header-actions">
			<button class="icon-btn">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
				<span>Profiili</span>
			</button>
			<button class="icon-btn">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
				<span>Kori</span>
			</button>
			<button class="icon-btn">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				<span>Kategoriat</span>
			</button>
		</div>
	</header>

	<!-- Hakupalkki -->
	<div class="search-container">
		<div class="search-box">
			<input type="text" placeholder="Etsi tuotteita laajasta valikoimasta..." />
			<button class="search-btn">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
			</button>
		</div>
	</div>

	<!-- Pääsisältö -->
	<main class="product-container">
		<!-- Murupolku -->
		<nav class="breadcrumbs">
			<a href="{base}/" class="home-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
			</a>
			<span class="separator">/</span>
			<a href="#">Koti & Keittiö</a>
			<span class="separator">/</span>
			<span class="current">Kahvimukit</span>
		</nav>

		<!-- Tuotteen asettelu (Kuvat ja tiedot) -->
		<div class="product-layout">
			
			<!-- Kuvaosio -->
			<div class="product-gallery">
				<div class="main-image-container">
					<img src={paakuva} alt="Tuotekuva" class="main-image" />
					<button class="next-btn">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
					</button>
				</div>
				<div class="thumbnails">
					{#each pikkukuvat as kuva, i}
						<div class="thumb-wrapper" class:active={i === 0}>
							<img src={kuva} alt="Pikkukuva {i+1}" />
						</div>
					{/each}
				</div>
			</div>

			<!-- Tuotetiedot -->
			<div class="product-info">
				<a href="#" class="brand-link">ShocoMugs</a>
				<h1 class="product-title">Punainen muki eläimellä <br> Hiiri 0,3 l</h1>
				
				<div class="rating">
					<span class="stars">
    <!-- 4 täyttä tähteä -->
    <svg viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    
    <!-- 90% täytetty tähti (4.9) -->
    <svg viewBox="0 0 24 24" fill="url(#star-grad-90)" stroke="#eab308" stroke-width="2">
        <defs>
            <linearGradient id="star-grad-90" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="90%" stop-color="#eab308" />
                <stop offset="90%" stop-color="#e5e7eb" />
            </linearGradient>
        </defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
</span>
					<span class="rating-score">4.9 / 5</span>
					<a href="#" class="review-count">(1624 arviota)</a>
				</div>

				<div class="price">25,50 €</div>
				
				<!-- Saatavuusteksti pyöristetympänä -->
				<div class="availability">
					<span class="indicator-dot"></span>
					Hyllyssä: alle 5 kpl
				</div>
			</div>
		</div>
        <!-- Tuotekuvaus ja ominaisuudet -->
<div class="product-description">
    <h2>Tuotekuvaus</h2>
    <div class="description-content">
        <p>
            Tästä mukista et halua jäädä paitsi! Selittämättömään suosioon nousseen mukin viimeinen erä, joten pidä kiirettä. 
            Tämä tuote tekee jokaisesta aamusta unohtumattoman, nautitpa siitä sitten kahvia, teetä tai mitä ikinä.
            Muinaisiin oppeihin pohjautuva valmistustapa pitää huolen siitä, että muki sietää entistäkin kovempia astianpesukoneohjelmia.
        </p>
    </div>
</div>
	</main>
</div>

<style>
	/* --- Yleiset tyylit (Moderni vaalea teema) --- */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #fcfcfc;
		font-family: 'Rubik', sans-serif;
		color: #1f2937;
	}

	.parmis-app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* --- Yläpalkki --- */
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 24px;
		background-color: #ffffff;
		box-shadow: 0 1px 3px rgba(0,0,0,0.05);

        position: sticky;
        top: 0;
        z-index: 100;
	}

	.logo {
		display: flex;
		align-items: center;
		font-family: 'Archivo Black', sans-serif;
		font-size: 28px;
		letter-spacing: -0.5px;
		position: relative;
	}

	.logo a {
		color: #007841;
		text-decoration: none;
		margin-left: 35px;
	}

	/* Uudistetut logokolmiot */
	.circle-left {
		position: absolute;
		left: 0;
        top: 15px;
		width: 0;
		height: 0;
		border: 10px solid rgb(22, 131, 80);
        border-radius: 100%;
	}
	.circle-right {
		position: absolute;
		left: 10px;
        top: 5px;
		width: 0;
		height: 0;
        border: 10px solid #28af77;
        border-radius: 100%;
	}

	.header-actions {
		display: flex;
		gap: 20px;
	}

	.icon-btn {
		background: none;
		border: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		font-family: 'Rubik', sans-serif;
		cursor: pointer;
		color: #4b5563;
		gap: 6px;
		transition: color 0.2s;
	}

	.icon-btn:hover {
		color: #2563eb;
	}

	.icon-btn svg {
		width: 24px;
		height: 24px;
	}

	/* --- Hakupalkki --- */
	.search-container {
		padding: 16px 24px;
		background-color: #ffffff;
		border-bottom: 1px solid #f3f4f6;
	}

	.search-box {
		display: flex;
		align-items: center;
		border: 1px solid #d1d5db;
		border-radius: 30px; /* Pyöristetympi haku */
		padding: 6px 20px;
		background-color: #f9fafb;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	.search-box:focus-within {
		border-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
		background-color: #ffffff;
	}

	.search-box input {
		flex-grow: 1;
		border: none;
		outline: none;
		padding: 10px 0;
		font-size: 15px;
		background: transparent;
		font-family: 'Rubik', sans-serif;
		color: #1f2937;
	}

	.search-box input::placeholder {
		color: #9ca3af;
	}

	.search-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: #6b7280;
		padding: 4px;
	}
	
	.search-btn:hover {
		color: #2563eb;
	}

	/* --- Tuotesivu --- */
	.product-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 32px 24px;
		width: 100%;
		box-sizing: border-box;
	}

	/* Murupolku */
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 14px;
		margin-bottom: 32px;
		color: #6b7280;
	}

	.breadcrumbs a {
		color: #6b7280;
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		color: #2563eb;
	}

	.home-icon svg {
		width: 18px;
		height: 18px;
		vertical-align: text-bottom;
	}

	.separator {
		font-size: 14px;
		color: #d1d5db;
	}

	.current {
		color: #1f2937;
		font-weight: 500;
	}

	/* Grid-asettelu isoille ruuduille */
	.product-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
	}

	@media (min-width: 768px) {
		.product-layout {
			grid-template-columns: 1fr 1fr;
		}
	}

	/* Kuvagalleria */
	.product-gallery {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.main-image-container {
		position: relative;
		width: 100%;
		max-width: 500px;
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		border-radius: 16px; /* Pyöristetyt kulmat kuvalle */
		box-shadow: 0 4px 20px rgba(0,0,0,0.03);
	}

	.main-image {
		width: 85%;
		height: 85%;
		object-fit: contain;
	}

     .next-btn {
		position: absolute;
		background: #ffffff;
		border: 1px solid #e5e7eb;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		color: #4b5563;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);
		transition: all 0.2s ease;
	}

	.next-btn:hover {
		background: #f9fafb;
		color: #2563eb;
		transform: scale(1.05);
	}

	.next-btn {
		right: -24px;
		top: 50%;
		transform: translateY(-50%);
	}

	.next-btn:hover {
		transform: translateY(-50%) scale(1.05);
	}

	.thumbnails {
		display: flex;
		gap: 16px;
		justify-content: flex-start;
		width: 100%;
		max-width: 500px;
	}

	.thumb-wrapper {
		width: 80px;
		height: 80px;
		border: 2px solid transparent;
		background-color: #ffffff;
		border-radius: 12px; /* Pyöristetyt pikkukuvat */
		padding: 4px;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.thumb-wrapper.active {
		border-color: #007841;
	}

	.thumb-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* Tuotetiedot */
	.product-info {
		display: flex;
		flex-direction: column;
	}

	.brand-link {
		color: #4b5563;
		text-decoration: none;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 12px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.brand-link:hover {
		text-decoration: underline;
	}

	.product-title {
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
		font-size: 28px;
		margin: 0 0 20px 0;
		line-height: 1.3;
		color: #111827;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.stars {
		display: flex;
		gap: 4px;
	}
	.stars svg {
		width: 20px;
		height: 20px;
	}

	.rating-score {
		font-weight: 500;
		font-size: 15px;
		color: #374151;
	}

	.review-count {
		color: #6b7280;
		text-decoration: none;
		font-size: 15px;
	}
	
	.review-count:hover {
		text-decoration: underline;
	}

	.price {
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 8px;
		color: #111827;
	}

	.price-info {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		margin-bottom: 32px;
	}

	.price-info a {
		color: #4b5563;
		text-decoration: underline;
	}
	
	.price-info a:hover {
		color: #2563eb;
	}

	.info-icon {
		width: 16px;
		height: 16px;
		color: #9ca3af;
	}

	/* Uudistettu saatavuus */
	.availability {
		font-size: 15px;
		font-weight: 500;
		color: #991b1b; /* Pehmeä punainen */
		background-color: #fef2f2;
		padding: 10px 16px;
		border-radius: 2px;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		align-self: flex-start;
		border: 1px solid #fecaca;

        margin-bottom: 25px;
	}

	.indicator-dot {
		width: 8px;
		height: 8px;
		background-color: #ef4444;
		border-radius: 50%;
		display: inline-block;
		box-shadow: 0 0 0 2px #fee2e2;
	}

    .product-description {
		border-top: 1px solid #e5e7eb;
	}

	.product-description h2 {
		font-family: 'Rubik', sans-serif;
		font-size: 22px;
		font-weight: 500;
		color: #111827;
	}
</style>