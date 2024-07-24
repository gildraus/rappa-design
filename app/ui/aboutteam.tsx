import styles from "./aboutteam.module.css";
export default function Page() {
  return (
    <section>
      <div className="leadership-div">
        <h1>Leadership</h1>
        <div className="leadership-profile">
          <img alt="leader-profile-photo" />
          <div className="leadership-details">
            <h3>Nikola RAPAIC</h3>
            <p>
              some long text about Nikola Rapaic, his history, details about
              personal life etc
            </p>
          </div>
        </div>
      </div>
      <div className="team-div">
        <h1>Team</h1>
        <div className="team-member-profile-div">
          <div className="team-member-profile">
            <img alt="team-member-profile-photo1" />
            <h3>Tamara SIMOVIC</h3>
            <p>
              some long text about Tamara Simovic, his history, details about
              personal life etc
            </p>
          </div>
          <div className="team-member-profile">
            <img alt="team-member-profile-photo1" />
            <h3>Tamara SIMOVIC</h3>
            <p>
              some long text about Tamara Simovic, his history, details about
              personal life etc
            </p>
          </div>
          <div className="team-member-profile">
            <img alt="team-member-profile-photo1" />
            <h3>Tamara SIMOVIC</h3>
            <p>
              some long text about Tamara Simovic, his history, details about
              personal life etc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
