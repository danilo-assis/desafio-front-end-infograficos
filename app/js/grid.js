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
          <p>${editoria.Editoria}</p>
          <p>${noticia["Data de publicação"]}</p>
          </div>
          <img src="../img/${noticia.Foto}" alt="${noticia.Titulo}" />;
          <p>${noticia.Título}</p>
          <p>${noticia.Texto}</p>
          <p>${noticia.Foto}</p>
        </div>
        `;
      });
    }
  });

  elNewsContainer.innerHTML = htmlTeste;
};

changeNews();

