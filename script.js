let pic = document.getElementById('frame');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let b=document.getElementById('b');



tab1.onclick = function () {
  pic.src = './images/tab1p.png';
  b.src ='./images/25Nov2016.png';
};

tab2.onclick = function () {
  pic.src = './images/tab2p.png';
  b.src ='./images/17Nov2016.png';
};





function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  