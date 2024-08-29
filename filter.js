let todoList = [
  { taskName: 'Do laundry', isCompleted: false },
  { taskName: 'Buy groceries', isCompleted: true },
  { taskName: 'Study JavaScript', isCompleted: true }
];

// Rule: Include tasks that are completed
let completedTasks = todoList.filter(task => task.isCompleted === true);

console.log(completedTasks);

/*
array.filter is an Array Method:

    filter is a built-in method in JavaScript that is 
    used to create a new array based on specific conditions.

Iteration Over Each Element:

    filter iterates over each element in the original array.
    During each iteration, the current element is sent as 
    an argument to the callback function.

Callback Function Sets the Rules:

    The callback function defines the rules for filtering.
    In the example, the callback function checks if the 
    task is completed (task.isCompleted === true).

True or False Determines Inclusion in New Array:

    The callback function must return true or false for each element:
        If true, the element is added to the new array.
        If false, the element is excluded from the new array.

Final Output:

    The new array, which is created by filter, contains
    only the elements that met the condition (i.e., where the callback 
    function returned true).

*/
