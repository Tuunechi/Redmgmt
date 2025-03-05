'use client'

import { Inter } from "next/font/google"
import Link from "next/link"
import { Formik } from "formik";


const inter = Inter({
  subsets: ['latin']
})

const HeroSection = () => (
  <div className={`m-auto bg-[url(/hero-background.svg)] bg-cover bg-top bg-no-repeat mt-[-28%] w-full h-auto ${inter.className}`}>
    <div className="w-11/12 mx-auto">
      <h1 className="pt-[60%] text-4xl font-semibold tracking-[.08em]">Elevating Talent, Maximizing<br/> Growth</h1>
      <Link href={'./'}>
        <button className="rounded-lg cursor-pointer bg-[#E1040F] px-4 py-2 mt-5 mb-20 text-base font-medium">Join us now</button>
      </Link>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="mb-10 w-11/12 mx-auto">
    <div className="z-1 absolute right-0 rounded-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#E1040F] to-black w-[25vw] h-[15vh] blur-3xl"></div>
    <h1 className="text-3xl font-semibold mt-[15%]">About Redmgmt</h1>
    <p className="float-right text-[12px]">We are a results-driven agency dedicated to helping talent break barriers, increase visibility, and generate sustainable income.</p>
    <img src="/about-pic.svg" alt="About Redmgmt" />
  </div>
);

const SuccessStoriesSection = () => (
  <div>
    <button className="mx-[5%] mb-8 rounded-xl text-[#E1040F] border-2 border-[#E1040F] p-2 text-sm">Success Stories</button>
    <div className="bg-[url(/success-story-bg.svg)] bg-cover bg-top bg-no-repeat">
      <h1 className="w-11/12 mx-auto text-center text-5xl font-bold">Victoria</h1>
      <div className="w-11/12 relative mx-auto flex justify-between">
        <img className="w-[10%] cursor-pointer" src="/red-prev.svg" alt="Previous" />
        <img className="w-[70%]" src="/victoria-model.png" alt="Victoria" />
        <img className="w-[10%] cursor-pointer" src="/red-next.svg" alt="Next" />
        <p className="text-center absolute text-sm bottom-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita voluptas fuga incidunt natus consectetur similique nisi ex molestias accusamus Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  </div>
);

const BlockchainSection = () => (
  <div>
    <div className="h-24 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#E1040F] to-black blur-[100px]"></div>
    <div className="bg-[url(/crypto-model.svg)] bg-cover bg-no-repeat bg-top">
      <h1 className="w-11/12 mb-10 mx-auto font-semibold text-2xl">Tokenized Fan Coins – Rewarding Influence with Blockchain</h1>
      <img src="/crypto-market.svg" alt="Market" />
      <p className="w-11/12 mx-auto mt-10 text-sm">At REDMGMT, we empower top-performing talent with blockchain-based Fan Coins, creating a revolutionary way to monetize engagement, build community, and unlock exclusive opportunities. These tokens give creators direct control over their earnings, allowing them to offer premium content, VIP access, and unique fan experiences—all secured on the blockchain.</p>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="">

  <h1 className="text-5xl font-semibold text-center mt-10">Contact Us</h1>
  <div className="bg-[url(/contact-bg.svg)] w-[100%] mx-auto bg-cover bg-right-bottom bg-no-repeat h-[80vh] rounded-xl mt-10 ">
    <Formik
    
    initialValues={{ email: '', password: '', firstName: "", lastName: "", }}
       validate={values => {
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
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
       
    >

    {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
      <form action="" className="bg-white rounded-xl w-[90%] mx-auto pb-1 text-black">
        <h1 className="text-center text-3xl font-semibold pt-4">Welcome</h1>
        <p className="w-[95%] mx-auto text-xs mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis vitae curabitur amet, fermentum lorem.</p>
        <div className="w-[95%] mx-auto">
          <label htmlFor="firstname" className="relative text-xs p-2">First name<span className="text-[#E1040F]">*</span></label>
          <input type="text" name="firstName" onBlur={handleBlur} value={values.firstName} onChange={handleChange} required placeholder="Your name" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <span className="text-xs text-red-800 block pl-2">{errors.firstName && touched.firstName && errors.firstName}</span>

          <label htmlFor="lastName" className="relative text-xs p-2">Last name<span className="text-[#E1040F]">*</span></label>
          <input type="text" name="lastName" required placeholder="Surname" onBlur={handleBlur} value={values.lastName} onChange={handleChange} className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <span className="text-xs text-red-800 block pl-2">{errors.lastName && touched.lastName && errors.lastName}</span>

          <label htmlFor="email" className="relative text-xs p-2">Email<span className="text-[#E1040F]">*</span></label>
          <input type="email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} placeholder="Enter email" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <span className="text-xs text-red-800 block pl-2">{errors.email && touched.email && errors.email}</span>

          <label htmlFor="password" className="relative text-xs p-2">Password<span className="text-[#E1040F]">*</span></label>
          <input type="password" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} placeholder="Your password" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <span className="text-xs text-red-800 block pl-2">{errors.password && touched.password && errors.password}</span>

          <label htmlFor="birthday" className="relative text-xs p-2">Birthday<span className="text-[#E1040F]">*</span></label>
          <input type="date" name="birthday" placeholder="Your birthday" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <label htmlFor="country" className="relative text-xs p-2">Nationality<span className="text-[#E1040F]">*</span></label>

          <input type="text" name="country" placeholder="Country" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <label htmlFor="city" className="relative text-xs p-2">City<span className="text-[#E1040F]">*</span></label>
          <input type="text" name="city" placeholder="Your city" className="mt-[-10] border border-black-600 w-full p-2 rounded-lg mb-2" />
          <div className="flex items-center">
            <input type="checkbox" name="" id="" className="" />
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida eget ultricies pharetra scelerisque duis cursus.</p>
          </div>
        </div>
        <button className="bg-[#E1040F] px-32 py-2 rounded-lg text-white mt-5 text-base font-semibold flex mx-auto mb-10">Submit</button>
      </form>
      )}
    </Formik>
   </div>
  </div>
);

const Footer = () => (
  <div className="mt-24">
    <div className="w-full bg-[#131313]">

      <div className="w-11/12 mx-auto flex justify-between flex-col py-10">
        <div> 
          <h1 className="text-xl font-semibold">Open Designers</h1>
          <p className="text-[14px]">Open source is source code that is made freely available for possible modification and redistribution. Products include permission to use the source code, design
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

      <div className="w-11/12 mx-auto">
        {/* Quick links */}
        <div className=" flex gap-5 flex-wrap w-[90%]">
          <Link href={"/"} className="text-base font-medium">Home Page</Link>
          <Link href={"/"} className="text-base font-medium">About Us</Link>
          <Link href={"/"} className="text-base font-medium">Services</Link>
          <Link href={"/"} className="text-base font-medium">Contact Us</Link>
        </div>

        <div>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Enter email" className="text-xs px-3 w-[70%] py-3 rounded-md mt-5 mb-5"/> 
        </div>
      </div>

      <div className="bg-white w-full h-6 mt-12 ">
      <p className="px-12 text-xs py-1 text-black">All Rights Reserved</p>
      </div>

    </div>
  </div>
)
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SuccessStoriesSection />
      <BlockchainSection />
      <ContactForm />
      <Footer/>
    </div>
  )
}