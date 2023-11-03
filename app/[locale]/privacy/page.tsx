import Link from "next/link";
import React from "react";

const Privacy = () => (
  <section className="bg-white dark:bg-gray-700 dark:shadow-gray-800 md:w-[50%] sm:w-[95%] h-[300px] mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl flex justify-center flex-col items-center">
    <div className="w-[90%] mx-auto my-8">
      <h1>Privacy Policy</h1>
      <p>Last updated: November 02, 2023</p>
      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You. We use Your Personal data to provide and improve the Service. By
        using the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. This Privacy Policy has been
        created with the help of the Free Privacy Policy Generator.
        Interpretation and Definitions Interpretation The words of which the
        initial letter is capitalized have meanings defined under the following
        conditions. The following definitions shall have the same meaning
        regardless of whether they appear in singular or in plural.
      </p>
      <h2>For the purposes of this Privacy Policy:</h2>
      <p>
        Account means a unique account created for You to access our Service or
        parts of our Service. Affiliate means an entity that controls, is
        controlled by or is under common control with a party, where "control"
        means ownership of 50% or more of the shares, equity interest or other
        securities entitled to vote for election of directors or other managing
        authority. Company (referred to as either "the Company", "We", "Us" or
        "Our" in this Agreement) refers to Animals. Cookies are small files that
        are placed on Your computer, mobile device or any other device by a
        website, containing the details of Your browsing history on that website
        among its many uses.
      </p>
      {/* <h3>Country refers to: Azerbaijan</h3>
      <p>
        Device means any device that can access the Service such as a computer,
        a cellphone or a digital tablet. Personal Data is any information that
        relates to an identified or identifiable individual. Service refers to
        the Website.
      </p>
      <p>
        Third-party Social Media Service refers to any website or any social
        network website through which a User can log in or create an account to
        use the Service. Usage Data refers to data collected automatically,
        either generated by the use of the Service or from the Service
        infrastructure itself (for example, the duration of a page visit).
        Website refers to Animals, accessible from
        <Link href="https://animals-app-beige.vercel.app/">zoo.do</Link>
        You means the individual accessing or using the Service, or the company,
        or other legal entity on behalf of which such individual is accessing or
        using the Service, as applicable. Collecting and Using Your Personal
        Data
      </p> */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>

      <p>
        By visiting this page on our website:
        <Link href="https://animals-app-beige.vercel.app/privacy">zoo.do</Link>
      </p>
    </div>
  </section>
);

export default Privacy;
