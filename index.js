let albuns = []
const formalbm =  document.querySelector("#form-album")
const cardalbuns = document.querySelector("#album")
const card = document.getElementById("card")


formalbm.addEventListener("submit", (e) =>{
  e.preventDefault();

  console.log("enviou album");

  let album = {};
    album.nomeart = document.querySelector("#nomeart").value
    album.nomealbum = document.querySelector("#nomealb").value
    album.data = document.querySelector("#data").value
    album.img = document.querySelector("#urlalbum").value
    album.estilo = document.querySelector("#estilo").value
    album.tipo = document.querySelector("#tipo").value

    albuns.push(album);
    

    localStorage.setItem("ls-albuns", JSON.stringify(albuns));

    adicionarcard(album);

});

// funçao 

 function adicionarcard (img,nomealbum,nomeart){
   
  let codecard = `<div class="col">
                      <div class="card">
                        <img src="${img}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h3 class="card-title">${nomealbum}</h3>
                          <div>
                            <h6>${nomeart}</h6>
                          </div>
                          <a href="#" class="btn btn-primary" style="background-color: blueviolet; border: black;">Ver +</a>
                        </div>
                      </div>
                </div>`; 

  cardalbuns.innerHTML += codecard;
};

