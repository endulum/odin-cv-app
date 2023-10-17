import '@fortawesome/fontawesome-free/js/all.js';

export default function BulletEditor({
  sectionId,
  bulletInfo,
  onEditBullet,
  onAddBullet,
}) {
  return (
    <ul className="bullets">
      {bulletInfo.map((bullet) => (
        <li className="bullet" key={bullet.id}>
          <input
            type="text"
            value={bullet.bulletText}
            onChange={(e) => onEditBullet(sectionId, bullet.id, e.target.value)}
          />

          <button
            type="button"
            className="editor-button button-delete small-button"
            title="Delete This Bullet"
            onClick={() => onEditBullet(sectionId, bullet.id, undefined)}
          >
            <i className="fa-solid fa-trash" />
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          className="editor-button button-add small-button"
          title="Add Bullet"
          onClick={() => onAddBullet(sectionId)}
        >
          <i className="fa-solid fa-circle-plus" />
        </button>
      </li>
    </ul>
  );
}
