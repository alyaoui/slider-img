// get slider items | Array.from [ES6 feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
//Get number of slides
var slidCount = sliderImages.length;
//Get first slid
var currentSlid = 1;
//slid number string element
var slideNumberElement = document.getElementById("slide-number")
// previous and next buttom
var nextButtom = document.getElementById("next")
var prevButtom = document.getElementById("prev")
//handle click for prev and nexte button
nextButtom.onclick = nextslid;
prevButtom.onclick = prevslid;
// creat main ul items
var paginationelement = document.createElement("ul");
// set id on ul
paginationelement.setAttribute("id", "pagination-ul")
// creat list item in slides count 
for (var i = 1; i <= slidCount; i++) {
    // creat the li items
    var paginationitem = document.createElement("li");
    // set custom attribute
    paginationitem.setAttribute("data-index", i);
    //set item content
    paginationitem.appendChild(document.createTextNode(i));
    // append item to parent ul list
    paginationelement.appendChild(paginationitem);
}
//add the creater ul to the page
document.getElementById('indicators').appendChild(paginationelement)
//get the new created ul
var paginationcreatedUl = document.getElementById('pagination-ul');
// get pagination items | Array.from [ES6 feature]
var paginationBullet = Array.from(document.querySelectorAll("#pagination-ul li "));
//Loop through pagination All pullets items
for (var i = 0; i < paginationBullet.length; i++) {
paginationBullet[i].onclick = function () {
currentSlid = parseInt(this.getAttribute('data-index')); //for transformation to number parseInt
theChecker();
}
};
//trigger the checker function 
theChecker();
//next slid function 
function nextslid() {
if (nextButtom.classList.contains('disabled')) {
//do nothing
return false;
} else {
currentSlid++;
theChecker();
}
}
//previous slid function 
function prevslid() {
if (prevButtom.classList.contains('disabled')) {
//do nothing
return false;
} else {
currentSlid--;
theChecker();
}
}
//creat the checker function
function theChecker() {
    //set the slide number
    slideNumberElement.textContent = ' slide # ' + (currentSlid) + ' of ' + (slidCount);
    //remove all active class
    removeAllActive();
    //set active classon current slide
    sliderImages[currentSlid - 1].classList.add('active');
    //set active class on  current pagination Item
    paginationcreatedUl.childNodes[currentSlid - 1].classList.add('active');
    //check if current slide is the first
    if (currentSlid == 1) {
        //add disabled class on previous button
        prevButtom.classList.add('disabled')
    } else {
        //remove disabled class on previous buttonelse 
        prevButtom.classList.remove('disabled')
    }
    //check if current slide is the last
    if (currentSlid == slidCount) {
        //add disabled class on next button
        nextButtom.classList.add('disabled')
    } else {
        //remove disabled class on next buttonelse 
        nextButtom.classList.remove('disabled')
    }
}
//remove all active class of img and ul 
function removeAllActive() {
    //loop throught img
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    paginationBullet.forEach(function (li) {
        li.classList.remove('active');
    })
}