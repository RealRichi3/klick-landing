import logo from "../assets/Group 36.png";

const Landing: React.FC = () => {
  return (
    <main className="mx-10">
      <header className="flex justify-between">
        <div>
          <img src={logo} alt="klick logo" />
        </div>

        <p>info@klick.africa</p>
      </header>
    </main>
  );
};

export default Landing;
