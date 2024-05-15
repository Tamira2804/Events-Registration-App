# Event Registration Web Application

Це веб-додаток, що дозволяє користувачам реєструватися на події.

## Інструкції щодо запуску

### Фронтенд

Для запуску фронтенду цього веб-додатку потрібно виконати наступні кроки:

1. Клонування репозиторію
   Спочатку склонуйте репозиторій на ваш комп'ютер:
   bash
   git clone <URL репозиторію>

2. Встановлення залежностей
   Перейдіть у папку з фронтендом проекту та встановіть всі необхідні залежності за допомогою npm або yarn:
   cd event-registration-app/frontend
   npm install

   або

   cd event-registration-app/frontend
   yarn install

3. Запуск локального сервера
   Після встановлення залежностей ви можете запустити локальний сервер фронтенду для роботи з додатком:

npm start

або

yarn start

### Бекенд

Для запуску бекенду цього веб-додатку, вам також потрібно виконати додаткові кроки:

1. Переконайтеся, що у вас встановлено Node.js та MongoDB.

2. Перейдіть у папку з бекендом проекту.
   cd event-registration-app/backend

3. Встановіть залежності за допомогою npm.
   npm install

4. Запустіть сервер бекенду.
   npm start

## Додаткові відомості

### Функціонал

Веб-додаток має наступний функціонал:

- Реєстрація користувачів на події.
- Перегляд списку учасників кожної події.
- Можливість оновлення даних події.

### Використані технології

- Фронтенд: React.js, styled-components, React Router
- Бекенд: Node.js, Express.js, MongoDB
- Інше: Axios для здійснення запитів на сервер, інтеграція з базою даних MongoDB.

### Автор

Цей проект був створений у рамках навчання та підвищення навичок у розробці веб-додатків.
