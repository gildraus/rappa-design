import styles from "./aboutteam.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <section className="section-container bg-sky-300 text-white">
      <div className="leadership-div">
        <div>
          {" "}
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Leadership
          </p>
        </div>

        <div className="leadership-profile">

          <div className="profile-photo">
            <Image
              src="/Nikola.png"
              width={306}
              height={460}
              alt="Nikola Rapaic photo"
            />
          </div>
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
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Team
        </p>

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
