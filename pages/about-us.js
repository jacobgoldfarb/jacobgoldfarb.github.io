import React from 'react';
import Layout from '../components/Layout';

const About = () => {

  const valuesList = [
    {
      title: "Innovation",
      description: "We are driven by a passion for innovation, constantly pushing boundaries and exploring new frontiers in the field of nutrition. We believe that technology has the potential to unlock remarkable insights and transform the way we nourish our bodies."
    },
    {
      title: "Personalization",
      description: "We recognize that each individual has unique nutritional requirements. Our approach is rooted in personalization, ensuring that you receive tailored recommendations based on your specific needs, goals, and preferences. No two bodies are the same, and neither should be their nutrition plans."
    },
    {
      title: "Transparency",
      description: "We are committed to transparency in everything we do. We provide clear, evidence-based information and strive to demystify the complexities of nutrition. Our aim is to empower you with knowledge, enabling you to make informed choices about your health."
    }
  ];

  return (
    <Layout
      title="About Us - Nosh Diary" 
      description="Learn more about Nosh Diary, our mission, and the values that drive us. We're revolutionizing the way people approach nutrition and wellness." 
      keywords="Nosh Diary, About Us, Company Information, Nutrition, Wellness"
    >
      <div className="container mx-auto py-10 pr-10">
        <section className="mb-8">
          <h2 className="text-5xl font-bold mb-4">{"Company Overview"}</h2>
          <p className="text-lg">
            {"At Nosh Diary, we believe that nutrition is the foundation of overall well-being. Our mission is to empower individuals to make informed choices about their nutrition by leveraging the power of AI and advanced data analytics. We strive to bridge the gap between scientific research and practical application, creating an intuitive platform that revolutionizes the way we approach nourishment."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-5xl font-bold mb-4">{"Values"}</h2>
          <ul>
            {valuesList.map((value, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-base">{value.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default About;
