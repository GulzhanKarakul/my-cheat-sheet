// Изменение стиля менюшки navbar на скролле
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
});

// Active class Toggle
const listItems = document.querySelectorAll('li');
const articlesAll = document.querySelectorAll('article');

listItems.forEach(li => {
    li.addEventListener('click', () => {
        let secClass = li.id;
        articlesAll.forEach( article => {
            if(article.classList.contains(secClass)) article.classList.add('active');
            else article.classList.remove('active');
        })
    })
})