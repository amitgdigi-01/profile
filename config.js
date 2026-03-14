// ============================================
// CONFIGURATION - Edit these values
// ============================================

const CONFIG = {
    // Cloudflare Web Analytics Token
    cloudflareToken: 'b1ff6127cd074a228add9fddeaeea4c2',

    // Google Apps Script Web App URL
    appsScriptUrl: 'https://script.google.com/macros/s/AKfycbx-Wo7lBqioT5gtGotkdTSTYZv7SWvEC_V3V3e3V7jxBxvSB1lBgfoxauJjZ_Bbirnj/exec',

    // ============================================
    // 1. PERSONAL DETAILS
    // ============================================
    personal: {
        name: 'Amit Gupta',
        caste: 'Janakpuri Teli',
        dateOfBirth: '01-04-2001',
        // age: '26',
        bloodGroup: 'B -',
        height: '5\'7"',
        weight: '60 kg',
        education: 'B.Engineering in Computer Science',
        occupation: 'Software Developer',
        company: 'Atharva System',
        annualIncome: '4 LPA',
        phone: '9824953579',
        email: 'amitgdigi@gmail.com',
        photo: 'amit1.jpeg'
    },

    // ============================================
    // 2. FAMILY BACKGROUND
    // ============================================
    family: {
        fatherName: 'Radheshyam Gupta',
        fatherOccupation: 'Self Employeed',
        motherName: 'Bindu Gupta',
        motherOccupation: 'Housewife',
        siblings: {
            // brothers: 0,
            sisters: 4
        },
        familyType: 'Joint',  // Joint / Nuclear
        // familyStatus: 'Lower Middle Class'  // Lower Middle / Middle / Upper Middle / Rich
    },

    // ============================================
    // 3. OTHER DETAILS
    // ============================================
    other: {
        // Add up to 3 addresses
        addresses: [
            {
                label: 'Native Place',
                line1: 'Tulsi Pakad, Post Baksuri',
                line2: 'Thana Jhangaha',
                line3: 'Block Brahmpur',
                city: 'Gorakhpur',
                // state: 'Uttar Pradesh',
                // country: 'India',
                pincode: '273405'
            },
            {
                label: 'Current Address',
                line1: 'A 2, Maruti Park',
                line2: 'Top 3 circle',
                line3: '',
                city: 'Bhavnagar',
                // state: 'Gujarat',
                // country: 'India',
                pincode: '364002'
            },
            {
                label: 'Temporary Address',
                line1: '97, Block 7',
                line2: 'Vidyanagar Flat',
                line3: 'IIM Road, behind ITC Narmada Hotel',
                city: 'Ahmedabad',
                // state: 'Gujarat',
                // country: 'India',
                pincode: '380015'
            }
        ],
        languagesKnown: 'Bhaojpuri, Hindi, English, Gujarati',
        // religion: 'Hindu',
        // hobbies: 'Reading, Coding, Traveling',
        // partnerExpectations: 'Simple, educated, family-oriented'
    },

    // Social links (set to null to hide)
    social: {
        linkedin: 'https://linkedin.com/in/yourprofile',
        twitter: 'https://x.com/yourhandle'
    },

    // Image Protection Settings
    imageProtection: {
        disableRightClick: true,    // Prevent right-click context menu
        disableDrag: true,          // Prevent dragging images
        disableTouchHold: false,     // Prevent long-press on mobile
        disableSelection: true      // Prevent selecting images
    },

    // Gallery Images - Add individual watermark for each image
    gallery: [
        { src: 'amit5.jpeg', watermark: 'Amit Gupta | Apr-2024' },
        { src: 'amit2.jpeg', watermark: 'Amit Gupta | Jan-2024' },
        { src: 'amit3.jpeg', watermark: 'Amit Gupta | Feb-2024' },
        { src: 'amit4.jpeg', watermark: 'Amit Gupta | Mar-2024' },
        { src: 'amit6.jpeg', watermark: 'Amit Gupta | Apr-2024' },
        { src: 'amit7.jpeg', watermark: 'Amit Gupta | Apr-2024' }
    ]
};
