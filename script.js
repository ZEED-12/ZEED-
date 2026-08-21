const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacements = {
  '<meta name="description" content="Portfolio of a Web Designer and UI/UX Creator.">': '<meta name="description" content="Portfolio of a Full Stack Developer and Software Engineer.">',
  'data-i18n="top_title">WEB DESIGNER</span>': 'data-i18n="top_title">SOFTWARE ENGINEER</span>',
  'data-i18n="serv2_title">GAME DEVELOPMENT</h4>': 'data-i18n="serv2_title">BACKEND & API</h4>',
  'data-i18n="serv2_desc">Unity</p>': 'data-i18n="serv2_desc">Designing secure and scalable server-side architectures, RESTful APIs, and database structures.</p>',
  'data-i18n="serv3_title">BRAND IDENTITY</h4>': 'data-i18n="serv3_title">CLOUD & DEVOPS</h4>',
  'data-i18n="serv3_desc">Developing strong visual identities and design systems that make your brand memorable and unique.</p>': 'data-i18n="serv3_desc">Deploying and managing infrastructure using AWS, Docker, and CI/CD pipelines for continuous delivery.</p>',
  'data-i18n="projects_desc">A curated selection of my finest work, designed to inspire, engage, and drive real results.</p>': 'data-i18n="projects_desc">A curated selection of my technical work, showcasing complex problem solving and modern architectures.</p>',
  '"ZAID IS A GENIUS" — GOOGLE': '"FLAWLESS ARCHITECTURE" — TECH LEAD',
  '"OUTSTANDING DESIGN" — APPLE': '"INCREDIBLY FAST" — PRODUCT MANAGER',
  '"10/10 EXPERIENCE" — AMAZON': '"CLEANEST CODEBASE" — SENIOR DEV',
  'data-i18n="proc1_title">DISCOVER</h4>': 'data-i18n="proc1_title">PLAN</h4>',
  'data-i18n="proc1_desc">Understanding goals, audience, and project requirements.</p>': 'data-i18n="proc1_desc">System architecture design, database schema planning, and API spec definition.</p>',
  'data-i18n="proc2_title">IDEATE</h4>': 'data-i18n="proc2_title">BUILD</h4>',
  'data-i18n="proc2_desc">Planning, wireframing, and creating the right concept.</p>': 'data-i18n="proc2_desc">Writing clean, testable code using Agile methodologies and modern frameworks.</p>',
  'data-i18n="proc3_title">DESIGN</h4>': 'data-i18n="proc3_title">DEPLOY</h4>',
  'data-i18n="proc3_desc">Crafting visual design with a focus on user experience.</p>': 'data-i18n="proc3_desc">Setting up CI/CD pipelines, containerization, and cloud infrastructure.</p>',
  'Good design is not just how it looks, but how it works.': 'Good code is its own best documentation.',
  'data-i18n="faq1_q">What is your design process?</h3>': 'data-i18n="faq1_q">What is your primary tech stack?</h3>',
  'data-i18n="faq1_a">I follow a comprehensive 4-step process: Discover, Ideate, Design, and Develop. This ensures we thoroughly understand your goals before crafting a solution that perfectly matches your brand.</p>': 'data-i18n="faq1_a">I specialize in the JavaScript/TypeScript ecosystem (React, Next.js, Node.js), along with Python for backend services. I use PostgreSQL and MongoDB for databases.</p>',
  'hello@zaid.design': 'hello@zaid.dev',
  'www.zaid.design': 'www.zaid.dev',
  '<i data-lucide="search" class="w-5 h-5"></i>': '<i data-lucide="git-branch" class="w-5 h-5"></i>',
  '<i data-lucide="lightbulb" class="w-5 h-5"></i>': '<i data-lucide="code" class="w-5 h-5"></i>'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

// Special case for pen-tool in work process (don't replace the one in UI/UX frontend section)
let count = 0;
content = content.replace(/data-lucide="pen-tool"/g, (match) => {
  count++;
  return count === 2 ? 'data-lucide="terminal"' : match; // second occurrence is in Work Process step 3
});

fs.writeFileSync('index.html', content, 'utf8');
console.log('Replacements complete.');
