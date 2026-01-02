function RenderStudents(){
    let ddl_students = document.getElementById("ddl_students");
    fetch("https://two0260102-api.onrender.com/students")
    .then(response => response.json())
    .then(data => {
        data.forEach(student => {
            let option = document.createElement("option");
            option.innerHTML = student.name;
            ddl_students.appendChild(option);
        })
    })
}

RenderStudents();