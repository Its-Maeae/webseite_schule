export default function Netzwerkklassen() {
  return (
    <main className="container-components">
      <div className="heading">Übersicht Netzwerkklassen</div>
        <div className="subheading">IPv4-Protokoll</div>
        <div className="subsubheading">Allgemein</div>
          <div className="list">• Nummer 4 im Name, weil die IP aus 4 Zahlen besteht, Zahlen mit Punkt getrennt</div>
          <div className="list">• die	Ersten 3 Zahlen sind die Heimadresse bzw. das „Netzwerk“</div>
          <div className="list">• vierte Zahl = spezifische, einmalige Geräte ID</div>
            <div className="list-sub">•	xxx.xxx.xxx.1 = meistens Router</div>
            <div className="list-sub">• xxx.xxx.xxx.0 = Netzwerk Adresse (Identifiziert das Netzwerk als Ganzes)</div>
            <div className="list-sub">• xxx.xxx.xxx.2 bis .10 = meistens nicht vergeben (reserviert für wichtige Geräte im ganzen Netzwerk)</div>
            <div className="list-sub">•	xxx.xxx.xxx.255 = Broadcast-Adresse (zur Versendung von Daten an alle Geräte im Netzwerk)</div>
            <div className="list-sub">• xxx.xxx.xxx.1 = meistens Gateway (Router); Daten die außerhalb des internen Netzwerk</div>
          <div className="list-">→ d.h. theoretisch 253 Geräte in einem Netzwerk (mit Subnetmaske 255.255.255.0) möglich</div>
        <br></br>
        <div className="subsubheading">Klasse A Netzwerk</div>
          <div className="list">• IP-Adresse: 10.xxx.xxx.xxx</div>
        <div className="subsubheading">Klasse B Netzwerk</div>
          <div className="list">• IP-Adresse: 172.xxx.xxx.xxx</div>
        <div className="subsubheading">Klasse C Netzwerk</div>
          <div className="list">• IP-Adresse: 192.168.xxx.xxx</div>
          <div className="list">→ spielt die wichtigste Rolle bei IPv4</div>
        <br></br>
      <div className="subheading">IPv5-Protokoll</div>
          <div className="list">• wurde in der Entwicklung nicht weitergeführt und dann abgeschafft!</div>
        <br></br>
      <div className="subheading">IPv6-Protokoll</div>
        <div className="subsubheading">Allgemein</div>
          <div className="list">• wichtig! Nummer 6 steht nicht für die Anzahl an Zahlen in der IP, sondern für die Version</div>
          <div className="list">• IP besteht aus 8 Hexadezimalzahlen, Zahlen mit Doppelpunkt getrennt</div>
            <div className="list-sub">• Insgesamt 16: 0123456789ABCDEF</div>
          <div className="list">• "neuste Version"</div>
          <div className="list">• theoretisch 3,4 x 10 <sup>38</sup> Adressen Möglichkeiten</div>
        <br></br>
      <div className="subheading">MAC-Adresse</div>
        <div className="list">• 12-Stellig mit Hexadezimal Zahlen</div>
        <div className="list">• ist die "gerätespezifische ID" (unveränderbar)</div>
        <div className="list">• theoretisch 16<sup>12</sup> Möglichkeiten für die Adressen (warscheinlich weltweit einmalig)</div>
        <div className="list">• erste 6 Ziffern der Adresse stehen für die Firma des Geräts</div>
    </main>
  )
}