export default function AdminResponses() {
    return (
        <div className="admin__users users">
            <h2 className="admin__title">Отклики</h2>
            <div className="admin__buttons">
                <button type="button" className="admin__button">Отмена</button>
                <button type="button" className="admin__button admin__button_active">Сохранить</button>
            </div>
        </div>
    );
}