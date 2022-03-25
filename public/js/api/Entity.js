/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  static URL = '';
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback) {
    return createRequest({ method: 'GET', url: this.url, data, callback });
  };

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    return createRequest({ method: 'PUT', url: this.url, data, callback });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity) 
   * */
  static remove(data, callback ) {
    return createRequest({ method: 'DELETE', url: this.url, data, callback });
  }
}
