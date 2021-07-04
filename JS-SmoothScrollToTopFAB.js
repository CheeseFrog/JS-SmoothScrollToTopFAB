// Add this : <script src="./JS-SmoothScrollToTopFAB.js"></script>

function SFAB() { window.SFAB = undefined
	var B = document.createElement("div");
	B.className = "FABdo";	B.id = "FABup";

	function isScroll() {clearTimeout(isScroll.on); isScroll.on=setTimeout(function(){isScroll.on=0},10)}
	function home() {window.scrollTo({top:0, behavior:(isScroll.on?"auto":"smooth")})}
	B.addEventListener("click", home, {passive: true});

	function atTop(y) {return +(window.pageYOffset < (y||3))}
	function sticky() {isScroll(); var IO = +!atTop(100); if (IO!=B.getAttribute("IO")) B.setAttribute("IO", IO)}
	window.addEventListener("scroll", sticky, {passive: true})
	sticky();

	const css = document.createElement("style");
	css.textContent = `
	.FABdo {
		all: initial;
		--FABsize: calc(8vh + 4px);
		z-index: 10001;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		position: fixed;
		border-radius: 100%;
		padding: calc(var(--FABsize) / 3);
		width: var(--FABsize);
		height: var(--FABsize);
		background: hsl(0,0%,33%);
		text-align: center;
		border: calc(var(--FABsize) / 2) solid transparent;
		background-clip: padding-box;
		opacity:.66;
		transition: transform .4s 0s;
	}

	.FABdo:not([IO="0"]) {
		transition: transform .2s 0s;
	}

	.FABdo:before {
		content: "";
		font-size: 0;
		display: block;
		height: var(--FABsize);
		background: white;
		top:-6.7%;
		position: relative;
		clip-path: polygon(50% 0%, 100% 86.6%, 0% 86.6%);
	}

	.FABdo[IO]:active:hover {
		box-shadow: inset 0 0 0 0.5px hsl(0,0%,33%), inset 0 0 0 4px var(--highlight, highlight);
		opacity: .99;
	}

	@media (hover: hover) and (pointer: fine) {
	.FABdo:hover {
		opacity: .825;
	}
	.FABdo[IO="0"]:hover {
		transition: transform .4s 2.5s;
	}
	}

	.FABdo[D="1"] {
		opacity: 0.25 !important;
	}

/**/
	#FABup {
		bottom: 0;
		right: 0;
		transform: translateY(0px);
	}

	#FABup[IO="0"]:not(:active) {
		transform: translateY(100%);
	}
	`
	document.head.appendChild(css);
	document.body.appendChild(B)
}

if (document.readyState != "loading") SFAB(); else window.addEventListener("load", SFAB);