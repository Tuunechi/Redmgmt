'use client'

import { Inter } from "next/font/google"
import Link from "next/link"
import { Formik } from "formik";


const inter = Inter({
  subsets: ['latin']
})

const HeroSection = () => (
  <div className={`m-auto bg-[url(/hero-background.svg)] bg-cover bg-top bg-no-repeat mt-[-28%]  w-full h-auto  md:mt-[-23%] ${inter.className}`}>
    <div className="w-11/12  mx-auto md:w-[80%] md:h-[110vh]">
      <h1 className="pt-[60%] text-4xl font-semibold tracking-[.08em] text-white md:text-5xl md:pt-[26%] md:mt-32 md:ml-[-25px] md:leading-[72px] md:tracking-[.05em]">Elevating Talent, Maximizing<br/> Growth</h1>
      <Link href={'./'}>
        <button className="rounded-lg cursor-pointer bg-[#E1040F] px-4 py-2 mt-5 mb-20 text-base font-medium text-white md:px-10 md:text-[18px] md:ml-[-25px]">Join us now</button>
      </Link>

      <p className="md:ml-auto md:w-[50%] mb-5">Empowering Creatives & Models to Scale, Monetize, and Thrive</p>

      <div className="flex justify-between gap-4 md:gap-0 md:w-[50%] md:float-right ">
        <div className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-w-1 aspect-h-1">
          <object data="/model1.svg" type="image/svg+xml" className="object-cover w-full h-full" aria-label="Model 1" />
        </div>
        <div className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-w-1 aspect-h-1">
          <object data="/model2.svg" type="image/svg+xml" className="object-cover w-full h-full" aria-label="Model 2" />
        </div>
        <div className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-w-1 aspect-h-1">
          <object data="/model3.svg" type="image/svg+xml" className="object-cover w-full h-full" aria-label="Model 3" />
        </div>
        <div className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-w-1 aspect-h-1">
          <object data="/model4.svg" type="image/svg+xml" className="object-cover w-full h-full" aria-label="Model 4" />
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div id="about" className="mb-10 w-11/12 mx-auto bg-[#0A0909] md:w-[80%] text-white  md:relative">
    <div className="z-1 absolute right-0 rounded-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#E1040F] to-black w-[25vw] h-[15vh] blur-[62px] md:blur-[150px] md:left-0 md:h-[50vh]  md:w-[30vw] md:top-0 md:ml-[-200px]"></div>
    <h1 className="text-5xl font-semibold mt-[15%] md:w-[50%] md:ml-auto">About Redmgmt</h1>
    <p className="float-right text-[12px] md:w-[50%] md:ml-auto md:mt-5 md:text-base pt-3">We are a results-driven agency dedicated to helping talent break barriers, increase visibility, and generate sustainable income.</p>
    <img src="/about-pic.svg" alt="About Redmgmt" className="md:w-[110%]  md:relative" />
  </div>
);

const SuccessStoriesSection = () => (
  <div className="mb-10">
    <button className="mx-[10%] mb-8 rounded-xl text-[#E1040F] border-2 border-[#E1040F] p-2 text-sm  md:mx-[12%] md:text-xl">Success Stories</button>
    <h1 className="w-11/12 mx-auto text-center text-5xl font-bold text-white md:text-[76px] md:mb-[-40px]">Victoria</h1>
    <div className="bg-[url(/success-story-bg.svg)] bg-cover bg-top bg-no-repeat">
      <div className="w-11/12 relative mx-auto flex justify-between md:w-[]">
        <img className="w-[10%] cursor-pointer md:w-[3%]" src="/red-prev.svg" alt="Previous" />
        <img className="w-[70%] mt-10 md:w-[30%] md:mt-20 md:mb-48" src="/victoria-model.png" alt="Victoria" />
        <img className="w-[10%] cursor-pointer md:w-[3%]" src="/red-next.svg" alt="Next" />
      </div>
      <p className="text-center w-[90%] relative mx-auto mt-[-12%] text-sm bottom-10 text-white md:w-1/2 ">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, minima. amet consectetur adipisicing elit. Dicta expedita voluptas fuga incidunt natus consectetur similique nisi ex molestias accusamus Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </div>
  </div>
);

