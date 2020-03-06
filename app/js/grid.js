import mockNoticias from './mock/mockNoticias';

const elNewsContainer = document.querySelector('.grid__list')
;
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
          <p class="asdsad">${editoria.Editoria}</p>
          <p class="asdsad">${noticia["Data de publicação"]}</p>
          </div>
          <img src="../img/' + ${noticia.Foto} '" alt="${noticia.Título}"/>
          <p class="asdsad">${noticia.Título}</p>
          <p class="asdsad">${noticia.Texto}</p>
        </div>
        `;
      });
    }
  });

  elNewsContainer.innerHTML = htmlTeste;
};

changeNews();

