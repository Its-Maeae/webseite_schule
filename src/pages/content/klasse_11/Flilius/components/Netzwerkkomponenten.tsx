export default function Netzwerkkomponenten() {
  return (
    <main className="container-components">
      <div className="heading">Netzwerkkomponenten</div>
        <div className="subheading">Server (Rechner)</div>
          <div className="list">• leistungsfähiger Computer</div>
          <div className="list">• Dienste/Anwendungen laufen dort</div>
          <div className="list">• kann Firewallserver, Emailserver, usw sein</div>
          <div className="list">• "Hauptcomputer des Netzwerks"</div>
        <br></br>
        <div className="subheading">Client (Notebook)</div>
          <div className="list">• benutzen die Dienste des Servers</div>
          <div className="list">• Zugangspunkt zum Netzwerk</div>
          <div className="list">• Abhängig vom Server</div>
        <br></br>
        <div className="subheading">Switch</div>
          <div className="list">• "Verteiler"</div>
          <div className="list">• merhrere Clients werden zu einem Server verbunden</div>
        <br></br>
        <div className="subheading">Kabel</div>
          <div className="list">• Verbindung zwischen Netzwerkkomponenten</div>
    </main>
  )
}