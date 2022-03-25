/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  static URL = '/account'; 

  /**
   * Получает информацию о счёте
   * */
  static get(id, callback){
    let data = {papers: `${id}`}

    return createRequest({ method: 'GET', url: this.url, data: `${data}`, callback });
  }
}

// return createRequest({ method: 'GET', url: this.url, data: data, callback: callback });
// `${Account.URL}`