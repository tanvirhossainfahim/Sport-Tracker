import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import LeagueCard from '../../Components/LeagueCard/LeagueCard';
import './Home.css';

function Home() {
    const [leagues, setLeagues] = useState([]);

    const [init, setInit] = useState('Spanish%20La%20Liga');

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues));
    }, []);

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=' + init)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    }, [init]);

    return (
        <div>
            <div className="bg">
                <div className="image">
                    <img src="https://scgt-img.azureedge.net/media/4135/09_internal_view_of_bowl-sydney_fc_crowd.jpg?anchor=center&mode=crop&width=1920&height=713&quality=85" />
                    <div className="title">
                        Team Tracker
                </div>
                </div>
                <Container>
                    <div className="selectLeague">
                        <select className="form-control" onChange={(e) => {
                            const selectedLeague = e.target.value;
                            setInit(selectedLeague);
                        }}>
                            <option value="Spanish%20La%20Liga">----Select Your League----</option>
                            {
                                leagues.map(league => <option value={league.strLeague}>{league.strLeague}</option>)
                            }
                        </select>
                    </div>
                    <div className="row">
                        {
                            teams.map(team => <LeagueCard info={team}></LeagueCard>)
                        }
                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Home;