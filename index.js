window.onload=function(){
    let arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    let arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    let bigBox=document.querySelector(".bigBox");
    let bigBox2=document.querySelector(".bigBox2");
    let con=document.querySelector(".con");
    let con2=document.querySelector(".con2");
    let num1=document.querySelector("div.bigBox .title .circle");
    let num2=document.querySelector("div.bigBox2 .title .circle")
    //console.log(bigBox,bigBox2)
   
    function update(){
        con.innerHTML="";
        con2.innerHTML="";
        num1.innerHTML=arr1.length;
        num2.innerHTML=arr2.length;
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        arr1.forEach(function(value,index){
            let info=document.createElement("div");
            info.className="info";
            info.onmouseenter=function(){
                info.style.cursor="move";
            }
            con.appendChild(info);
            let check=document.createElement("input");
            check.setAttribute("type","checkbox");
            check.className="check";
            check.onclick=function(){
                arr1.splice(index,1);
                arr2.unshift(value);
                update();
            }
            info.appendChild(check);
            let del=document.createElement("div");
            del.className="del";
            del.onclick=function(){
                arr1.splice(index,1);
                update();
            }
            info.appendChild(del);
            let text=document.createElement("div");
            text.className="text";
            text.innerHTML=value;
            // console.log(text)
            text.ondblclick=function(){
                let input1=document.createElement("input");
                cons=text.innerText;
                text.innerText="";
                input1.value=cons;
                 //text.innerText="";
                //  input1.setAttribute("placeholder",arr1[index]);
                 //input1.value=text.innerText;
                 input1.style.cursor="pointer";
                 let flag=true;
                input1.onkeydown=function(e){
                    flag=false;
                    if(e.keyCode==13 && this.value!=""){
                        arr1[index]=input1.value;
                        update();
                    }
                }
                input1.onblur=function(){
                    if(flag==false){
                        return ;
                    }
                    if(input1.value!=""){
                        arr1[index]=input1.value;
                        update();
                    }
                }
                text.appendChild(input1);
                input1.focus();
            }
            info.appendChild(text);
            
        })
        arr2.forEach(function(value,index){
            let info=document.createElement("div");
            info.className="info";
            info.onmouseenter=function(){
                info.style.cursor="move";
            }
            con2.appendChild(info);
            let check=document.createElement("input");
            check.setAttribute("type","checkbox");
            check.className="check";
            check.setAttribute("checked","checked");
            check.onclick=function(){
                arr2.splice(index,1);
                arr1.unshift(value);
                update();
            }
            info.appendChild(check);
            let del=document.createElement("div");
            del.className="del";
            del.onclick=function(){
                arr2.splice(index,1);
                update();
            }
            info.appendChild(del);
            let text=document.createElement("div");
            text.className="text";
            text.innerHTML=value;
            text.ondblclick=function(){
                let input2=document.createElement("input");
                cons=text.innerText;
                text.innerText="";
                input2.value=cons;
                input2.style.cursor="pointer";
                input2.onkeydown=function(e){
                    if(e.keyCode==13 && input2.value!=""){
                        arr2[index]=input2.value;
                        update();
                    }
                }
                input2.onblur=function(){
                    if(this.value!=""){
                        arr2[index]=this.value;
                        update();
                    }
                }
                text.appendChild(input2);
                input2.focus();
            }
            info.appendChild(text);  
        })
    }
    let toDo=this.document.querySelector("#todo");
    toDo.onkeydown=function(e){
        if(e.keyCode==13 && this.value!=""){
            arr1.unshift(this.value);
            this.value="";
            update();
        }
    }
    update();
}