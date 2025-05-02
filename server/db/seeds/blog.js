/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('blog').del()
  await knex('blog').insert([
    {
      id: 1,
      name: 'A Bit About Me',
      content: `
### Introduction

8 years into my career in the Royal New Zealand Infantry Regiment I find myself standing in the guard hut at ISAF HQ in the "Green Zone" of Kabul, Afghanistan. We had been on the ground less than two hours and already we had navigated through the city despite the Improvised Explosive Device (IED) threats we were warned of moments after we landed. Now, in this cramped little hut, three of us who had just landed were standing behind our team leader while he tries to explain the details of our arrival to the Italian Military Police (MP) Officer in charge of security. The MP feels threatened and reaches for his pistol...I reach for mine. Is this really how my first visit to Afghanistan is supposed to start? I'm supposed to kill this Italian MP so that he doesn't kill my friends? Am I really going to start an international incident? If it means my friends are safe then yes...

### Ethical Decisions

There are still some people who do not like those of us within the infantry. They think that we are war mongers. I've even been called a "baby killer" to my face. But we don't get to pick where our government sends us. We can only choose to go or not. And we go to protect our friends who also go. The question I would ask others who query why I would choose to go is "if not me then who?". I'm good at what I do and believe I have the skills and knowledge to ensure I come home. But if I don't go then someone else has to. Someone else's son/daughter, brother/sister, father/mother. Will they fare better than I would? Can I bear to subject their families to that loss should the worst happen? And so I go...

### Cultural Values

The Māori people are a fierce battle-hardened people. This was showcased to the world throughout the New Zealand Wars as well as World War One and Two. This, paired with a strict and somewhat violent upbringing, made joining the infantry seem like a natural progression. Yet with all the violence I saw throughout the world and all the pain and suffering it caused, there was a shift in my mindset. The drive to enact violence had been put into a dormant state, and a sense of "manaakitanga ki tatou rangatira" had been brought to the forefront. And so my values changed. So too did the journey.

### Strengths

For personal development reasons, I have conducted the Myer's Briggs Personality Test several times over the years and always end up as the Logician. The Logician's strengths include being analytical and curious. These traits have helped me thrive through continuous learning and easily developing new skills. These will help me learn software development through analyzing what is being taught, creating problems through curiosity, then solving them through analytical thinking.

### Pitfalls

Unfortunately, the Logician's traits come with pitfalls. Empathy is not a strength of mine, as confirmed by a Hogan's test I did as part of leadership development. Recognizing this flaw, I created prompts to ensure I am more empathetic to friends and colleagues. However, the analytical trait can slow response times, and conversations sometimes move on before I can provide an ideal answer. This may make it hard to keep up in structured learning environments, but it won't be a problem in a flipped classroom.

### Working With Others

Being in the infantry isn't always about near-death experiences; 90% of the time, it's boring and monotonous. Like any job, you won't always get along or see eye to eye with everyone. Effective communication is crucial. 

One of my last positions was as the Sniper Supervisor for the 2nd/1st Battalion at Burnham Military Camp. I was responsible for all sniper matters within the battalion. Due to the qualifications required, no one else could do my job, and no one could tell me how to do it. However, snipers are the core of an infantry battalion, and there is always resistance and tension from other capabilities. Despite this, support and compromise are key.

For example, when a senior officer tried to tell my snipers what to do during an exercise attack, I explained it wasn't in their job description. He insisted they do it anyway, citing the Commanding Officer's requirements. I found an alternative solution that involved extra work on my part, which allowed the snipers to focus on their trained tasks. Reluctantly, he accepted it. 

In the end, this was the best outcome: my soldiers maintained job satisfaction, and I made a sacrifice that made future cooperation easier.`,
    },
  ])
}
