
const allItems = document.querySelector('.playOne');
const triangle = document.querySelector('.triangle');

const itemList = [{'result':'rock','color':'border-red-500'},{'result':'paper','color':'border-blue-500'},{'result':'scissors','color':'border-yellow-500'}];

const randomItem = itemList[Math.floor(Math.random()*itemList.length)];

const mql = window.matchMedia("(max-width: 570px)");

Array.from(document.querySelectorAll('.cursor-pointer'));  
      //keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      window.addEventListener("click",chooseItem);

function chooseItem(e){

	let item = e.target.parentElement;

	//console.log(item.childNodes[1].value);
	const youPickValue = item.childNodes[1].value;
	//show input value
	//console.log(item.getAttribute('class'));
	let itemClass = item.getAttribute('class');
	//console.log(itemClass);
	//let itemSvg = item.children[1];
	//get item SVG
	//console.log(item.children[0].value);
	//input value 'rock','paper','scissors'
	if (itemClass.includes('cursor-pointer') == true) {

		printItem(item, youPickValue);
		
	}

	
}  

function printItem(item, youPickValue){
		
			
		//display by grid https://tailwindcss.com/docs/grid-template-rows
		//display target
		allItems.classList.add('grid','grid-cols-2','xl:grid-rows-2','xl:grid-flow-col' ,'gap-8');
		item.classList.remove('xl:h-32', 'xl:w-32','z-10','xl:mt-40' ,'xl:ml-20','-mt-12' ,'xl:ml-48','xl:-mt-12','-ml-4');
		item.classList.add('relative','xl:h-48','h-32','w-32','xl:w-48', 'youPick','xl:ml-20','xl:-mt-20','xl:ml-10','mt-auto','-ml-10','col-span-1');
		allItems.innerHTML = item.outerHTML;


	let itemTextr = document.createElement('span');
		itemTextr.setAttribute('class','font-bold text-white text-xl xl:text-2xl thehouse col-span-1')	
		itemTextr.innerText = 'THE HOUSE PICKED';


	let itemTextl = document.createElement('span');
		itemTextl.setAttribute('class','font-bold text-white text-xl xl:text-2xl xl:ml-20 youPicked col-span-1')	
		itemTextl.innerText = 'YOU PICKED';

	//choose div to add
	//housePick
	let housePick = document.createElement('div');
	   housePick.setAttribute('class','rounded-full h-32 xl:h-48 w-32 xl:w-48 flex items-center justify-center bg-gray-800 mt-auto xl:-mt-20 mx-4 xl:mr-16 housePick col-span-1');
	//https://www.w3schools.com/JSREF/met_node_insertbefore.asp
	//
	//
	
	if (mql.matches) {
		 // window width is at less than 570px
		 //console.log('window width is at less than 570px');
		allItems.appendChild(itemTextl);
		//console.log(allItems.childNodes);
		// itemTextr.innerText = 'THE HOUSE PICKED';
		allItems.insertBefore(housePick, allItems.childNodes[1]);

		allItems.insertBefore(itemTextr, allItems.childNodes[3]);
		//console.log(allItems.childNodes);


	
	}else{
		 // window width is greater than 570px
		 //console.log('window width is greater than 570px');
		 allItems.appendChild(itemTextr);
		//https://www.w3schools.com/JSREF/met_node_insertbefore.asp
		//allitem.childNodes :0.pickimg 1.thehousetext
		allItems.insertBefore(itemTextl, allItems.childNodes[0]);

		allItems.insertBefore(housePick, allItems.childNodes[3]);

	}
	
	let housePicks = document.querySelector('.housePick');
	//console.log(allItems.childNodes);

	printHouse(housePicks, youPickValue);
	
} 

function printHouse(housePicks, youPickValue){

	
	setTimeout( houseChoose(housePicks), 3000);

	
	setTimeout( ruleToOutcome(youPickValue, housePicks), 3000);

	const playAgain =  document.querySelector('.playAgain');

	playAgain.addEventListener('click', function(){
		
		//console.log('work');

		displayGame();
	});
}    

function houseChoose(housePicks){
	

	//console.log(randomItem.result);
	
	let houseChooses = document.createElement('img');
		houseChooses.src = 'images/icon-'+ randomItem.result +'.svg';
		//console.log(houseChooses);

		housePicks.innerHTML = houseChooses.outerHTML;
		housePicks.classList.remove('bg-gray-800');
		housePicks.classList.add(randomItem.color,'bg-white','border-8','shadow-outline');			
}

