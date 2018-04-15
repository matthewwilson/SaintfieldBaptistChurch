import React from 'react';
import $ from 'jquery';
import BibleVerse from '../utils/BibleVerse'

class WhatWeBelieveSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed:this.getCollapsed(),
      useShowMoreFunctionality:this.getCollapsed()
    }
  }

  getCollapsed = () => {
    return ($(window).width() < 992)
  }

  toggleReadMore = (event) => {
    this.setState({
      collapsed:this.state.collapsed ? false : true
    })
  }

  render() {

    const buttonContents = this.state.collapsed ? "Show More" : "Show Less";
    let readButton;

    if(this.state.useShowMoreFunctionality) {
      readButton = (
        <button className="btn btn-link history-section-button history-section-button-bold" onClick={this.toggleReadMore}>{buttonContents}</button>
      )
    }

    let extraContents;

    if(!this.state.collapsed) {
      extraContents = (
        <div>
          <h4>The Devil</h4>
          <p>We believe in the reality and personality of the devil. We believe in his creation by God, his subjection to God, his evil activity and final doom. (<BibleVerse reference="EPH.6.11-12" text="Ephesians 6:11-12"/>, <BibleVerse reference="1PE.5.8" text="1 Peter 5:8"/>, <BibleVerse reference="REV.20.10" text="Revelation 20:10"/>).</p>

          <h4>Man</h4>
          <p>We believe in the creation of man in the image of God. The entrance of sin through Adam’s disobedience. The fallen and totally deprived state of all men. Their subjection to God’s wrath and condemnation. Their responsibility to repent and believe the Gospel. (<BibleVerse reference="GEN.1.26-27" text="Genesis 1:26-27"/>; <BibleVerse reference="ROM.3.22-23" text="Romans 3:22-23"/>; <BibleVerse reference="ROM.5.12" text="Romans 5:12"/>, <BibleVerse reference="EPH.2.1-3" text="Ephesians 2:1-3"/>, <BibleVerse reference="EPH.2.12" text="12"/>).</p>

          <h4>Salvation</h4>
          <p>We believe in the need for “repentance toward God and faith toward our Lord Jesus Christ”. We believe that salvation is by grace, through faith alone, in Christ alone. We believe that Christ died for every man, and that there is a responsibility placed on an individual to either accept or reject the message of the Gospel. We believe in the justification of the sinner by God’s grace and the eternal security of the believer. (<BibleVerse reference="ACT.20.21" text="Acts 20:21"/>; <BibleVerse reference="ROM.5.1-2" text="Romans 5:1-2"/>, <BibleVerse reference="EPH.2.8-10" text="Ephesians 2:8-10"/>; <BibleVerse reference="HEB.2.9" text="Hebrews 2:9"/>; <BibleVerse reference="1JN.2.2" text="1 John 2:2"/>, <BibleVerse reference="1PE.1.4-5" text="1 Peter 1:4-5"/>)</p>

          <h4>The Church</h4>
          <p>We believe the local church to be company of baptised believers gathered under the headship of Christ for worship, fellowship, instruction and evangelism. (<BibleVerse reference="ACT.11.26" text="Acts 11:26"/>; <BibleVerse reference="ACT.14.23" text="Acts 14:23"/>; <BibleVerse reference="ACT.14.27" text="Acts 14:27"/>; <BibleVerse reference="ACT.20.17" text="20:17"/>, <BibleVerse reference="ACT.20.28-32" text="28-32"/>; <BibleVerse reference="COL.1.18" text="Colossians 1:18"/>) We believe in the ordinances of Baptism and the Lord’s supper.</p>
          <p>Baptism: Being the immersion of believers on profession of their faith in the Lord Jesus Christ, and as a symbol of their identification with Him in His death, burial and resurrection. The public demonstration of a personal transformation. (<BibleVerse reference="MAT.28.18-20" text="Matthew 28:18-20"/>, <BibleVerse reference="ACT.2.41" text="Acts 2:41"/>, <BibleVerse reference="ACT.8.12" text="8:12"/>)</p>
          <p>The Lord’s Supper: being the weekly remembrance, for believers, of the atoning death of the Lord Jesus Christ until He comes and a renewal of commitment to Him. The purely symbolic nature of the emblems of bread and wine. (<BibleVerse reference="LUK.22.14-20" text="Luke 22:14-20"/>; <BibleVerse reference="ACT.2.42" text="Acts 2:42"/>; <BibleVerse reference="ACT.20.7" text="Acts 20:7"/>; <BibleVerse reference="1CO.11.17-30" text="1 Corinthians 11:17-30"/>)</p>
          <p>
            We believe in the autonomy of the local church. (<BibleVerse reference="COL.1.18" text="Colossians 1:18"/>; <BibleVerse reference="2CO.8.1-5" text="2 Corinthians 8:1-5"/>,<BibleVerse reference="2CO.8.19" text="19"/>, <BibleVerse reference="2CO.8.23" text="23"/>)<br/>
            The offices of elder and deacon (<BibleVerse reference="1TI.3.1-13" text="1 Timothy 3:1-13"/>, <BibleVerse reference="TIT.1.6-9" text="Titus 1:6-9"/>.)<br/>
            The gifts of an Evangelist and Pastor-Teacher (<BibleVerse reference="EPH.4.11" text="Ephesians 4:11"/>; <BibleVerse reference="1TI.5.17" text="1 Timothy 5:17"/>). <br/>
            The priesthood of all believers and their unity in the Body of Christ. (<BibleVerse reference="1CO.12.12-30" text="1 Corinthians 12:12-30"/>, <BibleVerse reference="1PE.2.5" text="1 Peter 2:5"/>,<BibleVerse reference="1PE.2.9" text="9"/>; <BibleVerse reference="REV.5.9" text="Revelation 5:9"/>,<BibleVerse reference="REV.5.10" text="10"/>).<br/>
            The separation of Church and State.<br/>
          </p>

          <h4>The Future State</h4>
          <p>We believe in the unconditional immortality of the Soul. The resurrection of the body. The eternal joy in Heaven of the believer. The conscious eternal punishment in Hell of those who die without Christ. (<BibleVerse reference="MAT.25.46" text="Matthew 25:46"/>; <BibleVerse reference="JOH.5.28" text="John 5:28"/>, <BibleVerse reference="JOH.5.29" text="29"/>, <BibleVerse reference="JOH.11.25-26" text="11:25-26"/>; <BibleVerse reference="REV.20.5-6" text="Revelation 20:5-6"/>, <BibleVerse reference="REV.20.12-13" text="12-13"/>).</p>

          <h4>The Return of Christ</h4>
          <p>We believe in the literal, personal, visible, imminent, premillennial, and pre-tribulational return of the Lord Jesus Christ. All believers will be caught up to be with the Lord prior to the seven years of tribulation. We believe at the end of the tribulation Christ will return with His saints to establish His literal Kingdom, on the earth, for 1000 years. (<BibleVerse reference="1TH.4.13-18" text="1 Thessalonians 4:13-18"/>; <BibleVerse reference="TIT.2.13" text="Titus 2:13"/>; <BibleVerse reference="1TH.1.10" text="1 Thessalonians 1:10"/>; <BibleVerse reference="REV.3.10" text="Revelation 3:10"/>; <BibleVerse reference="ZEC.14.4-11" text="Zechariah 14:4-11"/>; <BibleVerse reference="REV.19.11-16" text="Revelation 19:11-16"/>, <BibleVerse reference="REV.20.1-6" text="20:1-6"/>).</p>

          <h4>Christian Behaviour and Discipline</h4>
          <p>We believe it is the responsibility of all believers to obey and serve the Lord and to live self-controlled, upright and godly lives. The duty of each church member to exercise godly discipline in a loving and caring fashion. (<BibleVerse reference="2TI.3.1-5" text="2 Timothy 3:1-5"/>; <BibleVerse reference="ROM.12.1-2" text="Romans 12:1-2"/>, <BibleVerse reference="2JN.1.9-11" text="2 John 1:9-11"/>;)</p>
        </div>
      )
    }

    return (
      <div>
        <h2>WHAT WE BELIEVE</h2>
        <h4>The Scriptures</h4>
        <p>We believe in the verbal inspiration, total inerrancy and infallibility of the Holy Scriptures in their entirety. These being God breathed, we believe the bible to be solely-sufficient and the final authority in all matters of faith, doctrine and practice. (<BibleVerse reference="1TH.2.13" text="1 Thessalonians 2:13"/>, <BibleVerse reference="2TI.3.16" text="2 Timothy 3:16"/>)</p>

        <h4>The Godhead</h4>
        <p>We believe in one God, eternally existing in three persons, the Holy Trinity. That being: Father, Son and Holy Spirit who are, coequal, co-eternal, sovereign and active in creation, providence and redemption. (<BibleVerse reference="DEU.6.4" text="Deuteronomy 6:4"/>; <BibleVerse reference="2CO.13.14" text="2 Corinthians 13:14"/>). We believe that God alone created the entire universe in six literal, twenty-four-hour days (<BibleVerse reference="GEN.1" text="Genesis 1"/>, <BibleVerse reference="EXO.20.11" text="Exodus 20:11"/>)</p>

        <h4>The Lord Jesus Christ</h4>
        <p>We believe the Lord Jesus Christ to be the eternal Son of God. We believe in His essential deity and perfect humanity and the only mediator between God and men. We believe in His virgin birth, Sinless life and sacrificial death on the cross as the only substitute for sinners. His burial, bodily resurrection and ascension to Heaven. His High Priestly ministry and personal return. (<BibleVerse reference="JHN.1.1-2" text="John 1:1-2"/>, <BibleVerse reference="JHN.14" text="14"/>; <BibleVerse reference="LUK.1.35" text="Luke 1:35"/>; <BibleVerse reference="ISA.9.6" text="Isaiah 9:6"/>; <BibleVerse reference="ISA.7.14" text="7:14"/>; <BibleVerse reference="PHP.2.5-8" text="Philippians 2:5-8"/>; <BibleVerse reference="GAL.4.4-5" text="Galatians 4:4-5"/>, <BibleVerse reference="ROM.3.24-25" text="Romans 3:24-25"/>)</p>

        <h4>The Holy Spirit</h4>
        <p>We believe in the work of the Holy Spirit in reproving the world of sin, of righteousness, and of judgment to come. His work in regenerating the sinner, and subsequent indwelling of the believer, sealing, sanctifying and empowering them to live in a Christ-like manner. (<BibleVerse reference="JOH.16.8-11" text="John 16:8-11"/>; <BibleVerse reference="2CO.3.6" text="2 Corinthians 3:6"/>; <BibleVerse reference="ROM.8.9" text="Romans 8:9"/>; <BibleVerse reference="EPH.1.13-14" text="Ephesians 1:13-14"/>) We believe that the sign gifts of the Holy Spirit (eg: speaking in tongues, gifts of healing, gifts of prophecy) have ceased in this age. (<BibleVerse reference="1CO.13.8" text="1 Corinthians 13:8"/>).</p>


        {extraContents}


        <div className="float-left">
            {readButton}
        </div>

      </div>
    )
  }
}

export default WhatWeBelieveSection;
