import React, { useEffect, useState } from "react";
import "./Body.css";
import { db } from './firebase';
import Header from "./Header";
import SongRow from "./SongRow";

function Body() {

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    
    db.collection("podcasts")
    .orderBy("name", "asc")
    .onSnapshot((snapshot) =>
    setPodcasts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  ;
}, []);
 

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        {/* <img
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-213329-R1247_FEA_Rogen_A.jpg?resize=1800,1200&w=1800"
          alt=""
        /> */}
        <div className="body__infoText">
          <h2>Podcasts</h2>
          <p>Collection of all podcasts.</p>
        </div>
      </div>

      <div className="body__songs">
        {/* <div className="body__icons">
          <PLayCircleFilledIcon
            className="body__shuffle"
          />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div> */}
        {podcasts.length > 1 && podcasts.map(({ id, data }) => (
          <div key={id} className="body__songRow">
            <SongRow
              podcast={data}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
