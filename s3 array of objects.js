// Array of student objects
const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science"
    },
    {
        name: "Bob",
        age: 22,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        major: "Physics"
    }
];

// Accessing and displaying information about each student
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.name + " is " + student.age + " years old and majors in " + student.major + ".");
}
