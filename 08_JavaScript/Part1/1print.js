console.log("print(hello)"); // most common way to print something in JavaScript and this will add a new line at the end

process.stdout.write("another way of printing \n"); // another way to print something in JavaScript, but it does not add a new line at the end if you do not include the \n character

console.table({ name: "John", age: 30 }); // this will print the object in a table format, which is useful for debugging purposes

console.error("This is an error message"); // this will print an error message in red color, which is useful for debugging purposes

console.warn("This is a warning message"); // this will print a warning message in yellow color, which is useful for debugging purposes

console.info("This is an info message"); // this will print an info message in blue color, which is useful for debugging purposes

console.debug("This is a debug message"); // this will print a debug message in gray color, which is useful for debugging purposes

console.assert(1 === 2, "This is an assertion error"); // this will print an assertion error message if the condition is false, which is useful for debugging purposes