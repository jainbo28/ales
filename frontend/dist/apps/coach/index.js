
let btn = document.getElementById('add-task');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let typeTrening = document.getElementById('typeTrening');

btn.addEventListener('click', function() {
    // Создаем объект с данными тренера из формы
    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        typeTrening: typeTrening.value
    };

    // Отправляем запрос на сервер для получения idClient на основе выбранной тренировки
    fetch('/client/getIdByTrainingType', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ typeTrening: typeTrening.value }) // Отправляем на сервер тип тренировки
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(clientData) {
            // Если клиент найден
            if (clientData.idClient) {
                // Добавляем idClient в данные тренера
                data.idClient = clientData.idClient;

                // Отправляем данные тренера на сервер для добавления в таблицу coach
                fetch('/coach/add', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data) {
                        enableDisableInputs(false);

                        // Очищаем все поля ввода
                        firstName.value = '';
                        lastName.value = '';
                        email.value = '';
                        typeTrening.value = '';

                        // Устанавливаем фокус на первое поле ввода
                        firstName.focus();

                        // Выводим сообщение об успешном добавлении тренера
                        alert('Тренер успешно добавлен');

                        console.log(data);
                    })
                    .catch(function(err) {
                        enableDisableInputs(false);

                        // Выводим сообщение об ошибке
                        alert('Произошла ошибка, попробуйте позже');

                        console.log(err);
                    });
            } else {
                // Если клиент с указанным типом тренировки не найден
                alert('Клиент с указанным типом тренировки не найден');
                enableDisableInputs(false);
            }
        })
        .catch(function(err) {
            enableDisableInputs(false);

            // Выводим сообщение об ошибке
            alert('Произошла ошибка при поиске клиента, попробуйте позже');

            console.log(err);
        });

    enableDisableInputs(true);
});

function enableDisableInputs(value) {
    btn.disabled = value;
    firstName.disabled = value;
    lastName.disabled = value;
    email.disabled = value;
    typeTrening.disabled = value;
}

let arr = [1,2,3,4,5];