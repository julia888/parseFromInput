let res = document.querySelector('.input-block__result');
const textJson = document.querySelector('.input-block__textarea');
const btnTextJson = document.querySelector('.input-block__btn');

btnTextJson.addEventListener('click', function () {
    clearAll();
    let textVal = textJson.value;
    let jsonArr = null;
    let obj = null;
    try {
        jsonArr = JSON.parse(textVal);
        obj = {all: jsonArr};
    }catch (e) {
        return res.innerHTML = 'not json';
    }

    for (let key in obj){
        recurs(key, obj[key],res);
    }

    function recurs(key, arr, block) {
        let mainBlock = document.createElement('div');
        mainBlock.className = 'main-block';

        let innerBlock = document.createElement('div');
        innerBlock.className = 'inner-block';

        let titleBlock = document.createElement('div');
        titleBlock.className = 'title-block';
        titleBlock.style.color = 'red';
        titleBlock.innerText = key;

        mainBlock.appendChild(titleBlock);

        for (let i in arr) {
            if (typeof arr[i]!=='object'){
                let textBlock = document.createElement('div');
                textBlock.className = 'text-block';
                textBlock.innerHTML = i + ' : ' + arr[i] + "<br>"
                innerBlock.appendChild(textBlock);
            }else{
                recurs(i, arr[i], innerBlock);
            }
        }
        mainBlock.appendChild(innerBlock);
        block.appendChild(mainBlock);
    }

    let main = document.querySelector('.main-block');
    main.addEventListener('click', showTitle);
    function showTitle() {
        const tar = event.target;
        tar.parentElement.classList.toggle('show');
    }
});

function clearAll() {
    res.innerHTML = '';
}