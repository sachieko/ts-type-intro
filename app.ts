const myVar: number = 5;
type TnewVar = string | number | boolean | void;
let newVar: TnewVar= "Hello";

const helloWorld = (input: TnewVar) => {
  console.log("This is my variable: " + input);
};

helloWorld(newVar);

newVar = myVar;
helloWorld(newVar);

newVar = true;
newVar = helloWorld(newVar);
helloWorld(newVar);