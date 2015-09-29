// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge on Desert Biomes!!",
        "main":    "<p>Think you can recall the different desert biomes?</p>",
        "results": "<h5>Sources</h5><p> wordpress.mrreid.org/2011/11/24/types-of-desert,brittanica.com,kalaharidesert.net/,eoearth.org,beautifulplacestovisit.com</p>",
        "level1":  "Geographical Genius",
        "level2":  "Desert Biome Know-it-all",
        "level3":  "Almost Biome Knowledgeable",
        "level4":  "Biome Newbie",
        "level5":  "Almost Doesn't Count" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What type of desert biome is Namib",
            "a": [
                {"option": "coastal",      "correct": true},
                {"option": "semi-arid",     "correct": false},
                {"option": "polar",      "correct": false},
                {"option": "sub-tropical",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Namib desert is located along the coast.</p>",
            "incorrect": "<p><span>Try again!</span>The Namib is a coastal desert biome.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The Gobi Desert is not located in?",
            "a": [
                {"option": "Mongolia",               "correct": false},
                {"option": "China",   "correct": false},
                {"option": "Nigeria",               "correct": true}

            ],
            "select_any": true,
            "correct": "<p><span>Yay!</span> You are a continent expert!</p>",
            "incorrect": "<p><span>Ummm.</span> You might want to reconsider your studying geography.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A semi-arid desert biome is which of the following?",
            "a": [
                {"option": "Gobi Desert",           "correct": false},
                {"option": "Kalahari",                  "correct": false},
                {"option": "Utah Sagebrush",  "correct": true},
                {"option": "Sahara",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep it up!.</p>",
            "incorrect": "<p><span>Not Quite.</span>Utah Sagebrush is an example of a semi-arid desert biome. </p>" // no comma here
        },
        { // Question 4
            "q": "All of the following are desert biomes except?",
            "a": [
                {"option": "semi-arid",    "correct": false},
                {"option": "polar",     "correct": false},
                {"option": "coastal",      "correct": false},
                {"option": "tropical",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yes!</span> Tropical is not a desert biome. </p>",
            "incorrect": "<p><span>Fail.</span> Sorry, that is incorrect. .</p>" // no comma here
        },
        { // Question 5
            "q": "Which desert listed receives the most rainfall?",
            "a": [
                {"option": "Kalahari",    "correct": true},
                {"option": "Sahara",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</p>",
            "incorrect": "<p><span>Nope</span>That's is incorrect.</p>" // no comma here
        } // no comma here
    ]
};
