// 1. Функция создания HTML для поста
function createPostHTML(post) {
  return `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `;
}
// 2. Функция для добавления поста в контейнер
function addPostToContainer(container, postHTML) {
  container.innerHTML += postHTML;
}
// 3. Получение с https://jsonplaceholder.typicode.com/posts и отображение постов на сайте
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json()) // Преобразование ответа в JSON
    .then((posts) => {
      const container = document.getElementById("postsContainer"); // Контейнер для постов
      // Прохождение по каждому посту и добавление их на страницу
      posts.forEach(post => {
        const postHTML = createPostHTML(post); // Создание HTML для поста
        addPostToContainer(container, postHTML); // Добавление поста в контейнер
      });
    })
    .catch((error) => {
      console.error('Error loading posts / Ошибка при загрузке постов:', error);
    });
}
// 4. Загрузка постов при загрузке страницы
loadPosts();