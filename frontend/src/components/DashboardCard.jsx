import './DashboardCard.css';
function DashboardCard(){
     return(
          <div className='dashboard-card'>
          <div className='card'>
               <h3>Total Courses</h3>
               <h2>6</h2>

          </div>
          <div className='card'>
               <h3>Pending Homework</h3>
               <h2>4</h2>

          </div>

          <div className="card">
               <h3>Completed</h3>
               <h2>12</h2>
          </div>

          <div className="card">
               <h3>Upcoming Deadlines</h3>
               <h2>3</h2>
          </div>


     </div>


     );
     
}
export default DashboardCard;