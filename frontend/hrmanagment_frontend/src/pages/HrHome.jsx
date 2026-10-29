import './PageStyles.css'

function HrHome(){
    let currentuser = JSON.parse(localStorage.getItem("currentuser") || '{}');

     return(
      <div className="page-shell">
        <div className="welcome-box">
          <h1 className="welcome-title">Welcome <span className="welcome-accent">{currentuser?.name || 'HR'}</span></h1>
          <p className="page-subtitle">Your HR dashboard is ready.</p>
          <div className="info-grid">
            <div className="info-panel">
              <div className="info-label">Employees</div>
              <div className="info-value">28</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Open Tasks</div>
              <div className="info-value">10</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Reports</div>
              <div className="info-value">06</div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default HrHome
