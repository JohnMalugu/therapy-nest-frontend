import { Link } from "react-router-dom";
import { NavBar } from "../components/layout/NavBar";
import backgroundImg from '../assets/images/brain.png';
import ai_companion from '../assets/images/ai_companion.png'
import mood from '../assets/images/mood.png'
import journaling from '../assets/images/journaling.png'
import therapist from '../assets/images/therapist.png'
import sophia from '../assets/images/sophia.png'
import ethan from '../assets/images/ethan.png'
import olivia from '../assets/images/olivia.png'
import anxiety from '../assets/images/anxiety.png'
import stress from '../assets/images/stress.png'


import { Card } from "../components/layout/Card";
import { LongCard } from "../components/layout/LongCard";
import { Footer } from "../components/layout/Footer";

export const LandingPage = () => {
    const cardsData = [
        {
            id: 1,
            title: "Journaling",
            description: "Reflect on your day, express your thoughts, and gain insights into your emotional patterns.",
            image_path: journaling
        },
        {
            id: 2,
            title: "Mood Tracking",
            description: "Monitor your emotional state, identify triggers, and track your progress over time.",
            image_path: mood
        },
        {
            id: 3,
            title: "AI Companion",
            description: "Engage in supportive conversations with our AI companion, available 24/7.",
            image_path: ai_companion
        },
        {
            id: 4,
            title: "Therapy Access",
            description: "Connect with licensed therapists and access resources to support your mental health journey.",
            image_path: therapist
        }
    ];

    const successStories = [
        {
            id: 1,
            title: "Sophia's Journey to Self-Discovery",
            description: "With the help of the journaling feature, Sophia found a safe space to express her emotions and gain clarity on her mental health.",
            image_path: sophia
        },
        {
            id: 2,
            title: "Ethan's Path to Emotional Balance",
            description: "Ethan used the mood tracker to identify patterns in his emotional well-being and make positive changes in his daily routine.",
            image_path: ethan
        },
        {
            id: 3,
            title: "Olivia's Transformation",
            description: "Olivia connected with a therapist through the platform and found the support she needed to navigate a challenging time.",
            image_path: olivia
        },
        {
            id: 4,
            title: "Olivia's Transformation",
            description: "Olivia connected with a therapist through the platform and found the support she needed to navigate a challenging time.",
            image_path: olivia
        },


    ];



    const resources = [
        {
            id: 1,
            header: "Understanding Anxiety: A Comprehensive Guide",
            body: "Learn about the different types of anxiety, their symptoms, and effective coping strategies.Learn about the different types of anxiety, their symptoms, and effective coping strategies.Learn about the different types of anxiety, their symptoms, and effective coping strategies.",
            path: anxiety
        },
        {
            id: 2,
            header: "The Power of Mindfulness: Techniques for Stress Reduction",
            body: "Discover mindfulness practices to cultivate inner peace and manage stress in your daily life.Discover mindfulness practices to cultivate inner peace and manage stress in your daily life.Discover mindfulness practices to cultivate inner peace and manage stress in your daily life.",
            path: stress
        }
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="sm:mx-6 space-y-6 font-primary rounded-md  px-6" >
                <div>
                    <div
                        className="w-full min-h-[35vh] sm:min-h-[70vh] md:min-h-[30vh] lg:min-h-[90vh] xl:min-h-screen bg-cover bg-center bg-no-repeat  text-white flex flex-col justify-center items-center text-center rounded-3xl"
                        style={{
                            backgroundImage: `url(${backgroundImg})`,
                        }}
                    >

                        <h1 className="text-lg mb-3 font-bold sm:text-2xl sm:font-bold sm:mb-4  md:text-3xl lg:text-6xl">Your Personalized Mental Health Companion</h1>
                        <p className="text-sm max-w-full mb-4 sm:text-lg sm:mb-6 md:text-xl md:max-w-xl">Support your mental well-being with an AI companion. Track moods, journal freely, and access helpful therapy tools—your journey to a healthier mind starts here.</p>
                        <div className="flex gap-4">
                            <Link to="/demo">
                                <button className="text-sm sm:text-base bg-white text-gray-700 px-4 sm:px-6  py-2 rounded-full font-semibold hover:bg-primary transition hover:text-white">
                                    Try Demo
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="text-sm sm:text-base bg-primary text-white  px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-primary transition">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 font-primary">
                    <h3 className="text-lg sm:text-4xl md:text-3xl lg:text-5xl font-bold">
                        Empowering Your Mental Wellness  Journey
                    </h3>
                    <p className="text-sm sm:text-base">
                        Explore the features designed to support your mental health, from daily tracking to Personalized guidance
                    </p>

                    <div className="flex flex-wrap justify-center">
                        {cardsData.map(card => (
                            <div key={card.id} className="flex justify-center basis-full sm:basis-1/2 lg:basis-1/4 p-2">
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    path={card.image_path}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <h3 className="text-2xl font-bold pb-7">Success Stories</h3>
                    <div className="flex flex-wrap  justify-center">
                        {successStories.map(data => (
                            <div key={data.id} className="flex justify-center basis-full sm:basis-1/2 lg:basis-1/4 p-2">
                                <LongCard title={data.title} description={data.description} path={data.image_path} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-4xl md:text-3xl lg:text-5xl font-bold">Resources</h3>

                    {resources.map(resourceData => (
                        <div key={resourceData.id} className="mb-4 flex justify-between">
                            <div>
                                <h4 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold">{resourceData.header}</h4>
                                <p className="text-sm md:text-base text-gray-600 max-w-10/12">{resourceData.body}</p>
                            </div>

                            <div className=" rounded-lg shadow-xl transition-shadow duration-300">
                                <img
                                    src={resourceData.path}
                                    alt="resource"
                                    className="w-full h-auto rounded-md object-cover"
                                />
                            </div>

                        </div>
                    ))}

                </div>

            </div>
            <Footer />
        </div>
    );
}






