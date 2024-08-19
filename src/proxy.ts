import sysend from "sysend"

console.log('sysend from iframe', sysend)
console.log('sysend.proxy from iframe', sysend.proxy)
sysend.proxy()

window.sysend = sysend
