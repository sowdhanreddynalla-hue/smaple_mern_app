import './PageStyles.css'

function AdminHome()
{
    let currentuser = JSON.parse(localStorage.getItem("currentuser") || '{}');

    return(
      <div className="page-shell">
        <div className="welcome-box">
          <h1 className="welcome-title">Welcome <span className="welcome-accent">{currentuser?.name || 'Admin'}</span></h1>
          <p className="page-subtitle">Admin dashboard overview</p>
          <div className="info-grid">
            <div className="info-panel">
              <div className="info-label">Employees</div>
              <div className="info-value">24</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Tasks</div>
              <div className="info-value">12</div>
            </div>
            <div className="info-panel">
              <div className="info-label">Status</div>
              <div className="info-value">Active</div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default AdminHome
