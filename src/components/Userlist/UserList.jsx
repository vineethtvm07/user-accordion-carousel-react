import './userList.css'
import {ArrowBackIos} from '@material-ui/icons';
function List({data, setData}) {

  const deleteHandler = (userId) => {
    let newUser = data.filter((el) => el.id !== userId);
    setData(newUser);
};

  return (
    <div className='container'>
      <div className="user-box">
        <div className="title">
          <h1>User List</h1>
        </div>
        <div className="back-btn">
          <button onClick={(e) => window.location.replace("/")} className='prev-btn'> <ArrowBackIos className='bck-icon'/> Back</button>
        </div>
        <hr />
         <div className="list-box">
        <div className="user-list">
         {data.map((user) => (
          <ul  key={user.id}>
            <li className='list'> 
                 {user.id}.&nbsp; 
                 {user.name} 
                <button className='dlt-btn' onClick={()=> deleteHandler(user.id)}> X </button>
            </li>
          </ul> 
          ))};
        </div>
        </div>
      </div>
    </div>
  )
}

export default List
