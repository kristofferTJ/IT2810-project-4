import React, { useEffect, useState } from 'react';
// import './Reviews.css';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { IRestaurant } from '../../backend/models/Restaurant';
// import {useParams} from ''
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../store/rootReducer';
// import thunk from 'redux-thunk';
// import { saveComment } from '../store/ducks/commentDuck';
// interface IParams {
//     name: string;
//   }

// function Comments() {
//     const middlewares = [thunk];

//     const store = createStore(rootReducer, applyMiddleware(...middlewares));

//     const dispatch = useDispatch();
//     const [restaurant, setRestaurant] = useState<IRestaurant[]>();

//     // Gets the name of the restaurant from the URL
//     const params: IParams = useParams()  
    
//     //Gets the restaurant with the correct name
//     useEffect(() => {
//         const getRestaurant = async() => {
//           const api_URL = (`http://localhost:8000/api/restaurant/filter/?skip=0&name=${params.name}`);
//           await axios.get(api_URL).then(response => {setRestaurant(response.data)})
//         }
//         getRestaurant();
//     }, [])
  
    
//     // Sends the comment to redux
//     function commentSave() {
//         restaurant?.map(restaurant => dispatch(saveComment({comment, restaurant})))
//     }

//     let comment: string = "";


//     return (
//         <div className="section">
//             <div className="container">
//                 <div id="reviewContainer" className="z-depth-1">
//                     <h5 className="comment">Comments:</h5>
//                     <div className="section">
//                         {restaurant?.map((restaurant: IRestaurant) => (restaurant.comments.map((comment: string) => (
//                        <Comment
//                        commentObject={comment}
//                        ></Comment>
//                             ))))} 
//                     </div>
//                 </div>
//                 <div>
//                     <form className="col s12">
//                         <div className="row">
//                             <div className="input-field col s12">
//                             <textarea id="textarea1" className="materialize-textarea" onChange={e => comment=(e.target.value)}></textarea>
//                             <label>Add comment</label>
//                             <a href="" className="btn cyan lighten-2" onClick={() => dispatch(commentSave())}>Submit</a>
//                             </div>
//                         </div>
//                     </form> 
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Comments;
