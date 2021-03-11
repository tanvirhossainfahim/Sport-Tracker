import React from 'react';
import { Card } from 'react-bootstrap';
import './LeagueCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LeagueCard(props){
  const {idTeam, strTeam, strSport, strTeamBadge} = props.info;
    return (
        <div className="col-md-4" style={{ marginBottom : '30px' }}>
          <Card style={{ width: '100%', textAlign: 'center', paddingTop : '60px' }}>
            <Card.Img variant="top" src={strTeamBadge} style={{ width: '40%',margin: '0 auto'}}/>
            <Card.Body>
              <Card.Title style={{ marginTop : '20px'}}>{strTeam}</Card.Title>
              <Card.Text>
                Sport Type : {strSport}
              </Card.Text>
              
             
             <a href={'/team/' + idTeam} className="btn btn-info">
             Explore <FontAwesomeIcon icon={faArrowRight}/></a>
              
            </Card.Body>
          </Card>
        </div>
    );
}

export default LeagueCard;


  
  

