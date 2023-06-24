import React from "react";
import SpeakerCard from "./SpeakerCard";
import './speaker.css'
import Heading from './Heading'

export default function Speaker() {
    return (
        <div className="app__speakers">

            <Heading title='Speakers' sub='meet our' />


            <div className="app__speaker-cards flex__center">

            <SpeakerCard 
            image='./images/abhishekmishra.png'
            name='Abhishek Mishra' title='CTO and Co-founder at Pisarv Technology' />

            <SpeakerCard 
            image='./images/raginimakkar.png'
            name='Dr. Ragini Makkhar' title='Member of UNESCO & Winner of India’s
            Got Talent Season 5' />
            <SpeakerCard 
            image='./images/akshay.png'
            name='Akshay Singh' title='The youngest deputy collector of the MP
            government' />
            
            <SpeakerCard 
            image='./images/bhaskar.png'
            name='Bhaskar Indrakanti' title='Entrepreneur & Social Engineer' />
            <SpeakerCard 
            image='./images/elladverma.png'
            name="Ella D' Verma" title='Miss International Trans Queen' />
            
            <SpeakerCard 
            image='./images/vineet.png'
            name='Dr. Vineet Agrawal' title='Author, History and Mythology Expert            ' />
            <SpeakerCard 
            image='./images/abhijit.png'
            name='Abhijit Chavda' title='Geopolitics, History & Science Expert.,
            Youtuber' />
            <SpeakerCard 
            image='./images/aryan.png'
            name='Aryan Vijayvergiya' title='Student at IIPS
            Founder at Mission Vasundhara & Satat
            Productions' />
            </div>
        </div>
    )
}