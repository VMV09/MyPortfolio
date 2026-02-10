import { useState } from "react";
import { MoveRight } from "lucide-react";

export const CardStack = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            type: "image",
            content: "/profile-photo.jpg",
            alt: "Vishruth M V",
            label: "Profile",
            title: "Vishruth M V",
            subtitle: "Software Engineer"
        },
        {
            id: 2,
            type: "image",
            content: "/profile-photo.jpg",
            alt: "Vishruth M V",
            label: "Expertise",
            title: "System Architect",
            subtitle: "Building Scalable Solutions"
        },
        {
            id: 3,
            type: "image",
            content: "/profile-photo.jpg",
            alt: "Vishruth M V",
            label: "Research",
            title: "AI Researcher",
            subtitle: "ML & Data Science"
        },
    ]);

    return (
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] md:aspect-square flex items-center justify-center">
            <div className="relative w-full h-full">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        isFront={index === cards.length - 1}
                        onSwipe={() => {
                            setCards((prev) => {
                                const newCards = [...prev];
                                const swipedCard = newCards.pop();
                                newCards.unshift(swipedCard);
                                return newCards;
                            });
                        }}
                    />
                ))}
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-text-muted text-sm font-medium flex items-center gap-2 opacity-50 animate-pulse">
                <MoveRight className="w-4 h-4" /> Swipe to explore
            </div>
        </div>
    );
};

const Card = ({ card, index, isFront, onSwipe }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handleStart = (clientX, clientY) => {
        if (!isFront) return;
        setIsDragging(true);
        setStartPos({ x: clientX, y: clientY });
    };

    const handleMove = (clientX, clientY) => {
        if (!isDragging) return;
        const deltaX = clientX - startPos.x;
        const deltaY = clientY - startPos.y;
        setPosition({ x: deltaX, y: deltaY });
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;
        if (Math.abs(position.x) > threshold) {
            // Swipe animation (simple version without framer-motion)
            const direction = position.x > 0 ? 1 : -1;
            const flyOutX = direction * 500; // Fly off screen

            // We'll use a timeout to change the state after visual "exit" could theoretically happen
            // But without animation libraries, we can just trigger the state change.
            // To make it smooth, we might want to manually set a "flying" state, but let's keep it simple for now or use CSS transitions.
            onSwipe();
        }
        setPosition({ x: 0, y: 0 });
    };

    // Mouse Handlers
    const onMouseDown = (e) => handleStart(e.clientX, e.clientY);
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => isDragging && handleEnd();

    // Touch Handlers
    const onTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchEnd = () => handleEnd();

    const rotate = isDragging ? position.x * 0.05 : 0;

    // Style for the cards in the back
    const offset = (cardsTotal, i) => {
        // Logic to stack cards visually behind
        // If Front (cardsTotal - 1), offset is 0
        // Behind 1: scale 0.95, y -10
        // Behind 2: scale 0.9, y -20
        return {
            scale: 1 - (cardsTotal - 1 - i) * 0.05,
            y: -(cardsTotal - 1 - i) * 15,
            zIndex: i
        }
    }

    // We only render dragging logic for the FRONT card
    // But we need to calculate styles for ALL cards
    // Since we are mapping, `index` is 0,1,2. `length-1` is front.

    const isBack = !isFront;
    const styleOffset = isBack ? {
        scale: 1 - ((2 - index) * 0.05), // Assuming 3 cards max for simplicity in offset logic here, dynamically: (total-1-index)
        y: -((2 - index) * 15),
        zIndex: index
    } : {
        scale: 1,
        y: 0,
        zIndex: 100
    };

    // Dynamic style
    const style = {
        transform: isDragging
            ? `translate(${position.x}px, ${position.y}px) rotate(${rotate}deg)`
            : `translate(0px, ${styleOffset.y}px) scale(${styleOffset.scale})`,
        zIndex: styleOffset.zIndex,
        transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        cursor: isFront ? 'grab' : 'default',
    };

    return (
        <div
            className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-background select-none ${isFront ? 'active:cursor-grabbing' : ''}`}
            style={style}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {card.type === "image" ? (
                <div className="w-full h-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                        src={card.content}
                        alt={card.alt}
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="px-3 py-1 rounded-full bg-google-blue/20 border border-google-blue/30 text-google-blue text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-2 inline-block">
                            {card.label}
                        </span>
                        <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                        <p className="text-white/60 text-sm font-medium">{card.subtitle}</p>
                    </div>
                </div>
            ) : (
                <div
                    className="w-full h-full flex flex-col items-center justify-center p-8 bg-surface text-center relative overflow-hidden"
                    style={{ backgroundColor: '#1e1e1e' }} // Fallback/base color
                >
                    {/* Decorative Background */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(${card.color} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }}
                    />

                    <div className="relative z-10">
                        <div className="w-20 h-20 rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg transform rotate-3"
                            style={{ backgroundColor: `${card.color}20` }}>
                            <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: card.color }} />
                        </div>

                        <h3 className="text-3xl font-bold text-text-primary mb-2">{card.title}</h3>
                        <p className="text-text-secondary font-medium">{card.subtitle}</p>
                    </div>

                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="px-3 py-1 rounded-full border border-white/10 text-text-muted text-xs font-bold uppercase tracking-widest bg-white/5">
                            {card.label}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
