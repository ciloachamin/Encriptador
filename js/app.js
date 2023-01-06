const btnEncrypt = document.getElementById("btn-encriptar");
const btnDecrypt = document.getElementById("btn-desencriptar");
const btnCopy=document.getElementById("btn-copiar");
const inMessage = document.getElementById("textAreas");
const textEncrypt =document.getElementById("text-result")
const advertencia =document.getElementById("advertencia");
var icon = document.querySelector(".items");


btnCopy.style.display="none";

inMessage.addEventListener("input", function(event) {
  const regex = /[^a-z,?¡¿!]/g;
  
  if (regex.test(event.target.value)) {
    event.target.value = event.target.value.replace(regex, "");
    advertencia.style.color = "red";
    advertencia.style.fontSize = (16 + 100) + "%"
    setTimeout(function() {
      advertencia.style.fontSize = (100)+"%";
      advertencia.style.color = "#495057";
      
    }, 500);
  } else {
    advertencia.style.color = "#495057";
    advertencia.style.fontSize = (100)+"%";
    advertencia.style.position= "absolute";

  }
});


btnEncrypt.addEventListener("click", () => {
    hasText();
    textEncrypt.textContent=encrypt(inMessage.value);
    textEncrypt.style.visibility='visible';
    inMessage.value="";
});

function hideElements(){
  const elements=document.getElementsByClassName("text-decrypt");
  for (const element of elements) {
    element.style.display= "none";
  }
  btnCopy.style.display="block";
}
function showElements(){
    const elements=document.getElementsByClassName("text-decrypt");
    for (const element of elements) {
      element.style.display= "block";
    }
    btnCopy.style.display="none";
}

function hasText() {
    if (inMessage.value === "") {
        showElements();
      }else{
        hideElements();
      }
}

btnDecrypt.addEventListener("click", () => {
  hasText();
  textEncrypt.textContent=decrypt(inMessage.value);
  textEncrypt.style.visibility='visible';
  inMessage.value="";
});

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(textEncrypt.textContent).then(() => {
        /* clipboard successfully set */
      }, () => {
        /* clipboard write failed */
      });
});

function encrypt(inMessage) {
  let encryptedMessage = inMessage;

  encryptedMessage = encryptedMessage.replace(/e/g, "enter");
  encryptedMessage = encryptedMessage.replace(/i/g, "imes");
  encryptedMessage = encryptedMessage.replace(/a/g, "ai");
  encryptedMessage = encryptedMessage.replace(/o/g, "ober");
  encryptedMessage = encryptedMessage.replace(/u/g, "ufat");

  return encryptedMessage;
}

function decrypt(inMessage) {
  let decryptedMessage = inMessage;

  decryptedMessage = decryptedMessage.replace(/enter/g, "e");
  decryptedMessage = decryptedMessage.replace(/imes/g, "i");
  decryptedMessage = decryptedMessage.replace(/ai/g, "a");
  decryptedMessage = decryptedMessage.replace(/ober/g, "o");
  decryptedMessage = decryptedMessage.replace(/ufat/g, "u");

  return decryptedMessage;
}
