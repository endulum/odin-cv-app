import '@fortawesome/fontawesome-free/js/all.js';

export default function BulletEditor({
  jobId,
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
            onChange={(e) => onEditBullet(jobId, bullet.id, e.target.value)}
          />

          <button
            type="button"
            className="icon-button delete-bullet"
            title="Delete This Bullet"
            onClick={() => onEditBullet(jobId, bullet.id, undefined)}
          >
            <span><i className="fa-solid fa-delete-left" /></span>
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          onClick={() => onAddBullet(jobId)}
        >
          Add Bullet
        </button>
      </li>
    </ul>
  );
}
