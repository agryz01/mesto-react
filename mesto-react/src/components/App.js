import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      {/* <div className="popup popup_window_edit">
        <form name="profileedit" method="post" noValidate className="popup__container">
          <button type="button" className="popup__closing-icon" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__field">
            <input type="text" name="name" id="name-input" minLength={2} maxLength={40} required placeholder="Как вас зовут?" className="popup__input-text popup__input-text_input_name" />
            <span className="popup__input-error name-input-error" />
          </label>
          <label className="popup__field">
            <input type="text" name="about" id="activity-input" minLength={2} maxLength={200} required placeholder="Чем вы занимаетесь?" className="popup__input-text popup__input-text_input_activity" />
            <span className="popup__input-error activity-input-error" />
          </label>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div> */}
      <div className="popup popup_window_add">
        <form name="placesadd" method="post" noValidate className="popup__container">
          <button type="button" className="popup__closing-icon" />
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__field">
            <input type="text" name="placename" id="place-input" minLength={2} maxLength={30} required placeholder="Название" className="popup__input-text popup__input-text_input_place" />
            <span className="popup__input-error place-input-error" />
          </label>
          <label className="popup__field">
            <input type="url" name="placeurl" id="url-input" required placeholder="ссылка на картинку" className="popup__input-text popup__input-text_input_url" />
            <span className="popup__input-error url-input-error" />
          </label>
          <button type="submit" className="popup__button">Создать</button>
        </form>
      </div>
      <div className="popup popup_window_viev">
        <div className="popup__container-viev">
          <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt className="popup__image" />
          <button type="button" className="popup__closing-icon" />
          <h2 className="popup__title-viev" />
        </div>
      </div>
      <div className="popup popup_window_confirmation">
        <div className="popup__container popup__container_confirmation">
          <button type="button" className="popup__closing-icon" />
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" aria-label="удаление карточки" className="popup__button">Да</button>
        </div>
      </div>
      <div className="popup popup_window_edit-avatar">
        <form name="avatar" method="post" noValidate className="popup__container popup__container_avatar">
          <button type="button" className="popup__closing-icon" />
          <h2 className="popup__title">Обновить аватар</h2>
          <label className="popup__field">
            <input type="url" name="avatar" id="url-avatar" required placeholder="ссылка на картинку" className="popup__input-text popup__input-text_input_url" />
            <span className="popup__input-error url-avatar-error" />
          </label>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
      <template className="template-element" />
    </div >
  );
}

export default App;
