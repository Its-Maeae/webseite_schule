export default function DNSServer() {
  return (
    <main className="container-components">
      <div className="heading">DNS-Server</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• DNS = Domain Name System</div>
          <div className="list">• übersetzt Domainnamen (z.B. www.filius.de) in IP-Adressen</div>
        <br></br>
        <div className="subsubheading">Wichtige Begriffe</div>
          <div className="list-sub">• A-Record: verknüpft einen Domainnamen mit einer IP-Adresse</div>
          <div className="list-sub">• NS-Record: gibt an, welcher Nameserver für eine Domain zuständig ist</div>
          <div className="list-sub">• Mailaustausch/MX: verknüpft eine Maildomain mit dem zuständigen Mailserver</div>
      <br></br>
      <div className="subheading">DNS-Server in Filius</div>
        <div className="subsubheading">Einrichten</div>
          <div className="list">• Software „DNS-Server" auf einem Rechner installieren</div>
          <div className="list">• Konfiguration öffnen</div>
          <div className="list">• Domainname eingeben z.B. Client01</div>
          <div className="list">• passende IP-Adresse des Rechners/Clients eingeben</div>
          <div className="list">• auf „Hinzufügen" klicken → Eintrag erscheint in der Liste</div>
          <div className="list">• DNS-Server starten</div>
          <div className="list">• bei Benutzung eines DHCP Server muss das hinzugefügte Gerät eine statische IP-Adresse haben</div>
          <div className="list">→ in der Befehlszeile kann das Gerät nun über den Namen ein ping ausgeführt werden (z.B. ping Client01)</div>
        <div className="subsubheading">Nameserver</div>
          <div className="list">• auf dem DNS-Server im Tab Nameserver den Domainnamen des Nameservers eintragen (z.B. TEST.DE)</div>
          <div className="list">• dann den Namen des Nameservers eintragen (Name des Rechner mit DNS Server; DNS Server muss in Adressliste hinzugefügt sein)</div>
                <div className="subsubheading">Email Server</div>
          <div className="list">• auf dem DNS-Server im Tab Mailaustausch die Maildomain eintragen (z.B. test.de)</div>
          <div className="list">• dann den Namen des Mailserver eintragen (Name des Rechner mit Emailserver; Emailserver muss in Adressliste hinzugefügt sein)</div>

    </main>
  )
}