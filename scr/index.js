
 let sec3 = document.querySelector('.sec3')
 let num = document.querySelectorAll('.num')
 let start = false
 window.onscroll = function () {
    if (window.scrollY > 1980) {
       if (start == false) {
        num.forEach(function (e) {
            let n = e.dataset.i
            let int = setInterval(() => {
                e.textContent++
                if (e.textContent== n) {
                     clearInterval(int)
                }
            }, 100/n);
        });
       } 
       start = true
    }
 }

