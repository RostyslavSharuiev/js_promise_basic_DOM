var e=document.querySelector(".logo"),n=function(e){var n=document.createElement("div");n.classList.add("message",!e&&"error-message"),n.textContent=e?"Promise was resolved!":"Promise was rejected!",document.body.appendChild(n)},t=new Promise(function(n,t){e?e.addEventListener("click",n):t(Error())}),r=new Promise(function(e,n){setTimeout(function(){n(Error())},3e3)});t.then(function(){return n(!0)}),r.catch(function(){return n(!1)});
//# sourceMappingURL=index.56e33a76.js.map