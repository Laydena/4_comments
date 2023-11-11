const feedbackList = document.getElementById("output-list");

const inputName = document.getElementById("input_name");
const outputName = document.querySelector(".output_name");

const inputFeedback = document.getElementById("input_feedback");
const outputFeedback = document.querySelector(".output_feedback");

const inputLink = document.getElementById("input_link");

const radioInput = document.getElementsByName("show_name");

const addButton = document.getElementById("add_feedback");

const addButton = document.getElementById("add_feedback");

//Массив с рандомными картинками
let randomPictures = [
    "/assets/avatar1.jpg",
    "/assets/avatar2.jpg",
    "/assets/avatar3.jpg",
    "/assets/avatar4.jpg"
]


//приводим имя к нужному формату
function formatName(name) {
    let nameLowerCase = name.toLowerCase();
    let newName = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
    return newName.replace(/ +/g, '').trim();
}

//фильтр спама
function checkSpam(feedback) {
    return feedback
        .replace(/viagra/gi, "***")
        .replace(/XXX/gi, "***");
}

//Выбор рандомной картинки из массива
function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * randomPictures.length);
    return randomPictures[randomIndex];
}


function makeFeedback() {
    //Создаю div-контейнер для отзыва
    const newField = document.createElement("div");
    newField.classList.add("feedback_field");
    feedbackList.append(newField);

    //Создаю возможность добавления картинки
    const urlValue = inputLink.value || getRandomAvatar();
    const newAvatar = new Image(100, 200);
    newAvatar.classList.add("output_avatar");
    newAvatar.src = urlValue;
    newField.append(newAvatar);
    inputLink.value = "";

    const showName = radioInput[0].checked;



    //Создаю возможность добавления имени пользователя
    const nameValue = inputName.value ? formatName(inputName.value) : "Username";
    const newUsername = document.createElement("p");
    newUsername.classList.add("output_name");
    newUsername.textContent = showName ? nameValue : "Username";
    newField.append(newUsername);
    inputName.value = "";


    // const nameValue = inputName.value ? formatName(inputName.value) : "Username";
    // const newUsername = document.createElement("p");
    // newUsername.classList.add("output_name");
    // newUsername.textContent = nameValue;
    // newField.append(newUsername);
    // inputName.value = "";

    //Создаю возможность добавления комментария
    const feedbackValue = inputFeedback.value ? checkSpam(inputFeedback.value) : "Сообщение не введено";
    const newFeedback = document.createElement("p");
    newFeedback.classList.add("output_feedback");
    newFeedback.textContent = feedbackValue;
    newField.append(newFeedback);
    inputFeedback.value = "";


    //чекаем время
    const data = new Date();
    const now = data.toLocaleString()
    // Вывод времени 
    const newDate = document.createElement("p");
    newDate.classList.add("output_date");
    newDate.textContent = now;
    newField.append(newDate);
}

addButton.addEventListener("click", makeFeedback);




// const feedbackList = document.getElementById('output-list');

// const inputName = document.getElementById('input_name');
// const outputName = document.querySelector('.output_name');

// const inputFeedback = document.getElementById('input_feedback');
// const outputFeedback = document.querySelector('.output_feedback');

// const inputLink = document.getElementById('input_link');


// const addButton = document.getElementById('add_feedback');

// function makeFeedback() {
//     //Создаю div-контейнер для отзыва
//     const newField = document.createElement('div');
//     newField.classList.add('feedback_field');
//     feedbackList.append(newField);

//     //Создаю возможность добавления картинки
//     const urlValue = inputLink.value;
//     const newAvatar = new Image(100, 200);
//     newAvatar.classList.add('output_avatar');
//     newAvatar.src = urlValue;
//     newField.append(newAvatar);
//     inputLink.value = '';

//     //Создаю возможность добавления имени пользователя
//     const nameValue = inputName.value;
//     let nameLowerCase = nameValue.toLowerCase();
//     let bigFirstLetter = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
//     let newName = bigFirstLetter.replace(/ +/g, '').trim();
//     const newUsername = document.createElement('p');
//     newUsername.classList.add('output_name');
//     newUsername.textContent = newName;
//     newField.append(newUsername);
//     inputName.value = '';

//     //Создаю возможность добавления комментария
//     const feedbackValue = inputFeedback.value;
//     let censFeedback = feedbackValue.replace(/viagra/gi, "***").replace(/XXX/gi, "***");  //фильтр
//     const newFeedback = document.createElement('p');
//     newFeedback.classList.add('output_feedback');
//     newFeedback.textContent = censFeedback;
//     newField.append(newFeedback);
//     inputFeedback.value = '';
// };

// addButton.addEventListener("click", makeFeedback);
