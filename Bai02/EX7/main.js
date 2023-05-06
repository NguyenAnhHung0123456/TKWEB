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

        const introduceElement = document.querySelector('.body__container-introduce')
        if(e.target.innerText === 'Trang chủ') {
            document.title = 'Nguyễn Hùng Web Design | Trang chủ'

            introduceElement.style.display = 'block'
        } else {
            introduceElement.style.display = 'none'
        }

        if(e.target.innerText === 'Thông tin') {
            document.title = 'Nguyễn Hùng Web Design | Thông tin'
        }

        if(e.target.innerText === 'Dịch vụ') {
            document.title = 'Nguyễn Hùng Web Design | Dịch vụ'
        }
    }
}