function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')

    console.log(posts)

    let primeiroPost = posts[0];

    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    console.log(textoPosts[1].classList)

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M') {
        radioMasculino.checked = true
    }else{
        radioFeminino.checked = true
    }
}