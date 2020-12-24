var temp3 = 0;
var temp4 = 0;

//This switch statement helps to add Sub Question and Ans Type
function run2(value){
   document.getElementById('sub_q_type_ans').value = value;
   switch (value) {
      case 'single_line':
         //Adding Input Field When User Select Single lline Answer type from dropdown
         var  inpt_txt= document.createElement("INPUT");
         inpt_txt.setAttribute("type", "text"); 
         inpt_txt.setAttribute('placeholder','Start typing your Subanswer...');
         inpt_txt.setAttribute("class", "corner");
         inpt_txt.setAttribute("id","s_ans");
         document.getElementById('add_new_call_method').appendChild(inpt_txt); 
         /*document.getElementById('s_ans').value = getSavedValue('s_ans');*/
         document.getElementById('sub_q_type_ans').disabled = true;
         document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
         //To create the Sub question and ans fields repetedly.
         document.getElementById('label_sub_que').innerHTML = "<label id='label_add_sub_que' style='display:block; align-self: flex-end; color: rgb(107, 99, 99);margin-left:40px;'>+Add Sub Question</label>";
               document.getElementById('label_add_sub_que').onclick = function(){
                  if(temp3<=0){
                     var i = 'sub_q1'+temp2;
                     saving_data(i);
                  }
                  else if (temp3 > 0) {
                     saving_data('sub_qq2'+temp3);
                  }
                  console.log("checking next switch with Single line ");
                  document.getElementById('add_new_call_method').innerHTML += num-1+"."+num_sq+") <input placeholder='Add Sub question' type='text' class='sub_question_left_pad' id='sub_qq2"+ ++temp3 +"' onkeyup='save_data(this.id)'> &nbsp; &nbsp; &nbsp; <select name='type' id='sub_q_type_ans' onchange='run2(this.value)'><option value='void'>Select Answer Type</option><option value='single_line'>Single Line</option><option value='multi_line'>Multi Line</option><option value='mcq' id='mcq'>MCQ</option></select><br ><br>";
                  num_sq++;
                  document.getElementById('label_add_sub_que').style.display = 'block';
                  }
            document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
            document.getElementById('sub_q_type_ans').disabled = true;
         break;
      case  'multi_line':
         //Adding Input Field When User Select Multi line Answer type from dropdown
         console.log("checkig_next Switch with multi line ans type");
         document.getElementById('label_add_sub_que').style.display = 'none';
         var  inpt_txt= document.createElement("TEXTAREA");
         inpt_txt.setAttribute("type", "text"); 
         inpt_txt.setAttribute("rows","6");
         inpt_txt.setAttribute("cols","50");
         inpt_txt.setAttribute('id','multi_line');
         inpt_txt.setAttribute("class", "corner");
         document.getElementById('add_new_call_method').appendChild(inpt_txt);
         document.createElement("br");
         document.createElement("br");
         document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
         /*document.getElementById('multi_line').value = getSavedValue('multi_line');*/
         /*Disable select option to avoid answer type to get shown on page again and again.*/
         document.getElementById('sub_q_type_ans').disabled = true;

         break;
         case 'mcq':
            //Adding Input Field When User Select Multiple type of Question and Answer type from dropdown
            console.log("checkig_next Switch with MCQ ans type");
            for (let index = 0; index <5; index++) {
                  var  inpt_txt= document.createElement("INPUT");
                  inpt_txt.setAttribute("type", "text"); 
                  inpt_txt.setAttribute("placeholder", "Answer");
                  inpt_txt.setAttribute("class", "corner");
                  inpt_txt.setAttribute("id","m_ans"+index);
                  /*document.getElementById('m_ans'+index).value = getSavedValue('m_ans'+index);*/
                  document.getElementById('add_new_call_method').appendChild(inpt_txt);
                }
                //Label to add Sub Questions
               document.getElementById('label_sub_que').innerHTML = "<label id='label_add_sub_que' style='display:block; align-self: flex-end; color: rgb(107, 99, 99);margin-left:40px;'>+Add Sub Question</label>";
               document.getElementById('label_add_sub_que').onclick = function(){
                  //
                  if(temp3<=0){
                     var i = 'sub_q1'+temp2;
                     saving_data(i);
                  }
                  else if (temp3 > 0) {
                     saving_data('sub_qq2'+temp3);
                  }
                  document.getElementById('add_new_call_method').innerHTML += num-1+"."+num_sq+") <input placeholder='Add Sub question' type='text' class='sub_question_left_pad' id='sub_qq2"+ ++temp3 +"' onkeyup='save_data(this.id)'> &nbsp; &nbsp; &nbsp; <select name='type' id='sub_q_type_ans' onchange='run2(this.value)'><option value='void'>Select Answer Type</option><option value='single_line'>Single Line</option><option value='multi_line'>Multi Line</option><option value='mcq' id='mcq'>MCQ</option></select><br ><br>";
                  num_sq++;
                  document.getElementById('label_add_sub_que').style.display = 'block';
                  }
            document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
            document.getElementById('sub_q_type_ans').disabled = true;
      default:
         break;
   }
}

