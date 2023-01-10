import React from "react";
import "./Section.scss";
import img from "../../assets/Subtract.png";
const Section = () => {
  return (
    <div className="section-container">
      <div className="sec1">
        <p>
          Extreme poverty, also known as absolute poverty, is a condition in
          which individuals are unable to meet their basic needs for survival,
          such as food, shelter, and medical care. It is typically defined as
          living on less than $1.90 a day, which is the international poverty
          line set by the World Bank. This is a very low threshold, and it means
          that individuals living in extreme poverty are barely able to afford
          the necessities of life, such as food, shelter, and medical care.
          <br />
          <br />
          Extreme poverty differs from other forms of poverty in that it is the
          most severe and extreme form of poverty. It is characterized by a lack
          of access to basic necessities and a complete lack of financial
          resources or social support. It is a condition that traps individuals
          in a cycle of poverty and deprives them of opportunities to improve
          their circumstances.
          <br />
          <br />
          The impact of extreme poverty on individuals and communities is severe
          and far-reaching. It can lead to malnutrition, disease, and even
          death. It can also have long-term consequences, such as reduced
          cognitive development, lower education levels, and reduced
          productivity. Extreme poverty can also have a negative impact on
          communities and societies as a whole, as it can lead to social and
          political instability and undermine economic development.
        </p>
      </div>
      <div className="sec2">
        <img src={img} alt="" />
      </div>
      <div className="sec3">
        <div className="sec3-h">
          <p>Our Approach:</p>
        </div>
        <div className="sec3-p">
          <p>
            The Mirror Image One and SELF Coin are tools that can potentially be
            used to facilitate transactions and provide an alternative form of
            currency. By allowing people to earn rewards in the form of SELF
            Coins, which can be redeemed for a variety of goods and services, it
            may be possible to provide a reliable source of income for
            individuals in need. This income can be generated through data
            monetization, which refers to the process of using personal data to
            generate revenue.
            <br /> <br />
            One potential way in which this income could be used to help end
            world hunger is by providing individuals with the financial means to
            purchase food and other necessities. By having a reliable source of
            income, people would be able to afford the basic necessities of
            life, including food, shelter, and clothing.
            <br />
            It is important to note that ending world hunger is a complex and
            multifaceted problem that cannot be solved by a single solution.
            However, the use of innovative financial tools and technologies like
            the Mirror Image One and SELF Coin may be able to make a meaningful
            contribution towards this goal by providing people with a dependable
            source of income and enabling them to purchase the resources they
            need to survive.
            <br />
            Regenerate response
          </p>
        </div>
      </div>
      <div className="sec4">
        <div className="sec4-h">
          <p>Political and Economic Factors:</p>
        </div>
        <div className="sec4-p">
          <p>
            Political and economic factors can also contribute to extreme hunger
            and food insecurity. For example, trade policies, subsidies, and
            other economic policies can influence the availability and
            affordability of food, and political instability or conflict can
            disrupt food production and distribution.
          </p>
        </div>
      </div>
      <div className="sec5">
        <div className="sec-box">
          <div className="sec-h">
            <p>Increasing Food Production: </p>
          </div>
          <div className="sec-p">
            <p>
              One approach to addressing extreme hunger and food insecurity is
              to increase food production, either by increasing the amount of
              land under cultivation, improving crop yields, or both. This can
              involve initiatives such as increasing access to inputs such as
              seeds, fertilizers, and water, as well as investing in research
              and development to improve crop varieties and farming practices.
            </p>
          </div>
        </div>
        <div className="sec-box">
          <div className="sec-h">
            <p>Improving Food Distribution and Access:</p>
          </div>
          <div className="sec-p">
            <p>
              Another approach to addressing extreme hunger and food insecurity
              is to focus on improving food distribution and access, either by
              increasing the availability of food in affected areas or by
              improving the ability of people to access food. This can involve
              initiatives such as food aid programs, food banks, and other
              efforts to distribute food to those in need.
            </p>
          </div>
        </div>
        <div className="sec-box">
          <div className="sec-h">
            <p>Addressing Underlying Issues:</p>
          </div>
          <div className="sec-p">
            <p>
              A third approach to addressing extreme hunger and food insecurity
              is to address the underlying issues that contribute to the
              problem, such as poverty, conflict, and environmental challenges.
              This can involve initiatives such as economic development
              programs, conflict resolution efforts, and environmental
              protection efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
