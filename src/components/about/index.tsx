import { Routes } from "@/constants/enums";
import MainHeading from "../main-heading";

function About() {
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"our Story"} title={"About Us"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to our restaurant, where we take pride in serving the best
            food in town! Our journey began with a passion for culinary
            excellence and a commitment to providing an unforgettable dining
            experience.
          </p>
          <p>
            Our chefs are dedicated to using only the freshest ingredients,
            carefully sourced from local farms and markets. We believe that
            great food starts with quality ingredients, and we strive to create
            dishes that not only taste amazing but also reflect the rich flavors
            of our region.
          </p>
          <p>
            At our restaurant, we believe that dining is not just about the
            food, but also about the experience. From the moment you walk
            through our doors, you will be greeted with warm hospitality and a
            welcoming atmosphere. Whether you are here for a casual meal with
            friends or a special celebration, we are committed to making your
            visit memorable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
