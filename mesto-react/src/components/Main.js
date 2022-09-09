import React from 'react';
import Avatar from '../images/profile__image.jpg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(Avatar);

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

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
    setUserAvatar(currentUser.avatar);
  }, [currentUser.name, currentUser.about, currentUser.avatar])

  return (
    <main className="content">
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        <div className="profile__profile-info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
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