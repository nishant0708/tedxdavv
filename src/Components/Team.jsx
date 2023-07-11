import React from "react";
import TeamCard from './TeamCard'
import Heading from "./Heading";
import './team.css'
const images = './images/abhishekmishra.png'
export default function Team() {
    

    return (
        <div className="app__team black">

            <Heading sub="MEET OUR" title="Team" />

            <div className="app__team-container">
                
                <h1 className="headtext whitetext">Organizers</h1>
                <div className="team-divisions  team-scroll scroll-smooth" >
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                </div>

                <h1 className="headtext whitetext">HEAD-COORDINATORS</h1>
                <div className="team-divisions team-scroll" >
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                </div>

                <h1 className="headtext whitetext">VOLUNTEERS</h1>
                <div className="team-divisions team-scroll" >
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                    <TeamCard image={images} name="Ella D Verma" />
                </div>
            </div>
        </div>
    )
}