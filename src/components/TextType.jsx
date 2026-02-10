import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const TextType = ({
    text,
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000,
    loop = true,
    className = '',
    cursorCharacter = '|',
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const cursorRef = useRef(null);

    const phrases = Array.isArray(text) ? text : [text];

    useEffect(() => {
        // Blinking cursor animation
        const cursorAnimation = gsap.to(cursorRef.current, {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });

        return () => cursorAnimation.kill();
    }, []);

    useEffect(() => {
        let timer;

        const handleTyping = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                setDisplayedText(prev => prev.slice(0, -1));

                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            } else {
                setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));

                if (displayedText.length === currentPhrase.length) {
                    if (!loop && phraseIndex === phrases.length - 1) return;

                    timer = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                    return;
                }
            }
        };

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, loop]);

    return (
        <span className={className}>
            {displayedText}
            <span ref={cursorRef} className="ml-0.5 text-google-blue font-light">
                {cursorCharacter}
            </span>
        </span>
    );
};
