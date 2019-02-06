/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Nguyen Pham
******************************************/
const pageSize = 10;
let nodeListStudent = document.getElementsByClassName("student-item");
let arrayListStudent = Array.from(nodeListStudent);
let student = arrayListStudent.length;
totalPage = Math.ceil(student / pageSize);
const mainPage = document.getElementsByClassName("page")[0];
let div = document.createElement('div');
let ul = document.createElement('ul');
const pageHeader = document.querySelector('.page-header');

/*Pagination Links*/

//A fucntion create and show pagination links to the page
//a tree: PAGE - DIV - UL - LI - A
function showLink(list) {
  div.className = 'pagination';
  mainPage.appendChild(div); //Append DIV to PAGE
  for (let i = 1; i <= totalPage; i++) { //Append LI to UL
    let li = document.createElement('li');
    li.innerHTML = "<a href= \" # \">" + i + "</a>"
    ul.appendChild(li);
  }
  div.appendChild(ul); //Append UL to DIV
}

// A function shows firt 10 students of the list
function displayFirstTen(list, num) {
  let current = document.getElementsByTagName('a')[0];
  current.className = 'active'; // set the first page is active
  if (num <= pageSize) { // students < 10
    for (let i in list)
      list[i].style.display = "block";
  } else { // students > 10
    for (let i in list) {
      if (i > 9) // hide student from 11 to....
        list[i].style.display = "none";
      else // display fist 10 students on page
        list[i].style.display = "block";
    }
  }
}

showLink(arrayListStudent)
displayFirstTen(arrayListStudent, student); //NOT nodeListStudent because the loop syntax above is for an array

// A function to hide all of the items in the list
function hideList(list) {
  for (let i in list)
    list[i].style.display = "none";
}

//Create a function to show the items in the list on each page
function showPage(list, page) {
  hideList(arrayListStudent); // reset or hide all students in order to display another 10 students next
  let start = 10 * (page - 1);
  if (page < totalPage) { // the page 1,2....5. Eg, page = 2, and  total pages = 6
    for (let i = start; i < 10 * page; i++)
      list[i].style.display = "block";
  } else { // the last page. Eg, page = total page = 6
    for (let i = start; i < list.length; i++)
      list[i].style.display = "block";
  }
}

//Create a click action on pagonation link
ul.addEventListener('click', (event) => {
  if (event.target.tagName == 'A') {
    let page = event.target.textContent; //get content of button to be a selected page
    showPage(arrayListStudent, page);
    // active on a current page
    let listLink = document.getElementsByTagName('a');
    for (let i = 0; i < listLink.length; i++)
      listLink[i].className = 'disable';
    event.target.className = 'active';
  }
});

/* SEARCH FUNCTION
  filterStudents function takes the input value and checks if matching
  the name values stored in the students variable. If not, student is hidden.*/
function filterStudents(){
  let filterInput;
  filterInput = document.querySelector('INPUT').value.toUpperCase();
  numberOfStudents = document.querySelectorAll(".student-details h3");
  for (let i = 0; i < numberOfStudents.length; i++) {
    name = numberOfStudents[i].textContent;
    if (name.toUpperCase().indexOf(filterInput) <= -1) {
      numberOfStudents[i].parentNode.parentNode.style.display = 'none';
    } else {
      numberOfStudents[i].parentNode.parentNode.style.display = '';
    }
  }
}

/* SEARCH INPUT */
// Create a Searching option on page
function findStudent() {
  // Create a new div element for searching option
  const div = document.createElement('div');
  const pageHeader = document.querySelector('.page-header');
  div.setAttribute('class', 'student-search');

  // Add the text field to page
  const findInput = document.createElement('input');
  findInput.setAttribute('placeholder', 'Enter name here');
  pageHeader.appendChild(div);
  div.appendChild(findInput)

  // Automatic searching when input value is in the search field, no need click on the button
  const input = document.querySelector('INPUT');
  input.addEventListener('keyup', filterStudents);
}
findStudent();