var num_sq = 0;                   //To keep trace the number of sub question
var temp2 = 0;
function run(value){
    //document.getElementById("type_ans").value = value;
   console.log(value);
   //Checking for input type of ans
   console.log("Type of ans "+value);

   //Setting value to get Answer type of the specific question
   localStorage.setItem("get_ans_type_"+temp, value );

   switch (value) {
      case 'single_line':
         document.getElementById("type_ans").disabled = true;
        
         var  inpt_txt= document.createElement("INPUT");
         inpt_txt.setAttribute("type", "text"); 
         inpt_txt.setAttribute('placeholder','Start typing your answer...');
         inpt_txt.setAttribute("class", "corner");
         inpt_txt.setAttribute("id","s_ans");
         document.getElementById('add_new_call_method').appendChild(inpt_txt);
         /*Show Add sub que label*/
         document.getElementById('label_sub_que').innerHTML = "<label id='label_add_sub_que' style='display:block; align-self: flex-end; color: rgb(107, 99, 99);margin-left:40px;'>+Add Sub Question</label>";
         document.getElementById('label_add_sub_que').onclick = function(){
            console.log("Clicking on label "+'sub_q1'+temp2);
            if (temp2 <= 0) {
               var i = 'txtBoxQue'+temp;
               saving_data(i);
            }else if (temp2 > 0 ) {
               var i = 'sub_q1'+temp2;
               saving_data(i);
            }
            document.getElementById('add_new_call_method').innerHTML += num-1+"."+ num_sq++ +") <input placeholder='Add Sub question' type='text' class='sub_question_left_pad corner' id='sub_q1"+ ++temp2 +"' onkeyup='save_data(this.id)'> &nbsp; &nbsp; &nbsp; <select name='type' id='sub_q_type_ans' onchange='run2(this.value)'><option value='void'>Select Answer Type</option><option value='single_line' onclick='disable_after_single_line_click();'>Single Line</option><option value='multi_line'>Multi Line</option><option value='mcq' id='mcq'>MCQ</option></select><br ><br>";
            /*document.getElementById('sub_q1').value = getSavedValue('sub_q1');*/
            document.getElementById('label_add_sub_que').style.display = 'block';
               /*Disable select option to avoid answer type to get shown on page again and again.*/
         }
         document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
         break;
      case 'multi_line':
         var  inpt_txt= document.createElement("TEXTAREA");
         inpt_txt.setAttribute("type", "text"); 
         inpt_txt.setAttribute("rows","6");
         inpt_txt.setAttribute("cols","50");
         inpt_txt.setAttribute("class", "corner");
         document.createElement("br");
         document.createElement("br");
         document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
         document.getElementById('add_new_call_method').appendChild(inpt_txt);
         /*Disable select option to avoid answer type to get shown on page again and again.*/
                  document.getElementById("type_ans").disabled = true;

         break;

         case 'mcq':

            for (let index = 0; index <5; index++) {
               var  inpt_txt= document.createElement("INPUT");
               inpt_txt.setAttribute("type", "text"); 
               inpt_txt.setAttribute("placeholder", "Answer");
               inpt_txt.setAttribute("class", "corner");
               inpt_txt.setAttribute("id","m_ans"+temp2+index);
               document.getElementById('add_new_call_method').appendChild(inpt_txt);
               /*document.getElementById('m_ans').value = getSavedValue('m_ans');*/
                }
            document.getElementById('label_sub_que').innerHTML = "<label id='label_add_sub_que' style='display:block; align-self: flex-end; color: rgb(107, 99, 99);margin-left:40px;'>+Add Sub Question</label>";
            /*Add break tag*/
            document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
            /*After click on label show fields for sub question*/
            document.getElementById('label_add_sub_que').onclick = function(){
               console.log("Clicking on label "+'sub_q1'+temp2);
               if (temp2 <= 0) {
                  console.log("saving data of main question");
                  var i = 'txtBoxQue'+temp;
                  saving_data(i);
               }else if (temp2 > 0 ) {
                  var i = 'sub_q1'+temp2;
                  saving_data(i);
               }
               document.getElementById('add_new_call_method').innerHTML += num-1+"."+ num_sq++ +") <input placeholder='Add Sub question' type='text' class='sub_question_left_pad corner' id='sub_q"+ ++temp2+"' onkeyup='save_data(this.id)'> &nbsp; &nbsp; &nbsp; <select name='type' id='sub_q_type_ans' onchange='run2(this.value)'><option value='void'>Select Answer Type</option><option value='single_line'>Single Line</option><option value='multi_line'>Multi Line</option><option value='mcq' id='mcq'>MCQ</option></select><br ><br>";
               //document.getElementById('sub_q').setAttribute('value',localStorage.getItem('sub_q'));
               num_sq++;
               document.getElementById('label_add_sub_que').style.display = 'block';
   
            }
            document.getElementById('type_ans').disabled = true;
            /*document.getElementById('type_ans_mcq').disabled = true;*/
            document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
            /*Disable Other options*/
           

            break;
      default:
         break;
   }
}

