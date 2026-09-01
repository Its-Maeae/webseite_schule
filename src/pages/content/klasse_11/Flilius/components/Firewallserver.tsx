export default function Firewall() {
  return (
    <main className="container-components">
      <div className="heading">Firewall</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• entscheidet, welcher Datenverkehr erlaubt und welcher blockiert wird</div>
          <div className="list">• kann auf einem Router oder auch auf einzelnen Rechnern/Servern eingerichtet werden</div>
        <br></br>
        <div className="subsubheading">Funktionsweise</div>
          <div className="list">• Regeln legen fest, ob bestimmter Datenverkehr erlaubt oder blockiert wird</div>
          <div className="list">• Verkehr von außen nach innen wird meist verboten, außer er wurde vorher von innen angefragt</div>
          <div className="list">• Verkehr von innen nach außen ist meistens offener</div>
          <div className="list">• Ausnahmen nötig, wenn ein Server (z.B. Webserver) von außen erreichbar sein soll</div>
      <br></br>
      <div className="subheading">Firewall in Filius</div>
        <div className="subsubheading">Einrichten auf dem Router/Vermittlungsrechner</div>
          <div className="list">• Konfiguration des Routers öffnen</div>
          <div className="list">• im Tab Allgemein auf Firewall einrichten klicken</div>
          <div className="list">• Firewall aktivieren</div>
          <div className="list">• im Tab Firewall-Regeln die Standardaktion festlegen</div>
          <div className="list">• neue Regeln hinzufügen, um bestimmten Verkehr trotzdem zu erlauben</div>
        <div className="subsubheading">Einrichten auf einem einzelnen Rechner/Server</div>
          <div className="list">• Software „Firewall" auf dem Rechner installieren</div>
          <div className="list">• dort können auch einzelne Ports gesperrt oder freigegeben werden</div>
          <div className="list">• z.B. läuft auf einem Server ein Mailserver, müssen die Ports 25 (SMTP) und 110 (POP3) freigegeben werden</div>
    </main>
  )
}