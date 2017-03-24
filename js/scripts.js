$(document).ready(function(){
  $("#form").submit(function(event){

  $(".intro, .rubyDescription, .phpDescription, .cssDescription, .javaDescription, .results").hide();

  console.log("hello hi")

  var name = $(".name").val();

  $("#nameInsert").text(name);

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
//track counter display code

$("#results").show();
$(".intro").show();


if(cssCount >= 3){
  $(".cssDescription").show();
}if(javaCount >= 3){
  $(".javaDescription").show();
}if(phpCount >= 3){
  $(".phpDescription").show();
}if(rubyCount >= 3){
  $(".rubyDescription").show();
}if(cssCount < 3 && javaCount < 3 && phpCount < 3 && rubyCount < 3){
  $(".rubyDescription").show();
}

$("#buttonHide").show();

$("#CSS").text(cssCount);
$("#Ruby").text(rubyCount);
$("#Java").text(javaCount);
$("#PHP").text(phpCount);

  event.preventDefault();
  })
  $("#buttonHide").click(function(){
    $("#buttonHide").hide();
    $(".results").show();
  })
  $("#result2Button").click(function(){
    $(".results").hide();
    $("#buttonHide").show();
  })
});
