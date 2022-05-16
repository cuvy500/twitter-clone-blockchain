import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";


const Profile = () => {
  

  return (
    <>
    <div className="pageIdentify">Profile</div>
    <img className="profileBanner" src={defaultImgs[1]}></img>
    <div className="pfpContainer">
      <img className="profilePFP" src={defaultImgs[0]}></img>
      <div className="profileName">Juhizzz</div>
      <div className="profileWallet">0x34..123</div>
      <Link to="/settings">
        <div className="profileEdit">Edit profile</div>
      </Link>
      <div className="profileBio">
        Your Average Web3 Mage
      </div>
      <div className="profileTabs">
        <div className="profileTab">
          Your Tweets
        </div>
      </div>
    </div>
    <TweetInFeed profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

