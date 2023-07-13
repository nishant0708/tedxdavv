import React from "react";
import TeamCard from './TeamCard'
import Heading from "./Heading";
import './team.css'
const images = './images/abhishekmishra.png'

const team_head_Data = [
    { image: "./images/head_photos/Anuj_Jaiswal.jpg", name: "Anuj Jaiswal" },
    { image: "./images/head_photos/Deepak_dangi.jpg", name: "Deepak dangi" },
    { image: "./images/head_photos/PRATHAM_Jaiswal.jpg", name: "PRATHAM Jaiswal" },
    { image: "./images/head_photos/Rachita_Dashore.jpg", name: "Rachita Dashore" },
    { image: "./images/head_photos/Renuka_Khatwani.jpg", name: "Renuka Khatwani" },
    { image: "./images/head_photos/Ritu_Choudhary.jpg", name: "Ritu Choudhary" },
    { image: "./images/head_photos/Surbhi_bhasker.jpg", name: "Surbhi bhasker" },
    { image: "./images/head_photos/Tejaswini_Agrawal.jpg", name: "Tejaswini Agrawal" },
    { image: "./images/head_photos/Uday_Chouhan.jpeg", name: "Uday Chouhan" }
  ];

const team_vol_Data = [
    { image: "./images/vol_photos/Akshita_Pidiha.jpg", name: "Akshita Pidiha" },
    { image: "./images/vol_photos/Komal_Goyal.jpg", name: "Komal Goyal" },
    { image: "./images/vol_photos/Jay_Patidar.jpg", name: "Jay Patidar" },
    { image: "./images/vol_photos/Anushka_chouhan.jpg", name: "Anushka chouhan" },
    { image: "./images/vol_photos/Anushka_panse.jpg", name: "Anushka panse" },
    { image: "./images/vol_photos/Deeshank_Batra.jpg", name: "Deeshank Batra" },
    { image: "./images/vol_photos/DHAWAL_MORE.jpg", name: "DHAWAL MORE" },
    { image: "./images/vol_photos/Gaurav_Nagar.jpg", name: "Gaurav Nagar" },
    { image: "./images/vol_photos/Hitaishi_Jain.jpeg", name: "Hitaishi Jain" },
    { image: "./images/vol_photos/Kanishk_Tiwari.jpg", name: "Kanishk Tiwari" },
    { image: "./images/vol_photos/AMAN_Upadhyay.jpg", name: "AMAN Upadhyay" },
    { image: "./images/vol_photos/MANAS_BHANDARI.jpg", name: "MANAS BHANDARI" },
    { image: "./images/vol_photos/Anshul_Sharma.jpg", name: "Anshul Sharma" },
    { image: "./images/vol_photos/Mohammed_Attar.jpg", name: "Mohammed Attar" },
    { image: "./images/vol_photos/Navkar_bhandari.jpg", name: "Navkar bhandari" },
    { image: "./images/vol_photos/Nishka_Haryani.jpeg", name: "Nishka Haryani" },
    { image: "./images/vol_photos/PRASUN_MALTARE.jpg", name: "PRASUN MALTARE" },
    { image: "./images/vol_photos/Prerana_Patidar.jpg", name: "Prerana Patidar" },
    { image: "./images/vol_photos/Rashi_Pandey.jpg", name: "Rashi Pandey" },
    { image: "./images/vol_photos/Reet_Oberoi.jpg", name: "Reet Oberoi" },
    { image: "./images/vol_photos/Sahil_Lalwani.jpeg", name: "Sahil Lalwani" },
    { image: "./images/vol_photos/Shreya_Maheshwari.jpg", name: "Shreya Maheshwari" },
    { image: "./images/vol_photos/Soumya_Kare.jpg", name: "Soumya Kare" },
    { image: "./images/vol_photos/Swayam_sanghvi.png", name: "Swayam sanghvi" },
    { image: "./images/vol_photos/Tanmay_lavania.jpg", name: "Tanmay lavania" },
    { image: "./images/vol_photos/Utkarsh_Goyal.jpg", name: "Utkarsh Goyal" },
    { image: "./images/vol_photos/Vinayak_Gavariya.jpg", name: "Vinayak Gavariya" },
    { image: "./images/vol_photos/Yuvika_Saxena.jpg", name: "Yuvika Saxena" }
  ];






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

                    {team_head_Data.map((member, index) => (
                            <TeamCard key={index} image={member.image} name={member.name} />
                        ))}
                </div>

                <h1 className="headtext whitetext">VOLUNTEERS</h1>
                <div className="team-divisions team-scroll" >

                    {team_vol_Data.map((member, index) => (
                        <TeamCard key={index} image={member.image} name={member.name} />
                    ))}

                </div>
            </div>
        </div>
    )
}