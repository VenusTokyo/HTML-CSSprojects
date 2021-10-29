let btn = document.getElementById('btn');
let grade = "";
btn.addEventListener('click',()=> {
    let computer = document.getElementById('computer').value;
    let maths = document.getElementById('maths').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    
    let total = parseFloat(computer) + parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry)
    let Percentage = (total/400) * 100;
    if(Percentage>=80 && Percentage<=100){
        grade = 'A';
    }
    else if(Percentage>=60 && Percentage<80){
        grade = 'B';
    }
    else if(Percentage>=40 && Percentage<60){
        grade = 'C';
    }
    else if(Percentage<40){
        grade = 'FAIL';
        
    }
    
     display(total,Percentage);
})


function display(total,Percentage) {
    let alert = document.querySelector('.alert');
    let html = ` <div class="inalert">
    <p><strong>Total:</strong>  ${total}</p>
    <p><strong>Percentage:</strong>  ${Percentage}%</p>
    <p><strong>grade:</strong>  ${grade}</p>
    

</div>`
alert.innerHTML = html;
console.log(grade)

}