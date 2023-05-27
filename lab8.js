function showDate() {
    let out = document.getElementById('current-date');

    let date_block_ru = document.createElement('div');
    date_block_ru.classList.add('date-block');
    date_block_ru.innerHTML = `Локаль в России: ${(new Date()).toLocaleString('ru-RU')} <br>`;
    out.appendChild(date_block_ru);

    let date_block_da = document.createElement('div');
    date_block_da.classList.add('date-block');
    date_block_da.innerHTML = `Локаль в Дании: ${(new Date()).toLocaleString('da-DK')} <br>`;
    out.appendChild(date_block_da);

    let date_block_en = document.createElement('div');
    date_block_en.classList.add('date-block');
    date_block_en.innerHTML = `Локаль в Англии: ${(new Date()).toLocaleString('en')}`;
    out.appendChild(date_block_en);

    let date_block_et = document.createElement('div');
    date_block_et.classList.add('date-block');
    date_block_et.innerHTML = `Локаль в Эстонии: ${(new Date()).toLocaleString('et')}`;
    out.appendChild(date_block_et);

    let date_block_fr = document.createElement('div');
    date_block_fr.classList.add('date-block');
    date_block_fr.innerHTML = `Локаль во Франции: ${(new Date()).toLocaleString('fr')}`;
    out.appendChild(date_block_fr);

    let date_block_id = document.createElement('div');
    date_block_id.classList.add('date-block');
    date_block_id.innerHTML = `Локаль в Индонезии: ${(new Date()).toLocaleString('id')}`;
    out.appendChild(date_block_id);
}

function showDaysCount() {
    let out = document.getElementById('result');
    let today = new Date();
    let birthday = new Date((document.querySelector('input[type=date]')).value);
    out.innerHTML = `Количество дней с момента рождения: ${Math.floor((today - birthday) / 86400000)}`;
}

function ShowTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(ShowTime, 1000);

