// alert("connected");

// Example 1
let hold = document.getElementById('changeTextButton'); // selecte the element
// console.log(hold)
hold.addEventListener('click',function(){
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "the paragraph is changed";
})



// Example2
document.
    getElementById('highlightFirstCity').addEventListener('click',function(){
        let lis = document.getElementById('citiesList');
        // console.log(lis.firstChild);
        // console.log(lis.firstElementChild);
        lis.firstElementChild.classList.add('highlight')
    })


    // example 3
document.getElementById('ChangeOrder').
addEventListener('click', function(){
    let coffee = document.getElementById('coffeeType');
    console.log(coffee);
    coffee.textContent = 'Espresso'
    // console.log(coffee);
})


// example 4
document.getElementById('addNewItem').addEventListener( 'click',function(){
    let newItem = document.createElement('li'); // creat an element
    newItem.textContent = 'Eggs'
    let list = document.getElementById('shoppingList');

    list.appendChild(newItem);
    // list.firstChild
})


// example 5
document.getElementById('removeLastTask').addEventListener('click',function(){
    let lis = document.getElementById('taskList');
    let children = lis.children;
    children[children.length].remove();
})


// example 6
document.getElementById('clickMeButton').addEventListener('',function(){
    alert("click me");
})

// example 7
document.getElementById('teaList').addEventListener('click', function(event){
    if(event.target  && event.target.matches('.teaItem')){
        alert('you selected: '+event.target.textContent)
    }
})


// example 8
document.getElementById("feedbackForm").addEventListener('submit',function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback);
    document.getElementById('feedbackDisplay').innerText = `feedback: ${feedback}`;

})


// example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})


// example 10
document.getElementById('toggleHighlight').addEventListener('click',function(){
   let descriptionText = document.getElementById("descriptionText")
   descriptionText.classList.toggle('highlight')
})