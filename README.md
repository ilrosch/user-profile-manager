# Задание: Создание класса для управления профилями пользователей

Определите класс UserProfileManager, который будет содержать следующие свойства и методы:

- **_users_**: массив объектов, каждый из которых представляет пользователя и содержит поля id (уникальный идентификатор), name (имя пользователя), и email (электронная почта).

* **_addUser(userInfo)_**: метод для добавления нового пользователя. userInfo должен быть объектом, который содержит name и email. Метод должен автоматически присваивать уникальный id каждому новому пользователю.

* **_removeUser(userId)_**: метод для удаления пользователя по его id.

* **_updateUser(userId, newInfo)_**: метод для обновления информации о пользователе. newInfo может содержать новые значения для name и/или email.

* **_findUserByName(name)_**: метод для поиска пользователя по имени. Метод должен возвращать массив пользователей, чьи имена частично или полностью совпадают с заданным именем.

* **_getAllUsers()_**: метод, который возвращает массив всех пользователей.

Используйте функцию для генерации уникального id для каждого пользователя.
Убедитесь, что методы корректно обрабатывают добавление, удаление, обновление и поиск пользователей.

```console
const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.findUserByName("Ali")); // Находит Alicia
```
