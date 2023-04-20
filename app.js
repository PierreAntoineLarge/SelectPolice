// JavaScript
document.getElementById('monMenuDeroulant').addEventListener('change', function(event) {
    var policeSelectionnee = event.target.value;
    var texte = document.getElementById('monTexte');
    switch (policeSelectionnee) {
      case 'police1':
        texte.style.fontFamily = 'Arial';
        break;
      case 'police2':
        texte.style.fontFamily = 'Times New Roman';
        break;
      case 'police3':
        texte.style.fontFamily = 'Verdana';
        break;
      default:
        texte.style.fontFamily = '';
    }
  });
  