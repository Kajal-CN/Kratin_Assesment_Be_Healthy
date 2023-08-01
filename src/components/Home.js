import React from 'react';
import oldCoupleImage from '../assets/old_couple_image.png';
import '../styles/home-styles.css'; 

const Home = () => {
  return (
    <div className="container"> 
      <div>
        <div className="name">Welcome to Be_Healthy</div>
      </div>
      <div className="old_couple-image">
        <img className="old_couple_image" src={oldCoupleImage} alt="old_couple_image" />
      </div>
    </div>
  );
};

export default Home;





// import React from 'react';
// import oldCoupleImage from '../assets/old_couple_image.png';
// import '../styles/home-styles.css'; 

// const Home = () => {
//   return (
//     <div className="container">
//     <div className="name">Welcome to Be_Healthy</div>
//     <div className="old_couple-image">
//       <img className="old_couple_image" src={oldCoupleImage} alt="old_couple_image" />
//     </div>
//   </div>
    
//   );
// };

// export default Home;



