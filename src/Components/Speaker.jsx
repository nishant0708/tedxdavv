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
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            <SpeakerCard 
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            <SpeakerCard 
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            <SpeakerCard 
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            <SpeakerCard 
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            <SpeakerCard 
            image='./images/ella.png'
            name='Ella D Verma' title='Acceptance' />
            </div>
        </div>
    )
}