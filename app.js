// JavaScript
document.getElementById('monMenuDeroulant1').addEventListener('change', function(event) {
    var policeSelectionnee1 = event.target.value;
    var texte1 = document.getElementById('monTexte1');
    switch (policeSelectionnee1) {
      case 'police1':
        texte1.style.fontFamily = 'Arial';
        break;
      case 'police2':
        texte1.style.fontFamily = 'Times New Roman';
        break;
      case 'police3':
        texte1.style.fontFamily = 'Verdana';
        break;
      default:
        texte1.style.fontFamily = '';
    }
  });

  document.getElementById('monMenuDeroulant2').addEventListener('change', function(event) {
    var policeSelectionnee2 = event.target.value;
    var texte2 = document.getElementById('monTexte2');
    switch (policeSelectionnee2) {
      case 'police1':
        texte2.style.fontFamily = 'Arial';
        break;
      case 'police2':
        texte2.style.fontFamily = 'Times New Roman';
        break;
      case 'police3':
        texte2.style.fontFamily = 'Verdana';
        break;
      default:
        texte2.style.fontFamily = '';
    }
  });
  
  document.getElementById('montexte1').addEventListener('change', function(event){
    
    const newContent1 = event.target.value;
    changeText1(newContent1)
  })

  document.getElementById('montexte2').addEventListener('change', function(event){
    console.log(event.target.value)
    const newContent2 = event.target.value;
    changeText2(newContent2)
  })

function changeText1(text1){
    const textToReplace1 = document.getElementById('monTexte1');
    textToReplace1.innerText = text1;
}

function changeText2(text2){
    const textToReplace2 = document.getElementById('monTexte2');
    textToReplace2.innerText = text2;
}