function Noti (contents) {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "noti-overlay");
  
  const notiBoard = document.createElement("div");
  notiBoard.setAttribute("id", "noti");

  notiBoard.innerHTML = contents;

  overlay.appendChild(notiBoard);

  
  document.body.appendChild(overlay);
 
}

export {Noti};
