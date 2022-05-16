import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import './Settings.css';
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp3.png";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";


const Settings = () => {

  const pfps = [pfp1,pfp2,pfp3,pfp4,pfp5];
  const [selectedPFP, setSelectedPFP] = useState();


  return (
    <>
      <div className="pageIdentify">Settings</div>
      <div className="settingsPage">
        <Input
          label="Name"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
        // onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
        // onChange={(e) => setBio(e.target.value)}
        />

        <div className="pfp">
          Profile Image (Your NFTs)

          <div className="pfpOptions">
            {pfps.map((e, i) => {

              return(
                <>
                  <img
                  src={e}
                  className="pfpOption"
                  >
                  </img>
                </>
              )

            })}

          </div>

        </div>


      </div>
    </>
  );
};

export default Settings;

