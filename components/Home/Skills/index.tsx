import { SkillIcon, SkillName, SkillContainer } from './styles';

type Skill = {
  type: 'devicon';
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
  },
  {
    type: 'devicon',
    name: 'TS',
    icon: 'devicon-typescript-plain',
  },
  {
    type: 'devicon',
    name: 'GCP',
    icon: 'devicon-googlecloud-plain',
  },
  {
    type: 'devicon',
    name: 'Nginx',
    icon: 'devicon-nginx-original',
  },
  {
    type: 'devicon',
    name: 'MongoDB',
  },
  {
    type: 'devicon',
    name: 'AWS',
    icon: 'devicon-amazonwebservices-original',
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
    name: 'Kubernetes',
  },
  {
    type: 'devicon',
    name: 'Linux',
  },
  {
    type: 'devicon',
    name: 'Bash',
  },
  {
    type: 'devicon',
    name: 'React',
    icon: 'devicon-react-original',
  },
  {
    type: 'devicon',
    name: 'Redux',
  },
  {
    type: 'devicon',
    name: 'Electron',
    icon: 'devicon-electron-original',
  },
  {
    type: 'devicon',
    name: 'CouchDB',
  },
  {
    type: 'devicon',
    name: 'Bootstrap',
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
    name: '.NET',
    icon: 'devicon-dot-net-plain',
  },
  {
    type: 'devicon',
    name: 'ERLang',
  },
  {
    type: 'devicon',
    name: 'Firebase',
  },
  {
    type: 'devicon',
    name: 'Angular',
    icon: 'devicon-angularjs-plain',
  },
  {
    type: 'devicon',
    name: 'Elixir',
  },
  {
    type: 'devicon',
    name: 'Express',
    icon: 'devicon-express-original',
  },
  {
    type: 'devicon',
    name: 'Gatsby',
  },
  {
    type: 'devicon',
    name: 'Kotlin',
  },
  {
    type: 'devicon',
    name: 'NestJS',
  },
  {
    type: 'devicon',
    name: 'VueJS',
  },
];

const renderIcon = ({ icon, name, type }: Skill): JSX.Element => {
  const icons: { [key in typeof type]: JSX.Element } = {
    devicon: (
      <SkillContainer>
        <SkillIcon className={icon || `devicon-${name.toLowerCase()}-plain`} />
      </SkillContainer>
    ),
  };

  return icons[type];
};

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
          {MY_SKILLS.map(({ type, name, icon }: Skill, index: number) => (
            <div className="col-lg-4 mb-5" key={index}>
              {renderIcon({ type, name, icon })}
              <SkillName>{name}</SkillName>
            </div>
          ))}
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
