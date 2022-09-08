import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInformation(),
      api.getCards()
    ])
      .then(([userData, cardData]) => {
        setCards(cardData);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }, [])

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cadr) {
    setIsImagePopupOpen(true);
    setSelectedCard(cadr);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
          <Header />
          <Main onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name='window_edit' title='Редактировать профиль' buttonText='Сохранить'>
            <label className="popup__field">
              <input type="text" name="name" id="name-input" minLength={2} maxLength={40} required placeholder="Как вас зовут?" className="popup__input-text popup__input-text_input_name" />
              <span className="popup__input-error name-input-error" />
            </label>
            <label className="popup__field">
              <input type="text" name="about" id="activity-input" minLength={2} maxLength={200} required placeholder="Чем вы занимаетесь?" className="popup__input-text popup__input-text_input_activity" />
              <span className="popup__input-error activity-input-error" />
            </label>
          </PopupWithForm>
          <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name='window_add' title='Новое место' buttonText='Создать'>
            <label className="popup__field">
              <input type="text" name="placename" id="place-input" minLength={2} maxLength={30} required placeholder="Название" className="popup__input-text popup__input-text_input_place" />
              <span className="popup__input-error place-input-error" />
            </label>
            <label className="popup__field">
              <input type="url" name="placeurl" id="url-input" required placeholder="ссылка на картинку" className="popup__input-text popup__input-text_input_url" />
              <span className="popup__input-error url-input-error" />
            </label>
          </PopupWithForm>
          <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name='window_edit-avatar' title='Обновить аватар' buttonText='Сохранить'>
            <label className="popup__field">
              <input type="url" name="avatar" id="url-avatar" required placeholder="ссылка на картинку" className="popup__input-text popup__input-text_input_url" />
              <span className="popup__input-error url-avatar-error" />
            </label>
          </PopupWithForm>
          <PopupWithForm name='window_confirmation' title='Вы уверены?' buttonText='Да' />
          <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />
        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
