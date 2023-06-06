import React, {Component, Fragment} from 'react'
import Spinner from '../layout/Spinner'
import { Link, useLocation } from 'react-router-dom';


// const User = ({getUser, user}) => {
    
//     const username = useParams('login');
//     console.log(username);

//     useEffect(() => {
//         getUser(username),
//         []
//     });

//     return (
//         <div>
//             <h1>{user.login}</h1>
//         </div>
//     )
// }
// 
// export default User

export class User extends Component {
    componentDidMount() {
        
    }

  render() {
    return (
      <div>
        <h1>Hello</h1>


        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
        </Fragment>
      </div>

      
    )
  }
}

export default User
