import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditAvatarPopup(props) {
  const inputUrlAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputUrlAvatar.current.value
    });
  }

  React.useEffect(() =>{
    if (inputUrlAvatar.current.value) {
      inputUrlAvatar.current.value = '';
    }
  }, [props.isOpen])

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name='window_edit-avatar' title='Обновить аватар' buttonText='Сохранить'>
      <label className="popup__field">
        <input ref={inputUrlAvatar} type="url" name="avatar" id="url-avatar" required placeholder="ссылка на картинку" className="popup__input-text popup__input-text_input_url" />
        <span className="popup__input-error url-avatar-error" />
      </label>
    </PopupWithForm>
  )
}