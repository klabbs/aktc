import './TimetablePage.css';
// import TimetableTable from "../components/TimetableTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { useClasses } from "../../classes/hooks";
// import { useBatches } from "../hooks";

const TimetablePage = () => {
  useDocumentTitle("Timetable | AKTC");
  const { classes, loading, error } = useClasses();
  
  //BUILDWEEK - CALENDAR
    const buildWeek = (classes) => {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

        return days.map((day) => ({
            day,
            classes: classes
            .filter((item) => {
                return (
                new Date(item.dateTime).toLocaleDateString("en-US", {
                    weekday: "short",
                }) === day
                );
            })
            .map((item) => ({
                id: item._id,
                title: item.title,
                room: item.room,
                time: new Date(item.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                }),
            })),
        }));
    };
    const week = buildWeek(classes);
  return (
    <>
    <main className="main">

        <div className="topbar">

            <h3>Student Timetable</h3>

            <div className="top-actions">
                <i className="fa-regular fa-bell"></i>

                <button className="download-btn">
                    Download Schedule
                </button>
            </div>

        </div>

        

        <div className="week-header">

            <div>MON<br/><strong>23</strong></div>
            <div>TUE<br/><strong>24</strong></div>
            <div>WED<br/><strong>25</strong></div>
            <div>THU<br/><strong>26</strong></div>
            <div>FRI<br/><strong>27</strong></div>

        </div>

    
        <div className="calendar">
            {week.map((day) => (
                <div className="day" key={day.day}>
                    {day.classes.map((lesson) => (
                        <div className="className-card purple" key={lesson.id}>
                        <small>{lesson.time}</small>
                        <h4>{lesson.title}</h4>
                        <p>Room {lesson.room}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>

        <div className="calendar">

            <div className="day">

                <div className="className-card purple">
                    <small>09:00 - 10:30</small>
                    <h4>Advanced UX Design</h4>
                </div>

                <div className="className-card violet">
                    <small>14:00 - 16:00</small>
                    <h4>Interaction Theory</h4>
                </div>

            </div>

            <div className="day">

                <div className="className-card red">
                    <small>10:00 - 11:00</small>
                    <h4>Staff Academic Sync</h4>
                </div>

                <div className="className-card blue">
                    <small>14:00 - 15:30</small>
                    <h4>Modern Web Tech</h4>
                </div>

            </div>

            <div className="day">

                <div className="className-card yellow">
                    <small>09:00 - 11:00</small>
                    <h4>Visual Research</h4>
                </div>

            </div>

            <div className="day">

                <div className="className-card purple">
                    <small>09:00 - 10:30</small>
                    <h4>Advanced UX Design</h4>
                </div>

                <div className="className-card green">
                    <small>15:00 - 16:30</small>
                    <h4>Student Mentorship</h4>
                </div>

            </div>

            <div className="day">

                <div className="className-card violet">
                    <small>09:00 - 11:00</small>
                    <h4>Interaction Theory</h4>
                </div>

            </div>

        </div>

        

        <div className="stats-grid">

            <div className="stat-card">
                <h4>Weekly Load</h4>
                <h2>18.5 Hours</h2>

                <div className="progress">
                    <div className="fill"></div>
                </div>
            </div>

            <div className="stat-card">
                <h4>Upcoming classNamees</h4>
                <p>Next: Visual Research in 2h 15m</p>
            </div>

            <div className="stat-card">
                <h4>Active Lab</h4>
                <p>Lab 402-B is open</p>

                <button>
                    View Lab Schedule
                </button>
            </div>

        </div>

    </main>

    </>
  );
};

export default TimetablePage