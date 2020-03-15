import mockNoticias from './mock/mockNoticias';

const elNewsContainer = document.querySelector('.grid__list')
;

var filtro=document.querySelector('#editoriais');
filtro.addEventListener("click",load());

let htmlGrid = '';

function load(){

  const valorDoSelect = document.querySelector('#editoriais').value;

  const edFil = mockNoticias[0].Editorias;
  edFil.forEach(edFil => {

    if ((valorDoSelect === '') || (edFil.Editoria === valorDoSelect)) {
      edFil['Notícias'].forEach(noticia => {
        htmlGrid += `
        <div class='noticia'>
                <div>
                  <p>${editoria.Editoria}</p>
                  <p>${noticia["Data de publicação"]}</p>
                </div>
                <img src="../img/${noticia.Foto}" alt="${noticia.Titulo}" />
                <div class='conteudo'>
                  <p>${noticia.Título}</p>
                  <p>${noticia.Texto}</p>
                  <br><br>
                  <p><b>Saiba Mais</b></p>
                </div>
          </div>
        `;
      });
      }
  });

  elNewsContainer.innerHTML = htmlGrid;
}



  // window.addEventListener("load",load);

// const valorDoSelect = document.querySelector('#select').value;
const selectVal = '';

const changeNews = () => {
  let htmlTeste = '';
  const editorias = mockNoticias[0].Editorias;

  editorias.forEach(editoria => {

    if ((selectVal === '') || (editoria.Editoria === selectVal)) {
      editoria['Notícias'].forEach(noticia => {
        // console.log('noticia', noticia);
        htmlTeste += `
        <div class='noticia'>
              <div>
                <p>${editoria.Editoria}</p>
                <p>${noticia["Data de publicação"]}</p>
              </div>
              <img src="../img/${noticia.Foto}" alt="${noticia.Titulo}" />
              <div class='conteudo'>
                <p>${noticia.Título}</p>
                <p>${noticia.Texto}</p>
                <br><br>
                <p><b>Saiba Mais</b></p>
              </div>
        </div>
        `;
      });
    }
  });

  elNewsContainer.innerHTML = htmlTeste;
};

changeNews();
load();
