export const data = [
  {
    id: 0,
    slug: "introduzione_a_python",
    title: "Introduzione a python",
    description: (
      <div>
        <p>
          Python è un linguaggio di programmazione ad alto livello, interpretato
          e orientato agli oggetti. È noto per la sua sintassi chiara e
          leggibile, che lo rende un linguaggio molto accessibile anche per i
          principianti. In questa lezione introduttiva, ti guiderò attraverso i
          concetti fondamentali di Python e ti aiuterò a configurare il tuo
          ambiente di sviluppo.
        </p>
        <h3>Che cos'è Python?</h3>
        <p>
          Python è un linguaggio di programmazione creato da Guido van Rossum
          negli anni '90. È un linguaggio interpretato, il che significa che il
          codice sorgente viene eseguito linea per linea da un interprete
          anziché essere compilato in codice macchina eseguibile.
        </p>

        <h3>Installazione di Python</h3>
        <p>
          Prima di iniziare a programmare in Python, è necessario installare
          l'interprete Python sul tuo sistema. Puoi scaricare l'ultima versione
          di Python dal sito ufficiale
          <a href="https://www.python.org"> www.python.org </a> e seguire le
          istruzioni di installazione appropriate per il tuo sistema operativo.
        </p>

        <h3>Ambiente di sviluppo: IDLE e editor di testo</h3>
        <p>
          Una volta installato Python, avrai accesso all'IDLE (Integrated
          Development and Learning Environment), un ambiente di sviluppo di base
          incluso nell'installazione di Python. Puoi utilizzare anche altri
          editor di testo o ambienti di sviluppo come Visual Studio Code,
          PyCharm o Atom.
        </p>

        <h3>Esecuzione di un semplice script Python</h3>
        <p>
          Un semplice script Python è costituito da una serie di istruzioni
          scritte in un file con estensione ".py". Puoi creare un nuovo file con
          il tuo editor di testo preferito, scrivere le istruzioni Python al suo
          interno e salvarlo con l'estensione ".py". Per eseguire lo script,
          apri un terminale o una finestra del prompt dei comandi, passa alla
          directory in cui hai salvato lo script e digita il comando "python
          nome_script.py" (sostituendo "nome_script" con il nome effettivo del
          tuo file).
        </p>

        <h3>Variabili e tipi di dati di base</h3>
        <p>
          In Python, puoi memorizzare i dati all'interno di variabili. Una
          variabile è un nome che rappresenta un valore specifico. Puoi
          assegnare un valore a una variabile utilizzando l'operatore di
          assegnazione <code>=</code>
        </p>
        <ul>
          <li>
            <p>
              I tipi di dati di base in Python includono interi <code>int</code>, numeri in
              virgola mobile <code>float</code>, stringhe <code>str</code> e booleani <code>bool</code> .
            </p>
          </li>
          <li>
            {" "}
            <p>
              Puoi eseguire operazioni aritmetiche con numeri, concatenare
              stringhe, utilizzare operatori di confronto per confrontare i
              valori e utilizzare operatori logici per combinare le condizioni.
            </p>
          </li>
          <li>
            <p>
              Python offre anche strutture dati come liste, tuple e dizionari
              per memorizzare collezioni di valori.
            </p>
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    slug: "strutture_di_controllo",
    title: "Strutture di controllo in Python",
    description: (
      <div>
        <h3>Istruzioni condizionali (if-elif-else)</h3>
        <p>
          Le istruzioni condizionali consentono al programma di prendere
          decisioni basate su condizioni specifiche. Utilizziamo l'istruzione{" "}
          <code>if</code> per eseguire un blocco di codice solo se una
          condizione è vera. Possiamo aggiungere ulteriori blocchi di codice con
          le istruzioni <code>elif</code> (else if) per gestire più condizioni,
          e l'istruzione <code>else</code> per gestire tutti gli altri casi.
        </p>

        <h3>Operatori di confronto</h3>
        <p>
          Gli operatori di confronto vengono utilizzati per confrontare valori e
          restituire un valore booleano (True o False) in base al risultato del
          confronto. Gli operatori di confronto comuni includono <code>==</code>{" "}
          (uguale), <code>!=</code> (diverso), <code>&gt;</code> (maggiore di),{" "}
          <code>&lt;</code> (minore di), <code>&gt;=</code> (maggiore o uguale
          a) e <code>&lt;=</code> (minore o uguale a).
        </p>

        <h3>Istruzioni iterative (cicli)</h3>
        <p>
          Le istruzioni iterative consentono di ripetere un blocco di codice più
          volte. In Python, i cicli più comuni sono il ciclo <code>for</code> e
          il ciclo <code>while</code>. Il ciclo <code>for</code> viene
          utilizzato per iterare su una sequenza di elementi, come una lista o
          una stringa. Il ciclo <code>while</code> viene utilizzato per ripetere
          un blocco di codice finché una condizione specifica è vera.
        </p>

        <h3>Esempi di istruzioni condizionali e cicli</h3>
        <p>
          Vedremo ora alcuni esempi pratici di come utilizzare le istruzioni
          condizionali e i cicli in Python.
        </p>

        <p>
          <strong>Esempio 1: Determinare se un numero è pari o dispari</strong>
        </p>
        <pre>
          numero = 7 <br></br>if numero % 2 == 0: print("Il numero è pari"){" "}
          <br></br>else: print("Il numero è dispari")
        </pre>

        <p>
          <strong>Esempio 2: Iterare su una lista</strong>
        </p>
        <pre>
          frutta = ["mela", "banana", "arancia"] <br></br>for frutto in frutta:
          <br></br>
          print(frutto)
        </pre>

        <p>
          <strong>
            Esempio 3: Esecuzione di un ciclo finché l'utente non inserisce
            un'opzione corretta
          </strong>
        </p>
        <pre>
          while True: <br></br>scelta = input("Seleziona un'opzione (A, B, C):
          ") <br></br>if scelta.lower() == 'a': <br></br>print("Hai selezionato
          l'opzione A") <br></br>break <br></br>elif scelta.lower() == 'b':
          <br></br>print("Hai selezionato l'opzione B") <br></br>break <br></br>
          elif scelta.lower() == 'c': <br></br>print("Hai selezionato l'opzione
          C") <br></br>break <br></br>else: print("Opzione non valida.
          Riprova.")
        </pre>
      </div>
    ),
  },

  {
    id: 2,
    slug: "variabili_stringhe",
    title: "Variabili e stringhe",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 3,
    slug: "conversioni_e_funzioni",
    title: "Conversioni tra tipi di dato, funzioni print e input",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 4,
    slug: "algebra_booleana&operatori_comparazione",
    title: "Algebra Booleana e Operatori di Comparazione",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 5,
    slug: "cicli",
    title: "Ciclo while, istruzioni break e continue",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 6,
    slug: "cicli_2",
    title: "Il Ciclo for e la funzione range",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 7,
    slug: "moduli",
    title: "I Moduli della Standard Library",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 8,
    slug: "parte8",
    title: "parte8",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 9,
    slug: "parte9",
    title: "parte9",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },

  {
    id: 10,
    slug: "parte10",
    title: "parte10",
    description: (
      <div>
        <h3>Come commentare in Python</h3>
        <p>
          I commenti di Python permettono di inserire del testo all'interno del
          codice sorgente che viene ignorato dall'interprete Python. Vengono
          utilizzati per descrivere il codice e per renderlo più comprensibile
          sia agli sviluppatori che lavorano in team sia a chi scrive codice da
          solo, perché dopo un po’ di tempo è facile dimenticarsi dettagli utili
          riguardo ai propri script e fa comodo avere dei punti di riferimento.
          Per inserire un commento in Python, basta utilizzare il carattere #
          all'inizio di unariga: tutto ciò che lo segue (sulla stessa riga) non
          verrà eseguito. Ad esempio, se vogliamo inserire un commento per
          descrivere una variabile x, possiamo scrivere:<br></br>
          <br></br>
          Si possono inserire commenti anche all'interno del codice. Questo può
          essere utile per spiegare parti specifiche del codice o per
          disabilitare temporaneamente alcune righe di codice mentre si scrive
          (come durante il debugging). Ad esempio:
        </p>

        <h2>Espressioni, Valori e Operatori</h2>
        <p>
          Con la shell di Python possiamo effettuare anche semplici Operazioni
          Numeriche. Scrivete 3 + 3 e date Invio:<br></br>
          Ecco che otteniamo il risultato istantaneamente. Questa è definita
          un'espressione, con i numeri chiamati valori e il simbolo del +
          chiamato operatore: questo è importante perché ci inizia a predisporre
          mentalmente per pensare al codice come a un insieme di istruzioni dove
          a ciascuna corrisponde corrisponde un ruolo ben preciso. Come vedremo,
          nel mondo della programmazione esistono diversi tipi di valori e
          operatori, non solo numerici. Per ora, proseguiamo imparando il resto
          degli operatori numerici, anche perché ci sono alcune considerazioni
          da effettuare. Come intuibile, usiamo il simbolo - per effettuare
          sottrazioni:
          <br></br>
          L’obiettivo di questa guida è quello di fornire una panoramica
          generale sulla programmazione in Python, che permetta al lettore di
          sviluppare in modo facile e veloce le proprie applicazioni.
        </p>
      </div>
    ),
    problem: "esegui un operazione",
    sol: "Hello world",
  },
];
