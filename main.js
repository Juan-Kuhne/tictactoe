let cont = 1
let boxList = document.querySelectorAll('.box')
let turnImg = document.querySelector('.img')
let result = document.querySelector('.result')
let dark = document.querySelector('.dark')
let winImg = document.querySelector('.win-img')
let playList = [
    'e', 'e', 'e',
    'e', 'e', 'e',
    'e', 'e', 'e'
]

const imgO = document.createElement('img')
imgO.src = 'images/o.svg'
imgO.classList.add('filter-green')
const imgX = document.createElement('img')
imgX.src = 'images/x.svg'
imgX.classList.add('filter-red')
turnImg.innerHTML = imgX.outerHTML

boxList.forEach((box) => {
    box.addEventListener('click', (event)=>{
        // console.log(box.classList[1].substr(-1, 1));
        let boxNumber = box.classList[1].substr(-1, 1)
        if(!event.target.contains(imgX) || !event.target.contains(imgO)) { //verifica se esta preenchido
            if(cont % 2 == 0) {
                event.target.innerHTML = imgO.outerHTML
                changeTurn('x')
                playList[boxNumber - 1] = 'o'
                cont+=1
            } else {
                event.target.innerHTML = imgX.outerHTML
                changeTurn('o')
                playList[boxNumber - 1] = 'x'
                cont+=1
            }
        }
        win()
        console.log(playList);
    })
})

function changeTurn(c) {
    if(c == 'x') {
        turnImg.innerHTML = imgX.outerHTML
    } else if(c == 'o') {
        turnImg.innerHTML = imgO.outerHTML
    }
}

function win() {
    if(playList[0]=='x' && playList[1]=='x' && playList[2]=='x' || 
       playList[3]=='x' && playList[4]=='x' && playList[5]=='x' || 
       playList[6]=='x' && playList[7]=='x' && playList[8]=='x' || 
       playList[0]=='x' && playList[3]=='x' && playList[6]=='x' || 
       playList[1]=='x' && playList[4]=='x' && playList[7]=='x' || 
       playList[2]=='x' && playList[5]=='x' && playList[8]=='x' ||
       playList[0]=='x' && playList[4]=='x' && playList[8]=='x' ||
       playList[2]=='x' && playList[4]=='x' && playList[6]=='x') {

        console.log('X win');
        final(imgX)

    }else 
    if(playList[0]=='o' && playList[1]=='o' && playList[2]=='o' || 
       playList[3]=='o' && playList[4]=='o' && playList[5]=='o' || 
       playList[6]=='o' && playList[7]=='o' && playList[8]=='o' || 
       playList[0]=='o' && playList[3]=='o' && playList[6]=='o' || 
       playList[1]=='o' && playList[4]=='o' && playList[7]=='o' || 
       playList[2]=='o' && playList[5]=='o' && playList[8]=='o' ||
       playList[0]=='o' && playList[4]=='o' && playList[8]=='o' ||
       playList[2]=='o' && playList[4]=='o' && playList[6]=='o') {

        console.log('O win');
        final(imgO)

    }
}

function final(img) {
    winImg.innerHTML = img.outerHTML
    dark.style.display = 'block'
    result.style.display = 'flex'
    dark.classList.toggle('on')
}

// boxList[0].appendChild(imgO)
// turnImg.innerHTML = imgX.outerHTML

console.log(boxList);
