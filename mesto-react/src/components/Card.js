export default function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li onClick={handleClick} className="element">
      <div style={{ backgroundImage: `url(${card.link})` }} className="element__image" />
      <div className="element__group">
        <button type="button" aria-label="открытие окна подтверждения удаление карточки" className="element__delet-icon" />
        <h2 className="element__title">{card.name}</h2>
        <div className="element__favourites-container">
          <button type="button" aria-label="добавление в избранное." className="element__favourites" />
          <span className="element__namber-of-favourites">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}