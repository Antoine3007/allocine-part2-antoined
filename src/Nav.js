// import React from "react";

// class Nav extends React.Component {
//   state = {
//     selectedTab: "tati"
//   };

//   render() {
//     console.log(this.state.selectedTab);
//     return (
//       <div className="nav">
//         <p
//           onClick={() => {
//             //console.log("called");
//             this.setState({ selectedTab: "popularMovies" });
//             axios
//               .get("https://api-allocine.herokuapp.com/api/movies/top_rated")
//               .then(response => {
//                 this.setState({ movies: response.data.results });
//               });
//           }}
//         >
//           {this.props.text}
//         </p>
//       </div>
//     );
//   }
// }
// export default Nav;
