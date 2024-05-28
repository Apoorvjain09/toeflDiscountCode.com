import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { speakingQuestions } from './questions';

interface SpeakingSectionProps {
    onComplete: () => void;
    onTaskComplete: (task: number, evaluation: { score: number; feedback: string }) => void;
}

const SpeakingSection: React.FC<SpeakingSectionProps> = ({ onComplete, onTaskComplete }) => {
    const [stage, setStage] = useState<'intro' | 'task1' | 'prepare' | 'speak' | 'task2Intro' | 'task2Passage' | 'task2Conversation' | 'task2QuestionPrepare' | 'task2Speak' | 'task3Intro' | 'task3Passage' | 'task3Conversation' | 'task3QuestionPrepare' | 'task3Speak' | 'task4Intro' | 'task4Conversation' | 'task4QuestionPrepare' | 'task4Speak'>('intro');
    const [key, setKey] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
    const [evaluation, setEvaluation] = useState<{ score: number; feedback: string } | null>(null);
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const [question, setQuestion] = useState<string>('Should schools engage in character education to instill morals and values in children?');
    const task2Intro = "In this question of the TOEFL Speaking Task 2, you'll first read a short passage about either a campus announcement or a student's letter. Next, you will hear a conversation between two students discussing their opinions on the passage you just read. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const task2Passage = "The geology department is aware of the problems surrounding of group work, and its unpopularity among students. We realize that in some cases students do not contribute and thus gain marks they do not deserve, while stronger students are frustrated at being held back by weaker students. Similarly, it is very difficult for tutors to award marks for group projects, as it is unclear who is responsible for each part. However, the department feels that there is a great deal to be gained from group work, in terms of self-organization and communication skills. To this end, we plan to introduce a system whereby the group work itself is not formally assessed, but each student will undertake an individual piece of work based on the group project, which will be designed to ensure participation in the project.";
    const task3Passage = "One theory of learning states that we use three sensory receivers: visual (V), auditory (A), and kinesthetic (K) when we take in information. According to the VAK theory, one or two of these receiving styles is normally dominant and thus defines the best way for a person to learn new information. Thus a visual learner learns best using their sight; an auditory learner learns best when listening, and a kinesthetic learner learns best through physical activity. VAK is one of the most popular learning models nowadays due to its simplicity. Teachers are beginning to incorporate a range of stimuli and activities into their lessons so as to cater for all types of learner. Although it is not yet proven that using one’s preferred sense provides the best means for learning, having a range of activities can reduce boredom and increase motivation in the classroom.";
    const task4Intro = "In this question of the TOEFL Speaking Task 4, you'll first read a short passage on an academic topic. Next, you will hear a lecture on the same topic. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    
    useEffect(() => {
        if (stage === 'task1') {
            const timer = setTimeout(() => {
                setStage('prepare');
                setKey(prevKey => prevKey + 1);
            }, 5000); // 5 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage]);
    
    useEffect(() => {
        if (stage === 'prepare') {
            const timer = setTimeout(() => {
                setStage('speak');
                setKey(prevKey => prevKey + 1);
            }, 15000); // 15 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage]);
    
    useEffect(() => {
        if (stage === 'speak') {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 45000); // 45 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    useEffect(() => {
        if (stage === 'task2Speak') {
            setQuestion("The man expresses his opinion of group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.")
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);
    
    useEffect(() => {
        if (stage === 'task3Speak') {
            setQuestion("One theory of learning states that we use three sensory receivers: visual (V), auditory (A), and kinesthetic (K) when we take in information. According to the VAK theory, one or two of these receiving styles is normally dominant and thus defines the best way for a person to learn new information. Thus a visual learner learns best using their sight; an auditory learner learns best when listening, and a kinesthetic learner learns best through physical activity. VAK is one of the most popular learning models nowadays due to its simplicity. Teachers are beginning to incorporate a range of stimuli and activities into their lessons so as to cater for all types of learner. Although it is not yet proven that using one’s preferred sense provides the best means for learning, having a range of activities can reduce boredom and increase motivation in the classroom.")
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);
    
    useEffect(() => {
        if (stage === 'task4Speak') {
            setQuestion("The man expresses his opinion on group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.")
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
                // console.log(transcript);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    const handleStartTask = () => {
        setStage('task1');
        // onComplete()
    };

    const handleContinueToTask2 = () => {
        setStage('task2Passage');
        setIsTimerRunning(true); // Restart the timer for Task 2 passage
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };
    const handleContinueToTask3 = () => {
        setStage('task3Passage');
        setIsTimerRunning(true); // Restart the timer for Task 2 passage
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };

    const handleContinueToQuestion = () => {
        setStage('task2QuestionPrepare');
        setIsTimerRunning(true); // Restart the timer for question preparation
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };
    const handleContinueTo4Question = () => {
        setStage('task4QuestionPrepare');
        setIsTimerRunning(true); // Restart the timer for question preparation
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };

    const renderTimer = (duration: number, onComplete: () => void) => (
        <CountdownCircleTimer
            key={key}
            isPlaying={isTimerRunning}
            duration={duration}
            colors={['#004777', '#F7B801', '#A30000']}
            colorsTime={[duration * 0.67, duration * 0.33, 0]}
            onComplete={onComplete}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    );

    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <span>Browser doesn&apos;t support speech recognition.</span>;
    }

    const handleTranscriptSubmit = async () => {
        try {
            const response = await fetch('/api/evaluate-speaking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question, transcript }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit task');
            }

            const data = await response.json();
            setEvaluation(data);
            console.log('Evaluation:', data);

            if (stage === 'speak') {
                setStage('task2Intro');
                onTaskComplete(1, data);
            }
            if (stage === 'task2Speak') {
                setStage('task3Intro');
                onTaskComplete(2, data);
            }
            if (stage === 'task3Speak') {
                setStage('task4Intro');
                onTaskComplete(3, data);
            }
            if (stage === 'task4Speak') {
                onTaskComplete(4, data);
                onComplete();
            } 

        } catch (error) {
            console.error('Error submitting task:', error);
        }
    };


    return (
        <div className="container mx-auto py-10 px-4 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">Speaking Section</h2>
            {stage === 'intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        In this question of the TOEFL Speaking Task 1, you&apos;ll speak about a familiar topic. Your response will be scored on your ability to speak clearly and coherently about the topics. You&apos;ll have 15 seconds to prepare your answer and 45 seconds to speak.
                    </p>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        We recommend you practice taking notes with a pen and paper like you will during your TOEFL exam.
                    </p>
                    <button onClick={handleStartTask} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Start Task
                    </button>
                </div>
            )}
            {stage === 'task1' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 1: Speak about a familiar topic</h3>
                    <p className="mb-4"><strong>Question:</strong> Should schools engage in character education to instill morals and values in children?</p>
                    {renderTimer(5, () => setStage('prepare'))}
                </div>
            )}
            {stage === 'prepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Prepare Your Answer</h3>
                    <p className="mb-4"><strong>Question:</strong> Should schools engage in character education to instill morals and values in children?</p>
                    <p className="mb-4">You have 15 seconds to prepare your answer.</p>
                    {renderTimer(15, () => setStage('speak'))}
                </div>
            )}
            {stage === 'speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> Should schools engage in character education to instill morals and values in children?</p>
                    <p className="mb-4">You have 45 seconds to speak.</p>
                    {renderTimer(45, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task2Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 2 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task2Intro}
                    </p>
                    <button onClick={handleContinueToTask2} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 2
                    </button>
                </div>
            )}
            {stage === 'task2Passage' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 2 Passage</h3>
                    <p className="mb-4">{task2Passage}</p>
                    {renderTimer(50, () => setStage('task2Conversation'))}
                </div>
            )}
            {stage === 'task2Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Conversation</h3>
                    <ReactAudioPlayer
                        src="/assets/T1S1.mp3"
                        controls
                    />
                    <button onClick={handleContinueToQuestion} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
                </div>
            )}
            {stage === 'task2QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 2 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> The man expresses his opinion of group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.</p>
                    <p className="mb-4">You have 40 seconds to prepare your answer.</p>
                    {renderTimer(40, () => setStage('task2Speak'))}
                </div>
            )}
            {stage === 'task2Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> The man expresses his opinion of group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.</p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task2Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task3Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 3 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task2Intro}
                    </p>
                    <button onClick={handleContinueToTask3} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 3
                    </button>
                </div>
            )}
            {stage === 'task3Passage' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 3 Passage</h3>
                    <p className="mb-4">{task3Passage}</p>
                    {renderTimer(50, () => setStage('task3Conversation'))}
                </div>
            )}
            {stage === 'task3Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Lecture</h3>
                    <ReactAudioPlayer
                        src="/assets/T1S2.mp3"
                        controls
                    />
                    <button onClick={() => setStage('task3QuestionPrepare')} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
                </div>
            )}
            {stage === 'task3QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 3 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> One theory of learning states that we use three sensory receivers: visual (V), auditory (A), and kinesthetic (K) when we take in information. According to the VAK theory, one or two of these receiving styles is normally dominant and thus defines the best way for a person to learn new information. Thus a visual learner learns best using their sight; an auditory learner learns best when listening, and a kinesthetic learner learns best through physical activity. VAK is one of the most popular learning models nowadays due to its simplicity. Teachers are beginning to incorporate a range of stimuli and activities into their lessons so as to cater for all types of learner. Although it is not yet proven that using one’s preferred sense provides the best means for learning, having a range of activities can reduce boredom and increase motivation in the classroom.</p>
                    <p className="mb-4">You have 40 seconds to prepare your answer.</p>
                    {renderTimer(40, () => setStage('task3Speak'))}
                </div>
            )}
            {stage === 'task3Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> One theory of learning states that we use three sensory receivers: visual (V), auditory (A), and kinesthetic (K) when we take in information. According to the VAK theory, one or two of these receiving styles is normally dominant and thus defines the best way for a person to learn new information. Thus a visual learner learns best using their sight; an auditory learner learns best when listening, and a kinesthetic learner learns best through physical activity. VAK is one of the most popular learning models nowadays due to its simplicity. Teachers are beginning to incorporate a range of stimuli and activities into their lessons so as to cater for all types of learner. Although it is not yet proven that using one’s preferred sense provides the best means for learning, having a range of activities can reduce boredom and increase motivation in the classroom.</p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task3Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task4Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 4 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task4Intro}
                    </p>
                    <button onClick={() => setStage('task4Conversation')} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 4
                    </button>
                </div>
            )}
            {stage === 'task4Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Conversation</h3>
                    <ReactAudioPlayer
                        src="/assets/T1S3.mp3"
                        controls
                    />
                    <button onClick={handleContinueTo4Question} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
                </div>
            )}
            {stage === 'task4QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 4 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> The man expresses his opinion on group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.</p>
                    <p className="mb-4">You have 20 seconds to prepare your answer.</p>
                    {renderTimer(20, () => setStage('task4Speak'))}
                </div>
            )}
            {stage === 'task4Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> The man expresses his opinion on group work. State and explain his opinion. Compare his opinion with the opinion of the geology faculty.</p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => {})}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task4Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakingSection;
