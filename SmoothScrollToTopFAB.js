
if (document.readyState === "complete") start(); else window.addEventListener("load", start);

function start() {
	var up = document.createElement("div");
	up.id = "up";

	function home() {window.scrollTo({top: 0, behavior: "smooth"})}
	up.addEventListener("click", home, {passive: true});
	
	function chktp() {document.body.setAttribute("top", +(window.pageYOffset < 100))}
	window.addEventListener("scroll", chktp, {passive: true})
	chktp();

	const css = document.createElement("style");
	css.textContent = `
#up {
    z-index:999;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    transition: transform .15s, opacity .15s;
    position: fixed;
    border-radius: 100%;
    padding: 24px;
    width: 8vmin;
    height: 8vmin;
    margin: 5vmin;
    background: black;
    bottom: 0;
    right: 0;
    text-align: center;
    opacity: .5;
}
#up:before {
    content: "";
    font-size: 0;
    padding: 4vmin;
    line-height: 8vmin;
    background: white;
    position: relative;
    top: -8.33%;
    clip-path: polygon(50% 00%, 100% 86.6%, 0% 86.6%);
}
[top="1"] #up {
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none;
}
#up:active {
    transition: none;
    opacity: .99
}
`
	document.head.appendChild( css );
	document.body.appendChild(up)
}
