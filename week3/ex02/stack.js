const stackCreate = () => ({
    arr: []
    });
    
const stackEmpty=(stack)=>{
    if (stack.arr.length == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
const stackPush= (stack, data)=> (stack.arr.push(data));
const stackPeek = (stack) => (stack.arr[0]);
const stackPop = (stack) => (stack.arr.pop());
newStack = stackCreate();

stackEmpty(newStack);
stackPush(newStack, 1);
console.log(newStack.arr);
stackPush(newStack, 2);
console.log(newStack.arr);
stackPop(newStack);
console.log(newStack.arr);
stackPeek(newStack);
console.log(newStack.arr);



