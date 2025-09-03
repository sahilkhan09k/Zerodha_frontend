import React, { useState } from "react";

function Team() {

  const [openBioId, setOpenBioId] = useState(null);

  const members = [
    {
      id: 1,
      name: "Nikhil Kamath",
      title: "Co-founder & CFO",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      id: 2,
      name: "Dr. Kailash Nadh",
      title: "CTO",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      id: 3,
      name: "Venu Madhav",
      title: "COO",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
    },
    {
      id: 4,
      name: "Hanan Delvi",
      title: "CCO",
      bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
    },
    {
      id: 5,
      name: "Seema Patil",
      title: "Director",
      bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
    },
    {
      id: 6,
      name: "Karthik Rangappa",
      title: "Chief of Education",
      bio: "Karthik `Guru` Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.",
    },
    {
      id: 7,
      name: "Austin Prakesh",
      title: "Director Strategy",
      bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
    },
  ];
  // const [bio, setBio] = useState(false);

  const toggleBio = (id) => {
    setOpenBioId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="container">
      <div className="row p-3 my-4">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted mb-5"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>

      {/* <div className="row text-center text-muted" style={{ marginTop: "6rem" }}>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Nikhil Kamath</h4>
          <h6>Co-founder & CFO</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Dr. Kailash Nadh</h4>
          <h6>CTO</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Venu Madhav</h4>
          <h6>COO</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
      </div>

      <div className="row text-center text-muted" style={{ marginTop: "6rem" }}>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Hanan Delvi</h4>
          <h6>CCO</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Seema Patil</h4>
          <h6>Director</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Karthik Rangappa</h4>
          <h6>Chief of Education</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
      </div>

      <div className="row text-center text-muted" style={{ marginTop: "6rem" }}>
        <div className="col">
          <img
            src="images/black.avif"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Austin Prakesh</h4>
          <h6>Director Strategy</h6>
          <button className="btn btn-light p-2" onClick={toggleBio}>
            Bio{" "}
            {bio ? (
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            )}
          </button>

          {bio && (
            <p className="mt-4 text-start text-muted fs-4" style={{ width: "90%", backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "0.5rem" }}>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          )}
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div> */}



      <div className="row text-center text-muted" style={{ marginTop: "6rem" }}>
        {members.map((member) => (
          <div className="col-md-4 mb-5" key={member.id}>
            <img
              src="images/black.avif"
              alt={member.name}
              style={{ borderRadius: "100%", width: "70%" }}
            />
            <h4 className="mt-4">{member.name}</h4>
            <h6>{member.title}</h6>
            <button
              className="btn btn-light p-2 mt-2"
              onClick={() => toggleBio(member.id)}
            >
              Bio{" "}
              {openBioId === member.id ? (
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              )}
            </button>

            {openBioId === member.id && (
              <p
                className="mt-3 text-start text-muted fs-5"
                style={{
                  width: "90%",
                  backgroundColor: "#f8f9fa",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  margin: "auto",
                }}
              >
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
