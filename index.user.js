// ==UserScript==
// @name        Mieterverein Stuttgart Fall-ID Revealer
// @namespace   https://raw.githubusercontent.com/gekkedev/mieterverein-case-id-revealer
// @updateUrl   https://raw.githubusercontent.com/gekkedev/mieterverein-case-id-revealer/main/index.user.js
// @downloadUrl https://raw.githubusercontent.com/gekkedev/mieterverein-case-id-revealer/main/index.user.js
// @match       https://login.mieterverein-stuttgart.de/mein-dmb*
// @grant       none
// @version     1.0
// @author      gekkedev
// @description Macht die für Normalsterbliche nicht einsehbare Fall-ID von Onlineberatungen sichtbar.
// ==/UserScript==

setInterval(() => {
  if (document.getElementById("accordionBeratungen")) { //SPA: only apply the code when we're in the right submenu
    for (caseElement of document.getElementById("accordionBeratungen").children) {
      if (caseElement.hasAttribute("data-beratungsid-revealed")) return
      caseElement.setAttribute("title", "Fall-ID: " + caseElement.getAttribute("data-beratungsid"))
      caseElement.setAttribute("data-beratungsid-revealed", true) //to avoid that this happens twice
    }
  }
}, 2000)
