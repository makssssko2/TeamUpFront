export default function AdminUsers() {
    return (
        <div className="admin__users users">
            <h2 className="admin__title">Пользователи</h2>
            <section className="admin__section admin-section">
                <h3 className="admin-section___title">Поиск пользователя</h3>
                <div className="admin-section__inputBlock">
                    <input type="text" name="" id="" className="admin-section__input" placeholder="Введите текст..."/>
                    <button type="button" className="admin__button admin__button_active">Найти</button>
                </div>
            </section>
            <section className="admin__section admin-section">
                <h3 className="admin-section___title">Создать пользователя</h3>
                <div className="admin-section__inputBlock">
                    <span className="admin-section__text">Введите имя</span>
                    <input type="text" name="name" className="admin-section__input" placeholder="Введите текст..."/>
                </div>
                <div className="admin-section__inputBlock">
                    <span className="admin-section__text">Введите фамилию</span>
                    <input type="text" name="surname" className="admin-section__input" placeholder="Введите текст..."/>
                </div>
            </section>
            <div className="admin__buttons">
                <button type="button" className="admin__button">Отмена</button>
                <button type="button" className="admin__button admin__button_active">Сохранить</button>
            </div>
        </div>
    );
}
