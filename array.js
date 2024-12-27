var subjects = ["Socail Studies" ,  "English" ,  "Science" ,  "Math"];
//example: document.getElementById("demo").innerHTML = subjects[3];

document.getElementById("demo").innerHTML = subjects[2];

//join
document.getElementById("demo1").innerHTML = subjects.join("  ||   ");

//pop
subjects.pop()
document.getElementById("demo2").innerHTML = subjects