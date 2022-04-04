document.querySelector('#farenToCelButton').addEventListener('click', buttonClick)

function buttonClick(){
    let getUserInfo = document.querySelector('#farenToCel').value
    let farenToCelMath = (getUserInfo - 32) * 5/9
    document.querySelector('#farenToCelDisplay').innerText = farenToCelMath.toPrecision(3)
    document.querySelector('#reset1').reset()
}

document.querySelector('#celToFarenButton').addEventListener('click', celToClick)

function celToClick(){
    let getUserInfo = document.querySelector('#celToFaren').value
    let celToFarenMath = (getUserInfo * 1.8) + 32
    document.querySelector('#celToFarenDisplay').innerText = celToFarenMath.toFixed(1)
    document.querySelector('#reset2').reset()
}   