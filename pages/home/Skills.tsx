const Skills = (): JSX.Element => (
  <section className="bg-white py-10">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-10">
            <h2>Skills</h2>
            <p className="lead">
              Comprehensive documentation includes usage instructions, component
              reference, and utility class usage instructions
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 text-center mb-5">
          <div className="display-1 font-weight-bold text-gray-400">70+</div>
          <div className="h5">Custom/Extended Components</div>
          <p>
            We ve extended and restyled Bootstrap default components, and built
            a suite of new custom components.
          </p>
        </div>
        <div className="col-lg-4 text-center mb-5">
          <div className="display-1 font-weight-bold text-gray-400">35+</div>
          <div className="h5">Pre-Built Page Examples</div>
          <p>
            Our pre-built page examples are a perfect way to get inspired for
            creating new pages and views.
          </p>
        </div>
        <div className="col-lg-4 text-center mb-5">
          <div className="display-1 font-weight-bold text-gray-400">100+</div>
          <div className="h5">Custom/Extended Utilites</div>
          <p>
            We ve extended and created new utility classes to give you more
            control over your content with minimal custom CSS.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          className="btn btn-primary font-weight-500"
          href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
        >
          View Documentation
        </a>
      </div>
    </div>
    <div className="svg-border-rounded text-light">
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
);
export default Skills;
