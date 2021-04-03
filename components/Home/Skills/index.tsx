import { SkillIcon, SkillName } from './styles';

type Skill = {
  type: 'devicon' | 'other';
  name: string;
  icon?: string;
};

const MY_SKILLS: Skill[] = [
  {
    type: 'devicon',
    name: 'JavaScript',
  },
  {
    type: 'devicon',
    name: 'Nodejs',
    icon: 'nodejs_small',
  },
  {
    type: 'devicon',
    name: 'React',
  },
  {
    type: 'devicon',
    name: 'GCP',
    icon: 'google-cloud-platform',
  },
  {
    type: 'devicon',
    name: 'Nginx',
  },
  {
    type: 'devicon',
    name: 'MongoDB',
  },
  {
    type: 'devicon',
    name: 'AWS',
  },
  {
    type: 'devicon',
    name: 'Redis',
  },
  {
    type: 'devicon',
    name: 'Docker',
  },
  {
    type: 'devicon',
    name: 'Bootstrap',
  },
  {
    type: 'devicon',
    name: 'Linux',
  },
  {
    type: 'devicon',
    name: 'Java',
  },
  {
    type: 'devicon',
    name: 'Ruby',
  },
  {
    type: 'devicon',
    name: 'Python',
  },
  {
    type: 'devicon',
    name: 'Go',
  },
  {
    type: 'devicon',
    name: 'PHP',
  },
  {
    type: 'devicon',
    name: 'MySQL',
  },
  {
    type: 'devicon',
    name: 'Laravel',
  },
  {
    type: 'devicon',
    name: 'Angular',
    icon: 'angular_simple',
  },
  {
    type: 'devicon',
    name: 'jQuery',
  },
  {
    type: 'devicon',
    name: 'Swift',
  },
  {
    type: 'devicon',
    name: 'PostgreSQL',
  },
  {
    type: 'devicon',
    name: 'DotNet',
  },
  {
    type: 'devicon',
    name: 'ERLang',
  },
  {
    type: 'devicon',
    name: 'Firebase',
  },
];

const Skills = (): JSX.Element => {
  return (
    <section className="bg-light py-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-10">
              {/* <div className="badge badge-pill badge-primary-soft text-primary badge-marketing mb-3">
                12 Demos!
              </div> */}
              <h2>Skills</h2>
              {/* <p className="lead"></p> */}
            </div>
          </div>
        </div>
        <div className="row text-center">
          {MY_SKILLS.map(({ type, name, icon }: Skill, index: number) => {
            if (type === 'devicon') {
              return (
                <div className="col-lg-4 mb-5" key={index}>
                  <SkillIcon
                    icon={icon || name.toLowerCase()}
                    viewBox="0 0 32 32"
                  />
                  <SkillName>{name}</SkillName>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="svg-border-rounded text-white">
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
};

export default Skills;
