export default function DoodleBackground() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <svg
                width="500"
                height="600"
                viewBox="0 0 500 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-25"
            >
                {/* Main figure outline - person silhouette */}
                <ellipse cx="250" cy="200" rx="85" ry="105" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* Hair/head area - curly hair style */}
                <path d="M165 120 Q180 100 200 115 Q220 95 240 110 Q260 90 280 105 Q300 85 320 100 Q340 80 360 95" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M155 140 Q175 120 195 135 Q215 115 235 130 Q255 110 275 125 Q295 105 315 120 Q335 100 355 115" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M150 160 Q170 140 190 155 Q210 135 230 150 Q250 130 270 145 Q290 125 310 140 Q330 120 350 135" stroke="#ffffff" strokeWidth="2" fill="none" />

                {/* Facial features */}
                <circle cx="220" cy="180" r="6" fill="#ffffff" />
                <circle cx="280" cy="180" r="6" fill="#ffffff" />
                <path d="M250 190 L255 205 L245 205 Z" fill="#ffffff" />
                <path d="M235 220 Q250 230 265 220" stroke="#ffffff" strokeWidth="2" fill="none" />

                {/* Shirt/clothing area */}
                <path d="M180 310 L250 330 L320 310 L340 360 L250 380 L160 360 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
                <path d="M220 330 L250 340 L280 330" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M200 350 L250 360 L300 350" stroke="#ffffff" strokeWidth="2" fill="none" />

                {/* Abstract decorative elements around the figure */}
                <circle cx="120" cy="200" r="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle cx="380" cy="180" r="25" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle cx="100" cy="350" r="15" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle cx="400" cy="320" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* Geometric shapes */}
                <rect x="80" y="120" width="25" height="25" fill="none" stroke="#ffffff" strokeWidth="2" transform="rotate(45 92.5 132.5)" />
                <rect x="380" y="280" width="30" height="30" fill="none" stroke="#ffffff" strokeWidth="2" transform="rotate(45 395 295)" />
                <polygon points="420,120 440,150 400,150" fill="none" stroke="#ffffff" strokeWidth="2" />
                <polygon points="60,280 80,310 40,310" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* Wavy decorative lines */}
                <path d="M50 400 Q70 380 90 400 T130 400 T170 400" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M330 450 Q350 430 370 450 T410 450 T450 450" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M60 160 Q80 140 100 160 T140 160" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M360 240 Q380 220 400 240 T440 240" stroke="#ffffff" strokeWidth="2" fill="none" />

                {/* Stars and sparkles */}
                <path d="M150 80 L155 95 L170 95 L158 105 L163 120 L150 110 L137 120 L142 105 L130 95 L145 95 Z" fill="#ffffff" />
                <path d="M350 400 L353 408 L361 408 L355 413 L358 421 L350 417 L342 421 L345 413 L339 408 L347 408 Z" fill="#ffffff" />
                <path d="M80 300 L83 308 L91 308 L85 313 L88 321 L80 317 L72 321 L75 313 L69 308 L77 308 Z" fill="#ffffff" />

                {/* Abstract organic shapes */}
                <path d="M120 450 Q140 430 160 450 Q180 470 160 490 Q140 470 120 450" fill="none" stroke="#ffffff" strokeWidth="2" />
                <path d="M340 100 Q360 80 380 100 Q400 120 380 140 Q360 120 340 100" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* Dotted patterns */}
                <circle cx="200" cy="50" r="2" fill="#ffffff" />
                <circle cx="210" cy="60" r="2" fill="#ffffff" />
                <circle cx="220" cy="70" r="2" fill="#ffffff" />

                <circle cx="300" cy="500" r="2" fill="#ffffff" />
                <circle cx="310" cy="510" r="2" fill="#ffffff" />
                <circle cx="320" cy="520" r="2" fill="#ffffff" />

                {/* Lightning bolt */}
                <path d="M450 180 L460 200 L455 200 L465 220 L450 205 L455 205 L445 185 Z" fill="#ffffff" />

                {/* Spiral */}
                <path d="M50 250 Q60 240 70 250 Q80 260 70 270 Q60 280 50 270 Q40 260 50 250" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* Additional decorative elements */}
                <ellipse cx="180" cy="480" rx="40" ry="20" fill="none" stroke="#ffffff" strokeWidth="2" />
                <ellipse cx="320" cy="60" rx="30" ry="15" fill="none" stroke="#ffffff" strokeWidth="2" />

                {/* More abstract lines */}
                <path d="M70 200 Q90 180 110 200 Q130 220 110 240 Q90 220 70 200" fill="none" stroke="#ffffff" strokeWidth="2" />
                <path d="M390 150 Q410 130 430 150 Q450 170 430 190 Q410 170 390 150" fill="none" stroke="#ffffff" strokeWidth="2" />
            </svg>
        </div>
    )
}