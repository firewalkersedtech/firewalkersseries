// MASTER DATABASE OF QUESTIONS
// Key matches the Top Card in shifts.html for easy testing

const allExamData = {

    // ============================================
    // SHIFT DATA: 12 Sep 2025 (Mapped to Shift-3 for visibility)
    // ============================================
    "12 Sep 2025 | Shift-3 (04:00 PM)": [
        
        // --- SECTION 1: REASONING (Q1-Q25) ---
        {
            id: 1, section: "Reasoning",
            text: "Select the option that is related to the third term in the same way as the second term is related to the first term.\n\nWatt : Power :: Pascal : ?",
            options: ["Energy", "Temperature", "Pressure", "Force"],
            correct: "Pressure"
        },
        {
            id: 2, section: "Reasoning",
            text: "Select the related word pair.\n\nMekong : Tibet :: Amazon : ?",
            options: ["Chile", "Peru", "Colombia", "Ecuador"],
            correct: "Peru"
        },
        {
            id: 3, section: "Reasoning",
            text: "Select the letter-cluster that can replace the question mark (?) in the following series.\n\nCGK, GKO, KOS, OSW, ?",
            options: ["SDA", "KNB", "SWA", "KJH"],
            correct: "SWA"
        },
        {
            id: 4, section: "Reasoning",
            text: "Select the letter-cluster that can replace the question mark (?) in the following series.\n\nMIN, NJM, OKL, PLK, ?",
            options: ["QWS", "HGF", "QMJ", "UJH"],
            correct: "QWS"
        },
        {
            id: 5, section: "Reasoning",
            text: "Select the letter-cluster that can replace the question mark (?)\n\nBRF, EUH, HXJ, KAL, ?",
            options: ["NMB", "NKH", "NHG", "NDN"],
            correct: "NMB"
        },
        {
            id: 6, section: "Reasoning",
            text: "Select the letter-cluster that can replace the question mark (?)\n\nWZWT, WVOH, WRGV, WNYJ, ?",
            options: ["WJQX", "WJQW", "WHPX", "WJPX"],
            correct: "WJQX"
        },
        {
            id: 7, section: "Reasoning",
            text: "Select the letter-cluster that can replace the question mark (?)\n\nMCFI, NEKP, OGPW, PIUD, ?",
            options: ["NKYD", "QLYL", "QKZK", "QKZL"],
            correct: "NKYD"
        },
        {
            id: 8, section: "Reasoning",
            text: "What comes next in the number series?\n\n3, 12, 7, 16, 11, 20, 15, ?",
            options: ["16", "24", "14", "18"],
            correct: "16"
        },
        {
            id: 9, section: "Reasoning",
            text: "How many letters are there in the English alphabetical series between the letter that is 2nd from the left and 4th from the right in the word 'STUDENT'?",
            options: ["17", "13", "11", "15"],
            correct: "13"
        },
        {
            id: 10, section: "Reasoning",
            text: "Which of the following addresses is identical to: 'Arjun Mehta A-101, Emerald Towers, Surat, 395001'?",
            options: ["1 and 2", "1 and 3", "2 and 4", "3 and 4"],
            correct: "1 and 2"
        },
        {
            id: 11, section: "Reasoning",
            text: "Which of the following is/are identical to the address given: Meenal Gupta 102, Silver Oaks, Sector 12, Noida, 201301",
            options: ["1", "3", "2", "4"],
            correct: "1"
        },
        {
            id: 12, section: "Reasoning",
            text: "Find the option that best completes the analogy.\n\nAG : IO :: CM : ?",
            options: ["KO", "KU", "KS", "KW"],
            correct: "KO"
        },
        {
            id: 13, section: "Reasoning",
            text: "A is facing North. B is seated second to the right of A. Who is sitting immediately to the left of B?",
            options: ["The person seated to the immediate right of A", "The person seated opposite to A", "The person seated to the immediate left of A", "Cannot be determined"],
            correct: "The person seated to the immediate right of A"
        },
        {
            id: 14, section: "Reasoning",
            text: "TIME : VJOG :: WORD : ?",
            options: ["YPTF", "YQTG", "YPSF", "ZPSF"],
            correct: "YPTF"
        },
        {
            id: 15, section: "Reasoning",
            text: "GNIDAER : READING :: NOITULOS : ?",
            options: ["SOLUTION", "SOLUNOIT", "NOILOSUT", "POLLUTION"],
            correct: "SOLUTION"
        },
        {
            id: 16, section: "Reasoning",
            text: "AYRRJC : CATTLE :: NCPDCAR : ?",
            options: ["SUBJECTS", "NEGLECT", "PERFECT", "OPERATE"],
            correct: "PERFECT"
        },
        {
            id: 17, section: "Reasoning",
            text: "Identify the odd one: 2, 3, 5, 7, 11, 13, 17, 20",
            options: ["17", "13", "20", "11"],
            correct: "20"
        },
        {
            id: 18, section: "Reasoning",
            text: "Which of the following is the odd one out?",
            options: ["2,3,5", "11,13,17", "4,6,8", "7,19,23"],
            correct: "4,6,8"
        },
        {
            id: 19, section: "Reasoning",
            text: "Rani said, 'The man in the photo is my mother's son-in-law.' Who is the man to Rani?",
            options: ["Husband", "Father", "Uncle", "Cousin"],
            correct: "Husband"
        },
        {
            id: 20, section: "Reasoning",
            text: "Identify the group that does NOT follow the same pattern.",
            options: ["K11:I9:G7", "M13:K11:I9", "O15:M13:K11", "N14:K11:H8"],
            correct: "N14:K11:H8"
        },
        {
            id: 21, section: "Reasoning",
            text: "Identify the group that does NOT follow the same pattern.",
            options: ["A1@: B2#: C3$", "D4%:E5^: F6&", "G7*: H8(: I9", "J10_: K11@: L12@"],
            correct: "J10_: K11@: L12@"
        },
        {
            id: 22, section: "Reasoning",
            text: "Pointing to a man, a woman said, 'His mother is the only daughter of my father.' How is the man related to the woman?",
            options: ["Son", "Nephew", "Cousin", "Grandson"],
            correct: "Son"
        },
        {
            id: 23, section: "Reasoning",
            text: "Pointing to a woman, John says, 'She is the wife of my uncle's only son.' How is the woman related to John?",
            options: ["Sister", "Cousin", "Sister-in-law", "Niece"],
            correct: "Sister-in-law"
        },
        {
            id: 24, section: "Reasoning",
            text: "A man said, 'My mother's husband's only son is the father of your sister's brother.' How is the man related to you?",
            options: ["Uncle", "Father", "Grandfather", "Brother"],
            correct: "Father"
        },
        {
            id: 25, section: "Reasoning",
            text: "If # = ×, @ = -, $ = +, then evaluate: 9 # 2 @ 3 $ 1",
            options: ["18", "14", "16", "17"],
            correct: "16"
        },

        // --- SECTION 2: GENERAL AWARENESS (Q26-Q50) ---
        {
            id: 26, section: "GK",
            text: "Which of the following features distinguishes the Elephanta Caves from other rock-cut sites of early India?",
            options: ["Buddhist caves", "Shaivite themes", "Jain depictions", "Mauryan structures"],
            correct: "Shaivite themes"
        },
        {
            id: 27, section: "GK",
            text: "Goncha Festival of Bastar: 1. Tupki uses Goncha fruit. 2. Chariot by Chalukya. 3. Rath Yatra dates.",
            options: ["Only 1 and 2", "Only 2 and 3", "Only 1 and 3", "1, 2 and 3 are correct"],
            correct: "1, 2 and 3 are correct"
        },
        {
            id: 28, section: "GK",
            text: "In Carnatic music, a laghu with five beats is known as ___ jaati.",
            options: ["Tishra", "Chaturashra", "Khanda", "Mishra"],
            correct: "Khanda"
        },
        {
            id: 29, section: "GK",
            text: "Which of the following statements about Judo is correct?",
            options: ["Introduced in 1882", "First National 1970", "Kalpana Devi won gold", "Olympic sport in 1965"],
            correct: "Introduced in 1882"
        },
        {
            id: 30, section: "GK",
            text: "Where and when will the 59th National Cross Country Championships - 2025 be held?",
            options: ["Lucknow, UP", "Meerut, UP", "Kanpur, UP", "Jaipur, Rajasthan"],
            correct: "Jaipur, Rajasthan"
        },
        {
            id: 31, section: "GK",
            text: "What is the core structural focus of the 2024 India-UAE Bilateral Investment Treaty (BIT)?",
            options: ["Joint sovereign funds", "Pre-establishment rights", "Post-establishment investor confidence", "GCC-wide tax"],
            correct: "Post-establishment investor confidence"
        },
        {
            id: 32, section: "GK",
            text: "The Santosh Trophy 2022-23 final was uniquely held in ____.",
            options: ["Dubai", "Riyadh", "Doha", "Muscat"],
            correct: "Riyadh"
        },
        {
            id: 33, section: "GK",
            text: "Essence of 'Landscapes of Loss' by Kavitha Iyer?",
            options: ["Drought's human impact", "Fictional story", "History of monsoon", "Colonial analysis"],
            correct: "Drought's human impact"
        },
        {
            id: 34, section: "GK",
            text: "Glacial landforms: 1. Hanging valleys. 2. Truncated spurs.",
            options: ["Only 1", "Only 2", "1 and 2 are correct", "Neither"],
            correct: "1 and 2 are correct"
        },
        {
            id: 35, section: "GK",
            text: "Primary function of Crew Escape System (CES) on ISRO's HLVM3?",
            options: ["Guide to orbit", "Eject crew module", "Docking", "Thermal shielding"],
            correct: "Eject crew module"
        },
        {
            id: 36, section: "GK",
            text: "About Justice Sanjiv Khanna: 1. 51st CJI. 2. Succeeded Chandrachud. 3. CJI from 2023.",
            options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "All are true"],
            correct: "1 and 2 only"
        },
        {
            id: 37, section: "GK",
            text: "Objectives of National Population Policy 2000?",
            options: ["1 and 2", "1 and 3", "1, 3 and 4", "All are correct"],
            correct: "1, 3 and 4"
        },
        {
            id: 38, section: "GK",
            text: "Which pathway in cellular respiration generates the most ATP?",
            options: ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
            correct: "Electron transport chain"
        },
        {
            id: 39, section: "GK",
            text: "Chronological order: a. Eastern Zonal 2022, b. States Reorg Act, c. Central Zonal First.",
            options: ["b-c-a", "c-b-a", "a-b-c", "b-a-c"],
            correct: "b-a-c"
        },
        {
            id: 40, section: "GK",
            text: "Right to property under Article 300A?",
            options: ["Fundamental right", "Deprive without process", "Constitutional legal right", "Claim under Art 32"],
            correct: "Constitutional legal right"
        },
        {
            id: 41, section: "GK",
            text: "For a rigid body, angular velocity of any particle is:",
            options: ["Proportional to distance", "The same for all particles", "Inversely proportional", "Zero"],
            correct: "The same for all particles"
        },
        {
            id: 42, section: "GK",
            text: "Bharatiya Sakshya Adhiniyam (BSA) emphasis on technology is relevant for:",
            options: ["Physical exhibits", "Hand-written diaries", "Digital and electronic evidence", "Oral confessions"],
            correct: "Digital and electronic evidence"
        },
        {
            id: 43, section: "GK",
            text: "Assertion: One Nation One Ration Card ensures portability. Reason: Uses Aadhaar biometric.",
            options: ["Both true, R explains A", "Both true, R not explanation", "A true, R false", "A false, R true"],
            correct: "Both true, R explains A"
        },
        {
            id: 44, section: "GK",
            text: "Cheraw (bamboo dance) is a folk dance of:",
            options: ["Mizoram", "Meghalaya", "Arunachal", "Sikkim"],
            correct: "Mizoram"
        },
        {
            id: 45, section: "GK",
            text: "Key factor in Global Firepower Military Strength Ranking 2025?",
            options: ["Economic Stability", "Cultural Influence", "Defense Budget", "Healthcare"],
            correct: "Economic Stability"
        },
        {
            id: 46, section: "GK",
            text: "Cooperative sector industries are:",
            options: ["Govt owned", "Export only", "Owned by workers/suppliers", "Foreign companies"],
            correct: "Owned by workers/suppliers"
        },
        {
            id: 47, section: "GK",
            text: "Education is under which list after 42nd Amendment?",
            options: ["Union", "State", "Concurrent", "Judicial"],
            correct: "Concurrent"
        },
        {
            id: 48, section: "GK",
            text: "Main objective of National Framework for Climate Services (NFCS)?",
            options: ["Emission targets", "Groundwater", "Sector-specific climate info", "Carbon offsetting"],
            correct: "Sector-specific climate info"
        },
        {
            id: 49, section: "GK",
            text: "Argon is produced in Earth's crust via?",
            options: ["Decay of K-40", "Volcanoes", "Photosynthesis", "Cosmic rays"],
            correct: "Decay of K-40"
        },
        {
            id: 50, section: "GK",
            text: "True about Fundamental Rights and DPSPs?",
            options: ["Both justiciable", "DPSPs override", "Fundamental Rights justiciable, DPSPs not", "DPSPs guaranteed"],
            correct: "Fundamental Rights justiciable, DPSPs not"
        },

        // --- SECTION 3: QUANTITATIVE APTITUDE (Q51-Q75) ---
        {
            id: 51, section: "Quant",
            text: "Arrange the fractions 5/9, 4/7, 3/5, 2/3 in ascending order.",
            options: ["5/9 < 4/7 < 3/5 < 2/3", "2/3 < 3/5 < 4/7 < 5/9", "4/7 < 3/5 < 5/9 < 2/3", "3/5 < 5/9 < 2/3 < 4/7"],
            correct: "5/9 < 4/7 < 3/5 < 2/3"
        },
        {
            id: 52, section: "Quant",
            text: "Simplify: (2 1/2 + 3.6) - 1.9",
            options: ["4.2", "5.2", "6.2", "7.2"],
            correct: "4.2"
        },
        {
            id: 53, section: "Quant",
            text: "Evaluate: 7 1/4 - [5/6 ÷ {1/3 - (1/2 × (3/4 - 1/4))}]",
            options: ["-3 1/4", "3 1/4", "-2 3/4", "2 3/4"],
            correct: "3 1/4"
        },
        {
            id: 54, section: "Quant",
            text: "From 200 engineers: Python & Java (50), Python only (70), Java only (60), Neither (20). Ratio of Python proficient to Java proficient?",
            options: ["11:12", "12:11", "7:6", "6:7"],
            correct: "11:12"
        },
        {
            id: 55, section: "Quant",
            text: "Arvind invested 80k. Bhavin 120k (after 4 months). Chandan 160k (after 8 months). Profit 105,000. Chandan's share?",
            options: ["26,500", "26,000", "26,200", "26,250"],
            correct: "26,000"
        },
        {
            id: 56, section: "Quant",
            text: "A invests 80k for 9 months, B invests 120k for 6 months. Profit 45,000. B's share?",
            options: ["26,500", "28,000", "36,000", "22,500"],
            correct: "22,500"
        },
        {
            id: 57, section: "Quant",
            text: "Average of integers between 100 and 250 divisible by 11?",
            options: ["176", "186", "196", "146"],
            correct: "176"
        },
        {
            id: 58, section: "Quant",
            text: "Avg of 15 nums is 80. First 6 avg 72. Next 6 avg 25% more. 13th is 8>15th, 14th is 10<15th. Avg of 13th and 14th?",
            options: ["70.89", "85", "75.67", "80.65"],
            correct: "70.89"
        },
        {
            id: 59, section: "Quant",
            text: "Flat bought for 8,00,000. Wants 9% return after paying 2000/month maintenance. Monthly rent?",
            options: ["7,000", "7,500", "8,000", "8,500"],
            correct: "8,000"
        },
        {
            id: 60, section: "Quant",
            text: "Amount doubles in 5 years (CI). How many years to become 8 times?",
            options: ["15", "16", "17", "18"],
            correct: "15"
        },
        {
            id: 61, section: "Quant",
            text: "Sum becomes 6600 in 2 years and 7920 in 3 years (CI). Principal?",
            options: ["4000.33", "5583.33", "4583.33", "6583.33"],
            correct: "5583.33"
        },
        {
            id: 62, section: "Quant",
            text: "Suman: 25L @ 45, 15L @ 50. Mixed and sold @ 48. Profit/Loss?",
            options: ["Loss 45", "Profit 45", "Profit 90", "Loss 90"],
            correct: "Profit 45"
        },
        {
            id: 63, section: "Quant",
            text: "Toy manufacturer: 1200 cars cost 90k. Donated 200. Rest sold at 10% off 120. Offer: Buy 8 Get 2 Free. Overall Gain/Loss?",
            options: ["4% loss", "4% profit", "5% loss", "5% profit"],
            correct: "4% profit"
        },
        {
            id: 64, section: "Quant",
            text: "AC marked 80% above CP. Discount 25% + 10%. SP is 15,552. CP?",
            options: ["9,000", "9,200", "12,800", "10,000"],
            correct: "9,000"
        },
        {
            id: 65, section: "Quant",
            text: "40L mixture Juice:Water 5:3. How much water to add for 2:3 ratio?",
            options: ["15.5", "22.5", "25", "30"],
            correct: "22.5"
        },
        {
            id: 66, section: "Quant",
            text: "A takes 15 days, B takes 20 days. Work together for 4 days. Fraction remaining?",
            options: ["1/4", "7/15", "8/15", "11/15"],
            correct: "8/15"
        },
        {
            id: 67, section: "Quant",
            text: "Oils @ 90 and 150 mixed. Sold @ 144 (20% profit). Ratio?",
            options: ["1:1", "2:1", "3:2", "4:1"],
            correct: "4:1"
        },
        {
            id: 68, section: "Quant",
            text: "A, B, C fill tank in 6, 8, 12 hrs. All open for 2 hrs, then C closed. Additional time?",
            options: ["1 hr", "2 hrs", "3.5 hrs", "35/9 hrs"],
            correct: "35/9 hrs"
        },
        {
            id: 69, section: "Quant",
            text: "Bullet train: 30 min @ 240km/h. Distance increased 20%. New speed to reach on time?",
            options: ["280", "300", "288", "320"],
            correct: "288"
        },
        {
            id: 70, section: "Quant",
            text: "X and Y 360km apart. Meet in 4 hrs (opposite) or 12 hrs (same direction). Speed of X?",
            options: ["60", "75", "45", "90"],
            correct: "60"
        },
        {
            id: 71, section: "Quant",
            text: "Pizza r=21cm. 75% eaten. Remaining area?",
            options: ["173.25", "346.36", "432.25", "115.5"],
            correct: "346.36"
        },
        {
            id: 72, section: "Quant",
            text: "Ring disc: R=10, r=7. Ratio of Ring Area to Outer Circle?",
            options: ["1:2", "2:3", "3:4", "4:5"],
            correct: "1:2"
        },
        {
            id: 73, section: "Quant",
            text: "Wheel r=35cm. % of circumference in quarter turn?",
            options: ["15%", "25%", "30%", "35%"],
            correct: "25%"
        },
        {
            id: 74, section: "Quant",
            text: "Line y = mx + 5 passes through (1,8). Find m.",
            options: ["5", "4", "3", "2"],
            correct: "3"
        },
        {
            id: 75, section: "Quant",
            t
