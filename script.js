// getting the main text
const placeholder = document.getElementById('placeholder');

// changing font weight
document.getElementById('boldBtn').addEventListener('click',function (){
    if (placeholder.style.fontWeight === 'bold') {
        placeholder.style.fontWeight = 'normal';
        return;
    }
    placeholder.style.fontWeight = 'bold';
})

// changing font Style
document.getElementById('italicBtn').addEventListener('click',function (){
    if (placeholder.style.fontStyle === 'italic') {
        placeholder.style.fontStyle = 'normal';
        return;
    }
    placeholder.style.fontStyle = 'italic'
})

// changing text Decoration
document.getElementById('underlineBtn').addEventListener('click',function (){
    if (placeholder.style.textDecoration === 'underline') {
        placeholder.style.textDecoration = 'none';
        return;
    }
    placeholder.style.textDecoration = 'underline'
})

// changing text align
document.getElementById('leftBtn').addEventListener('click',function (){
    placeholder.style.textAlign = 'left';
})
document.getElementById('centerBtn').addEventListener('click',function (){
    placeholder.style.textAlign = 'center';
})
document.getElementById('rightBtn').addEventListener('click',function (){
    placeholder.style.textAlign = 'right';
})
document.getElementById('justifyBtn').addEventListener('click',function (){
    placeholder.style.textAlign = 'justify';
})

// changing font Size
const fontSizeBtnInput = document.getElementById('fontSizeBtnInput');
fontSizeBtnInput.value = 18;
fontSizeBtnInput.addEventListener('input',function (){   
    placeholder.style.fontSize = fontSizeBtnInput.value + "px";
})

// changing text Color
const colorInputBtn = document.getElementById('colorInputBtn');
colorInputBtn.addEventListener('input',function (){   
    placeholder.style.color = colorInputBtn.value;   
}) 

// text transformation
const textCase = document.getElementById('textTransform');
textCase.addEventListener('click',function(){
    if (placeholder.style.textTransform === 'uppercase') {
        placeholder.style.textTransform = 'lowercase';
        return;
    }
   placeholder.style.textTransform = 'uppercase';
})