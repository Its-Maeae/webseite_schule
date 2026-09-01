export default function Webserver() {
  return (
    <main className="container-components">
      <div className="heading">Webserver</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• stellt Webseiten bereit, die über HTTP abgerufen werden können</div>
          <div className="list">• Client fordert über den Webbrowser eine Seite an, der Webserver schickt sie zurück</div>
          <div className="list">• Standardport: 80</div>
      <br></br>
      <div className="subheading">Webserver in Filius</div>
        <div className="subsubheading">Server einrichten</div>
          <div className="list">• Software Webserver auf einem Rechner installieren</div>
          <div className="list">• Webserver starten → es wird automatisch eine Standard-Webseite angezeigt</div>
        <div className="subsubheading">Eigene Webseite erstellen</div>
          <div className="list">• auf dem Webserver die Software „Text-Editor" installieren</div>
          <div className="list">• über den Text-Editor die Datei der Webseite (z.B. index.html) bearbeiten</div>
          <div className="list">• weitere Seiten können ergänzt und mit eigenen Seitenbezeichnungen versehen werden</div>
        <div className="subsubheading">Test</div>
          <div className="list">• auf einem Client die Software „Webbrowser" installieren</div>
          <div className="list">• IP-Adresse (oder Domainname) des Webservers eingeben</div>
          <div className="list">• bei Erfolg wird die Webseite im Browser angezeigt</div>
    </main>
  )
}