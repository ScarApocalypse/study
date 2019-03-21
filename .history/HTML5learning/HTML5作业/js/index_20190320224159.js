window.onload=function(){
    console.log("hello");
    function replaceValidationUI(form){
        // 阻止表单默认气泡事件
        form.addEventListener("invalid",function(event){
            event.preventDefault();
        },true);
        //取消提交按钮验证为空时的默认事件
        form.addEventListener("submit",function(event){
                if(!this.checkValidity()){
                    event.preventDefault();
                }else{
                    event.preventDefault();
                    alert('Submit success!')
                }
                
           
        },true);    
            var submitButton=document.getElementById("contact-submit");
            // 注册提交按钮点击时的事件
            submitButton.addEventListener('click',function(){
                console.log(1);
                //获取没能通过验证的元素，放进数组里
                var inValidityField=form.querySelectorAll(':invalid');
                // 获取显示错误信息的元素
                var errorMessage=form.querySelectorAll(".error-message");
                // 创建父元素变量
                var parent;
                // 清除上一次提交的错误信息
                for(var i=0;i<errorMessage.length;i++){
                    // 通过获取父节点来移除错误信息元素
                    errorMessage[i].parentNode.removeChild(errorMessage[i]);
                }
                // 添加错误信息元素
                for(var i=0;i<inValidityField.length;i++){
                    parent=inValidityField[i].parentNode;
                    // 把错误信息插入到选框背后
                    var invalidMessage=inValidityField[i].validationMessage;
                    // if(invalidMessage=="")
                    parent.insertAdjacentHTML("afterbegin","<div class='error-message'>"+invalidMessage+"</div>");
                }
                // 聚焦到错误信息上面
                if(inValidityField.length>0){
                    inValidityField[0].focus();
                }
            });
           
            
        
    };
    var form=document.getElementById('contact-form');
    replaceValidationUI(form);
};