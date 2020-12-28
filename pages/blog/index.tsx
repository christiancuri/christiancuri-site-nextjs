import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';

import BlogHeader from './Header';

export default function BlogHome(): ReactElement {
  return (
    <Layout footerDark={true}>
      <BlogHeader />
      <section className="bg-light py-10">
        <div className="container">
          <a
            className="card post-preview post-preview-featured lift mb-5"
            href="#!"
          >
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div
                  className="post-preview-featured-img"
                  style={{
                    backgroundImage:
                      'url(https://source.unsplash.com/vZJdYl5JVXY/660x360)',
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <div className="py-5">
                    <h5 className="card-title">
                      Boots on the Ground, Inclusive Thought Provoking Ideas
                    </h5>
                    <p className="card-text">
                      Empower communities and energize engaging ideas; scale and
                      impact do-gooders while disruptring industries. Venture
                      philanthropy benefits corporations and people by moving
                      the needle.
                    </p>
                  </div>
                  <hr />
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-1.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Valerie Luna
                      </div>
                      <div className="post-preview-meta-details-date">
                        Feb 5 &middot; 6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="row">
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/KE0nC8-58MQ/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">Invest In Social Impact</h5>
                  <p className="card-text">
                    Expose the truth, problem-solvers impact mobilized green
                    spaces.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-2.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Aariz Fischer
                      </div>
                      <div className="post-preview-meta-details-date">
                        Feb 4 &middot; 5 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/hGV2TfOh0ns/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Save the World, Social Entrepreneur
                  </h5>
                  <p className="card-text">
                    Contextualize co-creation and do good while building your
                    startup.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-3.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Alicia Allen
                      </div>
                      <div className="post-preview-meta-details-date">
                        Feb 3 &middot; 7 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/9l_326FISzk/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Design Thinking Benefits Corporation Thought Leadership
                  </h5>
                  <p className="card-text">
                    Global changemakers, a state of play releives stress and
                    creates inspirational work environments.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-4.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Mahesh Kumar
                      </div>
                      <div className="post-preview-meta-details-date">
                        Feb 1 &middot; 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/oqStl2L5oxI/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Collaborative Consumption, Human-Centered Technology Thought
                    Leader Systems
                  </h5>
                  <p className="card-text">
                    Milestones theory of change, an effective paradigm, exposes
                    the truth and best practices to uplift equal opportunity.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-5.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        William Cole
                      </div>
                      <div className="post-preview-meta-details-date">
                        Jan 30 &middot; 12 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/Oalh2MojUuk/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Co-create, Empower - Moving the Needle on Investor Interests
                  </h5>
                  <p className="card-text">
                    Scalable efficient systems and thinking as a social
                    entrepreneur creates a transparent, targeted vison.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-1.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Valerie Luna
                      </div>
                      <div className="post-preview-meta-details-date">
                        Jan 29 &middot; 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 mb-5">
              <a className="card post-preview lift h-100" href="#!">
                <img
                  alt=""
                  className="card-img-top"
                  src="https://source.unsplash.com/-uHVRvDr7pg/660x360"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Inclusive Shared Units of Analysis
                  </h5>
                  <p className="card-text">
                    Commit to inspiring social capital, social capital inspires
                    the body and the mind.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-preview-meta">
                    <img
                      alt=""
                      className="post-preview-meta-img"
                      src="assets/img/illustrations/profiles/profile-6.png"
                    />
                    <div className="post-preview-meta-details">
                      <div className="post-preview-meta-details-name">
                        Amy Love
                      </div>
                      <div className="post-preview-meta-details-date">
                        Jan 25 &middot; 7 min read
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-blog justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" href="#!">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  12
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}
