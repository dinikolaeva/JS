function solve() {

    let addBtnElement = document.querySelector('#add');
    addBtnElement.addEventListener('click', onClick);

    function onClick(ev) {

        ev.preventDefault();

        let inputElements = document.getElementsByTagName('input');
        let task = inputElements[0];
        let date = inputElements[1];
        let description = document.getElementsByTagName('textarea')[0];

        if (task.value != '' && date.value != '' && description.value != '') {

            let sections = document.querySelectorAll('.wrapper section');
            let openSection = sections[1];

            let h3Element = document.createElement('h3');
            h3Element.textContent = task.value;
            let firstPElement = document.createElement('p');
            firstPElement.textContent = `Description: ${description.value}`;
            let secondPElement = document.createElement('p');
            secondPElement.textContent = `Due Date: ${date.value}`;

            let newDivElement = document.createElement('div');
            newDivElement.className = "flex";
            let startBtn = document.createElement('button');
            startBtn.className = "green";
            startBtn.textContent = 'Start';
            startBtn.addEventListener('click', onCliskStartBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = "red";
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', onClickDeleteBtn);

            newDivElement.appendChild(startBtn);
            newDivElement.appendChild(deleteBtn);

            let divElement = openSection.children[1];

            let article = document.createElement('article');
            article.appendChild(h3Element);
            article.appendChild(firstPElement);
            article.appendChild(secondPElement);
            article.appendChild(newDivElement);

            divElement.appendChild(article);

            let taskInList = document.querySelectorAll('.wrapper section')[1].children[1];
            taskInList.appendChild(article);
        }
    }

    function onCliskStartBtn(ev) {

        let articleToMove = ev.target.parentNode.parentNode;
        let inProgressElement = document.querySelector('#in-progress');
        inProgressElement.appendChild(articleToMove);
        articleToMove.getElementsByClassName('flex')[0].remove();

        let newDivElement = document.createElement('div');
        newDivElement.className = "flex";

        let deleteBtn = document.createElement('button');
        deleteBtn.className = "red";
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onClickDeleteBtn)

        let finishBtn = document.createElement('button');
        finishBtn.className = "orange";
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', onClickFinishBtn);

        newDivElement.appendChild(deleteBtn);
        newDivElement.appendChild(finishBtn);
        articleToMove.appendChild(newDivElement);
    }

    function onClickDeleteBtn(ev) {
        let articleToMove = ev.target.parentNode.parentNode;
        articleToMove.remove();
    }

    function onClickFinishBtn(ev) {

        let articleToMove = ev.target.parentNode.parentNode;
        articleToMove.getElementsByClassName('flex')[0].remove();

        let completeSection = document.querySelectorAll('.wrapper section')[3].children[1];
        completeSection.appendChild(articleToMove);
    }
}