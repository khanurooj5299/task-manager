import "./Count.css";

export default function Count({ count }) {
  return (
    <div className="d-flex count-container align-items-center">
      <div className="d-flex flex-column">
        Add Count:
        <div className="count-box mt-2">
          <svg viewBox="0 0 15 15">
            <text x="3" y="13">
              {count.addCount}
            </text>
          </svg>
        </div>
      </div>
      <div className="d-flex flex-column">
        Update Count:
        <div className="count-box mt-2">
          <svg viewBox="0 0 15 15">
            <text x="3" y="13">
              {count.updateCount}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
