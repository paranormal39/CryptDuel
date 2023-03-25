import React from "react";
import saveAs from 'file-saver';
import doc from './GXG.docx'


const onDownload1 = () => {
    saveAs(doc,'GXGwhitepaper.docx');
  };

function About(){
    return (
        <div className="AppContainer">
            <h1>
                Welcome to Project Site
            </h1>
            <p className="AboutContainer">
                <div>
                GamerXGold (GXG) is a competitive gaming token built on the XRP Ledger (XRPL), a fast and energy-efficient blockchain. The use of the XRPL ensures that transactions on the GXG network are processed quickly and with minimal fees, making it an ideal choice for gamers who require instant and low-cost transactions.
                </div>
                <div style={{paddingTop:"50px"}}>
                One of the main aims of GXG is to serve as a competitive gaming token. This means that players can use GXG to participate in tournaments, challenge other players, and win rewards for their skills and achievements. By offering a competitive gaming experience, GXG aims to attract a growing community of gamers who value skill, strategy, and competition.
                </div>
                <div style={{paddingTop:"50px"}}>
                To ensure the stability and exclusivity of the currency, GXG has a limited total supply of 10 billion coins. This limited supply ensures that the value of GXG remains stable and doesn't suffer from inflation due to an unlimited supply. This limited supply also adds to the exclusivity of the currency and makes it more attractive to investors and gamers.
                </div>
                <div style={{paddingTop:"50px"}}>
                To further enhance the exclusivity of GXG, the project has a private Discord channel that is only accessible to members who hold a certain amount of GXG or one of the exclusive NFTs. This private community allows members to connect with like-minded individuals, share insights and information, and participate in exclusive events and opportunities. Members of the private Discord channel also gain access to exclusive games and recommended Twitch channels, providing a unique and tailored gaming experience.
                </div>
                <div style={{paddingTop:"50px"}}>
                Another unique feature of GXG is its monthly raffles, where proceeds from the sales of GXG are donated to charity. These raffles give players the opportunity to earn exclusive NFTs, in-game prizes, or even more GXG. By donating a portion of the proceeds to charity, GXG aims to make a positive impact on the world and give back to those in need.
                </div>
                <div style={{paddingTop:"50px"}}>
                In summary, GamerXGold is a competitive gaming token built on the XRPL, with a limited total supply of 10 billion coins. It features a private Discord channel for members who hold a certain amount of GXG or an exclusive NFT, with exclusive games and recommended Twitch channels. With monthly raffles and charitable donations, GXG offers gamers an exclusive and rewarding gaming experience while making a positive impact on the world.
                </div>
          
            </p>
            <h2 className="AppContainer">
                White Paper v1.2
            </h2>
            <div className="btnDiv">
     <button id="downloadBtn" value="download" onClick={onDownload1}>Download</button>
                </div>
        </div>
    )
}

export default About