var num = 1;
var temp = 0;
function appendRow()
{
 num_sq = 1;

   document.getElementById('add_new_call_method').appendChild(document.createElement('br'));
   if(temp<0)
   {
      return;
   }
   else if(temp>0){
      var i = 'txtBoxQue'+temp;
      saving_data(i);
   }
   var d = document.getElementById('add_new_call_method');
   d.innerHTML += num + ") <input type='text' class='question_left_pad corner' id='txtBoxQue"+ ++temp +"' onkeyup='save_data(this.id);' placeholder='Start typing question'"+ 
                    num++ +"> &nbsp; &nbsp; &nbsp; <select name='type' id='type_ans'  onchange='run(this.value)'><option value='void'>Select Answer Type</option><option value='single_line' id='1'>Single Line</option><option value='multi_line' id='2'>Multi Line</option><option value='mcq' id='3'>MCQ</option></select><br ><br>";
   localStorage.setItem("num_que",temp);
 
   //localStorage.setItem('type_of_ans');
}

function saving_data(id){
   console.log('Saving data'+id);
   var x = document.getElementById(id).value;
  document.getElementById(id).innerHTML = x;
  console.log(x);
  document.getElementById(id).setAttribute('value',x);
  //save_data(id);
}
function save_data(e){
   var getVal = document.getElementById(e).value;
   localStorage.setItem(e,getVal);
  // document.getElementById(e).value = getVal;
   document.getElementById(e).value = localStorage.getItem(e);
}

function getSavedValue(v){
   if (!localStorage.getItem(v)) {
     return "";// You can change this to your defualt value. 
   }
   console.log(v+localStorage.getItem(v));

   return document.getElementById("result").innerHTML = localStorage.getItem("lastname");

}