function ruleToOutcome(youPickValue, housePicks){

	//console.log(youPickValue);

	if (youPickValue == 'paper') {
		if (randomItem.result == 'rock') {
			//console.log("you wins");
			winTurn();
		}else if(randomItem.result == 'scissors'){
			//console.log("you lose");
			loseTurn();
		}else{
			//console.log("try again");
			tryAgain();
		}
	}else if(youPickValue == 'rock'){
		if (randomItem.result == 'scissors') {
			//console.log("you wins");
			winTurn();

		}else if(randomItem.result == 'paper'){
			//console.log("you lose");
			loseTurn();

		}else{
			//console.log("try again");
			tryAgain();

		}
	}else{
		if (randomItem.result == 'paper') {
			//console.log("you wins");
			winTurn();

		}else if(randomItem.result == 'rock'){
			//console.log("you lose");
			loseTurn();

		}else{
			//console.log("try again");
			tryAgain();

		}
	}

	function winTurn(){

		allItems.classList.remove('xl:grid-rows-2','xl:-ml-24');
		allItems.classList.add('xl:grid-cols-3','xl:grid-rows-2');

		//console.log(allItems.childNodes);

		let centerText = document.createElement('div');
		centerText.setAttribute('class','relative place-self-center font-bold text-white text-3xl  centerPick')	
		centerText.innerText = 'YOU Win!!';

		//choose div to add
	
		//https://www.w3schools.com/JSREF/met_node_insertbefore.asp

		let centerPick = document.querySelector('.centerPick');
		
		let centerBtn = document.createElement('button');
		centerBtn.setAttribute('class','relative place-self-center bg-white text-3xl text-pink-400 rounded  playAgain');
		centerBtn.innerText = 'Play again!';
		
		

			if (mql.matches) {
			// window width is at less than 570px
			allItems.insertBefore(centerText, allItems.childNodes[4]);
			allItems.insertBefore(centerBtn, allItems.childNodes[5]);

			}else{
			// window width is greater than 570px
			allItems.insertBefore(centerText,allItems.childNodes[2]);
			allItems.insertBefore(centerBtn, allItems.childNodes[3]);


			}


			//console.log(allItems.childNodes);
		let pointScore = document.querySelector('.point');
		//console.log(typeof parseInt(pointScore.textContent) === 'number');
		let pointNumber = parseInt(pointScore.textContent);
		console.log(pointNumber);

		pointNumber++;

		pointScore.textContent = pointNumber;

		let youPick = document.querySelector('.youPick');

		let circle1 = document.createElement('div');
		//https://tailwindcss.com/docs/background-opacity#app
		//https://tailwindcss.com/docs/animation
		circle1.setAttribute('class','z-30 animate-pulse absolute transform scale-100 rounded-full h-64 w-64  bg-opacity-25 shadow-2xl');
		circle1.setAttribute('style','hsl(214, 47%, 23%)');

		let circle2 = document.createElement('div');
		circle2.setAttribute('class','z-20 animate-pulse absolute transform scale-125 rounded-full h-64 w-64  bg-opacity-50 shadow-2xl');
		circle2.setAttribute('style','hsl(214, 47%, 23%)');

		let circle3 = document.createElement('div');
		circle3.setAttribute('class','z-10 animate-pulse absolute transform scale-150 rounded-full h-64 w-64  bg-opacity-100 shadow-2xl');
		circle3.setAttribute('style','hsl(214, 47%, 23%)');

		youPick.appendChild(circle1);

		youPick.insertBefore(circle2,youPick.childNodes[0]);

		youPick.insertBefore(circle3,youPick.childNodes[0]);


	}

	function loseTurn(){

		allItems.classList.remove('xl:grid-rows-2','xl:-ml-24');
		allItems.classList.add('xl:grid-cols-3','xl:grid-rows-2');

		//console.log(allItems.childNodes);

		let centerText = document.createElement('div');
		centerText.setAttribute('class','place-self-center font-bold text-white text-3xl centerPick')	
		centerText.innerText = 'YOU Lose!!';

			//choose div to add
	
		//https://www.w3schools.com/JSREF/met_node_insertbefore.asp

		let centerPick = document.querySelector('.centerPick');
		
		let centerBtn = document.createElement('button');
		centerBtn.setAttribute('class','place-self-center bg-white text-3xl text-pink-400 rounded  playAgain');
		centerBtn.innerText = 'Play again!';

		if (mql.matches) {
			// window width is at less than 570px
			allItems.insertBefore(centerText, allItems.childNodes[4]);
			allItems.insertBefore(centerBtn, allItems.childNodes[5]);

			}else{
			// window width is greater than 570px
			allItems.insertBefore(centerText,allItems.childNodes[2]);
			allItems.insertBefore(centerBtn, allItems.childNodes[3]);


			}

			
			//console.log(allItems.childNodes);
		let pointScore = document.querySelector('.point');
		//console.log(typeof parseInt(pointScore.textContent) === 'number');
		let pointNumber = parseInt(pointScore.textContent);
		//console.log(pointNumber);

		pointNumber--;

		pointScore.textContent = pointNumber;


		let circle1 = document.createElement('div');
		//https://tailwindcss.com/docs/background-opacity#app
		circle1.setAttribute('class','z-30 animate-pulse absolute rounded-full transform scale-100 h-64 w-64 m-auto bg-opacity-25 shadow-2xl circle1');
		circle1.setAttribute('style','hsl(214, 47%, 23%)');
		
		let circle2 = document.createElement('div');
		circle2.setAttribute('class','z-20 animate-pulse absolute rounded-full transform scale-125 h-64 w-64 border-white bg-opacity-50 shadow-2xl');
		circle2.setAttribute('style','hsl(214, 47%, 23%)');

		let circle3 = document.createElement('div');
		circle3.setAttribute('class','z-10 animate-pulse absolute transform scale-150 rounded-full h-64 w-64  bg-opacity-100 shadow-2xl');
		circle3.setAttribute('style','hsl(214, 47%, 23%)');


		housePicks.appendChild(circle1);

		housePicks.insertBefore(circle2,housePicks.childNodes[0]);

		housePicks.insertBefore(circle3,housePicks.childNodes[0]);


		
	}

	function tryAgain(){
		allItems.classList.remove('xl:grid-rows-2','xl:-ml-24');
		allItems.classList.add('xl:grid-cols-3','xl:grid-rows-2');

		//console.log(allItems.childNodes);

		let centerText = document.createElement('div');
		centerText.setAttribute('class','place-self-center font-bold text-white text-3xl centerPick')	
		centerText.innerText = 'draw Game!!';

			//choose div to add
	
		//https://www.w3schools.com/JSREF/met_node_insertbefore.asp

		let centerPick = document.querySelector('.centerPick');
		
		let centerBtn = document.createElement('button');
		centerBtn.setAttribute('class','place-self-center bg-white text-3xl text-pink-400 rounded playAgain');
		centerBtn.innerText = 'Play again!';
		
		

			//console.log(allItems.childNodes);
			//
		if (mql.matches) {
			// window width is at less than 570px
			allItems.insertBefore(centerText, allItems.childNodes[4]);
			allItems.insertBefore(centerBtn, allItems.childNodes[5]);

			}else{
			// window width is greater than 570px
			allItems.insertBefore(centerText,allItems.childNodes[2]);
			allItems.insertBefore(centerBtn, allItems.childNodes[3]);


			}

	}

	

}
   function displayGame() {

    const htmlString = `
    		   

<div class="z-10 absolute -mt-12 -ml-4 rounded-full h-24 xl:h-32 w-24 xl:w-32 flex items-center justify-center bg-white border-8 border-blue-500 shadow-outline cursor-pointer paper">

    <input type="hidden" value="paper">

  		<img src="images/icon-paper.svg">

</div>

<div class="z-10 absolute mt-32 xl:mt-40 ml-16 xl:ml-20 rounded-full h-24 xl:h-32 w-24 xl:w-32 flex items-center justify-center bg-white border-8 border-red-500 shadow-outline cursor-pointer rock">
    <input type="hidden" value="rock">

  		<img src="images/icon-rock.svg">

</div>

<div class="z-10 absolute -mt-12 ml-40 xl:ml-48 rounded-full h-24 xl:h-32 w-24 xl:w-32 flex items-center justify-center bg-white border-8 border-yellow-500 shadow-outline cursor-pointer scissors">

      <img src="images/icon-scissors.svg">


</div>
	<div class="relative triangle">
		
      <img src="images/bg-triangle.svg">

	</div>


      `;
        
        

    allItems.innerHTML = htmlString;
    allItems.classList.remove('grid','grid-cols-3','grid-rows-2','grid-flow-col' ,'gap-8');
};

//rule open and close
const rulebtn = document.querySelector('.rulebtn');

rulebtn.addEventListener('click',function(){

const ruleForm = document.querySelector('.ruleForm');

	ruleForm.classList.remove('hidden');

	let cleanRule = document.querySelector('.cleanRule');

	cleanRule.addEventListener('click', function(){

		ruleForm.classList.add('hidden');
		
	});	


});