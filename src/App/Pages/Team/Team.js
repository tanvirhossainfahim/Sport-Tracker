import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Team.css';
import Social from '../../Components/Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faFlag, faMars, faFutbol,} from '@fortawesome/free-solid-svg-icons';



function Team(props){
  const { id } = props.match.params;
  const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='+id)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]));
    }, [id]);
    
    const {strYoutube, strFacebook, strInstagram, strTwitter, strTeam, strDescriptionEN, strStadiumThumb, intFormedYear, strTeamBadge, strSport, strCountry, strGender, strTeamFanart3} = team;
    let fa = {
      width : '30px',
    };
    
    const socialData = {
      youtube : strYoutube,
      
      facebook : strFacebook,
      twitter : strTwitter,
      instagram : strInstagram
    }
    return (
        <div style={{ background : '#080c3c', minHeight : '100vh'}}>
          <div className="images">
            <img className="stadium" src={strStadiumThumb} />
            <img className="logo" src={strTeamBadge} />
          </div>
          <Container style={{ color : 'white', padding : '10px' }}>
            <div className="wraper">
              <Row>
                <Col md={6}>
                  <h3>{strTeam}</h3>
                  <ul className='detail'>
                    <li><FontAwesomeIcon style={fa} icon={faMapMarkerAlt}/>  Founded: {intFormedYear}</li>
                    <li><FontAwesomeIcon style={fa} icon={faFlag}/> Country: {strCountry}</li>
                    <li><FontAwesomeIcon style={fa} icon={faFutbol}/> Sport Type: {strSport}</li>
                    <li><FontAwesomeIcon style={fa} icon={faMars}/> Gender: {strGender}</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <img src={strTeamFanart3} style={{ width : '100%', borderRadius: '5px' }}/>
                </Col>
              </Row>
            </div>
            <p style={{ textAlign : 'justify' }}>{strDescriptionEN}</p>
            <Social data={socialData}></Social>
          </Container>
        </div>
    );
}

export default Team;

