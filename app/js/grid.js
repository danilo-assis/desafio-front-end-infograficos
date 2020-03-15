import mockNoticias from './mock/mockNoticias';

const elNewsContainer = document.querySelector('.grid__list')
;

const elEditoriasContainer = document.querySelector('#editoriais-select');


function changeNews() {
  let htmlEditorias = '';

  const valEditoriasSelect = elEditoriasContainer.value;
  const editorias = mockNoticias[0].Editorias;


  sortedEditorias.forEach(editoria => {
    if ((valEditoriasSelect === '') || (editoria.Editoria === valEditoriasSelect)) {
      editoria['Notícias'].forEach(noticia => {
        htmlEditorias += `
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

  elNewsContainer.innerHTML = htmlEditorias;
}

changeNews();

elEditoriasContainer.addEventListener("change", changeNews);



  // window.addEventListener("load",load);

// const valorDoSelect = document.querySelector('#select').value;
// const selectVal = '';

// const changeNews = () => {
//   let htmlTeste = '';
//   const editorias = mockNoticias[0].Editorias;

//   editorias.forEach(editoria => {

//     if ((selectVal === '') || (editoria.Editoria === selectVal)) {
//       editoria['Notícias'].forEach(noticia => {
//         // console.log('noticia', noticia);
//         htmlTeste += `
//         <div class='noticia'>
//               <div>
//                 <p>${editoria.Editoria}</p>
//                 <p>${noticia["Data de publicação"]}</p>
//               </div>
//               <img src="../img/${noticia.Foto}" alt="${noticia.Titulo}" />
//               <div class='conteudo'>
//                 <p>${noticia.Título}</p>
//                 <p>${noticia.Texto}</p>
//                 <br><br>
//                 <p><b>Saiba Mais</b></p>
//               </div>
//         </div>
//         `;
//       });
//     }
//   });

//   elNewsContainer.innerHTML = htmlTeste;
// };

// changeNews();
// load();
