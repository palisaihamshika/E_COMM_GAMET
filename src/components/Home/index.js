import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const onClickShopNOw = () => {
    console.log('clicked')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://thumbs.dreamstime.com/b/portrait-excited-indian-family-holding-shopping-bags-credit-card-over-yellow-studio-background-overjoyed-spouses-using-241565371.jpg"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Fashion is the armor to survive, the reality of every day life.
          </p>
          <Link to="/products">
            <button
              type="button"
              className="shop-now-button"
              onClick={onClickShopNOw}
            >
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/portrait-excited-indian-family-holding-shopping-bags-credit-card-over-yellow-studio-background-overjoyed-spouses-using-241565371.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
