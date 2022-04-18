

const useProduct = () => {

    const services = [
        {
            id: 1,
            img: 'https://i.ibb.co/b6DcLrz/25-HP-Solar-Panels-D.png',
            title: 'Tesla 25 HP Solar Panel D',
            body: 'Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.',
            price: 10000,
        },
        {
            id: 2,
            img: 'https://i.ibb.co/qp8YWRX/model3.png',
            title: 'Tesla model 3',
            body: 'Tesla designed Model 3 from the ground-up as an electric vehicle using system-level integration throughout. Each component, including batteries, motors and even exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.',
            price: 101000,
        },
        {
            id: 3,
            img: 'https://i.ibb.co/RzTWcFM/1714748-00-A-0-2000.png',
            title: 'Cyberquad for Kids',
            body: 'Get ready for any adventure with the all-electric Cyberquad for Kids. Inspired by our iconic Cybertruck design, the four-wheel ATV features a full steel frame, cushioned seat and adjustable suspension with rear disk braking and LED light bars. Powered by a lithium-ion battery with up to 15 miles of range and a configurable top speed of 10 mph, Cyberquad for Kids is suitable for anyone 8-years old and up.',
            price: 1900,
        }
    ];

    return services;
};

export default useProduct;