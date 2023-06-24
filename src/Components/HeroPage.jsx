import React from "react";
import './HeroPage.css'

function HeroPage() {
    return (
        <div className="app__hero">
            <div className="app__hero-logo flex__center">
                <img src='./images/tedx draw (1).png' alt="tedx-logo" className="tedxdraw" />
                <img src="./images/davv-min.png" alt="davv-logo" className="davvdraw" />
            </div>

            <img src="https://i.imgur.com/kKKVr8M.png" alt="ballon" className="ballon" />
            <img src='./images/cloud.png' alt="tedx-logo" className="balloncloud" />
            
            <img src="https://i.imgur.com/kkSsQ9a.png" alt="com-building" className="com-building" />
            <img src="https://i.imgur.com/ud5pNJs.png" alt="Planet" className="planet" />
            
            <img src="./images/evolve.png" alt="evolve" className="evolvelogo" />
            <img src="https://i.imgur.com/1Y26fBs.png" alt="Rnth" className="Rnth" />
            <img src="https://i.imgur.com/EFmjd5I.png" alt="a-block" className="a-block" />
            {/* <img src="https://i.imgur.com/2k6zadm.png" alt="admiin-building" className="admiin-building" /> */}
                    
            <img src="https://assets.codepen.io/721952/cloud1.png" alt="cloud" className="cloud" />
            {/* <img src="https://i.imgur.com/2k6zadm.png" alt="admin-building" className="" /> */}

        </div>
    )
}
export default HeroPage;