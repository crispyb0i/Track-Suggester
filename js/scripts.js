$(document).ready(function(){
  $("#form").submit(function(event){
    // $(".equilateral, .isosceles, .scalene, .not").hide()

  var name = $(".fullName").val();

  var cssCount = 0;
  var rubyCount = 0;
  var phpCount = 0;
  var javaCount = 0;

// Question 1
  if($("#frontBack").val()==='Front-end'){
    cssCount+=1;
  }if($("#frontBack").val()==='Back-end'){
    rubyCount += 1;
    javaCount += 1;
  }
// Question 2
if($("#field").val()==='I want to work for a big tech company'){
  phpCount += 1;
}if($("#field").val()==='Web'){
  cssCount += 1;
  rubyCount += 1;
}if($("#field").val()==='Mobile'){
  javaCount += 1;
}
// Question 3
if($("#company").val()==='Amazon'){
  javaCount += 1;
}if($("#company").val()==='Ebay'){
  cssCount += 1;
}if($("#company").val()==='Tesla'){
  phpCount += 1;
}if($("#company").val()==='Twitter'){
  rubyCount += 1;
}

// Question 4
if($("#design").val()==='Absolutely!'){
  cssCount += 1
}if($("#design").val()==='No, not really...'){
  phpCount += 1
  javaCount += 1
}

// Question 5
if($("#toy").val()==='Legos'){
  phpCount += 1
}if($("#toy").val()==='Playdough'){
  rubyCount += 1
}
console.log(javaCount)
console.log(cssCount)
console.log(phpCount)
console.log(rubyCount)



  event.preventDefault();
  })
});
