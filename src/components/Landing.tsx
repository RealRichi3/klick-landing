import logo from "../assets/Group 36.png";
import mobile from "../assets/Group 39.png";

const Landing: React.FC = () => {
  return (
    <main className="md:mx-10 mx-3 text-white text-base">
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} alt="klick logo" className="md:h-24 md:w-52 h-10" />
        </div>

        <p className="md:text-3xl font-medium">info@klick.africa</p>
      </header>
      <section className="grid lg:grid-cols-2 gap-10 pt-5">
        <div className="lg:leading-[66px] md:leading-[50px] font-medium md:text-[44px] font-[poppins]">
          At Klick, customer satisfaction is our top priority. We are committed
          to resolving any complaints you may have about your order to the best
          of our ability.
        </div>
        <div className="image">
          <img src={mobile} alt="phone" />
        </div>
      </section>

      <div className="md:text-2xl mb-5 font-semibold">
        <p className="mb-6 font-normal">
          To register a complaint, please complete the form below
        </p>
        <form action="">
          <div className="w-full mb-4">
            <label className="block">Enter your name</label>
            <input type="text" className="inputs" id="text" />
          </div>
          <div className="w-full mb-4">
            <label className="block">Klick Order Number</label>
            <input type="text" className="inputs" id="text" />
          </div>
          <div className="w-full mb-4">
            <label className="block">Details Of Complaint</label>
            <input type="text" id="text" className="inputs" />
          </div>
          <div className="w-full mb-4">
            <label className="block">
              Upload Supporting Documents (Optional)
            </label>
            <input
              type="file"
              id="text"
              className="bg-transparent rounded border-dashed border border-white md:p-4 w-4/6 max-sm:w-full p-2 mt-2 md:mt-4"
            />
          </div>

          {/* <button className="p-3 border border-red-500 my-5">Submit</button> */}
        </form>
      </div>
    </main>
  );
};

export default Landing;

{
  /* <div>
        <p>To register a complaint, please complete the form below</p>
        <div>
          <p>Enter your name</p>
          <input
            type="text"
            className="inputs"
            id="text"
          />
        </div>
        <div>
          <p>Klick Order Number</p>
          <input
            type="text"
            className="inputs"
            id="text"
          />
        </div>
        <div>
          <p>Details Of Complaint</p>
          <input
            type="text"
            id="text"
            className="inputs"
          />
        </div>
        <div>
          <p>Upload Supporting Documents (Optional)</p>
          <input
            type="file"
            id="text"
            className="bg-transparent rounded border-dashed border border-white p-4"
          />
        </div>
        <button>Submit Complaint</button>
      </div> */
}
{
  /* <div className="flex flex-col text-2xl mt-2">
        <p>To register a complaint, please complete the form below</p>

        <div className="">
          <p>Enter your name</p>
          <input type="text" />
        </div>
        <div className="">
          <p>Klick Order Number</p>
          <input type="text" />
        </div>
        <div className="">
          <p>Details of Complaint</p>
          <input type="text" placeholder="who is this" className="text-black bg-transparent border border-white rounded-md" />
        </div>
        <div className="upload-doc">
          <p>Upload Supporting Documents (Optional)</p>
          <input type="file" placeholder="who is this" className="text-black" />
        </div>

        <button className="bg-yellow-500 text-black">Submit Complaint</button>
      </div> */
}