const BlockchainSection = () => (
  <div id="services" className="bg-[#0A0909]">
    <div className="h-24 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#E1040F] to-black blur-[100px]"></div>
    <div className="bg-[url(/crypto-model.svg)] bg-cover bg-no-repeat bg-top md:h">
    <div className="w-11/12 mx-auto md:w-[80%]">
      <h1 className=" mb-10 relative font-semibold text-2xl text-white md:w-[50%] md:text-4xl ">Tokenized Fan Coins – Rewarding Influence with Blockchain</h1>
      <img src="/crypto-market.svg" className="md:w-[40%] md:ml-auto md:mr-[6%]" alt="Market" />
      <p className="mt-10 text-sm text-white md:w-[50%] md:text-base md:mt-44">At REDMGMT, we empower top-performing talent with blockchain-based Fan Coins, creating a revolutionary way to monetize engagement, build community, and unlock exclusive opportunities. These tokens give creators direct control over their earnings, allowing them to offer premium content, VIP access, and unique fan experiences—all secured on the blockchain.</p>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log('Sending data:', values);
  
      const response = await fetch('https://script.google.com/macros/s/AKfycbwaVfQg1Jt57QCfcaKoR6Oxk-Kr9IpwWYhyYhkZzLC-8n5qFlz3FxItGXTFWWjoVW03iQ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error(`Server error: ${errorText}`);
      }
  
      const data = await response.json();
      console.log('Response data:', data);
  
      if (data.success) {
        alert('Form submitted successfully!');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0909]" id="contact">
      <h1 className="text-5xl font-semibold text-center mt-10">Contact Us</h1>
      <div className="bg-[url(/contact-bg.svg)] w-[100%] mx-auto bg-cover bg-right-bottom bg-no-repeat h-[80vh] rounded-xl mt-10 md:w-[80%] md:h-full md:py-10">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
            country: '',
            city: '',
            agree: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            } else if (values.firstName.length > 15) {
              errors.firstName = 'Must be 15 characters or less';
            }

            if (!values.lastName) {
              errors.lastName = 'Required';
            } else if (values.lastName.length > 20) {
              errors.lastName = 'Must be 20 characters or less';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Required';
            }

            if (!values.birthday) {
              errors.birthday = 'Required';
            }

            if (!values.country) {
              errors.country = 'Required';
            }

            if (!values.city) {
              errors.city = 'Required';
            }

            if (!values.agree) {
              errors.agree = 'You must agree to share your data';
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl w-[90%] mx-auto text-black px-2 mb-5 pb-10 md:w-[70%]">
              <h1 className="text-center text-3xl font-semibold pt-4">Welcome</h1>
              <p className="w-[95%] mx-auto text-xs mb-10 text-center">Please fill this form to the best of your knowledge</p>

              <div className="w-[95%] mx-auto">
                {/* First Name */}
                <label htmlFor="firstName" className="relative text-xs p-2">
                  First name<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  onBlur={handleBlur}
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.firstName && touched.firstName && errors.firstName}
                </span>

                {/* Last Name */}
                <label htmlFor="lastName" className="relative text-xs p-2">
                  Last name<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  onBlur={handleBlur}
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Surname"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.lastName && touched.lastName && errors.lastName}
                </span>

                {/* Email */}
                <label htmlFor="email" className="relative text-xs p-2">
                  Email<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.email && touched.email && errors.email}
                </span>

                {/* Password */}
                <label htmlFor="password" className="relative text-xs p-2">
                  Password<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.password && touched.password && errors.password}
                </span>

                {/* Birthday */}
                <label htmlFor="birthday" className="relative text-xs p-2">
                  Birthday<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="date"
                  name="birthday"
                  onBlur={handleBlur}
                  value={values.birthday}
                  onChange={handleChange}
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.birthday && touched.birthday && errors.birthday}
                </span>

                {/* Country */}
                <label htmlFor="country" className="relative text-xs p-2">
                  Nationality<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  onBlur={handleBlur}
                  value={values.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.country && touched.country && errors.country}
                </span>

                {/* City */}
                <label htmlFor="city" className="relative text-xs p-2">
                  City<span className="text-[#E1040F]">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  onBlur={handleBlur}
                  value={values.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2"
                />
                <span className="text-xs text-red-800 block pl-2">
                  {errors.city && touched.city && errors.city}
                </span>

                {/* Agreement Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    onBlur={handleBlur}
                    checked={values.agree}
                    onChange={handleChange}
                  />
                  <p className="text-xs">Agree to sharing your data with Redmgmt</p>
                </div>
                <span className="text-xs text-red-800 block pl-2">
                  {errors.agree && touched.agree && errors.agree}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#E1040F] px-32 py-2 rounded-lg text-white mt-5 text-base font-semibold flex mx-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// export default ContactForm;

const Footer = () => (
  <div className=" vsm:mt-64 nsm:mt-32">
    <div className="w-full bg-[#131313] text-white md:flex md:justify-between md:items-center">
    <div className="md:flex md:justify-between mx-auto md:w-[80%] md:items-center">
      <div className="w-11/12 mx-auto flex justify-between flex-col py-10 ">
        <div> 
          <h1 className="text-xl font-semibold mb-4 text-white md:text-2xl">Open Designers</h1>
          <p className="text-[14px] text-white md:text-base">Open source is source code that is made freely available for possible modification and redistribution. Products include permission to use the source code, design
             documents, or content of the product.</p>
        </div>
        {/* Icons */}
        <div className="flex justify-between w-[60%]  mt-5">
          <Link href={"/"}><img src="/discord.svg" alt="Discord"  className="w-8"/></Link>
          <Link href={"/"}><img src="/instagram.svg" alt="instagram"  className="w-8"/></Link>
          <Link href={"/"}><img src="/facebook.svg" alt="facebook" className="w-8"/></Link>
          <Link href={"/"}><img src="/twitter.svg" alt="twitter" className="w-8"/></Link>
        </div>
      </div>

      <div className="w-11/12 mx-auto  md:mt-20 md:ml-auto ">
        {/* Quick links */}
        <div className=" flex gap-5 flex-wrap w-[90%] text-white md:w-[50%]">
          <Link href={"/"} className="text-base font-medium">Home Page</Link>
          <Link href={"/"} className="text-base font-medium">About Us</Link>
          <Link href={"/"} className="text-base font-medium">Services</Link>
          <Link href={"/"} className="text-base font-medium">Contact Us</Link>
        </div>

        <div>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Enter email" className="text-xs text-black px-3 w-[70%] py-3 rounded-md mt-5 mb-5"/> 
        </div>
      </div>
    </div>


    </div>

    <div className="bg-white w-full h-6 mt-12 ">
      <p className="px-12 text-xs py-1 text-black">All Rights Reserved</p>
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="bg-[#0A0909]">
      <HeroSection />
      <AboutSection />
      <SuccessStoriesSection />
      <BlockchainSection />
      <ContactForm />
      <Footer/>
    </div>
  )
}