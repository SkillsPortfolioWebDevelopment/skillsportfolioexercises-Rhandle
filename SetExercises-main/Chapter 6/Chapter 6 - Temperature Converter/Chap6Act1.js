const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = "Convert";

btn.addEventListener('click', () => {
    let valNum = document.getElementById("tempconverter");
    document.getElementById("celsius").innerHTML = (parseFloat(valNum.value) - 32) * 5 / 9;
    document.getElementById("kelvin").innerHTML = (parseFloat(valNum.value) - 32) * 5 / 9 + 273.15;
});

document.getElementById('buttons').appendChild(btn);