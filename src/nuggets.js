import React from "react";
import Navbar from './NavBar.js'
import Footer from './footer.js'
import Banner from './banner.js'
 
function Nuggets(props) {
  return (
    <>
    <div id="banner" class="jumbotron text-center" style={{height: '200px'}}>
    <Banner/>
   </div>
    <div id="navbar" style={{marginTop: '-30px'}}>
      <Navbar/>
    </div>
    <div className="row" style={{ margin: "40px"}}>
      <div className="col-sm-8">
        <h2 id ='nug'>Nuggets Regular Season Results Since 2001</h2>
          <br />
          </div>
        <div className="col-sm-8">
          <br />
            <div className="table-responsive-sm">
              <table width = '800px'>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Playoffs</th>
                    <th>Points per Game</th>
                    <th>3 Pointers Made</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>2001-2002</td>
                      <td>27</td>
                      <td>55</td>
                      <td>NO</td>
                      <td>92.2</td>
                      <td>423</td>
                    
                  </tr>
                  <tr>
                      <td>2002-2003</td>
                      <td>17</td>
                      <td>65</td>
                      <td>NO</td>
                      <td>84.2</td>
                      <td>229</td>
                  </tr>
                  <tr>
                      <td>2003-2004</td>
                      <td>43</td>
                      <td>39</td>
                      <td>YES</td>
                      <td>97.2</td>
                      <td>331</td>
                  </tr>
                  <tr>
                      <td>2004-2005</td>
                      <td>49</td>
                      <td>33</td>
                      <td>YES</td>
                      <td>99.5</td>
                      <td>320</td>
                  </tr>
                  <tr>
                      <td>2005-2006</td>
                      <td>44</td>
                      <td>38</td>
                      <td>YES</td>
                      <td>100.3</td>
                      <td>350</td>
                  </tr>
                  <tr>
                      <td>2006-2007</td>
                      <td>45</td>
                      <td>37</td>
                      <td>YES</td>
                      <td>105.4</td>
                      <td>484</td>
                  </tr>
                  <tr>
                      <td>2007-2008</td>
                      <td>50</td>
                      <td>32</td>
                      <td>YES</td>
                      <td>110.7</td>
                      <td>569</td>
                  </tr>
                  <tr>
                      <td>2008-2009</td>
                      <td>54</td>
                      <td>28</td>
                      <td>YES</td>
                      <td>6.6</td>
                      <td>548</td>
                  </tr>
                  <tr>
                      <td>2009-2010</td>
                      <td>53</td>
                      <td>29</td>
                      <td>YES</td>
                      <td>106.5</td>
                      <td>544</td>
                  </tr>
                  <tr>
                      <td>2010-2011</td>
                      <td>50</td>
                      <td>32</td>
                      <td>YES</td>
                      <td>8.3</td>
                      <td>662</td>
                  </tr>
                  <tr>
                      <td>2011-2012</td>
                      <td>38</td>
                      <td>28</td>
                      <td>YES</td>
                      <td>104.1</td>
                      <td>435</td>
                  </tr>
                  <tr>
                      <td>2012-2013</td>
                      <td>57</td>
                      <td>25</td>
                      <td>YES</td>
                      <td>106.1</td>
                      <td>521</td>
                  </tr>
                  <tr>
                      <td>2013-2014</td>
                      <td>36</td>
                      <td>46</td>
                      <td>NO</td>
                      <td>104.4</td>
                      <td>702</td>
                  </tr>
                  <tr>
                      <td>2014-2015</td>
                      <td>30</td>
                      <td>52</td>
                      <td>NO</td>
                      <td>101.5</td>
                      <td>660</td>
                  </tr>
                  <tr>
                      <td>2015-2016</td>
                      <td>33</td>
                      <td>49</td>
                      <td>NO</td>
                      <td>101.9</td>
                      <td>656</td>
                  </tr>
                  <tr>
                      <td>2016-2017</td>
                      <td>40</td>
                      <td>42</td>
                      <td>NO</td>
                      <td>111.7</td>
                      <td>870</td>
                  </tr>
                  <tr>
                      <td>2017-2018</td>
                      <td>46</td>
                      <td>36</td>
                      <td>NO</td>
                      <td>110.0</td>
                      <td>940</td>
                  </tr><tr>
                      <td>2018-2019</td>
                      <td>54</td>
                      <td>28</td>
                      <td>YES</td>
                      <td>110.7</td>
                      <td>903</td>
                  </tr>
                  <tr>
                      <td>2019-2020</td>
                      <td>46</td>
                      <td>27</td>
                      <td>YES</td>
                      <td>111.3</td>
                      <td>801</td>
                  </tr>
                  <tr>
                      <td>2020-2021</td>
                      <td>34</td>
                      <td>19</td>
                      <td>TBD</td>
                      <td>115.1</td>
                      <td>694</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </div>
          <div className="col-sm-2" style = {{padding: '50px'}}>
              <div style = {{width: '200%', textAlign: 'center'}}>
                  <h5>Sports Cards</h5>
              <img src = {process.env.PUBLIC_URL + "/assets/jokiccard.jpg"} style= {{width: '100%'}}  alt="Nikola Jokic Rookie Card"/>
              </div>
              <div style ={{width:'275%'}}>
              <p>The Jokic rookie card that is above followed the recent trends of the market. Skyrocketting over the past few years just like all prices have been with sports cards in the recent years!</p>
              <p>This trading card is not just a piece of cardboard though as it is listed on <a href = "https://www.ebay.com/itm/Nikola-Jokic-2015-16-Panini-Immaculate-Logoman-RC-1-1-PSA-7-Denver-Nuggets-C/284236464835?hash=item422dd042c3:g:BeMAAOSwN7ZgYIYx" target = "_blank" rel = "noreferrer"> Ebay </a> for $500,000. This card however may also be a lot more rare than you think. As it is the NBA logoman patch on the card which there is only one in existance. This card is the most rare you can find because it is "One of One", meaning its the only one like it in the whole world.</p>
              <p>While this Jokic is more rare than the Durant from the last page Durant tops Jokic's price by around $250,000!!</p>
              </div>
          </div>
        </div>
        <div id="footer">
      <Footer/>
    </div>
        </>
        
      );
}
 
export default Nuggets;