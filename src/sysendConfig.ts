import sysend from "sysend"

export const sysendConfig = (
  messageLog: HTMLUListElement,
  input: HTMLInputElement,
  button: HTMLButtonElement,
) => {
  console.log('sysend in:', document.location)
  console.log(sysend)
  if(document.location.host.includes('localhost')){
    sysend.proxy('http://127.0.0.1:5173')
  }
  else {
    sysend.proxy('http://localhost:5173')
  }

  sysend.on("msg", (data: any) => {
    console.log('received message ', data)
    const li = document.createElement('li')
    li.innerHTML = data
    messageLog.appendChild(li)

  })
  button.addEventListener('click', () => {
    console.log(`sending message ${input.value}`)
    sysend.broadcast('msg', input.value)
  })
}
