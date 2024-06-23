import Head from "next/head";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO",
      image: "/team1.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      role: "CTO",
      image: "/team2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "CFO",
      image: "/team3.jpg",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us - Real Estate</title>
        <meta
          name="description"
          content="Learn more about our company and team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700">
              We are a leading real estate company dedicated to helping you find
              your dream home. Our team of experienced professionals is here to
              guide you every step of the way.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center">
              Our mission is to provide exceptional real estate services to our
              clients by fostering trust and building long-lasting
              relationships. We aim to make the process of buying or selling a
              home as seamless and stress-free as possible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded shadow-lg p-6 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
