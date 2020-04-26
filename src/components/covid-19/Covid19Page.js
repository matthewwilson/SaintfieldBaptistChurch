import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './Covid19Page.css'

class Covid19Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner backgroundColor="#ff5a34" titleColour="white" title="COVID-19"/>
        <div className="ml-3 mr-3">
          <p>
            After much prayer, research and deliberation the oversight have decided
            to <strong>suspend all of our scheduled church gatherings for the foreseeable future</strong>.
            We understand both the gravity and the solemnity of this decision so let us
            explain our rationale and our plans for the future.
          </p>

          <p>
            In Romans 13 we are called by God to obey the authorities He has placed over us, as His servants.
            As the Covid-19 virus continues to spread across the world, we are seeking to adhere to the guidelines
            given by our government. Particularly applicable to us is the advice concerning the avoidance of all
            unnecessary social contact and large gatherings.
          </p>

          <p>
            While, as believers, we are not to be governed by either panic or politics,
            we are to be ruled by godly wisdom and prudence. Thus, we believe that the
            temporary suspension of all our gatherings is an exercise of both. Furthermore
            it is us, as a church, playing our part, in both suppressing this virus and
            protecting the most vulnerable in our congregation.
          </p>

          <p>
            That said however, we still remain a local church, though we won’t be gathering together.
            Therefore it is important we stay united by praying for one another, communicating with one another
            and serving one another responsibly during the period of this pandemic.
          </p>

          <p>
            Throughout, our Pastor will be preaching messages of encouragement and comfort via
            <a href="/live">Live Webcast each Sunday morning at 11:30am and evening at 6:30pm on our usual SermonAudio feed</a>.
            Additionally we are encouraging the congregation to unite in essential prayer at home each Wednesday night, from 8pm-9pm, to pray
            about this situation. Again this time will begin with a short devotional from our Pastor via Live Webcast.
          </p>

          <p>
            Please also be assured that both the Pastor and the Elders are contactable via phone and email.
            As a leadership, we will do all in our power to shepherd the church through this time. If you find yourself
            in grave difficulty and in need of either spiritual or practical support please get in touch with us.
          </p>

          <p>
            As believers we are urged to pray "for kings, and for all that are in authority; that we may
            lead a quiet and peaceable life in all godliness and honesty." We should
            definitely be doing that, remembering our health workers, social workers, teachers,
            forces of the law and government officials who are on the frontline of this pandemic.
          </p>

          <p>
            Finally, we must encourage ourselves in the Lord. We worship and serve a Sovereign God
            who is in complete control. Therefore we must not be fearful, but faithful. Praying without
            ceasing and watching in all things. For while these are unprecedented times, these are also days
            of great opportunity to share of the hope that lies within us.
          </p>

          <p>
            Yours in Christ,<br/>
            The Elders of Saintfield Baptist Church
          </p>

          <p><a href="/live">To view our live webcast click here.</a></p>
        </div>
      </Page>
    )
  }

}

export default Covid19Page;
