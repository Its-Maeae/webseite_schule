export default function Mailserver() {
  return (
    <main className="container-components">
      <div className="heading">Mailserver (E-Mail-Server)</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• verwaltet E-Mail-Konten und speichert eingehende Nachrichten</div>
          <div className="list">• Versand über SMTP (Simple Mail Transfer Protocol), Port 25</div>
          <div className="list">• Abruf über POP3, Port 110</div>
            <div className="list-sub">• bei POP3 werden Mails vom Server heruntergeladen (nicht synchronisiert)</div>
      <br></br>
      <div className="subheading">Mailserver in Filius</div>
        <div className="subsubheading">Server einrichten</div>
          <div className="list">• Software E-Mail-Server auf einem Rechner installieren</div>
          <div className="list">• Maildomain festlegen z.B. test.de</div>
          <div className="list">• Benutzerkonten anlegen (für jeden Client, die E-Mails bekommen soll)</div>
          <div className="list">• Server starten</div>
        <div className="subsubheading">DNS-Eintrag (DNS-Server nötig)</div>
          <div className="list">• auf dem DNS-Server im Tab Mailaustausch die Maildomain z.B. test.de eintragen</div>
          <div className="list">• dazu den Domainnamen des Mailservers eintragen z.B. Server01</div>
          <div className="list">• ohne DNS-Server: bei den Clients direkt die IP-Adresse des Mailservers verwenden</div>
        <div className="subsubheading">Client einrichten</div>
          <div className="list">• auf dem Rechner die Software E-Mail-Programm installieren</div>
          <div className="list">• auf Konto einrichten klicken</div>
          <div className="list">• E-Mail-Adresse eines vorher angelegten Kontos eintragen</div>
          <div className="list">• POP3-Server und SMTP-Server eintragen (Domainname oder IP-Adresse des Mailservers)</div>
          <div className="list">• Ports auf den Standardwerten lassen (25 für SMTP, 110 für POP3)</div>
        <div className="subsubheading">Test</div>
          <div className="list">• eine Mail von einem Konto an ein anderes schreiben und senden</div>
          <div className="list">• auf dem Mailserver kontrollieren, ob die Mail zur Abholung bereitliegt</div>
          <div className="list">• beim Empfänger im E-Mail-Programm die Mails abrufen</div>
    </main>
  )
}