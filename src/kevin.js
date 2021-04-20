import React from "react";
import { KDData } from '/Users/kadehurst/web2/kadetheman.github.io/src/data.js'
function Kevin(props) {
  var tabledata = [];


    return (
      <div className="row" style={{ margin: "40px"}}>
        <div className="col-sm-8">
          <h2>Career Statistics</h2>
            <br />
            </div>
          <div className="col-sm-8">
            <br />
              <div className="table-responsive-sm">
                <table width = '900px'>
                  <thead>
                    <tr>
                      <th id = 'yr'>Year</th>
                      <th>Points per Game</th>
                      <th>Assists per Game</th>
                      <th>Rebounds per Game</th>
                      <th>Steals per Game</th>
                      <th>Blocks per Game</th>
                    </tr>
                  </thead>
                  <tbody>
                  {KDData.forEach(element => {
                    

            tabledata.push(<tr>
                <td>{element.year}</td>
                <td>{element.ppg}</td>
                <td>{element.apg}</td>
                <td>{element.rpg}</td>
                <td>{element.spg}</td>
                <td>{element.bpg}</td>
            </tr>)
        
    })
  }
                    {tabledata}
                  </tbody>
                </table>
              </div>
              <br />
            </div>
            <div className="col-sm-2" style = {{padding: '50px'}}> 
                <div style = {{width: '200%'}}>
                <h5>Sports Cards </h5>
                </div>
                <img src = {process.env.PUBLIC_URL + "/assets/kdcard.jpg"} style={{"width":"200%"}} alt="Kevin Durant Rookie Card"/>
                <div style = {{width: '275%'}}>
                <p>Trading card collecting is one of the fastest growing hobbies in the world right now. I am one of the millions of people getting back into the hobby recently.</p>
                <p>The trading card hobby is not just a hobby any more, as people have managed to quit their jobs to make money off the hobby full time.</p>
                <p>The Kevin Durant rookie card above is numbered to only 99 copies in the world. This is the most expensive Kevin Durant card for sale at the moment.</p>
                <p>One of the 99 cards in existance is currently listed on<a href="https://www.ebay.com/itm/2007-Exquisite-Collection-Kevin-Durant-ROOKIE-RC-PATCH-AUTO-99-94-BGS-9-PMJS/164408248951?hash=item26477eca77:g:6SsAAOSwR9Bfc2le" target="_blank" rel="noreferrer"> Ebay</a> for $750,00!!</p>
                </div>
            </div>
          </div>
          
        );
}
 
export default Kevin;