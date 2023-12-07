import logo from "../assets/Group 36.png";
import mobile from "../assets/Group 39.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL as string;

const Landing: React.FC = () => {
    const [form, setForm] = React.useState({
        name: "",
        orderNumber: "",
        details: "",
        file: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setForm((prevForm: unknown ) => ({ ...(prevForm as any), file: selectedFile }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("orderNumber", form.orderNumber);
            formData.append("complaint", form.details); // Assuming "details" is your complaint field
            formData.append("image", form.file); // Assuming "file" is your file field


            // Make API request
            const response = await axios.post(API_URL + "/upload", formData);
            console.log(response.data)

            toast.success("Complaint submitted successfully!")
            // Refresh the page (you may want to replace this with a more sophisticated solution)
            // window.location.reload();
            // Clear the form state
            setForm({
                name: "",
                orderNumber: "",
                details: "",
                file: "",
            });
        } catch (error) {
            console.error(error)
            toast.error("Failed to submit complaint. Please try again.");
        }
    };

    return (
        <main className="md:px-10 px-3 text-white text-base 2xl:px-20">
            <header className="flex justify-between items-center">
                <div>
                    <img
                        src={logo}
                        alt="klick logo"
                        className="md:h-24 md:w-52 h-10 2xl:h-60 2xl:w-[470px]"
                    />
                </div>
                <a href="mailto:info@klick.africa">
                    <p className="md:text-3xl font-medium 2xl:text-6xl hover:text-[#fedd00] hover:underline duration-500">
                        info@klick.africa
                    </p>
                </a>
            </header>
            <section className="grid lg:grid-cols-2 gap-4 pt-5">
                <div className="md:leading-[50px] font-medium md:text-[44px] font-[poppins] sm:text-[30px] sm:leading-[40px] 2xl:leading-[120px] 2xl:text-[105px] xl:text-[62px] xl:leading-[66px]">
                    At Klick, customer satisfaction is our top priority. We are committed
                    to resolving any complaints you may have about your order to the best
                    of our ability.
                </div>
                <div className="image w-full">
                    <img src={mobile} alt="phone" className="w-full" />
                </div>
            </section>

            <div className="md:text-2xl mb-5 font-semibold 2xl:text-[40px] mt-10 lg:mt-20 2xl:mt-20">
                <p className="mb-6 font-normal 2xl:text-4xl 2xl:mb-20">
                    To register a complaint, please complete the form below
                </p>
                <form onSubmit={handleSubmit} className="">
                    <div className="w-full mb-4 2xl:mb-10">
                        <div>
                            <label htmlFor="name">Enter your name</label>
                            <span className="text-[#EB270B] ml-2">*</span>
                        </div>
                        <input
                            type="text"
                            className="inputs"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full mb-4 2xl:mb-10">
                        <div>
                            <label htmlFor="orderNumber">Klick Order Number</label>
                            <span className="text-[#EB270B] ml-2">*</span>
                        </div>
                        <input
                            type="text"
                            className="inputs"
                            id="orderNumber"
                            name="orderNumber"
                            value={form.orderNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full mb-4 2xl:mb-10">
                        <div>
                            <label htmlFor="details">Details Of Complaint</label>
                            <span className="text-[#EB270B] ml-2">*</span>
                        </div>
                        <textarea
                            id="details"
                            name="details"
                            value={form.details}
                            onChange={handleChange}
                            className="inputs whitespace-normal py-2 2xl:py-6 resize-y min-h-[200px] 2xl:leading-[50px] 2xl:min-h-[300px]"
                        />
                    </div>
                    <div className="w-full mb-4 2xl:mb-10">
                        <label className="block xl:mb-3">
                            Upload Supporting Documents
                            <span className="text-[#fedd00]">(Optional)</span>
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="bg-transparent rounded border-dashed border border-white md:p-4 w-1/2 max-lg:w-full p-2 mt-2 md:mt-4 upload"
                        />
                    </div>

                    <div className="flex items-start flex-col lg:w-1/2">
                        <div className="flex justify-center items-center w-full xl:mt-10">
                            <button
                                type="submit"
                                className="p-3 border border-[#FEDD00] bg-[#FEDD00] lg:text-3xl text-black lg:py-4 lg:px-10 rounded-full my-5 text-center font-normal w-full sm:w-full md:w-3/4 hover:bg-[#fedc00dc] duration-500 2xl:text-[50px] 2xl:py-10 2xl:mb-10"
                            >
                                Submit Complaint
                            </button>
                        </div>

                        <p className="md:text-3xl text-center w-full 2xl:text-[50px] 2xl:mb-10">
                            A Klick representative will contact you in 48 hours
                        </p>

                        <div className="flex gap-4 max-md:justify-center justify-start w-full mt-4">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebook icn" className="link-ft" />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="twitter icon" className="link-ft" />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="instagram icon" className="link-ft" />
                            </a>
                            <a
                                href="/"
                                className=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={youtube} alt="instagram icon" className="link-ft" />
                            </a>
                        </div>
                    </div>

                    <div className="justify-center lg:justify-start flex lg:w-1/2"></div>
                </form>
            </div>
        </main>
    );
};

export default Landing;
