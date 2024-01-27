import './bottomBox.scss'
import { topDealUsers } from '../../data'

const ButtomBox = () => {
  return (
    <div>
      <div className="bottomBox">
      <div className="bottomBox-header">
        <h1>Last Orders</h1>
        <div className="sortby">
          <p>See All</p>
        </div>
      </div>
      <div className='topDealsLabels'>
        <div className='topDealsLabels__names__name'><p>Name</p></div>
        <div className='topDealsLabels__names'><p>Date</p></div>
        <div className='topDealsLabels__names'><p>Amount</p></div>
        <div className='topDealsLabels__names'><p>Status</p></div>
        <div className='topDealsLabels__names__invoice'><p>Invoice</p></div>
      </div>
      <div className='list'>
        {topDealUsers.map(user =>(
            <div className='listBox'>
              <div className='listItem' key={user.id}>
                <div className="user">
                    <img src={user.img} alt="avatar" />
                    <span className="username">{user.username}</span>
                </div>
                <span className="date">{user.Date}</span>
                <span className="amount">{user.amount}</span>
                <span className={user.status == 'Paid' ? "status-green": "status"}>
                  {user.status}</span>
            <span className="invoice">{user.invoice} {user.view}</span>
            </div>
            </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ButtomBox
