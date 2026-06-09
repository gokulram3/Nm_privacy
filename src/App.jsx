import React from 'react';
import './index.css';

function App() {
  return (
    <div className="privacy-container">
      <header className="header">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: June 9, 2026</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>1. About NM Greens</h2>
          <p>
            NM Greens is an online sports ground and turf booking platform that enables users to discover, view, and reserve sports facilities such as cricket grounds, football turfs, badminton courts, and other recreational venues.
          </p>
          <p>
            The application is designed to provide a convenient booking experience, facility management tools, and communication services between users and venue owners.
          </p>
        </section>

        <section className="card">
          <h2>2. Information We Collect</h2>
          <p>To provide and improve our services, we may collect the following information:</p>

          <div className="sub-section">
            <h3>A. Personal Information</h3>
            <ul>
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Profile Information</li>
              <li>Username and Password</li>
              <li>Booking Preferences</li>
            </ul>
          </div>

          <div className="sub-section">
            <h3>B. Location Information</h3>
            <p>With your permission, we may collect location information to:</p>
            <ul>
              <li>Display nearby sports grounds and venues</li>
              <li>Improve search results based on your location</li>
              <li>Provide location-based recommendations</li>
              <li>Assist with navigation to booked venues</li>
            </ul>
            <p className="note">Location access is optional; however, some location-based features may not function properly if permission is denied.</p>
          </div>

          <div className="sub-section">
            <h3>C. Device Information</h3>
            <ul>
              <li>Device Model</li>
              <li>Device Identifier</li>
              <li>Operating System Version</li>
              <li>IP Address</li>
              <li>App Version</li>
              <li>Network Information</li>
            </ul>
          </div>

          <div className="sub-section">
            <h3>D. Usage Information</h3>
            <ul>
              <li>Login Activity</li>
              <li>Booking History</li>
              <li>Search Activity</li>
              <li>App Interactions</li>
              <li>Performance and Diagnostic Data</li>
            </ul>
          </div>
        </section>

        <section className="card">
          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Process ground and turf bookings</li>
            <li>Provide booking confirmations and reminders</li>
            <li>Enable payments and transaction processing</li>
            <li>Improve application functionality and performance</li>
            <li>Send notifications related to bookings</li>
            <li>Provide customer support</li>
            <li>Prevent fraud and unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="card">
          <h2>4. Data Sharing and Disclosure</h2>
          <p className="highlight">We do not sell your personal information.</p>
          <p>We may share information only in the following circumstances:</p>

          <div className="sub-section">
            <h3>Service Providers</h3>
            <p>Trusted third-party providers that assist with:</p>
            <ul>
              <li>Payment processing</li>
              <li>Cloud hosting services</li>
              <li>Notification services</li>
              <li>Analytics and performance monitoring</li>
            </ul>
          </div>

          <div className="sub-section">
            <h3>Venue Owners</h3>
            <p>Relevant booking information may be shared with venue owners to facilitate reservations and customer support.</p>
          </div>

          <div className="sub-section">
            <h3>Legal Requirements</h3>
            <p>When required by law, court order, or government authority.</p>
          </div>

          <div className="sub-section">
            <h3>Business Transfers</h3>
            <p>In connection with mergers, acquisitions, or business restructuring.</p>
          </div>
        </section>

        <section className="card">
          <h2>5. Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect user information.</p>
          <p>Data transmitted between the application and our servers is protected using secure encryption technologies such as SSL/HTTPS.</p>
          <p>While we strive to protect your information, no method of electronic transmission or storage is completely secure.</p>
        </section>

        <section className="card">
          <h2>6. Data Retention</h2>
          <p>We retain information only as long as necessary to:</p>
          <ul>
            <li>Provide booking services</li>
            <li>Maintain user accounts</li>
            <li>Process transactions</li>
            <li>Resolve disputes</li>
            <li>Comply with legal requirements</li>
          </ul>
          <p>When information is no longer required, it is securely deleted or anonymized.</p>
        </section>

        <section className="card">
          <h2>7. Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Update or correct account details</li>
            <li>Request account deletion</li>
            <li>Withdraw location permissions</li>
            <li>Request information about stored data</li>
          </ul>
          <p className="note">Certain services may be unavailable if required permissions are withdrawn.</p>
        </section>

        <section className="card">
          <h2>8. Account and Data Deletion</h2>
          <p>Users may request permanent deletion of their account and associated data.</p>
          
          <div className="sub-section">
            <h3>How to Request Deletion:</h3>
            <ul>
              <li>Open the application and navigate to <strong>Profile &rarr; Delete Account</strong></li>
              <li>Or contact us through the support email listed below</li>
            </ul>
          </div>
          <p>Upon successful verification, account data will be deleted from our active systems within 30 days unless retention is required by applicable law.</p>
        </section>

        <section className="card">
          <h2>9. Payments and Transactions</h2>
          <p>NM Greens may facilitate online payments through third-party payment providers.</p>
          <p>We do not store complete debit card, credit card, or banking information on our servers.</p>
          <p>All payment processing is handled by authorized and secure payment partners.</p>
        </section>

        <section className="card">
          <h2>10. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Any changes will be posted within the application or on our website with an updated effective date.</p>
          <p>Continued use of the application after updates constitutes acceptance of the revised policy.</p>
        </section>

        <section className="card">
          <h2>11. Contact Us</h2>
          <p>For questions regarding this Privacy Policy, please contact:</p>
          <div className="contact-info">
            <p><strong>NM Greens</strong></p>
            <p>Medavakkam, Chennai, Tamil Nadu</p>
            <p>Email: <a href="mailto:nmgreensdk@gmail.com">nmgreensdk@gmail.com</a></p>
            <p>Phone: +91 99828 99287, +91 8610051003</p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2026 NM Greens. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
