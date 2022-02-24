function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.name

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;

}

async function main() {
    let data = await fetch("https://api.github.com/users/mariliaalves/repos").then((res)=>{
        return res.json();
    }).then((res)=>{
        return res
    })
    console.log(data)

    console.log("executou")

    // let data2 = fazGet("https://api.github.com/users/mariliaalves/repos");
    let usuarios = data;
    let tabela = document.getElementById("tabela");



        usuarios.forEach((element) => {
            let linha = criaLinha(element);
            tabela.appendChild(linha);
        })

}

main()