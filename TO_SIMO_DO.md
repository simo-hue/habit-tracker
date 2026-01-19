# Test Manuali - Soft-Delete Abitudini

## Test 5: Database Verification
1. [ ] Aprire Supabase Dashboard
2. [ ] Navigare a Table Editor → goals
3. [ ] Cercare il record con title = "Test Soft Delete"
4. [ ] **Verifica**:
   - [ ] Il record esiste ancora (non è stato eliminato fisicamente)
   - [ ] `end_date` è uguale alla data odierna nel formato 'YYYY-MM-DD'
   - [ ] `start_date` e tutti gli altri campi sono invariati

## Test 6: Cleanup
1. [ ] Eliminare definitivamente "Test Soft Delete" dal database (opzionale)
2. [ ] Oppure lasciarlo come esempio di abitudine archiviata

---

## Test Riordino Abitudini (test esistenti)

#### Step 5: Test Aggiungi Nuova Abitudine
- [ ] Riordina alcune abitudini esistenti in modo custom
- [ ] Aggiungi una nuova abitudine
- [ ] Verifica che la nuova abitudine appaia **in fondo** alla lista
- [ ] Verifica che sia trascinabile immediatamente
- [ ] Spostala in cima
- [ ] Ricarica → verifica che rimanga in cima

#### Step 6: Test Eliminazione Abitudine
- [ ] Riordina abitudini in modo custom
- [ ] Elimina un'abitudine nel **mezzo** della lista
- [ ] Verifica che le rimanenti mantengano l'ordine relativo
- [ ] Ricarica → verifica ordine ancora corretto

#### Step 7: Test Edit Mode Durante Drag
- [ ] Apri edit mode di un'abitudine (click icona matita)
- [ ] Verifica che durante edit NON puoi trascinare (grip disabilitato)
- [ ] Salva edit
- [ ] Verifica che ora puoi trascinare di nuovo

#### Step 9: Test con Molte Abitudini
- [ ] Crea almeno 10-15 abitudini
- [ ] Prova a trascinare dalla cima al fondo
- [ ] Prova a trascinare dal fondo alla cima
- [ ] Verifica smooth scroll durante drag
- [ ] Verifica performance (no lag)

#### Step 10: Browser Compatibility
- [ ] Testa su Chrome
- [ ] Testa su Firefox
- [ ] Testa su Safari (se su Mac)
- [ ] Verifica funzionamento identico

### 5. README.md Links (Da Verificare)
Controlla che i seguenti link nel README.md siano corretti:
- [ ] `YOUR_YOUTUBE_VIDEO_LINK_HERE` → Inserisci link tutorial se disponibile

---

## Website Structure & Routing Verification
1. [ ] **Landing Page**: Visit `/` and verify the new landing page is visible.
2. [ ] **No Links**: Verify there are no buttons pointing to the app on the landing page.
3. [ ] **App Access**: Manually navigate to `/dashboard` (or `/#/dashboard`) to access the app.
4. [ ] **Auth Redirect**: Log out, go to `/auth`, log in. Verify redirection to `/dashboard`.
5. [ ] **Logo Link**: Inside the app, click the top-left logo. Verify it stays on `/dashboard`.
6. [ ] **Mobile Nav**: On mobile view, click "Home". Verify it goes to `/dashboard`.

---

## Landing Page Refinement Verification
1. [ ] **Open Source Badge**: Verify the "Opne Source & Free Forever" badge is visible in the Hero section.
2. [ ] **Description Text**: Verify the main description includes "Open Source e totalmente gratuita".
3. [ ] **Footer**: Verify the footer says "Open Source Project".

---

## FAQ Page Verification
1. [ ] **Navigation**: Verify "FAQ" link in Top Nav of Landing Page works.
2. [ ] **Footer**: Verify "FAQ & Support" link in Footer works.
3. [ ] **Search**: Test the search bar in FAQ page (e.g., search for "AI").
4. [ ] **Accordion**: Open/Close multiple questions to verify animation.
5. [ ] **Categories**: Filter by "AI Coach" or "Daily Protocol" and verify list updates.
6. [ ] **Back Link**: Verify "Torna alla Home" link works.

---

## Tech Page Verification
1. [ ] **Navigation**: Verify "Tech" link in Landing Page Top Nav.
2. [ ] **Content**: Check that all 6 technology cards are visible.
3. [ ] **Responsive**: Check the page on mobile view to ensure the 2-column grid stacks correctly.
4. [ ] **Back Link**: Verify "Torna alla Home" works.

---

## Philosophy Page Verification
1. [ ] **Navigation**: Verify "Filosofia" link in Landing Page Top Nav links to `/philosophy`.
2. [ ] **Content**: Check the "Origin Story" section. Does it explain the "Why"?
3. [ ] **Pillars**: Verify all 3 pillars (Micro/Macro, Data, Ownership) are visible.
4. [ ] **Back Link**: Verify "Torna alla Home" works.
5. [ ] **Tech Link**: Verify the "Esplora la Tecnologia" button in the footer leads to `/tech`.

---

## Features Page Verification
1. [ ] **Navigation**: Verify "Funzionalità" link in Landing Page Top Nav links to `/features`.
2. [ ] **Completeness**: Check all 4 categories (Daily, Long-Term, AI, Utils).
3. [ ] **AI Details**: Verify AI Coach, Mood Matrix, and "Privacy First" are mentioned.
4. [ ] **Responsiveness**: Check grid layout on mobile (stacked cards).
5. [ ] **Back Link**: Verify "Torna alla Home" works.
6. [ ] **CTA**: Verify "Accedi alla Dashboard" button works.

---

## Get Started Page Verification
1. [ ] **Navigation**: Verify "Guida Installazione" link in Landing Page Top Nav and Footer.
2. [ ] **Content Clarity**: Ensure steps are easy to follow for a beginner.
3. [ ] **Copy Buttons**: Test all copy buttons (Git, NPM, Run Dev).
4. [ ] **Schema**: Verify the "schema.sql" preview is visible and scrollable.
5. [ ] **External Links**: Check that links to VS Code, Node.js, and Supabase work.

---

## Creator Page Verification
1. [ ] **Navigation**: Verify "Il Founder" link in the Landing Page Footer.
2. [ ] **Narrative**: Check if the "Tech vs Nature" story is effectively communicated.
3. [ ] **External Links**: Test all 4 social buttons (GitHub, LinkedIn, Mountains, Personal).
4. [ ] **Visuals**: Verify the background gradients (purple/emerald) render correctly.
