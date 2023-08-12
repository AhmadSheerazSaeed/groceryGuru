import React from "react";
import termsAndConditionsCSS from "./termsAndConditions.module.css";

function TermsAndConditions() {
  return (
    <div className={termsAndConditionsCSS.termsAndConditionsWrapper}>
      <h1 className={termsAndConditionsCSS.mainHeading}>TermsAndConditions</h1>

      <h4>1. Introduction:</h4>
      <p className={termsAndConditionsCSS.textJustify}>
        Welcome to GroceryGuru, operated by SHLS, a Germany registered company.
        By accessing and using our website{" "}
        <a href="https://groceryguru.onrender.com/" target="_blank">
          https://groceryguru.onrender.com/{" "}
        </a>
        or any of our related mobile applications, you agree to comply with and
        be bound by the following terms and conditions. If you do not agree with
        these terms, please do not use our services.
      </p>
      <h4>2. User Accounts:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          To access and use certain features of the Online Grocery Shop, you may
          need to create an account. You are responsible for maintaining the
          confidentiality of your account credentials.
        </li>
        <li className={termsAndConditionsCSS.textJustify}>
          You must provide accurate, current, and complete information during
          the registration process.
        </li>
        <li className={termsAndConditionsCSS.textJustify}>
          You are responsible for all activities that occur under your account,
          and you agree to notify us immediately of any unauthorized use of your
          account.
        </li>
      </ul>

      <h4>3. Ordering and Delivery:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          Orders can be placed through our website or mobile app. You agree to
          provide accurate and up-to-date information for delivery purposes.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          We will make every effort to deliver your order within the specified
          time frame, but delivery times may vary based on factors beyond our
          control.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          We reserve the right to refuse or cancel any order for any reason,
          including product unavailability or inaccuracies in pricing or product
          information.
        </li>
      </ul>

      <h4>4. Pricing and Payment:</h4>

      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          Prices for products are as listed on the website or app and are
          subject to change without notice.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          Payment for orders can be made using the available payment methods. By
          providing payment information, you represent and warrant that you are
          authorized to use the chosen payment method.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          All payments are processed securely, and we do not store your payment
          information.
        </li>
      </ul>

      <h4>5. Returns and Refunds:</h4>
      <ul>
        <li>
          Our return and refund policy is outlined on our website. Please review
          it before making a purchase.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          We reserve the right to refuse returns or refunds in cases of misuse,
          damage, or improper storage of products.
        </li>
      </ul>

      <h4>6. Product Descriptions and Images:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          We make every effort to provide accurate product descriptions and
          images. However, we do not warrant that the descriptions or images are
          accurate, complete, reliable, current, or error-free.
        </li>
      </ul>

      <h4>7. Intellectual Property:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          The content on our website and app, including text, graphics, logos,
          images, and software, is owned or licensed by [Company Name] and is
          protected by intellectual property laws.
        </li>
      </ul>

      <h4>8. Privacy Policy:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          Your use of our services is also governed by our Privacy Policy, which
          can be found on our website{" "}
          <a
            href="https://groceryguru.onrender.com/privacyPolicy"
            target="_blank"
          >
            https://groceryguru.onrender.com/privacyPolicy
          </a>
          .
        </li>
      </ul>

      <h4>9. Limitation of Liability:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          We are not liable for any direct, indirect, incidental, special,
          consequential, or punitive damages arising out of or relating to the
          use of our services.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          In no event shall our liability, whether in contract, warranty, tort
          (including negligence), or any other form of liability, exceed the
          total fees paid by you for the relevant products or services.
        </li>
      </ul>

      <h4>10. Changes to Terms and Conditions:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          We reserve the right to modify these terms and conditions at any time
          without prior notice. Changes will be effective upon posting on our
          website or app.
        </li>

        <li className={termsAndConditionsCSS.textJustify}>
          Continued use of our services after any changes to the terms
          constitutes your acceptance of the modified terms.
        </li>
      </ul>

      <h4>11. Governing Law and Dispute Resolution:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          These terms and conditions are governed by the laws of Germany.
        </li>
        <li className={termsAndConditionsCSS.textJustify}>
          Any disputes arising out of or relating to these terms shall be
          resolved through arbitration in accordance with the rules of the
          GroceryGuru.
        </li>
      </ul>

      <h4>12. Contact Us:</h4>
      <ul>
        <li className={termsAndConditionsCSS.textJustify}>
          If you have any questions or concerns about these terms and
          conditions, please contact us at contact us page.
        </li>
      </ul>
      <p className={termsAndConditionsCSS.textJustify}>
        By using our services, you acknowledge that you have read, understood,
        and agree to these terms and conditions.
      </p>
    </div>
  );
}

export default TermsAndConditions;
