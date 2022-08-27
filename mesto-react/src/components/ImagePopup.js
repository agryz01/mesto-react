export default function ImagePopup(props) {

  const className = `popup popup_window_viev ${props.card ? 'popup_opened' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container-viev">
        <img src={props.card.link} alt={`картинка "${props.card.name}" в полный размер`} className="popup__image" />
        <button onClick={props.onClose} type="button" className="popup__closing-icon" />
        <h2 className="popup__title-viev">{props.card.name}</h2>
      </div>
    </div>
  )
}