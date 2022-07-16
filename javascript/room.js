// Copy-right auto year start
let date = new Date();
// console.log(date);
let year = date.getFullYear();
document.getElementById("autoyear").textContent = year;
// Copy-right auto year end



// review section data get start
function getdata(){
     var firstname = document.getElementById("firstname");
     var title = document.getElementById("title");
     var comment = document.getElementById("comment");

     const replacename = document.getElementById("replacename");
     const replacetitle = document.getElementById("replacetitle");
     const replacecomment = document.getElementById("replacecomment");

     replacename.innerHTML = `${firstname.value}`;
     replacetitle.innerHTML = `${title.value}`;
     replacecomment.innerHTML = `${comment.value}`;

     firstname.value = "";
     title.value = "";
     comment.value = "";
}
// review section data get end