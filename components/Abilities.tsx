import { SKILLS_LEFT, SKILLS_RIGHT, type Skill } from '@/lib/content';

function Stars({ count }: { count: number }) {
  return (
    <dd className="flex-shrink-0">
      {Array.from({ length: 5 }, (_, i) =>
        i < count ? (
          <i key={i} className="icon-star group-hover:text-yellow-600" />
        ) : (
          <i key={i} className="icon-star-empty text-gray-400" />
        ),
      )}
    </dd>
  );
}

function SkillList({ groups }: { groups: { heading: string; items: Skill[] }[] }) {
  return (
    <div className="leading-loose">
      {groups.map((group, gi) => (
        <div key={group.heading}>
          <h3 className={`font-bold text-xl mb-2 ${gi > 0 ? 'mt-8' : ''}`}>{group.heading}</h3>
          {group.items.map((skill) => (
            <dl key={skill.name} className="group flex justify-between">
              <dt className="group-hover:font-semibold">{skill.name}</dt>
              <Stars count={skill.stars} />
            </dl>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Abilities() {
  return (
    <section id="abilities" className="min-h-screen pt-5">
      <div className="container grid md:grid-cols-6 gap-8 items-center">
        <div className="md:col-start-3 md:col-span-4">
          <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase">
            Abilities
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-4">
          <p className="ml-px text-xl text-gray-500">
            Here is a summary of my most important skills and abilities as an AI Engineer &amp;
            Product Builder:
          </p>
        </div>
      </div>
      <div className="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
      <div className="py-8 px-6 md:px-16 grid md:grid-cols-2 gap-16">
        <SkillList groups={SKILLS_LEFT} />
        <SkillList groups={SKILLS_RIGHT} />
      </div>
    </section>
  );
}
