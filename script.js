
// VARIABLES //

const studentList = document.querySelector('.student-list');
const page = document.querySelector('.page');
let studentIndex = studentList.children;
let studentsPerPage = 10;
let minStudentsPerPage = 1;
let totalPages = 5;
let start_page = page;

// SHOW LIST FUNCTION //

const showPage = (studentLst, page) => {

    for(let i = 0 ; i < studentLst.length; i++){
        let firstItem = page - 10;
        let lastItem = page;
         // we only show 10 students
      if(i >= firstItem && i < lastItem ){
         studentLst[i].style.display = "block";
      } else{
         studentLst[i].style.display = "none";
      }
   }
}

showPage(studentIndex, 10);


// APPENDPAGELINKS FUNCTION THAT LOOPS THROUGH EACH PAGE//

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
     ul.appendChild(li);
     li.appendChild(a);
           // FIRST ACTIVE LINK //
           if(i == 0){
            a.classList.add("active");
         } else {
            a.classList.remove("active");
            }
     //const firstActiveClass = document.querySelectorAll("ul > li:first-child");//
     a.textContent = i + 1;


      // LINKS EVENT LISTENER THAT LOOPS THROUGH ACTIVE LINKS//
     a.addEventListener("click", e => {
      // DECLARE ACTIVE VARIABLE //

      let current_link = document.querySelector('.pagination li a.active');
      if(current_link){
         if(i === 0){
            current_link.className.add("active");
         } else {
            current_link.classList.remove("active");
         }
      }

      if(start_page == page) a.classList.add("active");
      const currentPage = parseInt(e.target.textContent);
      
      showPage(studentIndex, currentPage * 10);
     })
      
   }

 };
 
 appendPageLinks(studentIndex);
 

