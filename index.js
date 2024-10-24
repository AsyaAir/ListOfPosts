// Функция создания HTML для поста
    function createPostHTML(post) {
      return `
        <div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    }

    // Функция для добавления поста в контейнер
    function addPostToContainer(container, postHTML) {
      container.innerHTML += postHTML;
    }

    // Получение и отображение постов
    function loadPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((posts) => {
          const container = document.getElementById("postsContainer"); // Контейнер для постов
          
          // Пройдемся по каждому посту и добавим его на страницу
          posts.forEach(post => {
            const postHTML = createPostHTML(post); // Создаем HTML для поста
            addPostToContainer(container, postHTML); // Добавляем пост в контейнер
          });
        })
        .catch((error) => {
          console.error('Ошибка при загрузке постов:', error);
        });
    }

    // Загружаем посты при загрузке страницы
    loadPosts();