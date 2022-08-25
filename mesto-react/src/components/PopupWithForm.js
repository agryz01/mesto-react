export default function PopupWithForm(props) {

  return (
    <div className={`popup popup_${props.name}`}>
      <form name={props.name} method="post" noValidate className="popup__container">
        <button type="button" className="popup__closing-icon" />
        <h2 className="popup__title">{props.title}</h2>
        <>{props.children}</>
      </form>
    </div>
  );
}