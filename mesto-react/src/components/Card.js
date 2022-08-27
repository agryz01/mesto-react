export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li onClick={handleClick} className="element">
      <div style={{ backgroundImage: `url(${props.card.link})` }} className="element__image" />
      <div className="element__group">
        <button type="button" aria-label="открытие окна подтверждения удаление карточки" className="element__delet-icon" />
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__favourites-container">
          <button type="button" aria-label="добавление в избранное." className="element__favourites" />
          <span className="element__namber-of-favourites">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}