import "./WeStand.css";
import drvYear from "../../assets/goodNoodle.jpg";

function WeStand() {
  return (
    <div className="WeStand">
      <div className="container">
        <div className="left">
          <h2>What We Belive In</h2>
          <p>
            We the people at Roger's Rewards belive that it is important to
            drive safe.This is just going to be some placeholder txt while
            someone figures out a good way to make it sound like we belive in
            idk maybe put somehting about how to become driviver of the year.
          </p>
          <div className="driverOfTheYear">
            <div className="box">
              <div>
                <img src={drvYear} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>The goodNoodle Award</h3>
                <p>Wow ... much nice</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>We offer many oppertunities to earn points</h3>
                <p>Get solid rewards for driving safe.</p>
                <button>View Rewards</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="pass">
              BUY THE BATTLE PASS TO UNLOCK AWESOME REWARDS!
            </h4>
            <p className="timer">12 Hours Left!</p>
            <p className="offers">Veiw all bonuses</p>
          </div>
          <form className="input-wrap">
            <label>Card number</label>
            <input type="text" />

            <div className="CardInfo">
              <div className="input-wrap">
                <label>Experation Date</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>CCV</label>
                <input type="text" />
              </div>
            </div>
            <button>Buy Now </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default WeStand;