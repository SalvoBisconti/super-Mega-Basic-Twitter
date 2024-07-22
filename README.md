# super-Mega-Basic-Twitter

**Super Mega Basic Twitter** è una semplice applicazione web che simula alcune delle funzionalità di base di Twitter. Permette agli utenti di pubblicare tweet, visualizzare tutti i tweet e incrementare il numero di "mi piace" sui tweet esistenti. Il progetto è composto da un backend costruito con Node.js e Express e un frontend realizzato il framework Next.js.

## Funzionalità

- **Pubblicare Tweet:** Gli utenti possono inviare nuovi tweet specificando il contenuto e l'autore.
- **Visualizzare Tweet:** Gli utenti possono visualizzare un elenco di tutti i tweet pubblicati.
- **Incrementare i "Mi Piace":** Gli utenti possono aumentare il numero di "mi piace" su un tweet specifico.

## Tecnologie Utilizzate

- **Backend:**

  - Node.js
  - Express
  - File System per la persistenza dei dati

- **Frontend:**
  - React
  - Axios per le richieste HTTP
  - Tailwind CSS per lo styling

## Struttura del Progetto

- **backend**: Contiene il codice sorgente per il server Node.js e le API.
- **frontend**: Contiene il codice sorgente per l'interfaccia utente in React.

## Setup e Avvio

### Backend

1. **Naviga nella directory del backend:**

   ```bash
   cd backend
   ```

   2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

2. **Avvia il server:**

   ```bash
   npm start
   ```

### Frontend

1. **Naviga nella directory del frontend:**

   ```bash
   cd frontend
   ```

   2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

2. **Avvia l'app Next.js:**

   ```bash
   npm run dev
   ```

   L'app React sarà accessibile su http://localhost:3000.

   ## API Endpoints

   ```

   ```

Questa sezione documenta le API disponibili nel backend dell'applicazione. Le API sono progettate per gestire i tweet e le loro interazioni, come aggiungere un nuovo tweet, visualizzare tutti i tweet e incrementare il numero di "mi piace" per un tweet specifico.

### GET /tweets

- **Descrizione:** Recupera tutti i tweet esistenti.
- **Metodo:** GET
- **URL:** `http://localhost:3001/tweets`
- **Risposta:**

  ```
  [
  {
  "id": 1,
  "content": "string",
  "user": "string",
  "likes": 0
  },
  {
  "id": 2,
  "content": "string",
  "user": "string",
  "likes": 5
  }
  ]

  ```

### POST /tweets

- **Descrizione:** Crea un nuovo tweet.
- **Metodo:** POST
- **URL:** `http://localhost:3001/tweets`
- **Corpo della Richiesta:**

  ```json
  {
    "content": "string",
    "user": "string"
  }
  ```

  - **Risposta:**

    ```json
    {
      "id": 1,
      "content": "string",
      "user": "string",
      "likes": 0
    }
    ```

    - **Errore:**

    ```json
    {
      "message": "Bad Request"
    }
    ```

  ```

  ```

  ### POST /tweets/like

- **Descrizione:** Incrementa il numero di "mi piace" per un tweet specifico.
- **Metodo:** POST
- **URL:** `http://localhost:3001/tweets/:id/like`
- **Parametri dell'URL:** `id (numero): L'ID del tweet per cui incrementare i "mi piace".`
- **Risposta:**

  ```json
  {
    "id": 1,
    "content": "string",
    "user": "string",
    "likes": 1
  }
  ```

  - **Errore:**
    ```json
    {
      "message": "Tweet not found"
    }
    ```

  ```

  ```

  ## File tweets.json

  Il file tweets.json memorizza i tweet in modo persistente. Questo file deve essere creato nella directory backend/data e deve avere il formato JSON corretto.
  Permette dunque il salvataggio dei dati derivanti dai metodi HTTP in locale.
