import { clubMembers } from "../ClubMembers";


const Home = () => {
  return (
    <>
      <div className='team-details-container'>
        {/* <div className="tbd"> */}
        <div className="club-members">
          <h2>
            Club Members
          </h2>
          <ul>
            {clubMembers.map((member, index) => (
              <li key={index}>
                {/* {member.captain ? '🎖️' : ''} */}
                {/* {member.yearJoined ? `'${member.yearJoined.toString().slice(2, 4)} ` : ''} */}
                {member.name}
                {member.captain ? '🎮' : ''}
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        <div className="team-photo-container">
          {/* <h1>Team</h1> */}
          <img className='team-photo' src='/images/team_photo.png' alt='Team Image' />
        </div>
        <div className="club-members">
          <h2>
            Club Members
          </h2>
          <ul>
            {clubMembers.map((member, index) => (
              <li key={index}>
                {/* {member.captain ? '🎖️' : ''} */}
                {/* {member.yearJoined ? `'${member.yearJoined.toString().slice(2, 4)} ` : ''} */}
                {member.name}
                {member.captain ? '🎮' : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home;