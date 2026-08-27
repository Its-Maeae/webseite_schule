import { useEffect, useState } from "react"
import "../../../../styles/projects_1.css"
import "../../../../styles/globals.css"
import "../../../../styles/components.css"

import Netzwerkklassen from "./components/Netzwerkklassen"
import Netzwerkkomponenten from "./components/Netzwerkkomponenten"
import Filiusdateien from "./components/Filiusdateien"
import FiliusGrundlagen from "./components/FiliusGrundlagen"
import DhcpProtokoll from "./components/DhcpProtokoll"
import TcpProtokoll from "./components/TcpProtokoll"
import FtpProtokoll from "./components/FtpProtokoll"
import DnsServer from "./components/DnsServer"
import Mailserver from "./components/Mailserver"
import Webserver from "./components/Webserver"
import Firewallserver from "./components/Firewallserver"

const contentMap = {
  netzwerkklassen: <Netzwerkklassen />,
  netzwerkkomponenten: <Netzwerkkomponenten />,
  filiusdateien: <Filiusdateien />,
  filiusGrundlagen: <FiliusGrundlagen />,
  dhcpProtokoll: <DhcpProtokoll />,
  tcpProtokoll: <TcpProtokoll />,
  ftpProtokoll: <FtpProtokoll />,
  dnsServer: <DnsServer />,
  mailserver: <Mailserver />,
  webserver: <Webserver />,
  firewallserver: <Firewallserver />,
}

export default function FliliusMain() {
  const [selected, setSelected] = useState<keyof typeof contentMap>("netzwerkklassen")
  const [isCompactView, setIsCompactView] = useState(false)

  function expandSidePanel() {
    if (isCompactView === true) {
      setIsCompactView(false)
    } else {
      setIsCompactView(true)
    }
  }

  function selectAndClose(name: keyof typeof contentMap) {
    setSelected(name)
    setIsCompactView(false)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)")

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches === false) {
        setIsCompactView(false)
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return (
    <main className="container-projekte">
      <div className="projects-page-wrapper">
        <div className="list-section" id="listSection">
          <div className="list-heading">Inhaltsübersicht</div>
          <div className="expand-panel" onClick={expandSidePanel}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="4" x2="9" y2="20" stroke="currentColor" stroke-width="1.5"/></svg>
          </div>
          <ul className="list-content">
            <div className="list-content-main-heading">1. Filius</div>
            <li className="list-content-item">
              <span className="list-content-dot"></span>
              <span className="list-content-text">1.1. Übersichten</span>
              <div className="list-content-subcontent">
                <span className="list-content-sub" onClick={() => setSelected("filiusGrundlagen")}>• Filius (Grundlagen)</span>
                <span className="list-content-sub" onClick={() => setSelected("netzwerkklassen")}>• Netzwerkklassen</span>
                <span className="list-content-sub" onClick={() => setSelected("netzwerkkomponenten")}>• Netzwerkkomponenten</span>
                <span className="list-content-sub" onClick={() => setSelected("dhcpProtokoll")}>• DHCP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("tcpProtokoll")}>• TCP/IP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("ftpProtokoll")}>• FTP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("dnsServer")}>• DNS-Server</span>
                <span className="list-content-sub" onClick={() => setSelected("mailserver")}>• Mailserver</span>
                <span className="list-content-sub" onClick={() => setSelected("webserver")}>• Webserver</span>
                <span className="list-content-sub" onClick={() => setSelected("firewallserver")}>• Firewallserver</span>
              </div>
            </li>
            <li className="list-content-item">
              <span className="list-content-dot"></span>
              <span className="list-content-text">1.2. Projekte</span>
              <div className="list-content-subcontent">
                <span className="list-content-sub" onClick={() => setSelected("filiusdateien")}>• ....</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={"list-section-compact" + (isCompactView ? " open" : "")} id="listSectionCompact">
          <div className="list-section-compact-header">
            <div className="list-heading">Inhaltsübersicht</div>
            <div className="list-section-compact-close" onClick={() => setIsCompactView(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
          </div>
          <ul className="list-content">
            <div className="list-content-main-heading">1. Filius</div>
            <li className="list-content-item">
              <span className="list-content-dot"></span>
              <span className="list-content-text">1.1. Übersichten</span>
              <div className="list-content-subcontent">
                <span className="list-content-sub" onClick={() => setSelected("filiusGrundlagen")}>• Filius (Grundlagen)</span>
                <span className="list-content-sub" onClick={() => setSelected("netzwerkklassen")}>• Netzwerkklassen</span>
                <span className="list-content-sub" onClick={() => setSelected("netzwerkkomponenten")}>• Netzwerkkomponenten</span>
                <span className="list-content-sub" onClick={() => setSelected("dhcpProtokoll")}>• DHCP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("tcpProtokoll")}>• TCP/IP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("ftpProtokoll")}>• FTP-Protokoll</span>
                <span className="list-content-sub" onClick={() => setSelected("dnsServer")}>• DNS-Server</span>
                <span className="list-content-sub" onClick={() => setSelected("mailserver")}>• Mailserver</span>
                <span className="list-content-sub" onClick={() => setSelected("webserver")}>• Webserver</span>
                <span className="list-content-sub" onClick={() => setSelected("firewallserver")}>• Firewallserver</span>
              </div>
            </li>
            <li className="list-content-item">
              <span className="list-content-dot"></span>
              <span className="list-content-text">1.2. Projekte</span>
              <div className="list-content-subcontent">
                <span className="list-content-sub" onClick={() => selectAndClose("filiusdateien")}>• ....</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="content-section">
          <div className="content-content-section">
            {contentMap[selected]}
            <div className="expand-panel" onClick={expandSidePanel}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="4" x2="9" y2="20" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}