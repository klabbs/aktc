import "./HomePage.css"
import CourseCard from "../features/courses/components/CourseCard";


const HomePage = () => {
    return (
      <div>
        <section className="hero">

          <div className="logo">
              <h3>APTECH KUBWA</h3>
              <span>PORTAL V2.0</span>
          </div>

          <div className="badge">
              ● 1,200+ GLOBAL STUDENTS ENROLLED
          </div>

          <div className="hero-container">

          <div className="left">

            <h1>
            Learn.<br/>
            Connect.<br/>
            <span>Succeed.</span>
            </h1>

          <p>
          Your portal for the future of tech.
          Manage registration, payments and schedules
          in one high-performance platform.
          </p>

          <div className="buttons">
          <button className="primary">
          <a href="portal.html" className="btn-primary">
              
          Start Application →</a>
          </button>

          <button className="secondary">
          Student Portal
          </button>
          </div>

          <div className="stats">

          <div>
          <h2>6+</h2>
          <p>SPECIALIZATIONS</p>
          </div>

          <div>
          <h2>98%</h2>
          <p>PLACEMENT</p>
          </div>

          <div>
          <h2>24/7</h2>
          <p>SUPPORT</p>
          </div>

          </div>

          </div>

          <div className="right">

          <div className="card progress-card">
          <h4>Frontend Dev</h4>
          <p>Phase 04/06</p>

          <div className="progress">
          <div className="fill"></div>
          </div>

          <span>65%</span>
          </div>

          <div className="portal-card">

          <div className="circle">
          
          </div>

          <h2>APTECH PORTAL</h2>
          <h3>KUBWA</h3>

          <p>User Portal Access</p>

          </div>

          </div>

          </div>

          </section>

          <section className="why">

          <div className="heading">
          <span>STRATEGIC ADVANTAGE</span>
          <h2>Why Choose TecTerminal?</h2>
          </div>

          <div className="cards">

          <div className="feature">
          <h3>Global Certification</h3>
          <p>
          Recognized by industry leaders worldwide.
          </p>
          </div>

          <div className="feature">
          <h3>Peer Network</h3>
          <p>
          Join a vibrant community of learners.
          </p>
          </div>

          <div className="feature">
          <h3>Practical Coding</h3>
          <p>
          Hands-on experience from day one.
          </p>
          </div>

          <div className="feature">
          <h3>Career Support</h3>
          <p>
          Resume reviews and career coaching.
          </p>
          </div>

          </div>

          </section>

          {/*  INFRASTRUCTURE */}

          <section className="infrastructure">

              <div className="infra-header">

                  <div>
                      <span className="section-tag">CORE CAPABILITIES</span>

                      <h2>
                          Unified Academic <br/>
                          Infrastructure.
                      </h2>
                  </div>

                  <p>
                      Purpose-built systems for high-growth tech careers,
                      integrating every facet of your professional development.
                  </p>

              </div>

              <div className="infra-grid">

                  <div className="infra-card">

                      <div className="icon-box">👤</div>

                      <span className="card-number">01</span>

                      <h3>Student Hub</h3>

                      <p>
                          End-to-end lifecycle management from onboarding
                          to global alumni networking.
                      </p>

                  </div>

                  <div className="infra-card">

                      <div className="icon-box">⚙️</div>

                      <span className="card-number">02</span>

                      <h3>Ops Center</h3>

                      <p>
                          Automated scheduling, attendance protocols and
                          grading workflows.
                      </p>

                  </div>

                  <div className="infra-card">

                      <div className="icon-box">💳</div>

                      <span className="card-number">03</span>

                      <h3>Fiscal Layer</h3>

                      <p>
                          Secure payment gateways and financial reporting
                          systems for transparency.
                      </p>

                  </div>

              </div>

          </section>


          {/*  TESTIMONIALS */}

          <section className="testimonials">

              <span className="section-tag">
                  WALL OF FAME
              </span>

              <h2 className="testimonial-title">
                  Student Success Stories
              </h2>

              <div className="testimonial-grid">

                  <div className="testimonial-card">

                      <div className="profile">

                          <div className="avatar"></div>

                          <div>
                              <h4>Chukwudi O.</h4>
                              <small>Backend Engineer at PayStack</small>
                          </div>

                      </div>

                      <p className="quote">
                          "The structured curriculum at TecTerminal was the turning
                          point in my career. I went from coding basics to
                          architecting scalable systems in 6 months."
                      </p>

                  </div>

                  <div className="testimonial-card">

                      <div className="profile">

                          <div className="avatar"></div>

                          <div>
                              <h4>Amara E.</h4>
                              <small>Product Designer at Google</small>
                          </div>

                      </div>

                      <p className="quote">
                          "The UX/UI track is incredible. The focus on cognitive
                          psychology and real industry standards helped me land my
                          dream role."
                      </p>

                  </div>

                  <div className="testimonial-card">

                      <div className="profile">

                          <div className="avatar"></div>

                          <div>
                              <h4>Tunde A.</h4>
                              <small>Data Scientist at Kuda</small>
                          </div>

                      </div>

                      <p className="quote">
                          "Learning data intelligence here was life-changing.
                          The projects mirrored exactly what I do now in fintech."
                      </p>

                  </div>

              </div>

          </section>

          {/*  TECH SPECIALIZATIONS */}

          <section className="specializations">

              <div className="specializations-header">

                  <div>
                      <span className="section-tag">
                          CURRICULUM MATRIX
                      </span>

                      <h2>
                          Tech Specializations
                      </h2>
                  </div>

                  <a href="#" className="catalog-link">
                      FULL CATALOG →
                  </a>

              </div>
                <CourseCard/>
              <div className="specialization-grid">

                  <div className="course-card">

                      <div className="course-top">
                          📊
                      </div>

                      <div className="course-body">

                          <div className="course-meta">
                              <span>ANALYTICS</span>
                              <small>4 MONTH TERM</small>
                          </div>

                          <h3>Data Intelligence</h3>

                          <p>
                              Synthesize raw data into strategic insights using
                              mathematical models and neural networks.
                          </p>

                          <div className="course-footer">
                              <h4>₦371,250</h4>
                              <a href="registration.html">INQUIRE</a>
                          </div>

                      </div>

                  </div>


                  <div className="course-card">

                      <div className="course-top">
                          💻
                      </div>

                      <div className="course-body">

                          <div className="course-meta">
                              <span>ENGINEERING</span>
                              <small>6 MONTH TERM</small>
                          </div>

                          <h3>Backend Systems</h3>

                          <p>
                              Architect highly scalable distributed systems and
                              enterprise-grade server-side applications.
                          </p>

                          <div className="course-footer">
                              <h4>₦420,000</h4>
                              <a href="#">INQUIRE</a>
                          </div>

                      </div>

                  </div>


                  <div className="course-card">

                      <div className="course-top">
                          🎨
                      </div>

                      <div className="course-body">

                          <div className="course-meta">
                              <span>DESIGN</span>
                              <small>4 MONTH TERM</small>
                          </div>

                          <h3>Product UX/UI</h3>

                          <p>
                              Master the art of human-centered design through
                              cognitive psychology and modern interfaces.
                          </p>

                          <div className="course-footer">
                              <h4>₦346,500</h4>
                              <a href="#">INQUIRE</a>
                          </div>

                      </div>

                  </div>

              </div>

          </section>


          {/*  FAQ */}

          <section className="faq-section">

              <span className="section-tag">
                  COMMON QUERIES
              </span>

              <h2 className="faq-title">
                  Frequently Asked Questions
              </h2>

              <div className="faq-container">

                  <div className="faq-card">
                      <h4>When does the next cohort start?</h4>
                      <p>
                          New cohorts typically begin on the first Monday
                          of every quarter.
                      </p>
                  </div>

                  <div className="faq-card">
                      <h4>Do you offer flexible payment plans?</h4>
                      <p>
                          Yes. We offer installment payment options
                          throughout the program duration.
                      </p>
                  </div>

                  <div className="faq-card">
                      <h4>Is the curriculum remote-friendly?</h4>
                      <p>
                          Absolutely. Students can access materials
                          and participate online.
                      </p>
                  </div>

                  <div className="faq-card">
                      <h4>What are the prerequisites?</h4>
                      <p>
                          Basic computer knowledge and a passion
                          for learning technology.
                      </p>
                  </div>

              </div>

          </section>

          {/*  NEWSLETTER */}

          <section className="newsletter">

              <span className="section-tag">
                  STAY UPDATED
              </span>

              <h2>
                  Join our newsletter for tech
                  insights and cohort updates.
              </h2>

              <form className="newsletter-form">

                  <input
                      type="email"
                      placeholder="Enter your email"
                      required
                  />

                  <button type="submit">
                      Subscribe Now
                  </button>

              </form>

              <p className="newsletter-text">
                  Join 5,000+ tech enthusiasts. No spam, ever.
              </p>

          </section>


          {/*  CTA SECTION */}

          <section className="cta-section">

              <span className="section-tag">
                  NEXT COHORT: LOADING
              </span>

              <h2>
                  Initiate Your Digital
                  Evolution.
              </h2>

              <p>
                  Secure your position in the next generation
                  of global tech leaders. Application portal
                  remains active for 48 hours.
              </p>

              <div className="cta-buttons">

                  <a href="adminportal.html" className="btn-primary">
                      Initialize Application →
                  </a>

                  <a href="#" className="btn-secondary">
                      Admin Access
                  </a>

              </div>

          </section>
      </div>
    )
  }
  
  export default HomePage
  