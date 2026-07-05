function addStudent() {
    let studentName = document.getElementById("studentName").value;

    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let attendanceCell = row.insertCell(1);

    nameCell.innerHTML = studentName;

    attendanceCell.innerHTML =
        '<button onclick="this.innerHTML = (this.innerHTML === \'Present\') ? \'Absent\' : \'Present\'">Present</button>';

    document.getElementById("studentName").value = "";
}
