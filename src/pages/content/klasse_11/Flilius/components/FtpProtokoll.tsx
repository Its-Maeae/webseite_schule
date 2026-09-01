export default function FTP() {
  return (
    <main className="container-components">
      <div className="heading">FTP-Protokoll</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• FTP = File Transfer Protocol</div>
          <div className="list">• dient zur Übertragung von Dateien zwischen zwei Rechnern über ein Netzwerk</div>
        <br></br>
        <div className="subsubheading">Ablauf</div>
          <div className="list-sub">• Client baut mit Benutzername und Passwort eine Verbindung zum FTP-Server auf</div>
          <div className="list-sub">• über Port 21 werden Befehle geschickt z.B. Ordner wechseln, Datei anfordern</div>
          <div className="list-sub">• über einen weiteren Port läuft dann die eigentliche Dateiübertragung</div>
      <br></br>
      <div className="subheading">Dateiaustausch in Filius (Gnutella)</div>
        <div className="list">• Simulation von FTP zwischen Rechnern mit der Software Gnutella</div>
        <div className="list">• arbeitet nach dem Peer-to-Peer-Prinzip: alle Rechner sind gleichberechtigt; können sowohl Dateien anbieten als auch suchen</div>
        <br></br>
        <div className="subsubheading">Einrichten</div>
          <div className="list">• auf allen beteiligten Rechnern die Software „Gnutella" installieren</div>
          <div className="list">• zusätzlich auf mindestens einem Rechner Datei-Explorer installieren, um Dateien in den Austauschordner zu legen</div>
          <div className="list">• bei Installation von Gnutella wird automatisch ein Ordner peer2peer angelegt; Dateien in diesem Ordner werden geteilt</div>
        <div className="subsubheading">Verbindung herstellen</div>
          <div className="list">• Gnutella auf beiden Rechnern starten</div>
          <div className="list">• bei Teilnehmer IP-Adresse die IP-Adresse des anderen Rechners eintragen</div>
          <div className="list">• auf „Netz beitreten" klicken → Rechner sind im Peer-to-Peer-Netz miteinander verbunden</div>
        <div className="subsubheading">Datei suchen und übertragen</div>
          <div className="list">• über Text-Editor eine Datei erstellen und im Ordner peer2peer speichern</div>
          <div className="list">• auf dem anderen Rechner in Gnutella über Suche"nach dem Dateinamen suchen</div>
          <div className="list">• wird die Datei gefunden, zeigt Gnutella an, auf welcher IP-Adresse sie liegt</div>
          <div className="list">• Datei herunterladen → liegt danach im peer2peer-Ordner des eigenen Rechners</div>
    </main>
  )
}