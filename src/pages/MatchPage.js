import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";

import "./MatchPage.scss";
export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  const [yearsPlayedByTeam, setYearsPlayedByTeam] = useState([]);
  useEffect(() => {
    //function passed in useffect is not async
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);

      const teamResponse = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`
      );

      const teamData = await teamResponse.json();
      setYearsPlayedByTeam(teamData.yearsPlayedByTeam);
    };
    fetchMatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        Select Year
        <YearSelector
          yearsPlayedByTeam={yearsPlayedByTeam}
          teamName={teamName}
        />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.length === 0 && <p>Team has not played for {year}.</p>}
        {matches.map((match) => (
          <MatchDetailCard key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
