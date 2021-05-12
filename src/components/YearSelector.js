import { React } from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";
export const YearSelector = ({ teamName, yearsPlayedByTeam }) => {
  {
    /*  
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;
    }
    for (let i = yearsPlayedByTeam.; i >= startYear; i--) {
      years.push(i);
  }*/

    return (
      <ol className="YearSelector">
        {yearsPlayedByTeam.map((year) => (
          <li key={year}>
            <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
          </li>
        ))}
      </ol>
    );
  }
};
