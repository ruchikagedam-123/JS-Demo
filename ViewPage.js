function init() {
    // Retrieving the text input's value which was stored into localStorage
    var getLength = localStorage.getItem("num_que");
    console.log(getLength);
    // Writing the value in the document
    for (let index = 1; index <= getLength; index++) {
        // Getting the value of your text input
        var first_que_txtBox = localStorage.getItem("txtBoxQue"+index);
        var get_type_ans = localStorage.getItem("get_ans_type_"+index);
        // Storing the value above into localStorage
        localStorage.getItem(first_que_txtBox);
        localStorage.getItem(get_type_ans);   
        document.body.appendChild(document.createElement("br"));
        // Writing the value in the document
        document.write(index+")  "+first_que_txtBox);
        switch (get_type_ans) {
            case 'single_line':
            document.body.appendChild(document.createElement("br"));
                    var  inpt_txt= document.createElement("INPUT");
                    inpt_txt.setAttribute("type", "text"); 
                    inpt_txt.setAttribute('placeholder','Start typing your answer...');
                    inpt_txt.setAttribute("class", "corner");
                    document.body.appendChild(document.createElement('br'));
                    var hr = document.createElement('hr');
                    hr.setAttribute('class','rounded');
                    document.body.appendChild(inpt_txt);
                    document.body.appendChild(hr);
                    document.body.appendChild(document.createElement("br"));
                    document.body.appendChild(document.createElement("br"));

                break;
                case 'multi_line':
                document.body.appendChild(document.createElement("br"));  
                var  inpt_txt= document.createElement("TEXTAREA");
                    inpt_txt.setAttribute("type", "text"); 
                    inpt_txt.setAttribute("rows","6");
                    inpt_txt.setAttribute("cols","50");
                    inpt_txt.setAttribute("class", "corner");
                    document.createElement("br");
                    document.createElement("br");
                    document.body.appendChild(document.createElement('br'));
                    var hr = document.createElement('hr');
                    hr.setAttribute('class','rounded');
                    document.body.appendChild(inpt_txt);
                    document.body.appendChild(hr);
                    document.body.appendChild(document.createElement("br"));

                break;
                case 'mcq':
                for (let index = 1; index <=5; index++) {
                        var  inpt_txt= document.createElement("INPUT");
                        inpt_txt.setAttribute("type", "text"); 
                        inpt_txt.setAttribute('value','Option'+index);
                        inpt_txt.setAttribute("placeholder", "Answer");
                        inpt_txt.setAttribute("class", "corner");
                        inpt_txt.setAttribute('disabled','true');
                        document.body.appendChild(document.createElement('br'));
                        document.body.appendChild(inpt_txt);

                        /*document.getElementById('m_ans').value = getSavedValue('m_ans');*/
            }    
                    var hr = document.createElement('hr');
                    hr.setAttribute('class','rounded');
                    document.body.appendChild(hr);
                    document.body.appendChild(document.createElement("br"));
                break;
            default:
                break;
        }
        
        //checking for type of ans is correctly retriving or not
        console.log(get_type_ans);
       }


}