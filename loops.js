function forLoop(array) {
<<<<<<< HEAD
  for(var i = 0; i < 25; i++) {
    if(i == 1) 
      array.push('I am 1 strange loop.')
    else 
    array.push('I am ${i} strange loops.')
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
=======
  for( i = 0; 1<25; i++) {
    if(i ==1)
    array.push("I am 1 strange loop")
    else
    array.push(`I am ${i} strange loops`)
>>>>>>> ec27f36b4717517cdba08ecb883083a6c0c05f27
}