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
          <div class='linha-lateral'>
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
        </div>
        `;
      });
    }
  });

  elNewsContainer.innerHTML = htmlTeste;
};

changeNews();

