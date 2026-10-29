import './PageStyles.css'

function EmpHome(){
    let currentuser = JSON.parse(localStorage.getItem("currentuser") || '{}');

    return(
      <div className="page-shell">
        <div className="welcome-box">
          <h1 className="welcome-title">Welcome <span className="welcome-accent">{currentuser?.name || 'Employee'}</span></h1>
          <p className="page-subtitle">Your employee dashboard is ready.</p>
          <div className="info-grid">
            <div className="info-panel">
              <div className="info-label">Tasks</div>
              <div className="info-value">5</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Leaves</div>
              <div className="info-value">2</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Status</div>
              <div className="info-value">Online</div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default EmpHome
