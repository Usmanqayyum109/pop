function myProject(){
    let num=document.getElementById('enter').value ;
    let week=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
   
//    let weekName=week[3];
//     document.write(weekName).innerhtml=value;
let save=week[num];
document.write(save).innerhtml=value;

}
function pop(){
    let week=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    week.pop();
    document.write(week.pop());
}
function push(){
    let week=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    // let ver=document.getElementById('enter text').value;
    week.push(document.getElementById('enter text').value);
    // let me=week.push();
    // let ver=document.getElementById('enter text').value
    document.write(week).innerhtml=value;
}