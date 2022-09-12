import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isFavourites = card.likes.some(item => item._id === currentUser._id);

    api.toggleCardLikes(isFavourites, card._id).then((newCard) => {
      props.setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  function handleCardDelete(card) {
    api.deletCard(card._id);
    props.setCards((state) => state.filter((item) => item._id !== card._id));
  }

  return (
    <main className="content">
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} />
        <div className="profile__profile-info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button onClick={props.onEditProfile} type="button" aria-label="редактирование профиля." className="profile__edit-button" />
        <button onClick={props.onAddPlace} type="button" aria-label="добавление карточки." className="profile__add-button" />
      </section>
      <section className="list-of-places">
        <ul className="elements">
          {props.cards.map((item) => (<Card onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={props.onCardClick} card={item} key={item._id} />))}
        </ul>
      </section>
    </main>);
}