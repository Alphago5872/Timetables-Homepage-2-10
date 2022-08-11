const Dev_Quotes = [
  {
    quote: '"Your life ends when you stop"',
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q1",
  },
  {
    quote: "“This project is a golden opportunity that we never regret doing”",
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q2",
  },
  {
    quote:
      "“Solving real world problems feels completely different from doing something for yourself”",
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q3",
  },
  {
    quote:
      "“There are unlimited opportunity out there, only the well-prepared ones can receive it.”",
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q4",
  },
  {
    quote: "“Waiting for yourself to change, is just an excuse for being lazy”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q5",
  },
  {
    quote:
      "“You can do anything you want even the hardest thing can be archive if you have commitment”",
    dev: "- Prawich Thawansakdivudhi, Project Director -",
    id: "q6",
  },
  {
    quote:
      "“Subscribe to We are PILOTS channel on YouTube and your life will never be the same”",
    dev: "- Guess Who? -",
    id: "q7",
  },
  {
    quote:
      "“Even if you're great at something it does not nessary means that you have to love it”",
    dev: "- Prawich Thawansakdivudhi, Project Director -",
    id: "q8",
  },
  {
    quote:
      "“You'll never know whether you like something or not if you don't give it a chance”",
    dev: "- Prawich Thawansakdivudhi, Project Director -",
    id: "q9",
  },
  {
    quote:
      "“Sometimes, it's ok to feel bad, but if you can make it through, you will grow.”",
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q10",
  },
  {
    quote: "“How to finish a task is to start now!”",
    dev: "- Nutnornont Chamadol, Project Manager -",
    id: "q11",
  },
  {
    quote: "“Trying out something is a step towards your goals”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q13",
  },
  {
    quote: "“It's never too late to do something, nor is it never too early”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q14",
  },
  {
    quote: "“Fix the problem”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q15",
  },
  {
    quote: "“Success is something you can not achieve without thinking”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q16",
  },
  {
    quote: "“Sometimes you succed for yourself and no-one else”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q17",
  },
  {
    quote: "“Time is limited, so make the most out of it”",
    dev: "- Koramist Samorapoom, Lead Frontend Developer -",
    id: "q18",
  },
  {
    quote: "“Never gonna give you up, never gonna let you down”",
    dev: "- Rick Astley, Your Favorite Singer -",
    id: "q19",
  },
];

const Quotes = () => {
  const max = 19;
  const min = 1;

  let presentNum = Math.floor(Math.random() * (max - min)) + min;

  console.log(presentNum);

  let jsx = (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "25px", marginTop: "35px" }}>
        {Dev_Quotes[0].quote}
      </h1>
      <h2
        style={{ textAlign: "center", fontSize: "19px", marginBottom: "35px" }}
      >
        {Dev_Quotes[0].dev}
      </h2>
    </div>
  );

  for (let i = 0; i < Dev_Quotes.length; i++) {
    if (i === presentNum) {
      jsx = (
        <div>
          <h1
            style={{ textAlign: "center", fontSize: "25px", marginTop: "35px" }}
          >
            {Dev_Quotes[i].quote}
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: "19px",
              marginBottom: "35px",
            }}
          >
            {Dev_Quotes[i].dev}
          </h2>
        </div>
      );
    }
    console.log(i);
  }

  return jsx;
};

export default Quotes;
