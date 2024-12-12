const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "keyboard",
        hint: "An input device with keys for typing letters and symbols."
    },
    {
        word: "dolphin",
        hint: "A highly intelligent aquatic mammal known for its playful behavior."
    },
    {
        word: "pyramid",
        hint: "A massive structure with a square base and four triangular faces."
    },
    {
        word: "television",
        hint: "A device used for receiving broadcast signals and displaying them as pictures and sound."
    },
    {
        word: "volcano",
        hint: "A mountain that erupts with lava, ash, and gases from below the Earth's surface."
    },
    {
        word: "hamburger",
        hint: "A type of sandwich consisting of a ground beef patty in a bun."
    },
    {
        word: "bicycle",
        hint: "A two-wheeled vehicle powered by pedaling."
    },
    {
        word: "computer",
        hint: "An electronic device for processing and storing data."
    },
    {
        word: "lighthouse",
        hint: "A tall structure with a light at the top to guide ships at sea."
    },
    {
        word: "jungle",
        hint: "A dense, tropical forest with abundant plant and animal life."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans, often eaten as a snack."
    },
    {
        word: "rainbow",
        hint: "A colorful arc in the sky caused by the refraction of sunlight through water droplets."
    },
    {
        word: "skeleton",
        hint: "The framework of bones that supports the body of vertebrates."
    },
    {
        word: "library",
        hint: "A place where books, magazines, and other materials are kept for reading or borrowing."
    },
    {
        word: "elephant",
        hint: "A large mammal with a long trunk and tusks."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to observe distant objects, such as stars or planets."
    },
    {
        word: "dinosaur",
        hint: "An extinct group of reptiles that lived millions of years ago."
    },
    {
        word: "zebra",
        hint: "A wild animal known for its black and white stripes."
    },
    {
        word: "piano",
        hint: "A large musical instrument with keys that are struck to produce sound."
    },
    {
        word: "octopus",
        hint: "A sea creature with eight arms and a bulbous head."
    },
    {
        word: "beach",
        hint: "A sandy shore along a body of water, often visited for relaxation."
    },
    {
        word: "robot",
        hint: "A machine designed to carry out tasks automatically or via programming."
    },
    {
        word: "credit",
        hint: "An agreement where a borrower receives something now and agrees to pay later."
    },
    {
        word: "mortgage",
        hint: "A loan used to purchase property, with the property as collateral."
    },
    {
        word: "equity",
        hint: "The value of ownership interest in a company or asset."
    },
    {
        word: "dividends",
        hint: "Payments made by a corporation to its shareholders, typically from profits."
    },
    {
        word: "revenue",
        hint: "The total income generated by the sale of goods or services."
    },
    {
        word: "bond",
        hint: "A debt security, similar to an IOU, issued by corporations or governments."
    },
    {
        word: "inflation",
        hint: "The rate at which the general level of prices for goods and services rises."
    },
    {
        word: "liquidity",
        hint: "The availability of liquid assets to a market or company."
    },
    {
        word: "portfolio",
        hint: "A collection of investments owned by an individual or organization."
    },
    {
        word: "assets",
        hint: "Resources owned by a business or individual that have economic value."
    },
    {
        word: "stock",
        hint: "A share of ownership in a corporation, typically traded on the stock market."
    },
    {
        word: "capital",
        hint: "Money or assets used for investment or business operations."
    },
    {
        word: "interest",
        hint: "The cost of borrowing money, usually expressed as a percentage."
    },
    {
        word: "recession",
        hint: "A period of economic decline, typically defined by two consecutive quarters of negative GDP growth."
    },
    {
        word: "debt",
        hint: "An amount of money borrowed that is expected to be paid back with interest."
    },
    {
        word: "valuation",
        hint: "The process of determining the current worth of an asset or company."
    },
    {
        word: "fund",
        hint: "A pool of money used for investment purposes, such as a mutual fund or hedge fund."
    },
    {
        word: "taxation",
        hint: "The system by which governments collect money from individuals or corporations."
    },
    {
        word: "savings",
        hint: "The portion of income not spent on consumption, set aside for future use."
    },
    {
        word: "broker",
        hint: "A person or firm that buys and sells financial assets on behalf of clients."
    },
    {
        word: "blockchain",
        hint: "A decentralized digital ledger used to record transactions securely."
    },
    {
        word: "cryptocurrency",
        hint: "A digital or virtual currency using cryptography for security, such as Bitcoin."
    },
    {
        word: "fintech",
        hint: "A technology-driven industry focused on improving financial services."
    },
    {
        word: "robo-advisor",
        hint: "An automated platform providing financial advice based on algorithms."
    },
    {
        word: "peer-to-peer",
        hint: "A decentralized platform that allows individuals to lend or borrow money directly."
    },
    {
        word: "digital-wallet",
        hint: "A software application for storing and managing digital currency and payment methods."
    },
    {
        word: "insurtech",
        hint: "The use of technology to disrupt and improve the insurance industry."
    },
    {
        word: "neobank",
        hint: "A type of online bank that operates without physical branches."
    },
    {
        word: "crowdfunding",
        hint: "The practice of raising money for a project or business from a large number of people online."
    },
    {
        word: "smart-contract",
        hint: "Self-executing contracts with the terms of the agreement directly written into code."
    },
    {
        word: "compliance",
        hint: "The process of ensuring that a company adheres to laws and regulations."
    },
    {
        word: "regtech",
        hint: "Technology used to help companies comply with regulatory requirements."
    },
    {
        word: "AML",
        hint: "Anti-Money Laundering regulations designed to prevent illegal financial activities."
    },
    {
        word: "KYC",
        hint: "Know Your Customer process used by businesses to verify the identity of their clients."
    },
    {
        word: "GDPR",
        hint: "General Data Protection Regulation, a law governing data privacy in the EU."
    },
    {
        word: "risk-management",
        hint: "The process of identifying, assessing, and controlling threats to an organization's assets."
    },
    {
        word: "audit-trail",
        hint: "A record of all the actions and transactions within a system to ensure accountability."
    },
    {
        word: "cybersecurity",
        hint: "The practice of protecting systems, networks, and data from cyberattacks."
    },
    {
        word: "data-encryption",
        hint: "The process of converting information into a secure format to protect it from unauthorized access."
    },
    {
        word: "reporting",
        hint: "The process of submitting compliance reports required by regulators."
    },
    {
        word: "sustainability",
        hint: "The ability to maintain financial, social, and environmental balance for the long term."
    },
    {
        word: "transparency",
        hint: "The practice of being open and clear about banking practices, policies, and decisions."
    },
    {
        word: "ethical-lending",
        hint: "Providing loans that meet socially responsible standards and do not harm individuals or the environment."
    },
    {
        word: "financial-inclusion",
        hint: "Ensuring access to financial services for underserved or unbanked communities."
    },
    {
        word: "social-impact",
        hint: "The positive effect of banking activities on society and communities."
    },
    {
        word: "risk-management",
        hint: "The identification and management of potential financial, social, and environmental risks."
    },
    {
        word: "corporate-governance",
        hint: "The system by which banks are directed and controlled, ensuring accountability and fairness."
    },
    {
        word: "customer-protection",
        hint: "Measures taken to ensure the safety, privacy, and fair treatment of bank customers."
    },
    {
        word: "climate-finance",
        hint: "Financial investments aimed at mitigating climate change or supporting sustainability initiatives."
    },
    {
        word: "green-banking",
        hint: "Banking practices focused on environmental sustainability, including financing eco-friendly projects."
    }
];