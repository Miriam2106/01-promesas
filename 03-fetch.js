const resp = fetch('https://reqres.in/api/users?page=2');

resp.then(response=>response.json())
.then(data =>{
    content = "";
    let json = data.data
    for(i=0; i < json.length; i++){
        content += `
        <div class="col-4 mt-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${json[i].first_name} ${json[i].last_name}</h5>
                <p class="card-text">${json[i].email}</p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#user" class="btn btn-primary" onclick="findById(${json[i].id})">Detalles</button>
                </div>
            </div>
        </div>`
    }
    $("#contenido").html(content)
})

const findById = (id) =>{
    fetch('https://reqres.in/api/users/'+id)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        document.getElementById("name").innerHTML = data.data.first_name + " "+ data.data.last_name
        document.getElementById("email").innerHTML = data.data.email
        document.getElementById("avatar").src = data.data.avatar
    })
}

// resp.then(response=>{
//     return response.json()
// })
// .then((json)=>{
//     console.log(json)
// })

// resp.then(response=>response.json())
// .then(console.log)