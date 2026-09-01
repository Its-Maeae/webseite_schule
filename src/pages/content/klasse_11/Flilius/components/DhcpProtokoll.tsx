export default function DHCP() {
  return (
    <main className="container-components">
      <div className="heading">DHCP-Protokoll</div>
        <div className="subheading">Allgemein</div>
          <div className="list">• DHCP = Dynamic Host Configuration Protocol</div>
          <div className="list">• vergibt automatisch IP-Adressen an Geräte im Netzwerk</div>
          <div className="list">• spart Aufwand, da man nicht jedem Gerät von Hand eine IP-Adresse geben muss</div>
          <div className="list">• verhindert, dass IP-Adressen doppelt vergeben werden</div>
        <br></br>
        <div className="subsubheading">Vorteile</div>
          <div className="list">• geringerer Konfigurationsaufwand bei den Clients</div>
          <div className="list">• keine doppelten IP-Adressen möglich</div>
        <br></br>
        <div className="subsubheading">Ablauf</div>
          <div className="list-sub">• Client sendet DHCPDISCOVER (Broadcast) – „ist hier ein DHCP-Server?“</div>
          <div className="list-sub">• Server antwortet mit DHCPOFFER – schlägt eine IP-Adresse vor</div>
          <div className="list-sub">• Client bestätigt mit DHCPREQUEST</div>
          <div className="list-sub">• Server bestätigt endgültig mit DHCPACK</div>
      <br></br>
      <div className="subheading">DHCP in Filius</div>
        <div className="subsubheading">Server einrichten</div>
          <div className="list">• auf einem Rechner unten im Konfigurationsmenü DHCP-Server einrichten klicken</div>
          <div className="list">• den Haken bei "DHCP aktivieren" setzen</div>
          <div className="list">• im Konfigurationsfenster den Adressbereich eintragen, in dem IP-Adressen vergeben werden sollen</div>
          <div className="list">• DHCP-Server starten, dann werden automatisch IP-Adressen vergeben</div>
          <div className="list">• bei jedem Notebook in der Konfiguration das Häkchen bei „DHCP zur Konfiguration verwenden" setzen</div>
          <div className="list">• dann bekommt der Client automatisch eine IP-Adresse vom Server</div>
          <div className="list">→ der Server/Rechner braucht immer eine feste IP-Adresse</div>
        <div className="subsubheading">Statische Adresszuweisung</div>
          <div className="list">• genutzt, um bestimmten Clients eine feste IP-Adresse im DCHP-Netzwerk zuzuweisen</div>
          <div className="list">• Im DCHP Server/Rechner bei der DHCP Konfiguration auf "statische Adresszuweisung" gehen</div>
          <div className="list">• dort die MAC-Adresse des Clients mit gewünschter fester IP-Adresse eintragen und hinzufügen klicken</div>
    </main>
  )
}