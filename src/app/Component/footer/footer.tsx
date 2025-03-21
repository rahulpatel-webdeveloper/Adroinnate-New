
import Image from 'next/image'
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="fg-overlay">
        <Image src="/assets/images/footer-bg.png" alt="" layout="fill" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
              <Link href="/" legacyBehavior>
                <Image src="/assets/images/logo.png" alt="" width={200} height={50} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links footer-quick-links">
              <h3>Quick link</h3>
              <ul>
                <li>
                  <Link href="/" legacyBehavior>
                    home
                  </Link>
                </li>
                <li>
                  <Link href="/about" legacyBehavior>
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/services" legacyBehavior>
                    services
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single" legacyBehavior>
                    blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/service-single" legacyBehavior>
                    Threat detection
                  </Link>
                </li>
                <li>
                  <Link href="/service-single" legacyBehavior>
                    Endpoint security
                  </Link>
                </li>
                <li>
                  <Link href="/service-single" legacyBehavior>
                    Network defense
                  </Link>
                </li>
                <li>
                  <Link href="/service-single" legacyBehavior>
                    Data encryption
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link href="#" legacyBehavior>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    Term's & condition 
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link href="tel:+123456789" legacyBehavior>
                    +123 456 789
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@domain.com" legacyBehavior>
                    info@domain.com
                  </Link>
                </li>
                <li>123 High Street India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>Copyright {new Date().getFullYear()} All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
