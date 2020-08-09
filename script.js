
// VARIABLES //

const studentList = document.querySelector('.student-list');
const page = document.querySelector('.page');
let studentIndex = studentList.children;
let studentsPerPage = 10;
let minStudentsPerPage = 1;
let totalPages = 5;
const a = document.createElement("a");

// SHOW LIST FUNCTION //

const showPage = (studentLst, page) => {

    for(let i = 0 ; i < studentLst.length; i++){
        let firstItem = page - 9;
        let lastItem = page;
         // we only show 10 students
      if(i >= firstItem && i <= lastItem ){
         studentLst[i].style.display = "block";
      } else{
         studentLst[i].style.display = "none";
      }
   }
}

showPage(studentIndex, 10);


// APPEND LINKS FUNCTION //

const appendPageLinks = list => {
   const totalPages = Math.ceil(studentIndex.length/ studentsPerPage);
   const div = document.createElement("div");
   div.className = "pagination";
   page.appendChild(div);
   const ul = document.createElement("ul");
   div.appendChild(ul);
   

   for (let i = 0; i < totalPages; i++) {
     const li = document.createElement("li");
     const a = document.createElement("a");
     li.appendChild(a);
     ul.appendChild(li);
   
     a.textContent = i + 1;

     a.addEventListener("click", e => {

      if(e.target.className === "active"){
         e.target.className = "inactive";
      } else {
         e.target.className = "active";
      }

       const currentPage = parseInt(e.target.textContent);
      
      showPage(studentIndex, currentPage * 10);
     })
      
   }

 };
 
 appendPageLinks(studentIndex);
