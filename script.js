let students = [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let totalClasses =
        Number(document.getElementById("totalClasses").value);

    let attendedClasses =
        Number(document.getElementById("attendedClasses").value);

    let marks =
        Number(document.getElementById("marks").value);

    // Check attendance
    if (attendedClasses > totalClasses) {
        alert("Attended classes cannot be greater than total classes");
        return;
    }

    // Calculate attendance
    let attendance =
        ((attendedClasses / totalClasses) * 100).toFixed(2);

    // Calculate result
    let result = marks >= 40 ? "PASS" : "FAIL";

    // Add student
    students.push({
        name: name,
        roll: roll,
        email: email,
        course: course,
        attendance: attendance,
        marks: marks,
        result: result
    });

    // Display students
    displayStudents();

    // Clear form
    form.reset();

    alert("Student added successfully!");
});


function displayStudents() {

    table.innerHTML = "";

    students.forEach(function(student) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
            <td>${student.attendance}%</td>
            <td>${student.marks}/100</td>
            <td>${student.result}</td>
            <td>
                <button onclick="deleteStudent(${students.indexOf(student)})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
} these for the thanu
