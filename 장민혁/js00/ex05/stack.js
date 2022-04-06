const stackCreate = () => ({
    arr: [],
    top: -1
  });

function stackEmpty(stack){
  if (stack.top === -1)
    return true;
  else 
    return false;
}

function stackPush(stack, data){
    stack.arr[++stack.top] = data
}

function stackPeek(stack){
  if (stackEmpty(stack)){
    throw new Error('empty stack')
  }
  return stack.arr[stack.top]
}

function stackPop(stack){
  if (stackEmpty(stack)){
    throw new Error('empty stack')
  }
  return stack.arr[stack.top--]
}

let stack = stackCreate()

console.log(stackEmpty(stack));
stackPush(stack, 0)
stackPush(stack, 1)
stackPush(stack, 2)
console.log(stackPeek(stack));
console.log(stackPop(stack));
console.log(stackPop(stack));
console.log(stackPop(stack));
console.log(stackPop(stack));