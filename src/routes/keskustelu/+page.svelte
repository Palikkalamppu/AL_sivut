<script>
    import { base } from '$app/paths';

    // Keskustelun tila
    let messages = [
        { id: 1, sender: 'me', text: 'Moi, haluaisin ostaa tän.', time: '10:32' }
    ];
    let newMessage = '';

    // Tuplaklikkauksen lataustila
    let isRefreshing = false;

    // Käsittelee tuplaklikkauksen
    function handleDoubleClick() {
        if (isRefreshing) return; // Estetään uusi lataus, jos edellinen on kesken
        
        isRefreshing = true;
        
        // Simuloidaan datan latausta (1.5 sekuntia)
        setTimeout(() => {
            isRefreshing = false;
        }, 1500);
    }

    function sendMessage() {
        if (newMessage.trim() === '') return;
        
        const timeNow = new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
        messages = [...messages, { id: Date.now(), sender: 'me', text: newMessage, time: timeNow }];
        newMessage = '';
        
        // Vieritetään automaattisesti alas (simulaatio)
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 100);
    }
</script>

<!-- Yläpalkki -->
<header class="navbar">
    <div class="logo"><a href="{base}/">IRTO</a></div>
    <div class="nav-icons">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </div>
</header>

<!-- Pääsisältö, tuplaklikkaus liitetty tähän elementtiin -->
<main class="chat-wrapper" on:dblclick={handleDoubleClick}>
    <!-- Latausindikaattori -->
    <div class="refresh-indicator {isRefreshing ? 'visible' : ''}">
        <svg class="spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.5L21.5 8"></path>
        </svg>
    </div>

    <!-- Keskustelun ylätunniste (tuote + myyjä) -->
    <div class="chat-header">
        <div class="item-thumb">
            <img src="{base}/muki_1.jpg" alt="Tuotekuva" />
        </div>
        <div class="item-info">
            <h2 class="seller-name">Saukki</h2>
            <p class="item-title">Muki</p>
        </div>
        <button class="btn-outline-small">Tiedot</button>
    </div>

    <!-- Viestit -->
    <div class="chat-messages">
        <div class="date-divider">Tänään</div>
        
        {#each messages as msg (msg.id)}
            <div class="message-row {msg.sender === 'me' ? 'me' : 'other'}">
                <div class="bubble">
                    <p>{msg.text}</p>
                    <span class="time">{msg.time}</span>
                </div>
            </div>
        {/each}
    </div>

    <!-- Viestin kirjoitus (click-tapahtuman estäminen propagationin vuoksi vapaaehtoista, tässä estetty ettei tuplaklikkaus inputissa triggaa päivitystä) -->
    <div class="chat-input-area" on:dblclick|stopPropagation>
        <input 
            type="text" 
            placeholder="Kirjoita viesti..." 
            bind:value={newMessage}
            on:keypress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button class="send-btn" on:click={sendMessage} aria-label="Lähetä">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>
    </div>
</main>

<style>
    /* Yleiset tyylit */
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

    /* Navbar */
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

    /* Keskustelualueen asettelu */
    .chat-wrapper {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 71px);
        position: relative;
        overflow: hidden;
        /* Estää tekstin vahingollisen maalautumisen tuplaklikkauksella */
        user-select: none; 
    }

    /* Tuplaklikkauksen latausindikaattori */
    .refresh-indicator {
        position: absolute;
        top: -50px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 50;
        pointer-events: none;
        opacity: 0;
        transition: all 0.3s ease;
    }

    /* Kun tila on aktiivinen, ikoni liukuu alas ja tulee näkyviin */
    .refresh-indicator.visible {
        top: 20px;
        opacity: 1;
    }

    .refresh-indicator svg {
        width: 28px;
        height: 28px;
        color: #00a896;
        background: #ffffff;
        padding: 8px;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .spinning {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        100% { transform: rotate(360deg); }
    }

    /* Keskustelun ylätunniste */
    .chat-header {
        display: flex;
        align-items: center;
        padding: 16px 20px;
        background-color: #ffffff;
        border-bottom: 1px solid #e5e5e5;
        gap: 16px;
    }

    .item-thumb {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #f1f3f5;
        flex-shrink: 0;
    }

    .item-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-info {
        flex-grow: 1;
        overflow: hidden;
    }

    .seller-name {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 4px 0;
        color: #111827;
    }

    .item-title {
        font-size: 13px;
        color: #6c757d;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .btn-outline-small {
        background-color: transparent;
        color: #00a896;
        border: 1px solid #00a896;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-outline-small:hover {
        background-color: #00a896;
        color: #ffffff;
    }

    /* Viestialue */
    .chat-messages {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        /* Sallitaan tekstin maalaaminen viestien sisällä */
        user-select: text;
    }

    .date-divider {
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        color: #adb5bd;
        margin: 16px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .system-message {
        text-align: center;
        font-size: 13px;
        color: #00a896;
        margin-top: 10px;
        font-style: italic;
    }

    .message-row {
        display: flex;
        width: 100%;
    }

    .message-row.me {
        justify-content: flex-end;
    }

    .message-row.other {
        justify-content: flex-start;
    }

    .bubble {
        max-width: 75%;
        padding: 12px 16px;
        border-radius: 16px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .bubble p {
        margin: 0;
        font-size: 15px;
        line-height: 1.5;
    }

    .time {
        font-size: 11px;
        align-self: flex-end;
        margin-top: 4px;
        opacity: 0.7;
    }

    .me .bubble {
        background-color: #F94F55;
        color: #ffffff;
        border-bottom-right-radius: 4px;
    }

    .other .bubble {
        background-color: #e9ecef;
        color: #212529;
        border-bottom-left-radius: 4px;
    }

    /* Syöttöalue */
    .chat-input-area {
        display: flex;
        padding: 16px 20px;
        background-color: #ffffff;
        border-top: 1px solid #e5e5e5;
        gap: 12px;
        align-items: center;
        /* Estetään ulkoalueen user-select: none vaikuttamasta tähän */
        user-select: auto;
    }

    .chat-input-area input {
        flex-grow: 1;
        background-color: #f1f3f5;
        border: 1px solid transparent;
        padding: 12px 16px;
        border-radius: 24px;
        font-size: 15px;
        outline: none;
        font-family: inherit;
        transition: border-color 0.2s ease;
    }

    .chat-input-area input:focus {
        border-color: #d1d5db;
        background-color: #ffffff;
    }

    .send-btn {
        background-color: #F94F55;
        color: #ffffff;
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
        flex-shrink: 0;
    }

    .send-btn:hover {
        background-color: #e04449;
        transform: scale(1.05);
    }

    .send-btn svg {
        width: 20px;
        height: 20px;
        margin-right: 2px;
    }
</style>