<header class="navbar">
	<div class="logo">IRTO</div>
	<div class="nav-icons">
		<!-- Värittömät SVG-ikonit -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
	</div>
</header>

<style>
    	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		background-color: #1e1e1e; /* Hieman taustaa vaaleampi palkki */
		border-bottom: 1px solid #333333;
		box-shadow: 0 2px 10px rgba(0,0,0,0.5);
	}

	.logo {
		font-family: 'Anton', sans-serif;
		font-size: 32px;
		color: #00d4ff; /* Sähkönsininen väri */
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
		color: #aaaaaa; /* Värittömät, harmaat ikonit */
		cursor: pointer;
		transition: color 0.2s ease;
	}

	.nav-icons svg:hover {
		color: #00d4ff; /* Ikonit muuttuvat logon värisiksi koskettaessa */
	}
</style>