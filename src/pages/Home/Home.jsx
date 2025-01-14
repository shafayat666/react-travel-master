import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-3 pl-44 mt-48">
        <div className="space-y-5">
          <h1 className="text-5xl space-y-5">Cox&apos;s Bazar</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus dignissimos repudiandae! Quidem, ratione esse! Omnis dignissimos nisi ratione, accusantium voluptatem tempore, rerum fugit explicabo, similique quod adipisci commodi enim?</p>
          <button className="btn btn-warning">Booking</button>
        </div>
        <div className="col-span-2">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
