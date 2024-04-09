import "./Header_section1.css";

const Header_section1 = () => {
  return (
    <>
      <div className="header-desc-section1">
        <div className="header-desc-section1-box1">
          <img src="../../../src/assets/images/map.png" alt="" />
        </div>
        <div className="header-desc-section1-box2">
          <div className="card">
            <div className="city-name">Jaipur Weather Report</div>
            <ul className="days">
              <li>
                <div className="today">
                  20 <span className="degree">℃</span>{" "}
                </div>
                <div className="icons sunny" />
              </li>
              <li>
                <span className="day-name">Temperature</span>
                <div className="tempeture">
                  20<span className="degree">℃</span>{" "}
                </div>
                <div className="icons rainy" />
              </li>
              <li>
                <span className="day-name">Humidity</span>
                <div className="tempeture">
                  24 <span className="degree">%</span>{" "}
                </div>
                <div className="icons cloudy" />
              </li>
              <li>
                <span className="day-name">Wind Speed</span>
                <div className="tempeture">
                  15 <span className="degree">km/hr</span>{" "}
                </div>
                <div className="icons snowy" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-list-main-section">
        <ul className="card-list">
          <li className="card-container">
            <div className="weather-card weather-card--cloudy">
              <div className="day">Friday</div>
              <div className="date">
                February <span>10</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>45</span>
                </div>
                /
                <div className="low">
                  Low: <span>39</span>
                </div>
              </div>
              <div className="features">Mostly cloudy, with rain</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--cloudy weather-card--sunny">
              <div className="day">Saturday</div>
              <div className="date">
                February <span>11</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>55</span>
                </div>
                /
                <div className="low">
                  Low: <span>47</span>
                </div>
              </div>
              <div className="features">Partly cloudy</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--sunny">
              <div className="day">Saturday</div>
              <div className="date">
                February <span>12</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>55</span>
                </div>
                /
                <div className="low">
                  Low: <span>47</span>
                </div>
              </div>
              <div className="features">Clear skies, sun</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--cloudy">
              <div className="day">Sunday</div>
              <div className="date">
                February <span>13</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>52</span>
                </div>
                /
                <div className="low">
                  Low: <span>43</span>
                </div>
              </div>
              <div className="features">Mostly cloudy</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--sunny">
              <div className="day">Monday</div>
              <div className="date">
                February <span>14</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>45</span>
                </div>
                /
                <div className="low">
                  Low: <span>39</span>
                </div>
              </div>
              <div className="features">Mostly sunny</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--cloudy weather-card--sunny">
              <div className="day">Tuesday</div>
              <div className="date">
                February <span>15</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>55</span>
                </div>
                /
                <div className="low">
                  Low: <span>47</span>
                </div>
              </div>
              <div className="features">Partly cloudy</div>
            </div>
          </li>
          <li className="card-container">
            <div className="weather-card weather-card--cloudy weather-card--sunny">
              <div className="day">Wednesday</div>
              <div className="date">
                February <span>16</span>
              </div>
              <div className="temps">
                <div className="high">
                  High: <span>55</span>
                </div>
                /
                <div className="low">
                  Low: <span>47</span>
                </div>
              </div>
              <div className="features">Partly cloudy</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header_section1;
