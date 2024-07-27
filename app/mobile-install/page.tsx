"use client";
import { useState, useEffect } from 'react';

type BeforeInstallPromptEvent = Event & {
    prompt: () => void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function InstallPage() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
            console.log('beforeinstallprompt event fired');
            e.preventDefault();
            setDeferredPrompt(e);
            console.log('deferredPrompt set');
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
        };
    }, []);

    const handleInstallClick = () => {
        console.log('Install button clicked');
        if (deferredPrompt) {
            console.log('Prompting install');
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                setDeferredPrompt(null);
            });
        } else {
            console.log('Deferred prompt not available');
        }
    };

    return (
        <div>
            <h1>Install Our App</h1>
            <button onClick={handleInstallClick} className='border-2 border-black p-10'>
                Install App
            </button>
        </div>
    );
}
