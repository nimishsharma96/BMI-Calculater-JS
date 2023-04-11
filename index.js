const btn = document.getElementById('submit');

btn.addEventListener('click' , function(){

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    if(height === '' || weight === ''){
        alert("all fields are nessesory")
        return;
    }

    // (BMI =weight in kg / height in mtr x height in mtr )

    newHeight = height/100;

    let BMI = (weight/(newHeight*newHeight))

    BMI = BMI.toFixed(2);

    document.querySelector('#bmi-result').innerHTML = (`Your BMI IS ${BMI}`)

    let status = ''

    if ( BMI < 18.5 ){
        status="UnderWeight"
    }
    
    if ( BMI >= 18.5  && BMI < 25){
        status="Healthy"
    }
    if ( BMI >= 25  && BMI < 30){
        status="Overweight"
    }
    if ( BMI > 30 ){
        status="Obese"
    }

    document.querySelector('#result-text').innerHTML = (`Your Are ${status}`)


})