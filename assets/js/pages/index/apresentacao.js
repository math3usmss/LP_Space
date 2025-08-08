const sectionApresentacao = document.querySelector('.apresentacao')

window.addEventListener('scroll', () => {
    const altura = window.scrollY
    const largura = window.innerWidth

    if(largura < 768){
        if(altura < 50){
            sectionApresentacao.classList.remove('oculto')
        }else{
            sectionApresentacao.classList.add('oculto')
        }
    }else{
        if(altura < 200){
            sectionApresentacao.classList.remove('oculto')
        }else{
            sectionApresentacao.classList.add('oculto')
        }
    }
})