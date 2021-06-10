// Аккордеон
const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach(function (item) {
    
    item.addEventListener('click', function(){
        
        this.classList.toggle('show');
        let loock = this.nextElementSibling;
        if (loock.style.maxHeight){
        loock.style.maxHeight = null;
        loock.classList.remove('show')
        } else {
            loock.style.maxHeight = loock.scrollHeight + "px";        
            loock.classList.add('show')
        }
    });
});
