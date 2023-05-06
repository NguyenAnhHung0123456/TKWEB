const trangChu = document.querySelectorAll('.heading__item-link')
let content = document.querySelectorAll('.container-content')

for (let i = 0; i < trangChu.length; i++) {

    trangChu[i].onclick = function(e) {
        const active = document.querySelector('.active')
        const enable = document.querySelector('.enable')

        active.classList.remove('active')
        enable.classList.remove('enable')

        content[i].classList.add('active')
        trangChu[i].classList.add('enable')
    }
}
