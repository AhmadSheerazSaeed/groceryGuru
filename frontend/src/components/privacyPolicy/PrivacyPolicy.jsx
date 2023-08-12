import React from "react";
import privacyPolicy from "./privacyPolicy.module.css";

function PrivacyPolicy() {
  return (
    <div>
      <h1 className={privacyPolicy.headingOne}>
        Privacy Policy of GroceryGuru
      </h1>

      <p>Effective Date: 11.08.2023</p>

      <p>
        At GroceryGuru, we are committed to protecting the privacy and security
        of our customers' personal information. This Privacy Policy outlines how
        we collect, use, disclose, and safeguard your personal data when you
        visit our website or use our services. By accessing or using our website
        and services, you consent to the practices described in this policy.
      </p>

      <h4>1. Information We Collect:</h4>
      <p>We may collect various types of information from you, including:</p>
      <ul>
        <li>
          Personal Information: Such as your name, contact details (including
          email address, phone number, and address), and payment information
          when you create an account or make a purchase.
        </li>
        <li>
          Usage Information: Including information about how you interact with
          our website, products, and services, such as your browsing history, IP
          address, device information, and cookies.
        </li>
      </ul>

      <h4>2. How We Use Your Information:</h4>
      <p>We use the information we collect to:</p>
      <p>
        Process and fulfill your orders, including managing payments and
        delivery.
      </p>
      <ul>
        <li>
          Provide you with a personalized and efficient shopping experience.
        </li>
        <li>
          Communicate with you about your orders, account, and promotions.
        </li>
        <li>Improve our products, services, and website functionality.</li>
        <li>Detect and prevent fraudulent or unauthorized activities.</li>
      </ul>
      <h4>3. How We Share Your Information:</h4>
      <p>We may share your information with:</p>
      <ul>
        <li>
          Service Providers: Such as payment processors, shipping partners, and
          IT service providers who assist us in delivering our services.
        </li>
        <li>
          Marketing and Analytics Partners: To help us analyze and improve our
          marketing efforts and understand user behavior.
        </li>
        <li>
          Legal Requirements: When required by law or in response to legal
          process.
        </li>
        <li>
          Business Transfers: In the event of a merger, acquisition, or sale of
          all or a portion of our assets.
        </li>
      </ul>
      <h4>4. Your Choices:</h4>
      <p>You have the right to:</p>
      <ul>
        <li>Access and update your personal information.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Delete your account and personal data.</li>
        <li>Disable cookies through your browser settings.</li>
      </ul>
      <h4>5. Data Security:</h4>
      <p>
        We implement industry-standard security measures to protect your data
        from unauthorized access, alteration, disclosure, or destruction.
      </p>
      <h4>6. Children's Privacy:</h4>
      <p>
        Our services are not intended for children under the age of 13. We do
        not knowingly collect or store personal information from minors.
      </p>
      <h4>7. Updates to this Privacy Policy:</h4>
      <p>
        We may update this Privacy Policy periodically to reflect changes to our
        practices. We encourage you to review this policy regularly.
      </p>
      <h4>8. Contact Us:</h4>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy, please contact us at{" "}
        <a href="mailto:groceryGuru@gmail.com">groceryGuru@gmail.com</a> .
      </p>

      <p>
        By using our website and services, you signify your acceptance of this
        Privacy Policy. If you do not agree with this policy, please refrain
        from using our website and services.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
