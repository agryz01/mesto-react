function handleEditAvatarClick() {
  document.querySelector('.popup_window_edit-avatar').classList.add('popup_opened'); 
}

function handleEditProfileClick() {
  document.querySelector('.popup_window_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_window_add').classList.add('popup_opened');
}

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div onClick={handleEditAvatarClick} className="profile__avatar" />
        <div className="profile__profile-info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={handleEditProfileClick} type="button" aria-label="редактирование профиля." className="profile__edit-button" />
        <button onClick={handleAddPlaceClick} type="button" aria-label="добавление карточки." className="profile__add-button" />
      </section>
      <section className="list-of-places">
        <ul className="elements">
        </ul>
      </section>
    </main>);
}