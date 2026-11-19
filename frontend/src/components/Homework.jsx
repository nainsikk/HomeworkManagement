// Import styling for the homework 
import './Homework.css';

function Homework(){
     return(
          <div className='home-work'>
               <h2>Recent Homework</h2>

               {/* Homework table */}
               <table>
                    <thead>
                         <tr>
                              <th>Subject</th>
                              <th>Assignment</th>
                              <th>Due Date</th>
                              <th>Status</th>
                         </tr>

                         <tbody>
                              {/* First homework record */}
                              <tr>
                                   <td>Mathematics</td>
                                   <td>Algebra Worksheet</td>
                                   <td>10 Nov 2026</td>
                                   <td><span className="pending">Pending</span></td>
                              </tr>

                              {/* Second homework record */}
                              <tr>
                                   <td>Computer Science</td>
                                   <td>Python Assignment</td>
                                   <td>12 Nov 2026</td>
                                   <td><span className="completed">Completed</span></td>
                              </tr>


                              {/* Third homework record */}
                              <tr>
                                   <td>Physics</td>
                                   <td>Numerical Problems</td>
                                   <td>15 Nov 2026</td>
                                   <td><span className="pending">Pending</span></td>
                              </tr>

                         </tbody>
                    </thead>
               </table>

          </div>

          
     );
}
export default Homework;