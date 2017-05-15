function forLoop(array){
  for(var i = 0; i <25; i++ ){
    if(i === 1){
      array.unshift("I am 1 strange loop.");
    }
    else{
      array.unshift("I am ${i} strange loops");
    }
  }
  return array;
}

function whileLoop(aNumb){
  while (aNumb > 0){
    console.log((aNumb));
    aNumb -= 1;
  }
  var grape = "done";
  return grape;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array){
do {
array.pop()
} while (maybeTrue() && array.length > 0 );
return array;
}
