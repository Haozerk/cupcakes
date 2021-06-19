console.log('main.js');

var allPools = document.getElementById('allPools'),
	myPools = document.getElementById('myPools'),
	poolHighligh = document.getElementById('poolHighligh');

myPools.addEventListener('click', function(){
	poolHighlight.style.marginLeft = 44.5+"rem";
	loadPool();
}, false);

allPools.addEventListener('click', function(){
	poolHighlight.style.marginLeft = 5.25+"rem";
	loadPool();
}, false);

function loadPool() {
}