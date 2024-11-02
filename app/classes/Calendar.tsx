"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowDownNarrowWide } from 'lucide-react';

interface ClassItem {
    date: string;
    time: string;
    duration: string;
    subject: string;
}

const classData: ClassItem[] = [
    { date: '4th Nov 2024', time: '10 pm to 11:30 pm', duration: '1.5 hrs', subject: 'PTE' },
    { date: '6th Nov 2024', time: '8 am to 9:30 am', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '6th Nov 2024', time: '8 pm to 9:30 pm', duration: '1.5 hrs', subject: 'GRE/GMAT' },
    { date: '8th Nov 2024', time: '4 pm to 5:30 pm', duration: '1.5 hrs', subject: 'SAT' },
    { date: '9th Nov 2024', time: '10 pm to 11:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '9th Nov 2024', time: '8 pm to 9:30 pm', duration: '1.5 hrs', subject: 'German A1' },
    { date: '11th Nov 2024', time: '10 pm to 11:30 pm', duration: '1.5 hrs', subject: 'Duolingo' },
    { date: '13th Nov 2024', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '14th Nov 2024', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'TOEFL' },
    { date: '16th Nov 2024', time: '8 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '19th Nov 2024', time: '8 am to 9:30 am', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '20th Nov 2024', time: '8 am to 9:30 am', duration: '1.5 hrs', subject: 'PTE' },
    { date: '22nd Nov 2024', time: '8 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '22nd Nov 2024', time: '7:30 am to 9 am', duration: '1.5 hrs', subject: 'GRE/GMAT' },
    { date: '25th Nov 2024', time: '8 am to 9:30 am', duration: '1.5 hrs', subject: 'Duolingo' },
    { date: '25th Nov 2024', time: '10 pm to 11:30 pm', duration: '1.5 hrs', subject: 'German A1' },
    { date: '26th Nov 2024', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
];

// Helper function to organize classes by subject
const organizeClassesBySubject = (classes: ClassItem[]): Record<string, ClassItem[]> => {
    return classes.reduce((acc: Record<string, ClassItem[]>, item: ClassItem) => {
        if (!acc[item.subject]) {
            acc[item.subject] = [];
        }
        acc[item.subject].push(item);
        return acc;
    }, {});
};

const ClassSchedule: React.FC = () => {
    const organizedClasses = organizeClassesBySubject(classData);

    // Initialize expandedSubjects with all subjects set to true
    const [expandedSubjects, setExpandedSubjects] = useState<{ [key: string]: boolean }>(
        Object.keys(organizedClasses).reduce((acc, subject) => {
            acc[subject] = true;
            return acc;
        }, {} as { [key: string]: boolean })
    );

    const toggleExpand = (subject: string) => {
        setExpandedSubjects((prev) => ({ ...prev, [subject]: !prev[subject] }));
    };

    return (
        <div>
            <h2 className="text-3xl text-center rounded-lg font-bold m-5">Upcoming Online Batches (MJ Study Abroad)</h2>
            {Object.keys(organizedClasses).map((subject) => (
                <div key={subject} className="flex flex-col p-5">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-2xl">{subject} Batches</span>
                        <Button onClick={() => toggleExpand(subject)} variant="outline">
                            {expandedSubjects[subject] ? 'Collapse' : 'Expand'}
                        </Button>
                    </div>
                    {expandedSubjects[subject] && (
                        <div className="flex flex-wrap gap-4">
                            {organizedClasses[subject].map((classItem, index) => (
                                <Card key={index} className="w-full md:w-1/2 lg:w-1/4">
                                    <CardHeader>
                                        <CardTitle>{classItem.date}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p><strong>Time:</strong> {classItem.time}</p>
                                        <p><strong>Duration:</strong> {classItem.duration}</p>
                                        <Button
                                            className="mt-2 bg-black text-white"
                                            onClick={() => {
                                                const message = `Hi, I'm interested in booking a demo for ${subject} classes. Could you please share the details? Thank you!`;
                                                const encodedMessage = encodeURIComponent(message);
                                                window.open(`https://wa.me/918802880181?text=${encodedMessage}`, "_blank");
                                            }}>
                                            Book Demo
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ClassSchedule;
