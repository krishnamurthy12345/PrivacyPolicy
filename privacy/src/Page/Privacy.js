import React from 'react';
import './PrivacyPolicy.css';
// import privacyBanner1 from './assets/privacy-banner1.jpg';
import privacyBanner from './assets/privacy-banner.jpg';


const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            {/* <img
                src={privacyBanner1}
                alt="Privacy Policy Banner"
                className="privacy-policy-banner"
            /> */}
            <img
                src={privacyBanner}
                alt="Privacy Policy Banner"
                className="privacy-policy-banner"
            />
            <h1 className="privacy-policy-title">Privacy Policy</h1>
            <p>
                At Shree Harini Promoters and Builders, we respect and value your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, address, and other contact details that you provide to us when submitting inquiries or signing up for our services.
                </li>
                <li>
                    <strong>Website Usage Data:</strong> We collect information about your interaction with our website, such as IP address, browser type, device type, operating system, pages viewed, and the time spent on the site through cookies and other tracking technologies.
                </li>
                <li>
                    <strong>Financial Information:</strong> If applicable, we may collect payment details if you purchase services or make transactions through our website.
                </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>To provide and improve our services.</li>
                <li>To respond to your inquiries or requests.</li>
                <li>To send you updates about our projects, news, promotions, or other relevant communications (if you opt-in).</li>
                <li>To comply with legal obligations and enforce our website’s terms and conditions.</li>
            </ul>

            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
                We use cookies, web beacons, and similar technologies to improve your browsing experience, analyze site traffic, and enhance functionality. You can modify your browser settings to reject cookies, but doing so may affect the functionality of certain parts of the website.
            </p>

            <h2>4. Data Sharing and Disclosure</h2>
            <ul>
                <li>
                    <strong>With Service Providers:</strong> We may share data with third-party vendors and service providers who assist in our business operations (e.g., payment processors, IT services, marketing agencies). These providers are bound by contractual obligations to protect your data.
                </li>
                <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to legal process (e.g., a court order, subpoena).
                </li>
                <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the new entity, and you will be notified of any changes to this Privacy Policy.
                </li>
            </ul>

            <h2>5. Your Rights and Choices</h2>
            <ul>
                <li>Access: You can request to access the personal information we hold about you.</li>
                <li>Correction: You may correct any inaccurate or incomplete information.</li>
                <li>Deletion: You may request that we delete your personal data, subject to certain exceptions.</li>
                <li>Opt-out of Communications: You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in the email or contacting us directly.</li>
                <li>Data Portability: You may request a copy of your personal data in a structured, commonly used format.</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Retention of Data</h2>
            <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or to comply with legal or contractual obligations.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before submitting any personal information.
            </p>

            <h2>9. Children’s Privacy</h2>
            <p>
                Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected such data, please contact us, and we will take steps to remove it.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with a new effective date.
            </p>

            <h2>11. Contact Us</h2>
            <p className='contact'>
                If you have any questions, comments, or concerns about this Privacy Policy, please contact us:
                <br />
                <strong>abiproperties and Builders</strong>
                <br />
                {/* <p>
                    Email:
                    <a href="mailto:shreeharinipromotersbuilders@gmail.com" className="contact-email">
                        shreeharinipromotersbuilders@gmail.com
                    </a>
                </p> */}
                <p>
                    Email:
                    <a href="mailto:abiproperties123@gmail.com" className="contact-email">
                    abiproperties123@gmail.com
                    </a>
                </p>

            </p>
        </div>
    );
};

export default PrivacyPolicy;
