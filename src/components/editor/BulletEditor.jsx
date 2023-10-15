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
            className="icon-button delete-bullet"
            title="Delete This Bullet"
            onClick={() => onEditBullet(sectionId, bullet.id, undefined)}
          >
            <span><i className="fa-solid fa-delete-left" /></span>
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          onClick={() => onAddBullet(sectionId)}
        >
          Add Bullet
        </button>
      </li>
    </ul>
  );
}
