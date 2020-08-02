import React from "react";
import { Cell } from "react-mdl";

const Testimonials = () => {
  return (
    <div class="flex-container" style={{ margin: "10px" }}>
      <div class="row">
        <Cell class="resume-right-col" col={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Testimonials</h1>
            <hr style={{ borderTop: "3px solid navy", width: "100%" }} />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Jason Wandrag</h2>
          <h4>Lecturer</h4>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />
          <p>
            Luyanda has become an incredibly diligent and hardworking developer,
            who as acquired skills in both front end and back end. He is
            constantly working to better himself, and has shown a sense of
            creativity and professionalism in his front end development.
          </p>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />

          <h2 style={{ paddingTop: "2em" }}>Tyron Keet</h2>
          <h4>Student</h4>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />
          <p>
            Luyanda is a committed individual who is willing to learn more and
            gain more skills. Luyanda have goals and is willing to do anything
            to reach them,yet his also very helpful and is a team player. He is
            a great developer and will be a asset to the working area
          </p>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />

          <h2 style={{ paddingTop: "2em" }}>Akoliwe Mtukuse</h2>
          <h4>Student</h4>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />
          <p>
            Luyanda is a people's person and works well with others and
            individually. His ethic is on par and he is always willing to lend a
            helping hand.
          </p>
          <hr style={{ borderTop: "3px solid navy", width: "100%" }} />
        </Cell>
      </div>{" "}
      /
    </div>
  );
};

export default Testimonials;
