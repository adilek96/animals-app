import Link from "next/link";
import React from "react";

const Privacy = () => (
  <section className="privacy-policy">
    <div className="content">
      <h1>Privacy Policy</h1>
      <p>Last updated: November 02, 2023</p>
      {/* ... Добавьте сюда остальной текст ... */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul>
        <li>
          By visiting this page on our website:{" "}
          <Link href="https://animals-app-beige.vercel.app/privacy">
            https://animals-app-beige.vercel.app/privacy
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default Privacy;
