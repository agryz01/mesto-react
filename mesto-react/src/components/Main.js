import React from 'react';
import Avatar from '../images/profile__image.jpg';
import { api } from '../utils/Api';
import Card from './Card';

export default function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(Avatar);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInformation(),
      api.getCards()
    ])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }, [])

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
          {cards.map((item) => (<Card onCardClick={props.onCardClick} card={item} key={item._id} />))}
        </ul>
      </section>
    </main>);
}