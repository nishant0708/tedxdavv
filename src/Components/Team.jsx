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
                    <TeamCard image={"./images/head_photos/Anuj_Jaiswal.jpg"} name="Anuj Jaiswal" />
                    <TeamCard image={"./images/head_photos/Deepak_dangi.jpg"} name="Deepak dangi" />
                    <TeamCard image={"./images/head_photos/PRATHAM_Jaiswal.jpg"} name="PRATHAM Jaiswal" />
                    <TeamCard image={"./images/head_photos/Rachita_Dashore.jpg"} name="Rachita Dashore" />
                    <TeamCard image={"./images/head_photos/Renuka_Khatwani.jpg"} name="Renuka Khatwani" />
                    <TeamCard image={"./images/head_photos/Ritu_Choudhary.jpg"} name="Ritu Choudhary" />
                    <TeamCard image={"./images/head_photos/Surbhi_bhasker.jpg"} name="Surbhi bhasker" />
                    <TeamCard image={"./images/head_photos/Tejaswini_Agrawal.jpg"} name="Tejaswini Agrawal" />
                    <TeamCard image={"./images/head_photos/Uday_Chouhan.jpeg"} name="Uday Chouhan" />
                </div>

                <h1 className="headtext whitetext">VOLUNTEERS</h1>
                <div className="team-divisions team-scroll" >
                    <TeamCard image={"./images/vol_photos/Akshita_Pidiha.jpg"} name="Akshita Pidiha" />
                    <TeamCard image={"./images/vol_photos/Komal_Goyal.jpg"} name="Komal Goyal" />
                    <TeamCard image={"./images/vol_photos/Jay_Patidar.jpg"} name="Jay Patidar" />
                    <TeamCard image={"./images/vol_photos/Anushka_chouhan.jpg"} name="Anushka chouhan" />
                    <TeamCard image={"./images/vol_photos/Anushka_panse.jpg"} name="Anushka panse" />
                    <TeamCard image={"./images/vol_photos/Deeshank_Batra.jpg"} name="Deeshank Batra" />
                    <TeamCard image={"./images/vol_photos/DHAWAL_MORE.jpg"} name="DHAWAL MORE" />
                    <TeamCard image={"./images/vol_photos/Gaurav_Nagar.jpg"} name="Gaurav Nagar" />
                    <TeamCard image={"./images/vol_photos/Hitaishi_Jain.jpeg"} name="Hitaishi Jain" />
                    <TeamCard image={"./images/vol_photos/Kanishk_Tiwari.jpg"} name="Kanishk Tiwari" />
                    <TeamCard image={"./images/vol_photos/AMAN_Upadhyay.jpg"} name="AMAN Upadhyay" />
                    <TeamCard image={"./images/vol_photos/MANAS_BHANDARI.jpg"} name="MANAS BHANDARI" />
                    <TeamCard image={"./images/vol_photos/Anshul_Sharma.jpg"} name="Anshul Sharma" />
                    <TeamCard image={"./images/vol_photos/Mohammed_Attar.jpg"} name="Mohammed Attar" />
                    <TeamCard image={"./images/vol_photos/Navkar_bhandari.jpg"} name="Navkar bhandari" />
                    <TeamCard image={"./images/vol_photos/Nishka_Haryani.jpeg"} name="Nishka Haryani" />
                    <TeamCard image={"./images/vol_photos/PRASUN_MALTARE.jpg"} name="PRASUN MALTARE" />
                    <TeamCard image={"./images/vol_photos/Prerana_Patidar.jpg"} name="Prerana Patidar" />
                    <TeamCard image={"./images/vol_photos/Rashi_Pandey.jpg"} name="Rashi Pandey" />
                    <TeamCard image={"./images/vol_photos/Reet_Oberoi.jpg"} name="Reet Oberoi" />
                    <TeamCard image={"./images/vol_photos/Sahil_Lalwani.jpeg"} name="Sahil Lalwani" />
                    <TeamCard image={"./images/vol_photos/Shreya_Maheshwari.jpg"} name="Shreya Maheshwari" />
                    <TeamCard image={"./images/vol_photos/Soumya_Kare.jpg"} name="Soumya Kare" />
                    <TeamCard image={"./images/vol_photos/Swayam_sanghvi.png"} name="Swayam sanghvi" />
                    <TeamCard image={"./images/vol_photos/Tanmay_lavania.jpg"} name="Tanmay lavania" />
                    <TeamCard image={"./images/vol_photos/Utkarsh_Goyal.jpg"} name="Utkarsh Goyal" />
                    <TeamCard image={"./images/vol_photos/Vinayak_Gavariya.jpg"} name="Vinayak Gavariya" />
                    <TeamCard image={"./images/vol_photos/Yuvika_Saxena.jpg"} name="Yuvika Saxena" />
                </div>
            </div>
        </div>
    )
}