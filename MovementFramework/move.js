//既能实现同步运动又能实现链式运动的运动框架
function startMove(obj,json,fn){
           
    clearInterval(obj.timer);
    
    obj.timer = setInterval(function(){
        var flag = true; 
        //之所以会同步进行是因为这些元素都被包在同一个计时器中，只有全部元素都执行完了，这个计时器才算完成一次任务，其实并不是同步，而是看起来同步
        for (var i in json){
            if(i == "opacity"){
                var now_attr_value = Math.round(parseFloat(getStyle(obj,i))*100);
            }else{
                var now_attr_value = parseInt(getStyle(obj,i)); //这句放在外面会出错，每一次改变时都要获得才对，因为一获得就不会改变
            }
            
            var speed = (json[i]-now_attr_value)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
           
            if(now_attr_value !== json[i]){
                flag = false;
            }
            if(i == "opacity"){
                obj.style.filter= "alpha(opacity:"+now_attr_value+speed+")"; 
                obj.style.opacity = (now_attr_value+speed)/100;
            }else{
                obj.style[i] = now_attr_value+speed+'px';
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }    
        
    },30)
}

function getStyle(obj,attr){
  if(obj.currentStyle){
      return obj.currentStyle[attr];
  }else{
      return getComputedStyle(obj,false)[attr];
  }
}   