/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  static URL = '';

  static list(data, callback) {
    createRequest({
      url: this.URL,
      method: 'GET',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(response);
      }
    });
  }


  static create(data, callback) {
    createRequest({
      url: this.URL,
      method: 'PUT',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(response);
      }
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    createRequest({
      url: this.URL,
      method: 'DELETE',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(response);
      }
    });
  }

}
