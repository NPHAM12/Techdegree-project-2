# List Filter and Pagination
# Nguyen Pham

<JavaScript>
  
   /////***************Update JS file for searching*********////

*** Enhance the usability of a web page that contains a long list by employing JavaScript to dynamically divide the list into "pages" to make it easier for the user to find information and read the page.

* Paganation Links:
  1. When the page first loads your program should show only the first 10 students, and hide all the rest.
  2. Calculate the number of pages needed and add the appropriate number of links to the bottom of the page, and each page show 10 students.

* Search Option:
  1. Create and append a search component.When the "Search" button is clicked, the list of students is filtered to match the search value. 
  2. Display pagination links based on how many search results are returned
    For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.
  3. If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
  
1. Create a fucntion to add child nodes to "page" parent node and show pagination links to the page.
2. Create a function to shows first 10 students of the list on page.
3. Create a function to hide all of the students in the list.
4. Create a function to show 10 students in the list on each page.
5. Create a click action on pagonation link when clicking a selected page.
6. Create an arrow function filterStudents to take the input value and checks if matching
the name values stored in the students variable. If not, student is hidden.
7. Create a function updatePage to clear and update current users being displayed.




