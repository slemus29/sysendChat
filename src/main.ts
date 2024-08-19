import './style.css'
import {sysendConfig} from './sysendConfig'
import AnnotationToolIntegration from 'annotation-tool-integration'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input id="input">
    <button id="button">Send</button>
    <ul id="messageLog">
    </ul>
  </div>
`

const handleDocumentLoad = () => {
  console.log('cargo el documento')
}

const handleSelectedText = (event:any) => {
  console.log('text selected:', event)
}

const openWindow = () => {
  const openWindowParams = {
    team: 'DCS',
    document: 'test-1',
    file: '',
    user: 'santy.Doe@morningstar.com',
    parse: 'true',
    debug: 'true',
  }
  annotationTool.openWindow(openWindowParams);
}

const input = document.querySelector<HTMLInputElement>('#input')
const messageLog = document.querySelector<HTMLUListElement>('#messageLog')
const button = document.querySelector<HTMLButtonElement>('#button')
const annotationTool = new AnnotationToolIntegration({ env: 'development' });
annotationTool.init();
annotationTool.onDocumentLoad(handleDocumentLoad);
annotationTool.onSelectedText(handleSelectedText)

console.log(input, messageLog, button)
if(
  input &&
  messageLog &&
  button
) {
  sysendConfig(messageLog, input, button)
  
  annotationTool.init()
}else {
  console.error(`Cannot init sysend with messageLog ${messageLog} input ${input} button ${button}`);
}

button && button.addEventListener('click', openWindow)



