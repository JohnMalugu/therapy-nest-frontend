import { Link } from "react-router-dom";
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


import { LongCard } from "../components/layout/success.story.card";
import { ResourceCard } from "../components/layout/resource.card";
import { NavBar } from "../components/layout/NavBar";
import { Card } from "../components/layout/Card";
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
        },
        {
            id: 5,
            title: "Mood Tracking",
            description: "Monitor your emotional state, identify triggers, and track your progress over time.",
            image_path: mood
        },
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

        {
            id: 5,
            title: "James's Path to Emotional Balance",
            description: "Ethan used the mood tracker to identify patterns in his emotional well-being and make positive changes in his daily routine.",
            image_path: ethan
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
        },
         {
            id: 3,
            header: "Understanding Anxiety: A Comprehensive Guide",
            body: "Learn about the different types of anxiety, their symptoms, and effective coping strategies.Learn about the different types of anxiety, their symptoms, and effective coping strategies.Learn about the different types of anxiety, their symptoms, and effective coping strategies.",
            path: anxiety
        },
        {
            id: 4,
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
                        className="w-full min-h-[35vh] sm:min-h-[70vh] md:min-h-[30vh] lg:min-h-[90vh] xl:min-h-[50vh] bg-cover bg-center bg-no-repeat  text-white flex flex-col justify-center items-center text-center rounded-3xl"
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
                    <h3 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">
                        Empowering Your Mental Wellness  Journey
                    </h3>
                    <p className="text-sm sm:text-base xl:text-base">
                        Explore the features designed to support your mental health, from daily tracking to Personalized guidance
                    </p>

                    <div className="flex flex-wrap ">
                        {cardsData.map(card => (
                            <div key={card.id} className="flex justify-center basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2">
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
                    <h3 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">Success Stories</h3>
                    <div className="flex flex-wrap ">
                        {successStories.map(data => (
                            <div key={data.id} className="flex justify-center basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2">
                                <LongCard title={data.title} description={data.description} path={data.image_path} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold mb-4">Resources</h3>

                    {resources.map(resourceData => (
                        <div key={resourceData.id} className="mb-4 justify-between">
                            <ResourceCard title={resourceData.header} description={resourceData.body} link="Read more"/>

                        </div>
                    ))}

                </div>

            </div>
            <Footer />
        </div>
    );
}






