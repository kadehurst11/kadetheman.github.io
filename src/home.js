import React from "react"
 
function Home(props) {
  return (
    <div className="row" style={{margin: "50px"}}>
      <div className="col-sm-4">
        <h2 id='me'>About Me</h2>
        <div id="profileImg">
          <img src={ process.env.PUBLIC_URL + "/assets/kade.jpg"} style={{"width":"100%"}} alt="Profile pic"/>
        </div>
        <div style ={{width:'100%'}}>
        <p>I am a student at <a href="http://www.coloradomesa.edu" target="_blank" rel="noreferrer">Colorado Mesa University (CMU)</a>. I am a Junior studying to get a Computer Science degree.</p>
        <p>I first started coding when I was a Sophomore in high school at Grand Valley High School. (GVHS) From the time i began coding I have loved it and although it is very challenging it is also very rewarding.</p>
        <p>I also have a serious love for the game of basketball and is one of my favorite hobbies I have. From actually going to play to watching the NBA it is one of my favorite things to do. My favorite team is the Denver Nuggets with my favorite player being Kevin Durant.
        </p>
        </div>
        <div id="nuggets">
          <img src={ process.env.PUBLIC_URL + "/assets/nuggets.jpg"} style={{"width":"100%"}} alt="Nuggets Logo"/>
        </div>
        <hr className="d-sm-none" />
      </div>
      <div className="col-sm-8">
        <h2></h2>
        <h5>Current Nuggets Schedule (Remainder of 2020-21 Regular Season)</h5>
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Home/Away</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 12, 2020</td>
              <td>Golden State Warriors</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>April 14, 2020</td>
              <td>Miami Heat</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>April 16, 2020</td>
              <td>Houston Rockets</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>April 19, 2020</td>
              <td>Memphis Grizzlies</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>April 21, 2020</td>
              <td> Portland Trail Blazers</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>April 23, 2020</td>
              <td>Golden State Warriors</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>April 24, 2020</td>
              <td>Houston Rockets</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>April 26, 2020</td>
              <td> Memphis Grizzlies</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>April 28, 2020</td>
              <td> New Orleans Pelicans</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>April 29, 2020</td>
              <td>Toronto Raptors</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>May 1, 2020</td>
              <td>Los Angeles Clippers</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 3, 2020</td>
              <td>Los Angeles Lakers</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 5, 2020</td>
              <td>New York Knicks</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>May 7, 2020</td>
              <td>Utah Jazz</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 8, 2021</td>
              <td>Brooklyn Nets</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>May 11, 2020</td>
              <td>Charlotte Hornets</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 13, 2020</td>
              <td>Minnesota Timberwolves</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 14, 2020</td>
              <td>Detroit Pistons</td>
              <td>Away</td>
            </tr>
            <tr>
              <td>May 16, 2020</td>
              <td>Portland Trail Blazers</td>
              <td>Away</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>Kevin Durant</h2>
        <div><img src="/assets/kevin1.jpg" width="100%" alt="Honda Shadoow" /></div>
        <p>Kevin Durant went to the University of Texas in Austin, Texas (UT). He played 1 year at UT until entering the 2007 NBA Draft where he was drafted with the second overall pick by the Seatlle Supersonics.</p>
        <p> The Supresonics no longer being a franchise turned into the Oklahoma City Thunder where he played from 2008 - 2016. During his time with the Thunder he was selcted to the All-NBA First Team 5 times from 2010 - 2014 where in 2012 he won the NBA's Most Valuable Player (MVP) award. </p>
        <p>Kevin Durant then went to sign with the Golden State Warriors in 2016. He played there for 3 years winning two championships in 2016 and 2017 while also winning 2 Finals MVP's during those championship runs.</p>
        <p>During the 2019 NBA Finals Kevin Durant unfrotantely tore his Achillies forcing him to sit out the 2019-2020 NBA Season. He now plays on the Brooklyn Nets and currently hold the first seed in the Eastern Conference.</p>
        <br />
      </div>
    </div>
  );
}
 
export default Home;