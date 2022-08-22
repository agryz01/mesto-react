export default function PopupWithForm(props) {



  return (
    <div className={`popup popup_type_${props.name}`}>
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
    </div>
  );
}